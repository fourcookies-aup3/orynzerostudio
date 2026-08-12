// IndexedDB storage helper for persisting user-uploaded video files across sessions

const DB_NAME = "OrynZeroStorage";
const STORE_NAME = "videos";
const SHOWREEL_KEY = "custom_showreel";

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      reject("IndexedDB not supported");
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveCustomVideo(file: Blob | File): Promise<string> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(file, SHOWREEL_KEY);
      req.onsuccess = () => {
        const url = URL.createObjectURL(file);
        // Dispatch global update event
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("oryn_showreel_updated", { detail: { url } }));
        }
        resolve(url);
      };
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error("Failed to save custom video in IndexedDB:", err);
    // Fallback to in-memory URL
    const url = URL.createObjectURL(file);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("oryn_showreel_updated", { detail: { url } }));
    }
    return url;
  }
}

let cachedBlobUrl: string | null = null;

export async function getCustomVideoUrl(): Promise<string | null> {
  if (cachedBlobUrl) return cachedBlobUrl;
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(SHOWREEL_KEY);
      req.onsuccess = () => {
        if (req.result instanceof Blob) {
          cachedBlobUrl = URL.createObjectURL(req.result);
          resolve(cachedBlobUrl);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function clearCustomVideo(): Promise<void> {
  if (cachedBlobUrl) {
    URL.revokeObjectURL(cachedBlobUrl);
    cachedBlobUrl = null;
  }
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(SHOWREEL_KEY);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error("Failed to clear custom video:", err);
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("oryn_showreel_updated", { detail: { url: null } }));
  }
}

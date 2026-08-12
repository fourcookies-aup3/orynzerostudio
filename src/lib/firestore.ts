import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  orderBy,
  getDocFromServer,
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { auth } from './firebase-auth';
import type { FreelancerRecord } from './google-workspace';

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Test Firestore server connection on initialization
export async function testFirestoreConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('offline')) {
      console.warn('Firestore client appears offline or pending initialization.');
    }
  }
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

/**
 * Save a new freelancer application entry into Firestore `freelancers` collection
 */
export async function saveFreelancerToFirestore(record: FreelancerRecord): Promise<void> {
  const path = `freelancers/${record.id}`;
  try {
    const docRef = doc(db, 'freelancers', record.id);
    await setDoc(docRef, {
      id: record.id,
      name: record.name,
      email: record.email,
      phone: record.phone || '',
      city: record.city || '',
      role: record.role,
      portfolio: record.portfolio,
      resumeUrl: record.resumeUrl || '',
      rate: record.rate || '',
      equipment: record.equipment || '',
      message: record.message || '',
      aiSummary: record.aiSummary || '',
      aiScore: record.aiScore || 0,
      aiMatchTags: record.aiMatchTags || [],
      createdAt: record.createdAt || new Date().toISOString(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

/**
 * Fetch freelancer records from Firestore
 */
export async function getFreelancersFromFirestore(): Promise<FreelancerRecord[]> {
  const path = 'freelancers';
  try {
    const q = query(collection(db, 'freelancers'));
    const snapshot = await getDocs(q);
    const results: FreelancerRecord[] = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      results.push(data as FreelancerRecord);
    });
    return results;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
    return [];
  }
}

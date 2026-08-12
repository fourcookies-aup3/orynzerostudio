export interface FreelancerRecord {
  id: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  role: string;
  portfolio?: string;
  resumeUrl?: string;
  showreelFileUrl?: string;
  rate?: string;
  equipment?: string;
  message?: string;
  aiSummary?: string;
  aiScore?: number;
  aiMatchTags?: string[];
  createdAt: string;
}

const ROSTER_DOC_NAME = "ORYN ZERO — Freelancer Roster Database";

/**
 * Searches Google Drive for an existing roster doc or creates a new one,
 * then appends the freelancer's entry.
 */
export async function appendFreelancerToGoogleDoc(
  freelancer: FreelancerRecord,
  accessToken: string,
): Promise<{ docId: string; docUrl: string }> {
  let docId: string | null = null;

  // 1. Search for existing roster file in Drive
  try {
    const searchRes = await fetch(
      `https://www.googleapis.com/drive/v3/files?q=name='${encodeURIComponent(
        ROSTER_DOC_NAME,
      )}' and mimeType='application/vnd.google-apps.document' and trashed=false`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );
    if (searchRes.ok) {
      const searchData = await searchRes.json();
      if (searchData.files && searchData.files.length > 0) {
        docId = searchData.files[0].id;
      }
    }
  } catch (err) {
    console.warn("Could not search Drive for roster document:", err);
  }

  // 2. Create new Google Doc if not found
  if (!docId) {
    const createRes = await fetch("https://docs.googleapis.com/v1/documents", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: ROSTER_DOC_NAME,
      }),
    });

    if (!createRes.ok) {
      const errText = await createRes.text();
      throw new Error(`Failed to create Google Doc: ${errText}`);
    }

    const docData = await createRes.json();
    docId = docData.documentId;

    // Add Header banner to new document
    const headerText = `=====================================================\n  ORYN ZERO — FREELANCER ROSTER DATABASE\n  Managed for: orynzerostudio@gmail.com\n  Last Updated: ${new Date().toLocaleString()}\n=====================================================\n\n`;
    await fetch(`https://docs.googleapis.com/v1/documents/${docId}:batchUpdate`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requests: [
          {
            insertText: {
              location: { index: 1 },
              text: headerText,
            },
          },
        ],
      }),
    });
  }

  if (!docId) {
    throw new Error("Could not find or create Google Document ID for roster.");
  }

  // 3. Append entry to the top of the Document (after header or at index 1)
  const entryText = `-----------------------------------------------------\nFREELANCER PROFILE — ${freelancer.name.toUpperCase()}\nSubmitted: ${freelancer.createdAt}\nRole: ${freelancer.role}\nEmail: ${freelancer.email}\nPhone: ${freelancer.phone || "N/A"}\nLocation: ${freelancer.city || "N/A"}\nDay Rate: ${freelancer.rate || "N/A"}\nCV / Resume Download Link: ${freelancer.resumeUrl || "N/A"}\nShowreel Download / Link: ${freelancer.showreelFileUrl || freelancer.portfolio || "N/A"}\nPortfolio / Reel: ${freelancer.portfolio || "N/A"}\nEquipment: ${freelancer.equipment || "N/A"}\nBio / Experience: ${freelancer.message || "N/A"}\n-----------------------------------------------------\n\n`;

  const batchRes = await fetch(`https://docs.googleapis.com/v1/documents/${docId}:batchUpdate`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      requests: [
        {
          insertText: {
            location: { index: 1 },
            text: entryText,
          },
        },
      ],
    }),
  });

  if (!batchRes.ok) {
    const errText = await batchRes.text();
    throw new Error(`Failed to update Google Doc: ${errText}`);
  }

  return {
    docId,
    docUrl: `https://docs.google.com/document/d/${docId}/edit`,
  };
}

/**
 * Sends an email via Gmail API
 */
export async function sendGmailOutreach(
  to: string,
  subject: string,
  body: string,
  accessToken: string,
) {
  const emailLines = [
    `To: ${to}`,
    `From: orynzerostudio@gmail.com`,
    `Subject: ${subject}`,
    `Content-Type: text/plain; charset=utf-8`,
    ``,
    body,
  ];

  const emailRaw = emailLines.join("\r\n");

  // Base64URL encoding
  const encodedEmail = btoa(unescape(encodeURIComponent(emailRaw)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const res = await fetch("https://gmail.googleapis.com/v1/users/me/messages/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      raw: encodedEmail,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to send email via Gmail: ${errText}`);
  }

  return await res.json();
}

/**
 * Creates a Google Task in the default task list
 */
export async function createGoogleTask(title: string, notes: string, accessToken: string) {
  const res = await fetch("https://tasks.googleapis.com/v1/lists/@default/tasks", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      notes,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to create Google Task: ${errText}`);
  }

  return await res.json();
}

/**
 * Creates a Google Meet Space for scheduling an interview
 */
export async function createGoogleMeetSpace(accessToken: string) {
  try {
    const res = await fetch("https://meet.googleapis.com/v2/spaces", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        config: {
          accessType: "OPEN",
        },
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return {
        meetingUri: data.meetingUri || `https://meet.google.com/new`,
        name: data.name,
      };
    }
  } catch (err) {
    console.warn("Meet API error, returning fallback link:", err);
  }

  return {
    meetingUri: "https://meet.google.com/new",
    name: "New Meeting Space",
  };
}

export interface CalendarEventDetails {
  summary: string;
  description: string;
  startIso: string;
  endIso: string;
  attendeeEmail?: string;
  attendeeName?: string;
  location?: string;
}

/**
 * Creates a Google Calendar event with auto-generated Google Meet video conference.
 */
export async function createGoogleCalendarEvent(
  event: CalendarEventDetails,
  accessToken: string,
) {
  const body: any = {
    summary: event.summary,
    description: event.description,
    start: {
      dateTime: event.startIso,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/Zurich",
    },
    end: {
      dateTime: event.endIso,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/Zurich",
    },
    conferenceData: {
      createRequest: {
        requestId: `oryn-zero-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        conferenceSolutionKey: {
          type: "hangoutsMeet",
        },
      },
    },
  };

  if (event.attendeeEmail) {
    body.attendees = [
      {
        email: event.attendeeEmail,
        displayName: event.attendeeName || event.attendeeEmail,
      },
    ];
  }

  if (event.location) {
    body.location = event.location;
  }

  const res = await fetch(
    "https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to create Google Calendar event: ${errText}`);
  }

  return await res.json();
}

/**
 * Fetches upcoming events from the user's primary Google Calendar
 */
export async function listUpcomingCalendarEvents(accessToken: string) {
  const now = new Date().toISOString();
  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${encodeURIComponent(
      now,
    )}&singleEvents=true&orderBy=startTime&maxResults=15`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to fetch Google Calendar events: ${errText}`);
  }

  const data = await res.json();
  return data.items || [];
}

/**
 * Fetches events from Google Calendar for a specific date range (timeMin to timeMax)
 */
export async function listCalendarEventsRange(
  accessToken: string,
  timeMinISO: string,
  timeMaxISO: string,
) {
  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${encodeURIComponent(
      timeMinISO,
    )}&timeMax=${encodeURIComponent(
      timeMaxISO,
    )}&singleEvents=true&orderBy=startTime&maxResults=250`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to fetch Google Calendar events range: ${errText}`);
  }

  const data = await res.json();
  return data.items || [];
}


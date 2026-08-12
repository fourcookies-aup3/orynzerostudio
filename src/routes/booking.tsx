import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SectionHeader";
import { useLocale } from "@/context/LocaleContext";
import { googleSignIn, initAuth, getAccessToken, logout } from "@/lib/firebase-auth";
import {
  createGoogleCalendarEvent,
  listUpcomingCalendarEvents,
  CalendarEventDetails,
} from "@/lib/google-workspace";
import { CalendarView } from "@/components/site/CalendarView";
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  CheckCircle,
  ExternalLink,
  User as UserIcon,
  Sparkles,
  RefreshCw,
  AlertCircle,
  ChevronRight,
  MapPin,
  Mail,
  Building,
  Grid,
  Edit3,
} from "lucide-react";
import type { User } from "firebase/auth";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Meeting — ORYN ZERO" },
      {
        name: "description",
        content: "Schedule a discovery call, project meeting or consultation with ORYN ZERO directly connected to Google Calendar.",
      },
      { property: "og:title", content: "Book a Meeting — ORYN ZERO" },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: BookingPage,
});

// Format duration helper
function getDurationMinutes(id: string): number {
  if (id === "B/01") return 30;
  if (id === "B/02") return 60;
  if (id === "B/03") return 45;
  return 30;
}

// Generate upcoming available dates (next 14 days, skipping weekends or showing them)
function generateAvailableDates() {
  const dates = [];
  const today = new Date();
  
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    // Skip Sundays
    if (d.getDay() === 0) continue;
    dates.push(d);
  }
  return dates;
}

// Time slots available for booking
const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:15",
  "14:00",
  "15:30",
  "16:45",
  "18:00",
];

function BookingPage() {
  const { t, language } = useLocale();

  // Auth & Google Workspace state
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(getAccessToken());
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // View mode tab state
  const [activeTab, setActiveTab] = useState<"schedule" | "calendar">("schedule");

  // Booking Form State
  const [selectedFormatId, setSelectedFormatId] = useState<string>("B/01");
  const [selectedDate, setSelectedDate] = useState<Date>(generateAvailableDates()[0]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("10:00");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  // Booking Execution State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState<{
    htmlLink?: string;
    hangoutLink?: string;
    summary: string;
    startIso: string;
    endIso: string;
  } | null>(null);

  // Calendar Events List State
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState(false);
  const [eventsError, setEventsError] = useState<string | null>(null);

  // Initialize Firebase Auth listener
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, token) => {
        setUser(currentUser);
        setAccessToken(token);
        if (currentUser && email === "") {
          setEmail(currentUser.email || "");
        }
        if (currentUser && name === "") {
          setName(currentUser.displayName || "");
        }
      },
      () => {
        setUser(null);
        setAccessToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  // Fetch upcoming events when connected
  useEffect(() => {
    if (accessToken) {
      loadCalendarEvents(accessToken);
    }
  }, [accessToken]);

  const loadCalendarEvents = async (token: string) => {
    setIsLoadingEvents(true);
    setEventsError(null);
    try {
      const items = await listUpcomingCalendarEvents(token);
      setUpcomingEvents(items);
    } catch (err: any) {
      console.error("Failed to load Google Calendar events:", err);
      setEventsError("Could not fetch calendar schedule. Re-authenticating may be required.");
    } finally {
      setIsLoadingEvents(false);
    }
  };

  const handleGoogleConnect = async () => {
    setIsAuthenticating(true);
    setBookingError(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setAccessToken(res.accessToken);
        if (res.user.email) setEmail(res.user.email);
        if (res.user.displayName) setName(res.user.displayName);
      }
    } catch (err: any) {
      setBookingError(err.message || "Failed to sign in with Google.");
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleGoogleDisconnect = async () => {
    await logout();
    setUser(null);
    setAccessToken(null);
    setUpcomingEvents([]);
  };

  const formats = [
    {
      id: "B/01",
      title: t("booking.b01.title"),
      duration: "30 min",
      body: t("booking.b01.body"),
      tag: "Popular for intro",
    },
    {
      id: "B/02",
      title: t("booking.b02.title"),
      duration: "60 min",
      body: t("booking.b02.body"),
      tag: "Production planning",
    },
    {
      id: "B/03",
      title: t("booking.b03.title"),
      duration: "45 min",
      body: t("booking.b03.body"),
      tag: "Technical advisory",
    },
  ];

  const currentFormat = formats.find((f) => f.id === selectedFormatId) || formats[0];

  const availableDates = generateAvailableDates();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingError(null);

    if (!name.trim() || !email.trim()) {
      setBookingError("Please fill in your name and email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      let activeToken = accessToken;

      // If not connected yet, trigger Google OAuth sign-in pop-up
      if (!activeToken) {
        const authRes = await googleSignIn();
        if (!authRes || !authRes.accessToken) {
          throw new Error("Google authentication is required to sync calendar event.");
        }
        setUser(authRes.user);
        activeToken = authRes.accessToken;
        setAccessToken(activeToken);
      }

      // Calculate start and end ISO dates
      const durationMins = getDurationMinutes(selectedFormatId);
      const [hours, minutes] = selectedTimeSlot.split(":").map(Number);
      
      const start = new Date(selectedDate);
      start.setHours(hours, minutes, 0, 0);

      const end = new Date(start);
      end.setMinutes(start.getMinutes() + durationMins);

      const summary = `ORYN ZERO — ${currentFormat.title} (${name})`;
      const description = `ORYN ZERO Scheduled Meeting\nFormat: ${currentFormat.title} (${currentFormat.duration})\nClient: ${name} (${email})\nCompany: ${company || "N/A"}\n\nAgenda / Notes:\n${notes || "No additional notes provided."}\n\nLocation: Google Meet Video Call`;

      const eventData: CalendarEventDetails = {
        summary,
        description,
        startIso: start.toISOString(),
        endIso: end.toISOString(),
        attendeeEmail: email,
        attendeeName: name,
        location: "Google Meet",
      };

      const result = await createGoogleCalendarEvent(eventData, activeToken);

      const hangoutLink =
        result.hangoutLink ||
        result.conferenceData?.entryPoints?.find((ep: any) => ep.entryPointType === "video")
          ?.uri ||
        "https://meet.google.com";

      setBookingSuccess({
        htmlLink: result.htmlLink,
        hangoutLink,
        summary: result.summary || summary,
        startIso: start.toISOString(),
        endIso: end.toISOString(),
      });

      // Reload upcoming events list
      loadCalendarEvents(activeToken);
    } catch (err: any) {
      console.error("Booking error:", err);
      setBookingError(err.message || "An error occurred while creating the Google Calendar event.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/Zurich";

  return (
    <>
      <PageHero
        eyebrow={t("booking.eyebrow")}
        title={t("booking.title")}
        intro={t("booking.intro")}
      />

      {/* Google Calendar Connection Status Bar */}
      <section className="border-b border-border bg-graphite/30 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-border bg-background">
              <CalendarIcon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  Google Calendar Integration
                </span>
                {accessToken ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                    <CheckCircle className="h-3 w-3" /> Connected
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-400 border border-amber-500/20">
                    <AlertCircle className="h-3 w-3" /> Not Connected
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-xs text-silver">
                {user?.email ? (
                  <>Connected as <span className="font-medium text-foreground">{user.email}</span></>
                ) : (
                  "Connect your Google Calendar to seamlessly create & sync events with auto-generated Google Meet video calls."
                )}
              </p>
            </div>
          </div>

          <div>
            {accessToken ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => loadCalendarEvents(accessToken)}
                  disabled={isLoadingEvents}
                  className="inline-flex items-center gap-1.5 border border-border bg-background px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-muted-foreground transition hover:text-foreground"
                  title="Refresh Calendar Events"
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${isLoadingEvents ? "animate-spin" : ""}`} />
                  Sync
                </button>
                <button
                  onClick={handleGoogleDisconnect}
                  className="border border-border/50 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-muted-foreground transition hover:border-red-500/40 hover:text-red-400"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={handleGoogleConnect}
                disabled={isAuthenticating}
                className="inline-flex items-center gap-2 border border-accent bg-accent/10 px-4 py-2 text-[11px] font-mono uppercase tracking-widest text-accent transition hover:bg-accent hover:text-background"
              >
                <Sparkles className="h-4 w-4" />
                {isAuthenticating ? "Connecting..." : "Connect Google Calendar"}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Mode Tabs */}
      <section className="px-6 pt-10 pb-0 border-b border-border bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 border-b border-border">
            <button
              onClick={() => setActiveTab("schedule")}
              className={`flex items-center gap-2 px-6 py-4 font-mono text-xs uppercase tracking-widest border-b-2 transition -mb-px ${
                activeTab === "schedule"
                  ? "border-accent text-accent font-bold bg-accent/5"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              <Edit3 className="h-4 w-4" /> Schedule Meeting
            </button>
            <button
              onClick={() => setActiveTab("calendar")}
              className={`flex items-center gap-2 px-6 py-4 font-mono text-xs uppercase tracking-widest border-b-2 transition -mb-px ${
                activeTab === "calendar"
                  ? "border-accent text-accent font-bold bg-accent/5"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              <Grid className="h-4 w-4" /> Google Calendar View
            </button>
          </div>
        </div>
      </section>

      {/* Main Workflow View */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {activeTab === "calendar" ? (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">
                    Interactive Calendar Grid
                  </p>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight">Google Calendar Bookings & Events</h2>
                </div>
                <button
                  onClick={() => setActiveTab("schedule")}
                  className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-2 font-mono text-xs uppercase tracking-widest text-background font-bold hover:bg-silver transition"
                >
                  <CalendarIcon className="h-4 w-4" /> + Book New Slot
                </button>
              </div>

              <CalendarView
                accessToken={accessToken}
                onConnectGoogle={handleGoogleConnect}
                isConnecting={isAuthenticating}
                onSelectDateToBook={(date) => {
                  setSelectedDate(date);
                  setActiveTab("schedule");
                }}
              />
            </div>
          ) : bookingSuccess ? (
            /* Success View */
            <div className="border border-emerald-500/30 bg-emerald-950/20 p-8 md:p-12">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                    Meeting Confirmed & Google Calendar Synced
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {bookingSuccess.summary}
                  </h2>
                  <p className="mt-2 text-sm text-silver">
                    Your appointment has been added directly to Google Calendar with a dedicated Google Meet room.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 border-t border-emerald-500/20 pt-6 md:grid-cols-2">
                <div className="border border-border bg-background p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Date & Time ({userTimezone})
                  </span>
                  <p className="mt-2 font-mono text-sm font-semibold text-foreground">
                    {new Date(bookingSuccess.startIso).toLocaleDateString(language === "de" ? "de-DE" : "en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="font-mono text-xs text-accent mt-1">
                    {new Date(bookingSuccess.startIso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} -{" "}
                    {new Date(bookingSuccess.endIso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>

                <div className="border border-border bg-background p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Location / Platform
                  </span>
                  <div className="mt-2 flex items-center gap-2">
                    <Video className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm font-semibold text-foreground">Google Meet Video Call</span>
                  </div>
                  {bookingSuccess.hangoutLink && (
                    <a
                      href={bookingSuccess.hangoutLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline"
                    >
                      Join Google Meet Room <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-emerald-500/20 pt-6">
                {bookingSuccess.htmlLink && (
                  <a
                    href={bookingSuccess.htmlLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border bg-foreground px-6 py-3 text-[11px] font-mono uppercase tracking-widest text-background transition hover:bg-silver"
                  >
                    View in Google Calendar <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {bookingSuccess.hangoutLink && (
                  <a
                    href={bookingSuccess.hangoutLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-emerald-500/50 bg-emerald-500/10 px-6 py-3 text-[11px] font-mono uppercase tracking-widest text-emerald-300 transition hover:bg-emerald-500/20"
                  >
                    <Video className="h-4 w-4" /> Open Google Meet
                  </a>
                )}
                <button
                  onClick={() => setBookingSuccess(null)}
                  className="border border-border px-6 py-3 text-[11px] font-mono uppercase tracking-widest hover:bg-graphite"
                >
                  Schedule Another Meeting
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Booking Form Grid */
            <div className="grid gap-12 lg:grid-cols-12">
              {/* Left Column: Format Selection */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Step 1 · Select Format
                  </p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight">Choose meeting scope</h2>
                </div>

                <div className="space-y-4">
                  {formats.map((f) => {
                    const isSelected = f.id === selectedFormatId;
                    return (
                      <div
                        key={f.id}
                        onClick={() => setSelectedFormatId(f.id)}
                        className={`cursor-pointer border p-6 transition ${
                          isSelected
                            ? "border-accent bg-accent/5"
                            : "border-border bg-background hover:border-silver/40"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                            {f.id} · {f.duration}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-accent border border-accent/30 px-2 py-0.5">
                            {f.tag}
                          </span>
                        </div>
                        <h3 className="mt-2 text-lg font-bold">{f.title}</h3>
                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{f.body}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="border border-border bg-graphite/20 p-5 text-xs text-muted-foreground space-y-2">
                  <div className="flex items-center gap-2 font-mono uppercase text-[10px] text-silver">
                    <Clock className="h-3.5 w-3.5 text-accent" /> Timezone: {userTimezone}
                  </div>
                  <p>
                    All times are scheduled according to your local timezone. Automatic Google Meet video links will be generated for every session.
                  </p>
                </div>
              </div>

              {/* Right Column: Date, Time & Form */}
              <div className="lg:col-span-7 space-y-8">
                {/* Step 2: Date Selector */}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Step 2 · Date & Time
                  </p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight">Select date & time slot</h2>

                  <div className="mt-4">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-silver block mb-2">
                      Available Dates
                    </label>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                      {availableDates.map((dateObj, idx) => {
                        const isSelected =
                          selectedDate.toDateString() === dateObj.toDateString();
                        const dayName = dateObj.toLocaleDateString(language === "de" ? "de-DE" : "en-US", { weekday: "short" });
                        const dayNum = dateObj.getDate();
                        const monthName = dateObj.toLocaleDateString(language === "de" ? "de-DE" : "en-US", { month: "short" });

                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedDate(dateObj)}
                            className={`flex flex-col items-center min-w-[70px] p-3 border font-mono transition ${
                              isSelected
                                ? "border-accent bg-accent text-background font-bold"
                                : "border-border bg-background hover:border-silver/40 text-foreground"
                            }`}
                          >
                            <span className="text-[10px] uppercase tracking-wider">{dayName}</span>
                            <span className="text-lg my-0.5">{dayNum}</span>
                            <span className="text-[9px] uppercase opacity-80">{monthName}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="mt-6">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-silver block mb-2">
                      Available Time Slots
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {TIME_SLOTS.map((slot) => {
                        const isSelected = selectedTimeSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTimeSlot(slot)}
                            className={`py-2 px-3 border text-xs font-mono text-center transition ${
                              isSelected
                                ? "border-accent bg-accent/20 text-accent font-semibold"
                                : "border-border bg-background hover:border-silver/40 text-foreground"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Step 3: Contact Details & Google Sync */}
                <form onSubmit={handleFormSubmit} className="space-y-6 border-t border-border pt-8">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Step 3 · Participant Information
                    </p>
                    <h2 className="mt-2 text-xl font-bold tracking-tight">Your details</h2>
                  </div>

                  {bookingError && (
                    <div className="border border-red-500/40 bg-red-950/20 p-4 text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                      <span>{bookingError}</span>
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Mercer"
                        className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. alex@brand.com"
                        className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Studio Agency"
                      className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                      Project Notes / Meeting Agenda
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Briefly describe what you would like to discuss during this session..."
                      className="w-full border border-border bg-background p-4 text-sm text-foreground focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div className="border border-border bg-graphite/30 p-4">
                    <div className="flex items-center justify-between text-xs font-mono text-silver">
                      <span>Selected: {currentFormat.title} ({currentFormat.duration})</span>
                      <span className="text-accent">{selectedDate.toLocaleDateString()} @ {selectedTimeSlot}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 border border-accent bg-accent px-8 py-4 text-xs font-mono uppercase tracking-widest text-background font-bold transition hover:bg-silver disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        Syncing with Google Calendar...
                      </>
                    ) : (
                      <>
                        <CalendarIcon className="h-4 w-4" />
                        Confirm & Schedule in Google Calendar
                      </>
                    )}
                  </button>

                  {!accessToken && (
                    <p className="text-[11px] text-center text-muted-foreground">
                      * Clicking will prompt Google OAuth sign-in to authorize adding this event directly to your Google Calendar.
                    </p>
                  )}
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Connected Studio Schedule Overview (Google Calendar Feed) */}
      {accessToken && upcomingEvents.length > 0 && (
        <section className="border-t border-border bg-graphite/20 px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  Live Google Calendar Feed
                </p>
                <h3 className="text-xl font-bold tracking-tight">Upcoming Scheduled Meetings</h3>
              </div>
              <button
                onClick={() => loadCalendarEvents(accessToken)}
                disabled={isLoadingEvents}
                className="inline-flex items-center gap-1.5 border border-border bg-background px-3 py-1.5 font-mono text-xs text-silver hover:text-foreground"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${isLoadingEvents ? "animate-spin" : ""}`} />
                Refresh Feed
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.slice(0, 6).map((item: any) => {
                const startTime = item.start?.dateTime
                  ? new Date(item.start.dateTime).toLocaleString([], {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : item.start?.date || "TBD";

                const hangout =
                  item.hangoutLink ||
                  item.conferenceData?.entryPoints?.find((ep: any) => ep.entryPointType === "video")
                    ?.uri;

                return (
                  <div key={item.id} className="border border-border bg-background p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                          {startTime}
                        </span>
                        {hangout && (
                          <span className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                            <Video className="h-2.5 w-2.5" /> Meet
                          </span>
                        )}
                      </div>
                      <h4 className="mt-2 text-base font-bold text-foreground line-clamp-1">
                        {item.summary || "Scheduled Event"}
                      </h4>
                      {item.description && (
                        <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs font-mono">
                      {item.htmlLink ? (
                        <a
                          href={item.htmlLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-silver hover:text-foreground inline-flex items-center gap-1"
                        >
                          Google Calendar <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <span className="text-muted-foreground">Synced</span>
                      )}

                      {hangout && (
                        <a
                          href={hangout}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline inline-flex items-center gap-1"
                        >
                          Join Call <Video className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

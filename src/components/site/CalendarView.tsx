import React, { useState, useEffect, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Clock,
  Video,
  ExternalLink,
  RefreshCw,
  Search,
  Plus,
  X,
  User,
  MapPin,
  List,
  Grid,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { listCalendarEventsRange } from "@/lib/google-workspace";

interface CalendarViewProps {
  accessToken: string | null;
  onConnectGoogle: () => void;
  onSelectDateToBook?: (date: Date) => void;
  isConnecting?: boolean;
}

export function CalendarView({
  accessToken,
  onConnectGoogle,
  onSelectDateToBook,
  isConnecting = false,
}: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<"month" | "agenda">("month");
  const [events, setEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Calculate range for current month view (including trailing/leading days)
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const monthFirstDay = new Date(currentYear, currentMonth, 1);
  const monthLastDay = new Date(currentYear, currentMonth + 1, 0);

  // Fetch events whenever month or accessToken changes
  useEffect(() => {
    if (!accessToken) {
      setEvents([]);
      return;
    }

    const fetchMonthEvents = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Get start of first week and end of last week shown in calendar
        const start = new Date(currentYear, currentMonth, 1);
        start.setDate(start.getDate() - start.getDay()); // Start on Sunday or Monday
        start.setHours(0, 0, 0, 0);

        const end = new Date(currentYear, currentMonth + 1, 0);
        end.setDate(end.getDate() + (6 - end.getDay())); // End on Saturday
        end.setHours(23, 59, 59, 999);

        const fetchedEvents = await listCalendarEventsRange(
          accessToken,
          start.toISOString(),
          end.toISOString()
        );
        setEvents(fetchedEvents);
      } catch (err: any) {
        console.error("Failed to fetch calendar range:", err);
        setError("Unable to load Google Calendar events. Re-connecting may be required.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMonthEvents();
  }, [accessToken, currentYear, currentMonth]);

  // Navigate Months
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  // Generate grid matrix of days for the month
  const calendarDays = useMemo(() => {
    const days: Array<{
      date: Date;
      isCurrentMonth: boolean;
      isToday: boolean;
      dateKey: string;
    }> = [];

    const start = new Date(currentYear, currentMonth, 1);
    const dayOfWeek = start.getDay(); // 0 = Sun
    // Adjust for Monday start: Mon=0, Sun=6
    const startOffset = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

    // Start date for the 42-cell grid
    const gridStart = new Date(start);
    gridStart.setDate(gridStart.getDate() - startOffset);

    const todayStr = new Date().toDateString();

    for (let i = 0; i < 42; i++) {
      const d = new Date(gridStart);
      d.setDate(gridStart.getDate() + i);

      const isCurrentMonth = d.getMonth() === currentMonth;
      const isToday = d.toDateString() === todayStr;

      // Key format: YYYY-MM-DD
      const dateKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

      days.push({
        date: d,
        isCurrentMonth,
        isToday,
        dateKey,
      });
    }

    return days;
  }, [currentYear, currentMonth]);

  // Map events to date keys
  const eventsByDate = useMemo(() => {
    const map: Record<string, any[]> = {};

    events.forEach((evt) => {
      if (!evt.start) return;
      const startStr = evt.start.dateTime || evt.start.date;
      if (!startStr) return;

      const d = new Date(startStr);
      const dateKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

      if (!map[dateKey]) map[dateKey] = [];
      map[dateKey].push(evt);
    });

    return map;
  }, [events]);

  // Filtered events for agenda view or search
  const filteredEvents = useMemo(() => {
    if (!searchQuery.trim()) return events;
    const query = searchQuery.toLowerCase();
    return events.filter(
      (e) =>
        (e.summary && e.summary.toLowerCase().includes(query)) ||
        (e.description && e.description.toLowerCase().includes(query)) ||
        (e.attendees &&
          e.attendees.some((att: any) =>
            (att.displayName || att.email || "").toLowerCase().includes(query)
          ))
    );
  }, [events, searchQuery]);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const weekDayHeaders = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="border border-border bg-background shadow-2xl">
      {/* Calendar Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-border bg-graphite/40 px-6 py-4 gap-4">
        {/* Left: Navigation */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 border border-border bg-background p-1">
            <button
              onClick={handlePrevMonth}
              className="p-1.5 text-silver hover:bg-graphite hover:text-foreground transition"
              title="Previous Month"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleToday}
              className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition"
            >
              Today
            </button>
            <button
              onClick={handleNextMonth}
              className="p-1.5 text-silver hover:bg-graphite hover:text-foreground transition"
              title="Next Month"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <h3 className="font-bold text-lg tracking-tight text-foreground">
            {monthNames[currentMonth]} <span className="text-muted-foreground font-normal">{currentYear}</span>
          </h3>
        </div>

        {/* Center: Search input */}
        {accessToken && (
          <div className="relative min-w-[200px] sm:min-w-[260px]">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search meetings..."
              className="w-full border border-border bg-background pl-9 pr-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        )}

        {/* Right: View Toggle & Sync */}
        <div className="flex items-center gap-2">
          {accessToken && (
            <div className="flex items-center border border-border bg-background p-0.5">
              <button
                onClick={() => setViewMode("month")}
                className={`flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider transition ${
                  viewMode === "month"
                    ? "bg-accent text-background font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Grid className="h-3 w-3" /> Month
              </button>
              <button
                onClick={() => setViewMode("agenda")}
                className={`flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider transition ${
                  viewMode === "agenda"
                    ? "bg-accent text-background font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <List className="h-3 w-3" /> Agenda
              </button>
            </div>
          )}

          {!accessToken ? (
            <button
              onClick={onConnectGoogle}
              disabled={isConnecting}
              className="inline-flex items-center gap-1.5 border border-accent bg-accent/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-accent hover:bg-accent hover:text-background transition"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {isConnecting ? "Connecting..." : "Connect Google Calendar"}
            </button>
          ) : (
            <button
              onClick={() => {
                const start = new Date(currentYear, currentMonth, 1);
                start.setDate(start.getDate() - start.getDay());
                const end = new Date(currentYear, currentMonth + 1, 0);
                end.setDate(end.getDate() + (6 - end.getDay()));
                setIsLoading(true);
                listCalendarEventsRange(accessToken, start.toISOString(), end.toISOString())
                  .then(setEvents)
                  .catch(() => setError("Failed to refresh"))
                  .finally(() => setIsLoading(false));
              }}
              disabled={isLoading}
              className="p-1.5 border border-border bg-background text-muted-foreground hover:text-foreground transition"
              title="Refresh Google Calendar"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>
          )}
        </div>
      </div>

      {/* Error state alert */}
      {error && (
        <div className="border-b border-red-500/30 bg-red-950/20 px-6 py-2.5 text-xs text-red-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
          <button
            onClick={onConnectGoogle}
            className="font-mono text-[10px] uppercase underline hover:text-foreground"
          >
            Re-authenticate
          </button>
        </div>
      )}

      {/* Not Connected Overlay / State */}
      {!accessToken ? (
        <div className="p-12 text-center space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-graphite/40 text-accent">
            <CalendarIcon className="h-6 w-6" />
          </div>
          <h4 className="text-lg font-bold">Google Calendar Disconnected</h4>
          <p className="max-w-md mx-auto text-xs text-muted-foreground leading-relaxed">
            Connect your Google account to fetch and display scheduled meetings, client calls, and Google Meet video links directly on this calendar view.
          </p>
          <button
            onClick={onConnectGoogle}
            disabled={isConnecting}
            className="inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-background font-bold hover:bg-silver transition"
          >
            <Sparkles className="h-4 w-4" />
            {isConnecting ? "Connecting Google Calendar..." : "Connect Google Calendar Now"}
          </button>
        </div>
      ) : viewMode === "month" ? (
        /* Month Grid View */
        <div className="p-2 sm:p-4">
          {/* Day of Week Headers */}
          <div className="grid grid-cols-7 border-b border-border pb-2 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {weekDayHeaders.map((day) => (
              <div key={day} className="py-1">
                {day}
              </div>
            ))}
          </div>

          {/* 6-Week Calendar Grid */}
          <div className="grid grid-cols-7 border-l border-t border-border mt-2">
            {calendarDays.map((cell) => {
              const dayEvents = eventsByDate[cell.dateKey] || [];
              const hasEvents = dayEvents.length > 0;

              return (
                <div
                  key={cell.dateKey}
                  className={`min-h-[95px] sm:min-h-[115px] border-r border-b border-border p-1.5 sm:p-2 flex flex-col justify-between transition group ${
                    cell.isCurrentMonth
                      ? "bg-background hover:bg-graphite/20"
                      : "bg-graphite/10 text-muted-foreground/40"
                  }`}
                >
                  {/* Top Bar inside cell */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex h-5 w-5 items-center justify-center font-mono text-xs rounded-full ${
                        cell.isToday
                          ? "bg-accent text-background font-bold"
                          : cell.isCurrentMonth
                          ? "text-foreground font-medium"
                          : "text-muted-foreground/50"
                      }`}
                    >
                      {cell.date.getDate()}
                    </span>

                    {onSelectDateToBook && cell.isCurrentMonth && (
                      <button
                        onClick={() => onSelectDateToBook(cell.date)}
                        className="opacity-0 group-hover:opacity-100 p-0.5 text-[9px] font-mono uppercase text-accent hover:bg-accent/20 transition rounded"
                        title="Book session on this date"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    )}
                  </div>

                  {/* Day Events Stack */}
                  <div className="mt-1 space-y-1 overflow-y-auto max-h-[70px] scrollbar-none">
                    {dayEvents.map((evt) => {
                      const startTime = evt.start?.dateTime
                        ? new Date(evt.start.dateTime).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "All-day";

                      const hasMeet =
                        evt.hangoutLink ||
                        evt.conferenceData?.entryPoints?.some(
                          (ep: any) => ep.entryPointType === "video"
                        );

                      return (
                        <div
                          key={evt.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedEvent(evt);
                          }}
                          className="cursor-pointer rounded border border-border/80 bg-graphite/60 p-1 hover:border-accent hover:bg-accent/10 transition text-left"
                        >
                          <div className="flex items-center justify-between text-[9px] font-mono text-accent truncate">
                            <span>{startTime}</span>
                            {hasMeet && <Video className="h-2.5 w-2.5 text-emerald-400 shrink-0" />}
                          </div>
                          <p className="text-[10px] font-medium text-foreground truncate leading-tight">
                            {evt.summary || "Scheduled Event"}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Agenda List View */
        <div className="p-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
            Scheduled Events ({filteredEvents.length})
          </h4>

          {filteredEvents.length === 0 ? (
            <div className="py-12 text-center text-xs text-muted-foreground">
              No calendar events found for this query or range.
            </div>
          ) : (
            <div className="divide-y divide-border border border-border">
              {filteredEvents.map((evt) => {
                const startDate = evt.start?.dateTime
                  ? new Date(evt.start.dateTime)
                  : evt.start?.date
                  ? new Date(evt.start.date)
                  : new Date();

                const formattedDate = startDate.toLocaleDateString(undefined, {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });

                const formattedTime = evt.start?.dateTime
                  ? `${new Date(evt.start.dateTime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })} - ${new Date(evt.end?.dateTime || evt.start.dateTime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}`
                  : "All Day";

                const hangout =
                  evt.hangoutLink ||
                  evt.conferenceData?.entryPoints?.find(
                    (ep: any) => ep.entryPointType === "video"
                  )?.uri;

                return (
                  <div
                    key={evt.id}
                    onClick={() => setSelectedEvent(evt)}
                    className="p-4 hover:bg-graphite/20 transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                          {formattedDate} · {formattedTime}
                        </span>
                        {hangout && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] text-emerald-400 border border-emerald-500/20">
                            <Video className="h-2.5 w-2.5" /> Meet
                          </span>
                        )}
                      </div>
                      <h5 className="font-bold text-sm text-foreground">{evt.summary || "Untitled Event"}</h5>
                      {evt.description && (
                        <p className="text-xs text-muted-foreground line-clamp-1">{evt.description}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {hangout && (
                        <a
                          href={hangout}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] text-emerald-300 hover:bg-emerald-500/20"
                        >
                          <Video className="h-3 w-3" /> Join Meet
                        </a>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedEvent(evt);
                        }}
                        className="border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-silver hover:text-foreground"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Event Details Modal Popup */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md border border-border bg-background p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent block">
                  Google Calendar Event
                </span>
                <h3 className="mt-1 text-xl font-bold text-foreground">
                  {selectedEvent.summary || "Untitled Meeting"}
                </h3>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="p-1 text-muted-foreground hover:text-foreground border border-border"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs border-t border-b border-border py-4">
              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono text-[10px] uppercase text-silver">Time & Duration</p>
                  <p className="font-medium text-foreground">
                    {selectedEvent.start?.dateTime
                      ? new Date(selectedEvent.start.dateTime).toLocaleString([], {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : selectedEvent.start?.date || "All Day"}
                  </p>
                </div>
              </div>

              {selectedEvent.location && (
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-mono text-[10px] uppercase text-silver">Location</p>
                    <p className="text-foreground">{selectedEvent.location}</p>
                  </div>
                </div>
              )}

              {selectedEvent.attendees && selectedEvent.attendees.length > 0 && (
                <div className="flex items-start gap-2.5">
                  <User className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-mono text-[10px] uppercase text-silver">Participants</p>
                    <div className="mt-1 space-y-0.5">
                      {selectedEvent.attendees.map((att: any, idx: number) => (
                        <p key={idx} className="text-foreground font-mono text-[11px]">
                          {att.displayName || att.email}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedEvent.description && (
                <div className="pt-2">
                  <p className="font-mono text-[10px] uppercase text-silver mb-1">Notes / Agenda</p>
                  <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed text-[11px] bg-graphite/30 p-2.5 border border-border">
                    {selectedEvent.description}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              {(selectedEvent.hangoutLink ||
                selectedEvent.conferenceData?.entryPoints?.find(
                  (ep: any) => ep.entryPointType === "video"
                )?.uri) && (
                <a
                  href={
                    selectedEvent.hangoutLink ||
                    selectedEvent.conferenceData?.entryPoints?.find(
                      (ep: any) => ep.entryPointType === "video"
                    )?.uri
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-emerald-500/50 bg-emerald-500/10 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-emerald-300 hover:bg-emerald-500/20 transition"
                >
                  <Video className="h-3.5 w-3.5" /> Join Meet Call
                </a>
              )}

              {selectedEvent.htmlLink && (
                <a
                  href={selectedEvent.htmlLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-border bg-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-background hover:bg-silver transition"
                >
                  Google Calendar <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

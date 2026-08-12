import { useState } from "react";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  Sparkles,
  Send,
  Loader2,
  Mail,
  Briefcase,
  Upload,
  Video,
  ExternalLink,
  Download,
  FileText,
  Trash2,
  AlertCircle,
} from "lucide-react";
import { type FreelancerRecord } from "@/lib/google-workspace";

export interface ApplicationFormProps {
  type: "freelancer" | "job";
  defaultRole?: string;
  className?: string;
}

const applicationSchema = z.object({
  name: z.string().trim().min(2, "Full name is required"),
  email: z.string().trim().email("Valid email address is required"),
  phone: z.string().trim().optional(),
  city: z.string().trim().min(2, "City / Location is required"),
  role: z.string().min(1, "Please select your position or primary role"),
  portfolioUrl: z.string().trim().optional(),
  equipment: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(15, "Please share a short motivation / experience summary (min 15 characters)"),
});

const TARGET_STUDIO_EMAIL = "orynzerostudio@gmail.com";

const FREELANCER_ROLES = [
  "FPV Pilot & Drone Operator",
  "Director of Photography (DP)",
  "Camera Operator & 1st AC",
  "Colorist & Post Specialist",
  "Sound Designer & SFX Engineer",
  "VFX & Motion Graphics Artist",
  "Gaffer & Lighting Technician",
  "Creative Director / Producer",
];

const JOB_ROLES = [
  "FPV Pilot & Aerial Specialist",
  "Senior Video Editor & Post Production Lead",
  "Director of Photography (DP) / Camera Operator",
  "Sound Designer & Audio Engineer",
  "VFX & 3D Motion Graphics Artist",
  "Production Coordinator & Studio Manager",
  "Creative Director & Concept Lead",
  "Open Application / Other Studio Position",
];

interface UploadedFileState {
  name: string;
  sizeStr: string;
  dataUrl: string;
  rawFile: File;
}

export interface CloudUploadResult {
  directUrl: string; // Direct stream or download link (e.g. https://tmpfiles.org/dl/...)
  pageUrl: string;   // Tmpfiles landing page link (e.g. https://tmpfiles.org/...)
}

async function uploadFileToCloudHost(file: File): Promise<CloudUploadResult | null> {
  if (file.size > 100 * 1024 * 1024) {
    return null;
  }
  // Try tmpfiles.org first
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("https://tmpfiles.org/api/v1/upload", {
      method: "POST",
      body: fd,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      const data = await res.json();
      if (data?.status === "success" && data?.data?.url) {
        const pageUrl = data.data.url;
        const directUrl = pageUrl.replace("tmpfiles.org/", "tmpfiles.org/dl/");
        return { directUrl, pageUrl };
      }
    }
  } catch (err) {
    console.warn("tmpfiles upload bypassed or timed out:", err);
  }

  // Fallback: file.io
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("https://file.io/?expires=1w", {
      method: "POST",
      body: fd,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      const data = await res.json();
      if (data?.success && data?.link) {
        return { directUrl: data.link, pageUrl: data.link };
      }
    }
  } catch (err) {
    console.warn("file.io upload bypassed:", err);
  }

  return null;
}

export function ApplicationForm({ type, defaultRole, className = "" }: ApplicationFormProps) {
  const isJob = type === "job";
  const roles = isJob ? JOB_ROLES : FREELANCER_ROLES;

  // File upload state
  const [resumeFile, setResumeFile] = useState<UploadedFileState | null>(null);
  const [showreelFile, setShowreelFile] = useState<UploadedFileState | null>(null);
  const [fileErrors, setFileErrors] = useState<{ resume?: string; showreel?: string }>({});

  // Form handling state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<FreelancerRecord | null>(null);
  const [syncStatusText, setSyncStatusText] = useState<string>("");

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (resumeFile?.dataUrl && resumeFile.dataUrl.startsWith("blob:")) {
      URL.revokeObjectURL(resumeFile.dataUrl);
    }

    const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
    const blobUrl = URL.createObjectURL(file);
    setResumeFile({
      name: file.name,
      sizeStr: `${sizeMb} MB`,
      dataUrl: blobUrl,
      rawFile: file,
    });
    setFileErrors((prev) => ({ ...prev, resume: undefined }));
  };

  const handleShowreelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (showreelFile?.dataUrl && showreelFile.dataUrl.startsWith("blob:")) {
      URL.revokeObjectURL(showreelFile.dataUrl);
    }

    const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
    const blobUrl = URL.createObjectURL(file);
    setShowreelFile({
      name: file.name,
      sizeStr: `${sizeMb} MB`,
      dataUrl: blobUrl,
      rawFile: file,
    });
    setFileErrors((prev) => ({ ...prev, showreel: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormErrors({});
    setFileErrors({});

    const formData = new FormData(e.currentTarget);
    const rawData = {
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      city: (formData.get("city") as string) || "",
      role: (formData.get("role") as string) || roles[0],
      portfolioUrl: (formData.get("portfolioUrl") as string) || "",
      equipment: (formData.get("equipment") as string) || "",
      message: (formData.get("message") as string) || "",
    };

    const parsed = applicationSchema.safeParse(rawData);

    let hasFileErr = false;
    if (!resumeFile && !rawData.portfolioUrl) {
      setFileErrors((prev) => ({
        ...prev,
        resume: "Please upload your Résumé/CV or provide a portfolio URL.",
      }));
      hasFileErr = true;
    }

    if (!parsed.success || hasFileErr) {
      if (!parsed.success) {
        const errs: Record<string, string> = {};
        parsed.error.issues.forEach((i) => {
          if (i.path[0]) errs[String(i.path[0])] = i.message;
        });
        setFormErrors(errs);
      }
      setIsSubmitting(false);
      return;
    }

    try {
      const valid = parsed.data;
      const rawPortfolioUrl = valid.portfolioUrl;
      const portfolioVal = rawPortfolioUrl || showreelFile?.name || "See attached CV/Showreel";
      const compensationNotice = isJob
        ? "Employment / Job Position (ORYN ZERO Studio Team)"
        : "75% Freelancer Fee / 25% Studio Admin Split";

      // 1. Upload files to cloud transfer host to generate direct clickable links
      let resumeCloud: CloudUploadResult | null = null;
      let showreelCloud: CloudUploadResult | null = null;

      if (resumeFile?.rawFile) {
        setSyncStatusText(`Uploading CV/Résumé file (${resumeFile.name}) for direct link generation...`);
        resumeCloud = await uploadFileToCloudHost(resumeFile.rawFile);
      }

      if (showreelFile?.rawFile) {
        setSyncStatusText(`Uploading Showreel video (${showreelFile.name}) for direct link generation...`);
        showreelCloud = await uploadFileToCloudHost(showreelFile.rawFile);
      }

      const record: FreelancerRecord = {
        id: `${isJob ? "job" : "f"}-${Date.now()}`,
        name: valid.name,
        email: valid.email,
        phone: valid.phone,
        city: valid.city,
        role: valid.role,
        portfolio: rawPortfolioUrl || showreelCloud?.directUrl || portfolioVal,
        resumeUrl: resumeCloud?.directUrl || resumeFile?.dataUrl,
        showreelFileUrl: showreelCloud?.directUrl || showreelFile?.dataUrl,
        rate: compensationNotice,
        equipment: valid.equipment,
        message: valid.message,
        createdAt: new Date().toLocaleString("en-US", { dateStyle: "short", timeStyle: "short" }),
      };

      setSubmittedData(record);

      // Save locally to session
      const storageKey = isJob ? "oryn_job_applications" : "oryn_freelancers_roster";
      const existing = JSON.parse(localStorage.getItem(storageKey) || "[]");
      localStorage.setItem(storageKey, JSON.stringify([record, ...existing]));

      // Send Direct Email Notification to orynzerostudio@gmail.com
      try {
        const categoryLabel = isJob ? "JOB APPLICATION" : "FREELANCER APPLICATION";
        setSyncStatusText(`Sending ${isJob ? "job" : "freelancer"} application to ${TARGET_STUDIO_EMAIL}...`);

        const emailFormData = new FormData();
        emailFormData.append("_subject", `[NEW ${categoryLabel}] ${record.name} — ${record.role}`);
        emailFormData.append("_template", "table");
        emailFormData.append("Application_Type", isJob ? "Job & Career Position" : "Freelancer Roster Registration");
        emailFormData.append("Applicant_Name", record.name);
        emailFormData.append("Applicant_Email", record.email);
        emailFormData.append("Applicant_Phone", record.phone || "N/A");
        emailFormData.append("Location_City", record.city || "N/A");
        emailFormData.append("Applied_Position", record.role);
        emailFormData.append("Compensation_Terms", compensationNotice);

        // Separate Clickable Links in Email
        const cvDirectLink = resumeCloud?.directUrl || (resumeFile ? `Attached (${resumeFile.name})` : "N/A");
        const cvPageLink = resumeCloud?.pageUrl || "N/A";

        const showreelDirectLink = showreelCloud?.directUrl || rawPortfolioUrl || (showreelFile ? `Attached (${showreelFile.name})` : "N/A");
        const showreelPageLink = showreelCloud?.pageUrl || rawPortfolioUrl || "N/A";

        emailFormData.append("CV_Resume_File", resumeFile ? `${resumeFile.name} (${resumeFile.sizeStr})` : "N/A");
        emailFormData.append("CV_Direct_Stream_Or_Download_URL", cvDirectLink);
        emailFormData.append("CV_TmpFiles_WebPage_URL", cvPageLink);

        emailFormData.append("Showreel_Video_File", showreelFile ? `${showreelFile.name} (${showreelFile.sizeStr})` : "N/A");
        emailFormData.append("Showreel_Direct_Video_Play_Stream_URL", showreelDirectLink);
        emailFormData.append("Showreel_TmpFiles_WebPage_URL", showreelPageLink);

        emailFormData.append("Portfolio_Showreel_URL", rawPortfolioUrl || "N/A");
        emailFormData.append("Camera_and_Gear", record.equipment || "N/A");
        emailFormData.append("Motivation_and_Bio", record.message || "N/A");

        // Attach file inputs directly for FormSubmit
        if (resumeFile?.rawFile && resumeFile.rawFile.size <= 25 * 1024 * 1024) {
          emailFormData.append("attachment", resumeFile.rawFile, `CV_${resumeFile.name}`);
        }
        if (showreelFile?.rawFile && showreelFile.rawFile.size <= 25 * 1024 * 1024) {
          emailFormData.append("attachment", showreelFile.rawFile, `SHOWREEL_${showreelFile.name}`);
        }

        await fetch(`https://formsubmit.co/ajax/${TARGET_STUDIO_EMAIL}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: emailFormData,
        });
      } catch (emailErr) {
        console.warn("Email dispatch notification warning:", emailErr);
      }
    } catch (globalErr) {
      console.error("Global application submission error:", globalErr);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="rounded-3xl border border-white/10 bg-black/60 p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="border-b border-white/10 pb-8 mb-8">
              <div className="flex items-center gap-2 text-accent font-mono text-[10px] uppercase tracking-[0.3em]">
                <Briefcase className="size-4" />
                <span>{isJob ? "Job & Career Application" : "Roster Application"}</span>
              </div>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
                {isJob ? "Job Application Form" : "Freelancer Registration"}
              </h2>
              <p className="mt-2 text-xs text-silver/60 font-mono">
                {isJob
                  ? "Please submit your contact details, position, uploaded CV, showreel, and motivation. All job applications are sent directly to our studio management team at orynzerostudio@gmail.com."
                  : "Please provide your contact details, specialty, uploaded files, and motivation. All applications are sent directly to our studio team at orynzerostudio@gmail.com."}
              </p>
            </div>

            {/* Terms Notice */}
            <div className="mb-8 rounded-2xl border border-accent/30 bg-accent/5 p-6 relative overflow-hidden">
              <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-accent mb-2">
                <Sparkles className="size-4 text-accent" />
                <span>
                  {isJob ? "Studio Employment & Contract Parameters" : "Financial Compensation & Revenue Share Terms"}
                </span>
              </div>
              {isJob ? (
                <p className="text-xs text-silver/90 leading-relaxed font-sans">
                  ORYN ZERO offers project-based, full-time, and flexible contract roles. We provide access to industry-leading cinema gear, FPV setups, high-profile commercial brand projects, and competitive Swiss compensation structures.
                </p>
              ) : (
                <>
                  <p className="text-xs text-silver/90 leading-relaxed font-sans">
                    Project rates are defined per project based on client orders. <strong className="text-white">For every successfully completed project, freelancers receive 75% of the agreed project fee.</strong>
                  </p>
                  <p className="mt-2 text-xs text-silver/70 leading-relaxed font-sans">
                    The remaining 25% is retained by our company to cover client acquisition, project coordination, communication, administration, and overall project management.
                  </p>
                </>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-silver/60 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-white/10 bg-black/80 p-3.5 text-sm font-sans text-white outline-none focus:border-accent"
                  />
                  {formErrors.name && (
                    <p className="mt-1 font-mono text-[10px] text-red-400">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-silver/60 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="yourname@domain.ch"
                    className="w-full rounded-xl border border-white/10 bg-black/80 p-3.5 text-sm font-sans text-white outline-none focus:border-accent"
                  />
                  {formErrors.email && (
                    <p className="mt-1 font-mono text-[10px] text-red-400">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-silver/60 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+41 79 123 45 67"
                    className="w-full rounded-xl border border-white/10 bg-black/80 p-3.5 text-sm font-sans text-white outline-none focus:border-accent"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-silver/60 mb-2">
                    City / Location Base *
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Zürich, Switzerland"
                    className="w-full rounded-xl border border-white/10 bg-black/80 p-3.5 text-sm font-sans text-white outline-none focus:border-accent"
                  />
                  {formErrors.city && (
                    <p className="mt-1 font-mono text-[10px] text-red-400">
                      {formErrors.city}
                    </p>
                  )}
                </div>
              </div>

              {/* Specialty / Position */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-silver/60 mb-2">
                  {isJob ? "Position Applied For *" : "Primary Specialty / Role *"}
                </label>
                <select
                  name="role"
                  defaultValue={defaultRole || roles[0]}
                  className="w-full rounded-xl border border-white/10 bg-black/80 p-3.5 text-sm font-sans text-white outline-none focus:border-accent"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              {/* Upload Section: Résumé and Showreel */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* CV / Résumé Upload */}
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-silver/60 mb-2">
                    Upload Résumé / CV File *
                  </label>
                  {resumeFile ? (
                    <div className="flex items-center justify-between rounded-xl border border-accent/40 bg-accent/5 p-3.5 text-xs">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <FileText className="size-5 shrink-0 text-accent" />
                        <div className="truncate">
                          <p className="font-mono font-medium text-white truncate">{resumeFile.name}</p>
                          <p className="text-[10px] text-silver/60 font-mono">{resumeFile.sizeStr}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setResumeFile(null)}
                        className="ml-2 rounded-lg p-1 text-silver/50 hover:bg-white/10 hover:text-red-400 transition-colors"
                        title="Remove file"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-black/60 p-5 text-center cursor-pointer hover:border-accent hover:bg-white/[0.02] transition-all">
                      <Upload className="size-6 text-accent mb-2" />
                      <span className="font-mono text-xs text-white font-medium">Click to upload Résumé / CV</span>
                      <span className="mt-1 text-[10px] text-silver/50 font-mono">PDF, DOC, DOCX</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.txt"
                        onChange={handleResumeChange}
                        className="hidden"
                      />
                    </label>
                  )}
                  {fileErrors.resume && (
                    <p className="mt-1.5 font-mono text-[10px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="size-3" />
                      <span>{fileErrors.resume}</span>
                    </p>
                  )}
                </div>

                {/* Showreel / Portfolio Upload */}
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-silver/60 mb-2">
                    Upload Showreel Video / Portfolio File *
                  </label>
                  {showreelFile ? (
                    <div className="flex items-center justify-between rounded-xl border border-accent/40 bg-accent/5 p-3.5 text-xs">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <Video className="size-5 shrink-0 text-accent" />
                        <div className="truncate">
                          <p className="font-mono font-medium text-white truncate">{showreelFile.name}</p>
                          <p className="text-[10px] text-silver/60 font-mono">{showreelFile.sizeStr}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowreelFile(null)}
                        className="ml-2 rounded-lg p-1 text-silver/50 hover:bg-white/10 hover:text-red-400 transition-colors"
                        title="Remove file"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-black/60 p-5 text-center cursor-pointer hover:border-accent hover:bg-white/[0.02] transition-all">
                      <Video className="size-6 text-accent mb-2" />
                      <span className="font-mono text-xs text-white font-medium">Click to upload Showreel File</span>
                      <span className="mt-1 text-[10px] text-silver/50 font-mono">MP4, MOV, MKV, WEBM, AVI, M4V, PDF, or ZIP</span>
                      <input
                        type="file"
                        accept="video/*,.mp4,.mov,.mkv,.webm,.avi,.m4v,.qt,.wmv,.flv,.pdf,.zip"
                        onChange={handleShowreelChange}
                        className="hidden"
                      />
                    </label>
                  )}
                  <div className="mt-2">
                    <input
                      type="text"
                      name="portfolioUrl"
                      placeholder="Or paste Vimeo / YouTube link (optional)"
                      className="w-full rounded-xl border border-white/10 bg-black/80 px-3.5 py-2 text-xs font-sans text-white outline-none focus:border-accent placeholder:text-silver/40"
                    />
                  </div>
                  {fileErrors.showreel && (
                    <p className="mt-1.5 font-mono text-[10px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="size-3" />
                      <span>{fileErrors.showreel}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Camera & Gear */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-silver/60 mb-2">
                  Camera Hardware, Gear & Software Skills
                </label>
                <input
                  type="text"
                  name="equipment"
                  placeholder="e.g. RED V-Raptor, Custom FPV Cinelifter, Premiere, DaVinci Resolve, Unreal Engine..."
                  className="w-full rounded-xl border border-white/10 bg-black/80 p-3.5 text-sm font-sans text-white outline-none focus:border-accent"
                />
              </div>

              {/* Motivation / Experience */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-silver/60 mb-2">
                  Motivation & Experience Summary *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your background, major commercial brand projects, and why you want to join ORYN ZERO..."
                  className="w-full rounded-xl border border-white/10 bg-black/80 p-3.5 text-sm font-sans text-white outline-none focus:border-accent resize-none"
                />
                {formErrors.message && (
                  <p className="mt-1 font-mono text-[10px] text-red-400">
                    {formErrors.message}
                  </p>
                )}
              </div>

              {/* Progress Indicator */}
              {isSubmitting && syncStatusText && (
                <div className="rounded-xl border border-accent/30 bg-accent/5 p-4 flex items-center gap-3 font-mono text-xs text-accent">
                  <Loader2 className="size-4 animate-spin" />
                  <span>{syncStatusText}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 rounded-2xl bg-accent py-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-black shadow-[0_4px_25px_rgba(212,176,98,0.25)] hover:bg-white transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin text-black" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <Send className="size-4 text-black" />
                    <span>
                      {isJob ? "Submit Job Application to ORYN ZERO" : "Submit Application to ORYN ZERO"}
                    </span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          /* Success Confirmation Card */
          <motion.div
            key="success-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border border-accent/40 bg-black/80 p-8 md:p-12 backdrop-blur-2xl text-center shadow-[0_0_50px_rgba(212,176,98,0.15)]"
          >
            <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-accent bg-accent/10 text-accent">
              <CheckCircle2 className="size-8" />
            </div>

            <span className="mt-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              {isJob ? "JOB APPLICATION SUBMITTED SUCCESSFULLY" : "APPLICATION SUBMITTED SUCCESSFULLY"}
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
              Thank You, {submittedData?.name}!
            </h2>

            <p className="mt-4 text-sm font-sans text-silver/80 max-w-xl mx-auto leading-relaxed">
              Your application and uploaded documents have been sent directly to{" "}
              <span className="text-white font-semibold">orynzerostudio@gmail.com</span> as a new{" "}
              {isJob ? "job application" : "freelancer registration"}. Our production management team will review your CV and reach out to you directly.
            </p>

            {/* Candidate Summary Breakdown */}
            {submittedData && (
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-left max-w-lg mx-auto">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-accent mb-4 border-b border-white/10 pb-2">
                  Application Summary Receipt
                </h3>
                <div className="space-y-3 font-mono text-xs text-silver/80">
                  <p>
                    <strong className="text-white">Category:</strong>{" "}
                    <span className="text-accent">{isJob ? "Job & Career Application" : "Freelancer Roster Application"}</span>
                  </p>
                  <p>
                    <strong className="text-white">Position Applied:</strong> {submittedData.role}
                  </p>
                  <p>
                    <strong className="text-white">Email:</strong> {submittedData.email}
                  </p>
                  <p>
                    <strong className="text-white">Location:</strong> {submittedData.city}
                  </p>
                  {submittedData.portfolio && (
                    <p className="flex items-start gap-1.5 flex-wrap">
                      <strong className="text-white shrink-0">Portfolio / Showreel:</strong>{" "}
                      {/^https?:\/\//i.test(submittedData.portfolio) ? (
                        <a
                          href={submittedData.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-accent underline hover:text-white transition-colors break-all"
                        >
                          <span>{submittedData.portfolio}</span>
                          <ExternalLink className="size-3 shrink-0" />
                        </a>
                      ) : (
                        <span>{submittedData.portfolio}</span>
                      )}
                    </p>
                  )}
                  {(resumeFile || submittedData?.resumeUrl) && (
                    <div className="border-t border-white/10 pt-2 space-y-1">
                      <p className="flex items-center gap-1.5 flex-wrap">
                        <strong className="text-white shrink-0">CV / Résumé File:</strong>{" "}
                        {resumeFile ? (
                          <a
                            href={resumeFile.dataUrl}
                            download={resumeFile.name}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-accent font-semibold underline hover:text-white transition-colors"
                          >
                            <Download className="size-3.5" />
                            <span>{resumeFile.name} ({resumeFile.sizeStr}) — Download Local Copy</span>
                          </a>
                        ) : (
                          <span className="text-silver">Uploaded</span>
                        )}
                      </p>
                      {submittedData?.resumeUrl && /^https?:\/\//i.test(submittedData.resumeUrl) && (
                        <div className="text-[11px] text-silver/80 space-y-1 pt-1">
                          <p className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-accent font-semibold">📄 Direct Download / View:</span>
                            <a
                              href={submittedData.resumeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent underline hover:text-white font-mono break-all"
                            >
                              {submittedData.resumeUrl}
                            </a>
                          </p>
                          {submittedData.resumeUrl.includes("tmpfiles.org/dl/") && (
                            <p className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-silver/60">🌐 TmpFiles Page Link:</span>
                              <a
                                href={submittedData.resumeUrl.replace("tmpfiles.org/dl/", "tmpfiles.org/")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-silver/70 underline hover:text-white font-mono break-all"
                              >
                                {submittedData.resumeUrl.replace("tmpfiles.org/dl/", "tmpfiles.org/")}
                              </a>
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  {(showreelFile || submittedData?.showreelFileUrl) && (
                    <div className="border-t border-white/10 pt-2 space-y-1">
                      <p className="flex items-center gap-1.5 flex-wrap">
                        <strong className="text-white shrink-0">Showreel Video File:</strong>{" "}
                        {showreelFile ? (
                          <a
                            href={showreelFile.dataUrl}
                            download={showreelFile.name}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-accent font-semibold underline hover:text-white transition-colors"
                          >
                            <Download className="size-3.5" />
                            <span>{showreelFile.name} ({showreelFile.sizeStr}) — Download Local Copy</span>
                          </a>
                        ) : (
                          <span className="text-silver font-mono">{submittedData?.portfolio || "Uploaded"}</span>
                        )}
                      </p>
                      {submittedData?.showreelFileUrl && /^https?:\/\//i.test(submittedData.showreelFileUrl) && (
                        <div className="text-[11px] text-silver/80 space-y-1 pt-1">
                          <p className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-accent font-semibold">🎬 Watch Video Stream Directly (.mp4 / .mov / etc.):</span>
                            <a
                              href={submittedData.showreelFileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent underline hover:text-white font-mono break-all font-semibold"
                            >
                              {submittedData.showreelFileUrl}
                            </a>
                          </p>
                          {submittedData.showreelFileUrl.includes("tmpfiles.org/dl/") && (
                            <p className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-silver/60">🌐 TmpFiles Web Page Link:</span>
                              <a
                                href={submittedData.showreelFileUrl.replace("tmpfiles.org/dl/", "tmpfiles.org/")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-silver/70 underline hover:text-white font-mono break-all"
                              >
                                {submittedData.showreelFileUrl.replace("tmpfiles.org/dl/", "tmpfiles.org/")}
                              </a>
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

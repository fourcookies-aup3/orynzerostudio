import { GoogleGenAI } from "@google/genai";

export interface AIAnalysisResult {
  matchScore: number;
  summary: string;
  strengths: string[];
  recommendedProjects: string[];
}

export async function analyzeFreelancerWithAI(freelancer: {
  name: string;
  role: string;
  equipment?: string;
  portfolio?: string;
  message?: string;
  rate?: string;
}): Promise<AIAnalysisResult> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

  if (apiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are a senior executive producer at ORYN ZERO, an elite Swiss high-speed FPV and cinematic film production studio.
Analyze the following freelancer profile for addition to our roster:
Name: ${freelancer.name}
Role: ${freelancer.role}
Equipment/Gear: ${freelancer.equipment || "Not specified"}
Portfolio: ${freelancer.portfolio || "Not specified"}
Rate: ${freelancer.rate || "Not specified"}
Bio/Experience: ${freelancer.message || "Not specified"}

Return ONLY a valid JSON object matching this schema without markdown codeblocks:
{
  "matchScore": number (0 to 100 representing suitability for high-end cinematic & FPV commercial productions),
  "summary": "2 concise sentences evaluating their talent level and studio fit",
  "strengths": ["strength 1", "strength 2", "strength 3"],
  "recommendedProjects": ["project type 1", "project type 2"]
}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const text = response.text || "";
      const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();
      const parsed = JSON.parse(cleaned);

      return {
        matchScore: parsed.matchScore || 88,
        summary: parsed.summary || `${freelancer.name} brings solid technical capabilities tailored for high-end video productions.`,
        strengths: parsed.strengths || ["Technical Precision", "Gear Readiness", "Creative Storytelling"],
        recommendedProjects: parsed.recommendedProjects || ["Brand Commercials", "Action Sequences"],
      };
    } catch (err) {
      console.warn("Gemini API call failed, using intelligent heuristics:", err);
    }
  }

  // Smart heuristic fallback if API key is not present
  const isFPV = freelancer.role.toLowerCase().includes("fpv") || (freelancer.equipment || "").toLowerCase().includes("drone");
  const isColor = freelancer.role.toLowerCase().includes("color");
  const isSFX = freelancer.role.toLowerCase().includes("sound") || freelancer.role.toLowerCase().includes("sfx");

  const matchScore = isFPV ? 96 : isColor ? 92 : isSFX ? 94 : 88;
  return {
    matchScore,
    summary: `${freelancer.name} is a skilled ${freelancer.role} with specialized gear and experience suitable for high-end cinematic projects.`,
    strengths: isFPV
      ? ["High-Speed Precision Tracking", "Cinelifter Capability", "FPV Acrobatic Control"]
      : ["Cinematic Grading & Tone", "Fast Turnaround", "High-End Workflow"],
    recommendedProjects: isFPV
      ? ["Automotive Commercials", "Extreme Sports FPV", "Architectural Fly-Throughs"]
      : ["Brand Identity Films", "Documentaries", "Broadcast Commercials"],
  };
}

export async function generateOutreachEmailAI(freelancerName: string, role: string, projectType: string): Promise<string> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

  if (apiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Write a professional, sleek email outreach draft from ORYN ZERO Studio (orynzerostudio@gmail.com) to ${freelancerName}, a ${role}. We want to invite them to collaborate on an upcoming ${projectType} production in Switzerland. Keep it concise, inspiring, and executive. Do not include markdown codeblocks.`;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      return response.text || "";
    } catch (err) {
      console.warn("Gemini email generation error:", err);
    }
  }

  return `Hi ${freelancerName},\n\nWe came across your profile in the ORYN ZERO database and were very impressed with your work as a ${role}.\n\nWe have an upcoming ${projectType} production in Switzerland and would love to discuss your availability and day rates for this project.\n\nPlease let us know if you have availability over the next month for a brief intro call.\n\nBest regards,\n\nORYN ZERO Studio\norynzerostudio@gmail.com\nhttps://orynzero.ch`;
}

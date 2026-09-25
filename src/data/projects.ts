import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export type ProjectCredits = {
  mainRecordingEditing: string;
  coFilmingDroneShots: string;
  formattedText: string;
};

export type Project = {
  slug: string;
  id: string;
  title: string;
  category: string;
  year: number;
  client: string;
  location: string;
  cover: string;
  video?: string;
  overview: string;
  objective: string;
  exactRole: string;
  challenge: string;
  concept: string;
  production: string;
  result: string;
  services: string[];
  equipment?: string[];
  status?: "Pre-production" | "Production" | "Post-production" | "Released";
  featured?: boolean;
  credits?: ProjectCredits;
};

export const projects: Project[] = [
  {
    slug: "parkour-day-staefa",
    id: "01",
    title: "Parkour Day Stäfa",
    category: "Event Film & FPV Perspectives",
    year: 2026,
    client: "Parkour Day Stäfa",
    location: "Stäfa, Zürich, CH",
    cover: "https://img.youtube.com/vi/4mwIvmZ5y7c/maxresdefault.jpg",
    video: "https://youtu.be/4mwIvmZ5y7c",
    exactRole: "Co-Filming & FPV Drone Cinematography",
    objective:
      "Document the kinetic energy, obstacle runs, and athletic flow of Parkour Day Stäfa through low-altitude proximity FPV lines and synchronized ground angles.",
    credits: {
      mainRecordingEditing: "VISURE GMBH",
      coFilmingDroneShots: "Finn Ryf (ORYN ZERO)",
      formattedText: "Main Recording/Editing: VISURE GMBH · Co-Filming/Drone Shots: Finn Ryf",
    },
    overview:
      "A collaborative event film capturing the agility and community atmosphere of Parkour Day Stäfa. ORYN ZERO provided close-proximity FPV chase lines following athletes across outdoor obstacles in tandem with VISURE GMBH's ground camera team.",
    challenge:
      "Tracking agile athletes through crowded outdoor structures with strict safety margins, matching flight speed to physical jumps without interfering with participants or spectators.",
    concept:
      "Movement continuity. Matching drone flight paths with the physical momentum of athletes over rails, walls, and mats to keep the perspective close and grounded.",
    production:
      "Collaborative shoot in Stäfa. Main recording, principal ground cinematography, edit, and color grading were carried out by VISURE GMBH. Finn Ryf (ORYN ZERO) operated high-agility FPV drones for close-pass tracking and dynamic aerial coverage.",
    result:
      "A fast, engaging event recap used across social channels to showcase the local athlete community and promote future editions of the event.",
    services: [
      "FPV Drone Cinematography",
      "Close-Proximity Flight Lines",
      "Aerial Coordination",
      "On-Site Co-Filming",
    ],
    status: "Released",
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

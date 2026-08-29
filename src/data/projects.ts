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
    category: "Event Film & High-Velocity FPV",
    year: 2026,
    client: "Parkour Day Stäfa",
    location: "Stäfa, Zürich, CH",
    cover: "https://img.youtube.com/vi/4mwIvmZ5y7c/maxresdefault.jpg",
    video: "https://youtu.be/4mwIvmZ5y7c",
    credits: {
      mainRecordingEditing: "VISURE GMBH",
      coFilmingDroneShots: "Finn Ryf",
      formattedText: "Main Recording/Editing: VISURE GMBH · Co-Filming/Drone Shots: Finn Ryf",
    },
    overview:
      "A premium high-velocity event film capturing the extreme movement, athletic flow, and precision of Parkour Day Stäfa through cinematic ground views and custom close-proximity FPV tracking.",
    challenge:
      "Chasing highly agile athletes through complex architectural structures with zero margin for error, preserving the raw kinetic energy of parkour while maintaining cinematic composition.",
    concept:
      "Dynamic flow. Aligning the FPV drone's flight vectors directly with the physical momentum of the athletes to create a seamless, continuous feeling of movement.",
    production:
      "An intensive collaborative production. Main Recording/Editing: VISURE GMBH · Co-Filming/Drone Shots: Finn Ryf. Utilizing synchronized high-speed drone pilots and steady ground cameras, following coordinated lines across pre-scouted urban obstacles.",
    result:
      "A fast-paced, high-impact brand film delivering outstanding engagement and setting a new visual benchmark for regional athletic event coverage.",
    services: [
      "Videography",
      "FPV Shots",
      "SFX",
      "VFX",
      "Color Grading",
      "Editing",
    ],
    status: "Released",
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

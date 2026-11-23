export const EMAIL = "fittriyanurul@gmail.com";

export type Project = {
  title: string;
  date: string;
  tags: string[];
  /** One or two sentences about what the project is. */
  summary: string;
  links?: { label: string; href: string }[];
  /** Screenshot in public/projects/, shown in the Projects carousel (16:10 works best). */
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Martianauts: Mars Mission Trainer",
    date: "Nov 2026",
    image: "/projects/mars.jpg",
    tags: ["NASA Space Apps 2026", "JavaScript", "Vite", "Game Dev"],
    summary:
      "An interactive Mars survival and science game for children aged 7–12, made for NASA Space Apps Challenge 2026. Players explore a Mars base over six Sols, complete missions and learn how astronauts stay safe from radiation and solar storms.",
    links: [
      { label: "Play the game", href: "https://safiahamni.github.io/mars-mission-trainer/" },
      { label: "GitHub", href: "https://github.com/safiahamni/mars-mission-trainer" },
    ],
  },
  {
    title: "FitCore: Rehab Exercise Tracker on AWS",
    date: "Nov 2026",
    image: "/projects/fitcore.jpg",
    tags: ["AWS Amplify", "Cognito", "DynamoDB", "JavaScript"],
    summary:
      "A rehabilitation exercise tracker with patient and clinician views. Users sign up and log in securely, and their exercise records are saved in the cloud on AWS, where only they can see them.",
    links: [
      { label: "Try the app", href: "https://gbsvb13.github.io/fitcore/" },
      { label: "GitHub", href: "https://github.com/gbsvb13/fitcore" },
    ],
  },
];

export const skills = {
  Languages: ["Java", "Python", "C++", "C", "Scala", "OCaml", "ARM Assembly", "Verilog"],
  Tools: [
    "Linux",
    "Git",
    "Docker",
    "GCC",
    "eBPF",
    "SPIN / Promela",
    "Pytest",
    "Zedboard",
    "WordPress",
  ],
  "Soft skills": [
    "Leadership",
    "Teamwork",
    "Problem-Solving",
    "Communication",
    "Critical Thinking",
  ],
  Spoken: ["Bahasa Malaysia", "English (fluent)", "Korean (intermediate)"],
};

export const education = [
  {
    school: "Korea University, South Korea",
    years: "2024 – 2028",
    degree: "B.S. Computer Science and Engineering, College of Informatics",
    note: "CGPA 3.64/4.50 · Coursework: Data Structures, Algorithms, Compilers, Operating Systems, AI, Software Verification",
  },
  {
    school: "University of Kuala Lumpur",
    years: "2022 – 2023",
    degree: "Foundation in Science & Technology for Korean University",
    note: "CGPA 3.95/4.00 · Dean's List 2023",
  },
  {
    school: "Sekolah Seri Puteri, Cyberjaya",
    years: "2017 – 2022",
    degree: "Sijil Pelajaran Malaysia (SPM)",
    note: "9As",
  },
];

export const activities = [
  {
    title: "Marathon Volunteer — JTBC Marathon",
    year: "2026",
    desc: "Monitored a road closure along the marathon route to keep the course clear for runners, and directed approaching drivers away from the restricted road.",
  },
  {
    title: "Student Volunteer — QS Higher Ed Summit: Asia Pacific",
    year: "2025",
    desc: "Supported operations, logistics and registration for an international higher-education event.",
  },
  {
    title: "Student Volunteer — Simposium Kerjaya Mahasiswa",
    year: "2025",
    desc: "Helped run a career symposium for Malaysian students in Korea.",
  },
  {
    title: "Member — Korea University Bike Team (KUBT)",
    year: "2025",
    desc: "Regular cycling activities and team events.",
  },
  {
    title: "Member — KU International Student Assistant (KUISA)",
    year: "2024",
    desc: "Bud and Buddies program helping international students adapt to life in Korea.",
  },
];

export const stats: [string, string][] = [
  ["3.64", "CGPA /4.5"],
  ["3.75", "Latest GPA"],
];

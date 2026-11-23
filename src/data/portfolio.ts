export const EMAIL = "fittriyanurul@gmail.com";

export type Project = {
  title: string;
  date: string;
  tags: string[];
  points: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Martianauts: Mars Mission Trainer",
    date: "Nov 2026",
    tags: ["NASA Space Apps 2026", "JavaScript", "Vite", "Game Dev"],
    points: [
      "Interactive Mars survival and science game for children aged 7–12, built in a team for NASA Space Apps Challenge 2026",
      "Built the shared base map with Mars scenery (mesa, craters, dunes) and the solar panel yard",
      "Made the mission side panel: mission clock, radiation hazard meter, solar storms and EVA GO / NO GO status",
      "Teaches how radiation, shelter and water shielding keep astronauts safe on Mars",
    ],
    links: [
      { label: "Play the game", href: "https://safiahamni.github.io/mars-mission-trainer/" },
      { label: "GitHub", href: "https://github.com/safiahamni/mars-mission-trainer" },
    ],
  },
  {
    title: "FitCore: Rehab Exercise Tracker on AWS",
    date: "Nov 2026",
    tags: ["AWS Amplify", "Cognito", "DynamoDB", "JavaScript"],
    points: [
      "Rehabilitation exercise logging prototype with patient and clinician views",
      "Added sign-up, email verification and login with AWS Cognito",
      "Stored exercise records in DynamoDB through Amplify Gen 2, with owner-only access rules",
      "Tested with two accounts that one user cannot read, edit or delete another user's records",
    ],
    links: [{ label: "GitHub", href: "https://github.com/gbsvb13/fitcore" }],
  },
];

export const skills = {
  Languages: ["Java", "Python", "C++", "C", "Scala", "OCaml", "ARM Assembly", "Verilog"],
  Tools: ["Linux", "Git", "Docker", "GCC", "eBPF", "SPIN / Promela", "Pytest", "Zedboard", "WordPress"],
  "Soft skills": ["Leadership", "Teamwork", "Problem-Solving", "Communication", "Critical Thinking"],
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

export const EMAIL = "fittriyanurul@gmail.com";

export type Project = {
  title: string;
  date: string;
  tags: string[];
  points: string[];
};

// Add your projects here when you are ready.
export const projects: Project[] = [];

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
    years: "",
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

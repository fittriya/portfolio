export const EMAIL = "fittriyanurul@gmail.com";

export type Project = {
  title: string;
  date: string;
  tags: string[];
  points: string[];
};

export const projects: Project[] = [
  {
    title: "eBPF-Based Load Balancer",
    date: "May 2026",
    tags: ["eBPF", "Linux TC", "Networking"],
    points: [
      "Built a load balancer on Linux Traffic Control with VIP translation, NAT and per-flow backend selection",
      "Kept flows on consistent backends using eBPF maps",
      "Tested forwarding with network namespaces and virtual interfaces",
    ],
  },
  {
    title: "Compiler Construction",
    date: "May 2026",
    tags: ["OCaml", "Compilers"],
    points: [
      "Implemented DFA construction, LL(1) parsing and grammar transformations",
      "Wrote optimization passes: constant folding, copy propagation, CSE, dead code elimination",
      "Measured instruction count reduction and correctness",
    ],
  },
  {
    title: "Model Checking & Formal Verification",
    date: "May 2026",
    tags: ["Promela", "SPIN", "LTL"],
    points: [
      "Modeled concurrent systems and synchronization protocols",
      "Verified safety, liveness, deadlock-freedom and mutual exclusion with LTL",
      "Analyzed counterexample traces and fairness assumptions",
    ],
  },
  {
    title: "Mutation Testing & Software Verification",
    date: "Apr 2026",
    tags: ["Python", "Pytest"],
    points: [
      "Ran mutation testing on the Click Python package",
      "Wrote new Pytest cases that killed previously surviving mutants",
      "Improved test coverage of formatting behavior",
    ],
  },
  {
    title: "Linux File System Virtualization (WrapFS)",
    date: "Apr 2026",
    tags: ["C", "Linux Kernel", "VFS"],
    points: [
      "Extended WrapFS to customize behavior at the VFS layer",
      "Implemented metadata virtualization and directory-entry filtering",
      "Studied interactions between user space, VFS and Ext4",
    ],
  },
  {
    title: "Mini OS for ARM (Zynq Zedboard)",
    date: "Jun 2025",
    tags: ["ARM Assembly", "C", "Embedded"],
    points: [
      "Built a mini OS with round-robin task scheduling",
      "Implemented context switching in ARM assembly with Task Control Blocks",
      "Integrated private timer interrupts and the GIC for multitasking",
    ],
  },
  {
    title: "Cafe Pop-Up Store Platform",
    date: "Jun 2025",
    tags: ["Product", "Research"],
    points: [
      "Designed a platform concept connecting SMEs with Seoul cafes for pop-up stores",
      "Conducted market research on offline product testing",
    ],
  },
  {
    title: "Website Editing & Content Management",
    date: "Feb 2026",
    tags: ["WordPress", "Elementor"],
    points: ["Edited page layouts, images and sections to improve usability"],
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
  ["8", "Projects"],
];

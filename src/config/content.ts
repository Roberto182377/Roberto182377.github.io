export const siteConfig = {
  name: "Roberto Morales",
  title: "Portafolio REMH",
  description: "Sis",
  social: {
    github: "https://github.com/tomcomtang/astro-multiplepage-portfolio",
    twitter: "https://x.com/astrodotbuild",
    email: "mailto:364786053@qq.com",
  },
};

export const homeContent = {
  title: "Bienvenidos",
  description:
    "El siguiente sitio web es un portafolio que busca evidenciar el aprendizaje adquirido en el curso deCNO V: Seguridad Informática, a traves de apuntes, actividades y proyectos realizados en este semestre",
  buttons: {
    about: {
      text: "Mi Perfil",
      href: "/about/",
    },
    posts: {
      text: "Apuntes",
      href: "/posts/",
    },
  },
  images: {
    light: "https://multiplepage-portfolio.edgeone.app/assets/images/tech-background-light.svg",
    dark: "/assets/images/tech-background-dark.svg",
  },
};

export const aboutContent = {
  meta: {
    title: "About - Your Portfolio",
    description: "Learn more about my background, skills, and experience",
  },
  title: "Acerca de mí",
  description:
    "Estudiante en Ingeniería en Tecnologías de la Información, en busqueda del dominio de diferentes lenguajes y conocimientos escenciales de redes",
    skills: [
    "C, C++",
    "Java",
    "HTML, CSS",
    "Kotlin",
    "MySQL",
  ],
  image: {
    src: "/assets/images/about/coder.jpg",
    alt: "Profile",
  },
  experience: {
    title: "Certificados",
    items: [
      {
        //NDG Linux Essentials | Cisco (Enero 2025)
        period: "Enero 2025",
        position: "NDG Linux Essentials",
        company: "Cisco",
        description:
          "Fundamentos de Linux, código abierto y la línea de comandos..",
      },
      {
        //CCNA: Introduction to Networks | Cisco (Enero 2026)
        period: "Enero 2026",
        position: "CCNA: Introduction to Networks",
        company: "Cisco",
        description:
          "Habilidades para instalar, configurar, operar y solucionar problemas de redes empresariales",
      },
      {
        //Introduction to Data Science | Cisco (Enero 2026)
        period: "Enero 2026",
        position: "Introduction to Data Science",
        company: "Cisco",
        description: "Uso de estadística, inteligencia artificial e ingeniería de computación para analizar grandes volúmenes de dato.",
      },
    ],
  },
  connect: {
    title: "Let's Connect",
    description:
      "Feel free to reach out if you want to collaborate or just say hi! You can find us on social media or drop us an",
    email: {
      text: "email",
      href: "mailto:364786053@qq.com",
    },
  },
};

export const projectsContent = {
  meta: {
    title: "Projects - Your Portfolio",
    description: "Showcase of my best work and projects",
  },
  title: "Our Projects",
  description:
    "Here you can showcase your best work. Each project should include a brief description, the technologies used, and any notable achievements. This helps potential clients or employers understand your capabilities.",
  projects: [
    {
      title: "Parcial I",
      description:
        "Fundamentos del Hackin Ético",
      image: "/assets/images/projects/project1.jpg",
      href: "#",
    },
    {
      title: "Parcial II",
      description:
        "Técnicas de explotación de vulnerabilidades y seguridad en entornos tecnológicos.",
      image: "/assets/images/projects/project2.jpg",
      href: "#",
    },
    {
      title: "Parcial III",
      description:
        "Post-explotación y reportes de seguridad",
      image: "/assets/images/projects/project3.png",
      href: "#",
    },
  ],
};


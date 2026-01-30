export const siteConfig = {
  name: "Roberto Morales",
  title: "Portafolio REMH",
  description: "Sis",
  social: {
    github: "https://github.com/Roberto182377",
    twitter: "https://x.com/astrodohttps://x.com/UPSLP_MX?s=20tbuild",
    email: "182377@upslp.edu.mx",
  },
};

export const homeContent = {
  title: "Bienvenidos",
  description:
    "El siguiente sitio web es un portafolio que busca evidenciar el aprendizaje adquirido en el curso de CNO V: Seguridad Informática, a traves de apuntes, actividades y proyectos realizados en este semestre",
  buttons: {
    about: {
      text: "Mi Perfil",
      href: "/perfil/",
    },
    posts: {
      text: "Apuntes",
      href: "/apuntes/",
    },
  },
  images: {
    light: "https://multiplepage-portfolio.edgeone.app/assets/images/tech-background-light.svg",
    dark: "/assets/images/tech-background-dark.svg",
  },
};

export const aboutContent = {
  meta: {
    title: "Acerca de mi perfilo",
    description: "Habilidades,meta, concimientos",
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
    title: "Contacto",
    description:
      "Cualquier consulta o mensaje que desees enviarme, puede ser atrves de mi correo: ",
    email: {
      text: "Roberto Morales",
      href: "182377@upslp.edu.mx",
    },
  },
};

export const projectsContent = {
  meta: {
    title: "Actividades de PArciales",
    description: "Recopilacion de actividades, tareas y proyectos",
  },
  title: "Parciales",
  description:
    "En los siguientes modulos se encuentran la recopilación de las actividades, tareas y proyectos realizados durante cada parcial.",
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


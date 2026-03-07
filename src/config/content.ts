export const siteConfig = {
  name: "Roberto Morales",
  title: "Portafolio REMH",
  description: "Portafolio virtual de CNO V: Seguridad Informática",
  social: {
    github: "https://github.com/Roberto182377",
    twitter: "https://x.com/astrodohttps://x.com/UPSLP_MX?s=20tbuild",
    email: "mailto:182377@upslp.edu.mx",
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
      text: "Actividades",
      href: "/actividadesSI/",
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
    "Estudiante en Ingeniería en Tecnologías de la Información, en busqueda del dominio de diferentes lenguajes y conocimientos escenciales en TI",
    skills: [
    "C, C++",
    "Java",
    "HTML, CSS",
    "Kotlin",
    "MySQL",
  ],
  image: {
    src: "/assets/images/about/perfil.jpg",
    alt: "Perfil",
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
      href: "mailto:182377@upslp.edu.mx",
    },
  },
};

export const proyectosContent = {
  meta: {
    title: "Proyectos",
    description: "Modulo con la inclusión de los proyectos desarrollados durante la materia",
  },
  title: "Proyectos",
  description:
    "En el presente modulo se encuentra la inclusión de los proyectos desarrollados durante la materia de CNO V: Seguridad Informática, haciendo evidencia del trabajo elaborado y conocimientos aquiridos tras el aprendizaje de nuevos temas.",
  projects: [
    {
      title: "PR01",
      description:
        "De la teoría a la práctica: walkthrough en acción (guía y video).",
      image: "/assets/images/projects/parcial01.png",
      href: "/proyecto01/",
    },
    {
      title: "PR02",
      description:
        "El eslabón más débil: diseño ético de una campaña de ingeniería social.",
      image: "/assets/images/projects/parcial02.png",
      href: "https://roberto182377.github.io/proyectos/pr02",
    },
    {
      title: "PR03",
      description:
        "En espera...",
      image: "/assets/images/projects/parcial03.png",
      href: "#",
    },
  ],
};


export const roadToHofFContent = {
  meta: {
    title: "ROAD TO HALL OF FAME",
    description: "Modulo del desarrollo de practicas y laboratorios especializados de seguridad informatica",
  },
  title: "ROAD TO HALL OF FAME",
  description:
    "Modulo del desarrollo de practicas y laboratorios especializados de seguridad informatica complementarios a la materia de CNO V: Seguridad Informática",
  projects: [
    {
      title: "SQL Injection",
      description:
        "Recopilación de los laboratorios realizados en la Web Security Academy de PortSwigger, haciendo uso de conocimientos de pentesting en la rama de SQLi, empleando la herramienta BurpSuite",
      image: "/assets/images/posts/sqli.png",
      href: "/SQLinjection/",
    },
  ],
};

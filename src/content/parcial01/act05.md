---
title: "Actividad 05 -Cartografiando el pentesting: análisis comparativo de metodologías de seguridad informática"
description: "Analizar y comparar de manera estructurada las principales metodologías y marcos de referencia utilizados en pruebas de penetración y evaluación de seguridad informática."
date: "2026-02-09"
readTime: ""
image: "/assets/images/posts/post1.jpg"
slug: "act05-182377"
---

|**Metodología** |**Descripción** |**Fases** |**Objetivo** |**Escenarios** |**Orientación** |**Autores (URL)** |**Certificaciones** |**Versiones** |
| - | - | - | - | - | - | - | - | - |
|**MTRE ATT&CK** |Marco de conocimiento que documenta tácticas, técnicas y procedimientos (TTPs) utilizados por atacantes reales, basado en observación de amenazas. |No define fases secuenciales; se organiza en tácticas (Initial Access, Execution, Persistence, etc.) y técnicas. |Identificar y analizar técnicas de ataque reales y mejorar la detección y respuesta. |SOC, threat hunting, red teaming, evaluación de defensas. |Defensa / evaluación |<p>MITRE </p><p>[https://attack.mitre.org](https://attack.mitre.org/)</p>|No certificaciones directas (usado como referencia en varias). |Actualización continua (Enterprise, Mobile, ICS). |
|**OWASP WSTG** |Guía detallada para pruebas de seguridad en aplicaciones web, enfocado en vulnerabilidades comunes. |Información, configuración, autenticación, autorización, validación de entradas, lógica de negocio, etc. |Detectar vulnerabilidades técnicas en aplicaciones web. |Auditorías web, pentesting web, desarrollo seguro. |Ataque / evaluación |<p>OWASP </p><p>[https://owasp.org/www - project-web-security - testing-guide/](https://owasp.org/www-project-web-security-testing-guide/)</p>|OWASP no certifica WSTG directamente (relacionado con OSCP, CEH). |WSTG v4.x (vigente). |
|**NIST SP 800- 115** |Guía técnica para pruebas de seguridad y evaluación de sistemas de información. |Planeación, descubrimiento, ataque, reporte. |Evaluar controles de seguridad y postura general. |Gobierno, empresas reguladas, auditorías formales. |Evaluación / defensa |NIST [https://csrc.nist.gov/public](https://csrc.nist.gov/publications/detail/sp/800-115/final)|No certificaciones directas. |Publicación vigente (2008, aún referenciada). |
|||||||[ations/detail/sp/800 -](https://csrc.nist.gov/publications/detail/sp/800-115/final)|||
|||||||[115/final ](https://csrc.nist.gov/publications/detail/sp/800-115/final)|||
|**OSSTMM** |Metodología científica para medir la seguridad operativa de sistemas. |Reconocimiento, análisis de canales, pruebas de control, métricas de seguridad. |Medir objetivamente la seguridad operativa. |Infraestructura crítica, telecomunicaciones, auditorías avanzadas. |Evaluación |ISECOM [https://www.isecom.org/O](https://www.isecom.org/OSSTMM.3.pdf)|OSSTMM Professional Certification (OPSA, OPST). |OSSTMM v3 (vigente). |
|||||||[SSTMM.3.pdf ](https://www.isecom.org/OSSTMM.3.pdf)|||
|**PTES** |Estándar práctico para la ejecución completa de pruebas de penetración. |Pre-engagement, inteligencia, modelado de amenazas, explotación, post - explotación, reporte. |Estandarizar pruebas de penetración técnicas. |Pentesting profesional, consultoría, ethical hacking |Ataque |Comunidad PTES [http://www.pentest -](http://www.pentest-standard.org/)|Relacionado indirectamente con OSCP, GPEN. |Estándar estable (uso vigente). |
|||||||[standard.org ](http://www.pentest-standard.org/)|||
|**ISSAF** |Marco integral para pruebas de seguridad con enfoque técnico y procedimental. |Planeación, evaluación, explotación, reporte. |Identificar debilidades técnicas y organizacionales. |Pentesting clásico, auditorías de seguridad. |Ataque / evaluación |OISSG [https://www.oissg.org/issaf](https://www.oissg.org/issaf/)|No certificaciones vigentes ampliamente reconocidas. |Marco estable (poca actualización reciente). |
|||||||[/ ](https://www.oissg.org/issaf/)|||



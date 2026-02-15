---
title: "Actividad 01 -Análisis en grupo de un ciberataque real y su impacto empresarial"
description: "Investigación realizada en equipo sobre el ataque de NotPetya– Maersk  sucedido en el 2017"
date: "2026-01-30"
readTime: ""
image: "/assets/images/posts/img_Act01_portada.jpg"
slug: "act01-Equipo01"
---

<div align="right">
  <a href="/assets/images/docs_P1/act01-Equipo01.pdf" download>
    📄 Descargar PDF
  </a>
</div>

---

## 💾 Introducción

Durante el 27 de junio de 2017, Ucrania fue víctima de uno de los ciberataques más devastadores de la historia moderna. El malware **NotPetya**, atribuido a actores estatales vinculados a Rusia, se propagó inicialmente a través del software contable **MeDoc**, ampliamente utilizado para el cumplimiento fiscal en el país.

Aunque se presentó como **ransomware**, NotPetya fue en realidad un **wiper**, diseñado para causar destrucción irreversible. El ataque afectó a múltiples organizaciones a nivel global. Entre las más impactadas se encontró **Maersk**, una de las compañías de transporte marítimo más grandes del mundo, cuya operación logística fue paralizada, afectando el comercio internacional.

![Act 01](/assets/images/posts/img_Act01_portada.jpg)

---
## 💾 Desarrollo Técnico
### Vulnerabilidades explotadas

El ataque a Maersk se originó por el uso del software contable MeDoc, el cual fue comprometido en su cadena de suministro y distribuyó una actualización maliciosa de forma legítima. Una vez dentro de la red corporativa, NotPetya explotó la vulnerabilidad **EternalBlue** (SMBv1) y utilizó credenciales robadas en memoria para propagarse lateralmente.

A diferencia del ransomware tradicional, el malware fue diseñado como un wiper, sobrescribiendo el **MBR (Master Boot Record)** de los sistemas, lo que hizo imposible la recuperación de la información incluso pagando el rescate.

### Impacto Económico

El impacto económico estimado para Maersk fue de **250 a 300 millones de dólares**, resultado de la interrupción global de:

- Operaciones portuarias

- Sistemas de reservas

- Plataformas logísticas

- Servicios de correo corporativo

La empresa tuvo que reinstalar miles de servidores y estaciones de trabajo, además de enfrentar costos elevados por recuperación tecnológica y pérdidas operativas.

### Impacto en el Modelo CIA

| :-: | :- |
|<p>**Confidencialidad**</p>|<p>Comprometida por la posible filtración de credenciales y datos internos durante la propagación</p>|
|**Integridad**|<p>Gravemente afectada al sobrescribirse sistemas, discos y estructuras de arranque</p>|
|**Disponibilidad**|<p>Servicios críticos quedaron inoperables durante varios días a nivel global</p>|

| :--- | :--- |

|**Tabla**|**Propósito principal**|**Ejemplo de uso**|
| :- | :- | :- |
|**FILTER**|*Filtrar paquetes*|*Bloqueo al tráfico excepto SSH*|
|**NAT**|*Traducir direcciones*|*Varios dispositivos comparten una IP pública*|
|**MANGLE**|*Modificar paquetes*|*Marcar un paquete como alta prioridad* |

---
## 💾 Material Multimedia
### Video explicativo – NotPetya (YouTube)
<iframe width="560" height="315" src="https://www.youtube.com/embed/7EGfxPa4nmg" title="NotPetya Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

### Documental – Sandworm relacion a NotPetya (YouTube)
</iframe> <br/> <iframe width="560" height="315" src="https://www.youtube.com/embed/aEtyzIPAwCo" title="NotPetya Maersk Case Study" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>

---
## 💾 Reflexión

El impacto causado por el malware NotPetya evidencia el alto riesgo de confiar en sistemas de terceros para funciones críticas dentro de una organización. En este caso, el software MeDoc actuó como el principal vector de propagación, afectando a todas las empresas y organismos que lo utilizaban de forma legítima.

Este incidente deja claro que la seguridad informática no depende únicamente de reforzar los servicios internos, sino también de evaluar cuidadosamente qué software se utiliza y bajo qué condiciones. De poco sirve implementar firewalls robustos o controles avanzados si, al instalar una aplicación de un proveedor mal asegurado, se le otorgan privilegios suficientes para comprometer toda la infraestructura.

---
## 💾 PDF
<embed 
  src="/assets/images/docs_P1/act01-Equipo01.pdf" 
  type="application/pdf" 
  width="100%" 
  height="600px"
/>

---
## 💾 Referencias

* CNBC. (2017). Maersk says NotPetya cyberattack could cost $300 million.
https://www.cnbc.com/2017/08/16/maersk-says-notpetya-cyberattack-could-cost-300-million.html

* Computer Weekly. (2017). NotPetya attack cost up to $300m, says Maersk.
https://www.computerweekly.com/news/450424559/NotPetya-attack-cost-up-to-300m-says-Maersk

* Cyber Peace Institute. (2018). The Untold Story of NotPetya.
https://cyber-peace.org/wp-content/uploads/2018/10/The-Untold-Story-of-NotPetya-the-Most-Devastating-Cyberattack-in-History-_-WIRED.pdf

* EJIL: Talk! (2017). The NotPetya cyber operation as a case study of international law.
https://www.ejiltalk.org/the-notpetya-cyber-operation-as-a-case-study-of-international-law/

* U.S. Department of the Treasury. (2018). Treasury sanctions Russian FSB enablers.
https://home.treasury.gov/news/press-releases/sm0410
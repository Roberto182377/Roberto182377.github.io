---
title: "Actividad 09 - Red Team Report: Pentesting de My File Server 1"
description: "Informe de resultados de la prueba de penetración realizada sobre My File Server 1."
date: "2026-03-20"
readTime: ""
image: "/assets/images/posts/img_Act08_portada.png"
slug: "act09-182377"
---


## 📄 Resumen Ejecutivo
Este informe presenta los resultados de una prueba de penetración realizada sobre el sistema **My File Server 1**, con el objetivo de evaluar su nivel de exposición ante posibles ataques y determinar los riesgos que podrían afectar la seguridad de la información.

Durante la evaluación se identificaron diversas debilidades relacionadas con configuraciones inseguras de servicios, exposición de credenciales y uso de software desactualizado. Estas vulnerabilidades permitieron que un atacante obtuviera acceso inicial al sistema y posteriormente lograra escalar privilegios hasta alcanzar control total del servidor.

---

## 🎯 Alcance (Scope)
El alcance de esta prueba de penetración incluyó la evaluación de seguridad de la máquina virtual **My File Server 1**, desplegada dentro de un entorno de laboratorio controlado.

* **Host Objetivo**: 192.168.56.104
* **Servicios Analizados**: FTP, SMB, HTTP y SSH.

---

## 🛠 Metodología Aplicada
Se utilizó como referencia la metodología **Penetration Testing Execution Standard (PTES)**, la cual establece un proceso estructurado para evaluar la seguridad de sistemas informáticos:

| Fase | Descripción |
| :--- | :--- |
| **Reconocimiento** | Identificación de direcciones IP, servicios expuestos y puntos de entrada. |
| **Enumeración** | Escaneo de puertos y servicios para identificar aplicaciones expuestas. |
| **Análisis de Vulnerabilidades** | Análisis de configuraciones inseguras y vulnerabilidades conocidas. |
| **Explotación** | Pruebas controladas para obtener acceso al sistema o información sensible. |
| **Análisis de Impacto** | Evaluación de riesgos utilizando el modelo **CIA (Confidencialidad, Integridad, Disponibilidad)**. |

---

## 🔍 Pentesting Aplicado (Walkthrough)

### 1. Fase de Reconocimiento
Se utilizó `netdiscover` para localizar el objetivo y `nmap` para detectar servicios abiertos.
* **Resultados destacados**: Puertos FTP (21, 2121), SSH (22), HTTP (80), SMB (445) abiertos.

### 2. Fase de Enumeración
* **SMB**: Se utilizó `smbmap` para enumerar recursos compartidos (acceso NULL SESSION).
* **HTTP**: Se utilizó `Nikto` para analizar el servidor web, detectando el archivo expuesto `readme.txt`.

### 3. Fase de Explotación
* El archivo `readme.txt` reveló la contraseña: `rootroot1`.
* Con estas credenciales, se accedió al servicio FTP, se creó el directorio `.ssh` y se cargó una clave pública (`authorized_keys`) para habilitar acceso SSH.
* Se obtuvo acceso a la shell del servidor mediante `ssh smbuser@192.168.56.104`.

### 4. Post-Explotación (Escalada de Privilegios)
* Se identificó una versión vulnerable del kernel (`Dirty COW`, CVE-2016-5195).
* Se compiló y ejecutó el exploit `dirtycow.c`, logrando acceso como usuario **root**.

---

## 📊 Análisis de Impacto (Modelo CIA)
* **Confidencialidad**: Comprometida debido al acceso no autorizado mediante credenciales expuestas.
* **Integridad**: Comprometida al tener la capacidad de modificar archivos críticos tras escalar a privilegios de root.
* **Disponibilidad**: Riesgo alto, ya que un atacante con privilegios de root puede detener servicios o borrar datos esenciales.

---

## 📋 Tabla de Hallazgos

| ID | Vulnerabilidad | Severidad | Impacto |
| :--- | :--- | :--- | :--- |
| 1 | Acceso FTP anónimo | Alta | Acceso no autorizado a archivos. |
| 2 | Exposición de credenciales | Crítica | Acceso total al sistema. |
| 3 | Permisos inseguros en FTP | Alta | Persistencia mediante claves SSH. |
| 5 | Kernel vulnerable (Dirty COW) | Crítica | Escalación de privilegios a root. |

---

## 💡 Recomendaciones Estratégicas
1. **Corto Plazo (0-30 días)**: Parchear el kernel (Dirty COW), rotar credenciales expuestas y deshabilitar FTP anónimo.
2. **Mediano Plazo (30-60 días)**: Endurecer configuración de SSH/SMB e implementar monitoreo de integridad de archivos.
3. **Largo Plazo (60-90 días)**: Realizar pruebas de penetración de seguimiento y establecer política formal de gestión de secretos.

---
## 💾 Integrantes
* Aguilar Carrizales Miguel Ángel
* Aznar Cuevas Luis Eduardo
* Beltrán Reyna David
* Gómez Arreguin Donaldo Demián
* Morales Hernández Roberto Emiliano
* Rosales Ramírez Josué Emiliano

---
## 📚 Referencias
* ¿Qué es la tríada CIA? https://www.kiteworks.com/es/glosario-riesgo cumplimiento/cia triad/
* Eyal, K. (2024). ¿Qué es el exploit Dirty COW y cómo prevenirlo?
* Teaganne Finn. (s.f.). Metodologías y estándares de pruebas de penetración. IBM.
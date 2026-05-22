---
title: "Actividad 11 - Red Team Report: Pentesting de Napping101"
description: "Informe de resultados de la prueba de penetración realizada sobre el sistema Napping101."
date: "2026-03-22"
readTime: ""
image: "/assets/images/posts/portadad_act11.jpg"
slug: "act11-182377"
---


## 📄 Resumen Ejecutivo
Este informe detalla las actividades y hallazgos obtenidos durante la prueba de penetración realizada al sistema **Napping101**. El objetivo fue evaluar la seguridad de la aplicación frente a ataques de cliente y escalada de privilegios local.

Durante el análisis, se identificaron vulnerabilidades críticas que permitieron la ejecución de vectores de ataque como **Reverse Tabnabbing**, además de la explotación de configuraciones permisivas que facilitaron la escalada de privilegios. Se han definido recomendaciones estratégicas para mitigar estos riesgos y mejorar la postura de seguridad global.

---

## 🎯 Alcance (Scope)
El alcance de esta evaluación se limitó al entorno de laboratorio controlado que hospeda la máquina virtual **Napping101**, enfocándose en la superficie de ataque expuesta mediante servicios web y configuraciones del sistema operativo.

---

## 🛠 Metodología Aplicada
Se siguió un enfoque estructurado basado en fases estándar de la industria (PTES):

| Fase | Descripción |
| :--- | :--- |
| **Reconocimiento** | Mapeo de la infraestructura y servicios disponibles. |
| **Enumeración** | Análisis detallado de servicios, usuarios y puntos de entrada (web). |
| **Explotación** | Ejecución controlada de exploits (e.g., Reverse Tabnabbing). |
| **Post-Explotación** | Escalada de privilegios y análisis de persistencia. |

---

## 🔍 Pentesting Aplicado (Walkthrough)

### 1. Fase de Reconocimiento y Enumeración
Se realizó un escaneo inicial identificando servicios web vulnerables. La enumeración permitió detectar vectores de ataque relacionados con la interacción del usuario y la configuración del servidor web.

### 2. Fase de Explotación
* **Vulnerabilidad principal**: **Reverse Tabnabbing**. Se identificó que los enlaces con `target="_blank"` no contaban con las protecciones `rel="noopener noreferrer"`.
* **Impacto**: Esta vulnerabilidad permite que una página abierta en una nueva pestaña pueda redirigir la página original a un sitio malicioso, comprometiendo la sesión del usuario.

### 3. Escalada de Privilegios
* Se identificaron configuraciones inseguras que permitían la ejecución de comandos con privilegios elevados (`sudo`).
* Se logró comprometer la cuenta de usuario `daniel` y escalar privilegios aprovechando binarios mal configurados.

---

## 📊 Análisis de Impacto (Modelo CIA)
* **Confidencialidad**: Comprometida al exponer tokens de sesión y credenciales.
* **Integridad**: Riesgo crítico; un atacante puede modificar la navegación del usuario o alterar archivos del sistema.
* **Disponibilidad**: Potencialmente afectada mediante la modificación de configuraciones críticas del sistema.

---

## 💡 Recomendaciones Estratégicas
1. **Corto Plazo (0-30 días)**: Implementar `rel="noopener noreferrer"` en todos los enlaces externos y realizar una rotación obligatoria de credenciales.
2. **Mediano Plazo (30-60 días)**: Establecer programas de capacitación en "Desarrollo Seguro" para mitigar vulnerabilidades frontend.
3. **Largo Plazo (60-90 días)**: Implementar una solución de monitoreo de logs (**SIEM**) para alertar sobre actividades anómalas (creación de cuentas, uso indebido de `sudo`).

---

## 💾 Integrantes
* Aguilar Carrizales Miguel Ángel - 182318
* Aznar Cuevas Luis Eduardo - 179880
* Beltrán Reyna David - 183636
* Gómez Arreguin Donaldo Demián - 179822
* Morales Hernández Roberto Emiliano - 182377
* Rosales Ramírez Josué Emiliano - 181760

---
## 📚 Referencias
* OWASP (s.f.). *Reverse Tabnabbing*. https://owasp.org/www-community/attacks/Reverse_Tabnabbing
* NIST (2024). *Guide to Penetration Testing*.
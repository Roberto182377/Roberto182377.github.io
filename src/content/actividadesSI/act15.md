---
title: "Actividad 15 - Red Team Report: Social Engineer Toolkit (SET)"
description: "Informe de resultados de la simulación de ataque de ingeniería social utilizando SET (Social Engineer Toolkit)."
date: "2026-04-05"
readTime: ""
image: "/assets/images/posts/portadad_act15.png"
slug: "red-team-report-social-engineer-toolkit"
---

## 📄 Resumen Ejecutivo
Este documento detalla la ejecución de una simulación de ataque de ingeniería social realizada en un entorno controlado utilizando el **Social Engineer Toolkit (SET)**. El objetivo principal fue evaluar la efectividad de las defensas perimetrales contra el correo no deseado y medir la capacidad de respuesta y sensibilización de los usuarios ante vectores de *phishing* y *credential harvesting*.

La evaluación demostró vulnerabilidades significativas en la validación de origen de correos electrónicos y en la detección de *payloads* de captura de credenciales.

---

## 🎯 Objetivos
* Evaluar la resiliencia de la organización ante ataques de *spear-phishing*.
* Analizar la eficacia de los filtros antispam del Gateway de correo.
* Identificar la necesidad de implementar controles técnicos (SPF, DKIM, DMARC) y factores de autenticación (MFA).

---

## 🛠 Metodología Aplicada
La prueba se llevó a cabo siguiendo una metodología de evaluación de seguridad física y técnica:

| Fase | Descripción |
| :--- | :--- |
| **Reconocimiento** | Identificación de objetivos y configuración del entorno de ataque (SET). |
| **Generación de Vector** | Creación de una campaña de *phishing* simulada para captura de credenciales. |
| **Ejecución** | Envío de correos electrónicos suplantando identidades autorizadas. |
| **Análisis de Resultados** | Evaluación de cuántos usuarios interactuaron con el vector de ataque. |

---

## 🔍 Resultados y Hallazgos Técnicos

### Vulnerabilidades Técnicas Explotadas
* **Falta de registros Anti-Spoofing**: La ausencia de registros **SPF**, **DKIM** y **DMARC** en el dominio permitió que el servidor *Postfix* suplantara identidades sin ser bloqueado.
* **Debilidad en el Gateway**: Los filtros de contenido no detectaron patrones de *Credential Harvesting* en el HTML enviado.

---

## 📊 Análisis de Impacto (Modelo CIA)
* **Confidencialidad (Alta)**: Compromiso total de cuentas institucionales, permitiendo el acceso a información privada y bases de datos.
* **Integridad (Media)**: Riesgo de ataques *Man-in-the-Middle* o alteración de registros financieros tras el acceso inicial.
* **Probabilidad**: Alta, dada la disponibilidad de herramientas automatizadas (SET) que reducen la barrera técnica.

---

## 💡 Recomendaciones de Mitigación

| Tipo de Control | Medida a implementar |
| :--- | :--- |
| **Técnicos** | Configurar registros **SPF/DKIM/DMARC** y activar filtros de reputación en el Gateway. |
| **Autenticación** | Desplegar **MFA (Autenticación de Múltiples Factores)** obligatoria. |
| **Administrativos** | Realizar simulacros periódicos y programas de capacitación constante. |

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
* TrustedSec. (s.f.). *Social-Engineer Toolkit (SET)*. https://github.com/trustedsec/social-engineer-toolkit
* NIST (2024). *Special Publication 800-63: Digital Identity Guidelines*.
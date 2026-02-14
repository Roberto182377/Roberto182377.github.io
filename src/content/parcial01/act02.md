---
title: "Actividad 02 - Análisis de servicios de seguridad (X.800 y RFC 4949)"
description: "Haciendo uso del modelo ITU-T X.800 y apoyado del lenguaje técnico del glosario RFC4949 (Internet Security Glossary), partiendo de estas bases se presentan 10 escenarios"
date: "2026-01-27"
readTime: ""
image: "/assets/images/posts/post2.jpg"
slug: "act02-182377"
---
<div align="right" style="margin-bottom: 1rem;">
  📄PDF Actividad II <a href="/assets/images/docs_P1/182377-act02.pdf">Descargar PDF</a>
</div>

## ANÁLISIS DE SERVICIOS DE SEGURIDAD

### Introducción

Al realizar un análisis en la índole de la ciberseguridad, es necesario el emplear normativas y estándares ya preestablecidos, entrando en juego el ITU-T X.800 el cual proporciona un modelo fundamental al definir los servicios de seguridad (autenticación, control de acceso, confidencialidad, integridad, no repudio y disponibilidad), sirviendo como base que nos permite identificar que cosas se ven comprometidas en la seguridad.

De misma manera el RFC 4949 (Internet Security Glossary), establece un glosario técnico que permite dar una mayor idea de la conceptualización a la hora de describir el caso que se presenta, un documento de apoyo, esencial para comprender el contexto que se llegue a presentar.

### Análisis de Casos

|***CASO***|***Servicios X.800 comprometidos***|***Definición(es) aplicable(s) RFC 4949.***|***Tipo de amenaza***|***Vector de ataque***|***Impacto técnico / operativo***|***Medida de control recomendada***|
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|***01***|<p>- Confidencialidad</p><p>- Integridad</p><p>- Disponibilidad</p><p>- Control de acceso.</p>|<p>- **Ransomware**: tipo de malware que cifra datos para exigir un rescate.</p><p>- **Data Breach**: divulgación no autorizada de información sensible.</p><p>- **Multi-stage** **attack**: ataque ejecutado en múltiples fases con distintos objetivos.</p><p>- **Availability Attack**: ataque que degrada o impide el acceso a sistemas o datos.</p>|Externa|Acceso inicial no autorizado|<p>- Cifrado dentro de los servidores</p><p>- Pérdida total de disponibilidad</p><p>- Exposición de información sensible</p><p>- Daño de reputación y legal</p>|<p>- Implementación de backups inmutables y offline</p><p>- Monitoreo continuo</p><p>- Segmentación de la red</p>|
|***02***|<p>- Confidencialidad</p><p>- Control de acceso</p>|<p>- **Misconfiguration**: configuración incorrecta de un sistema que expone recursos.</p><p>- **Exposure**: condición en la que la información queda accesible sin autorización.</p><p></p>|No intencional |Acceso público directo a servicios|<p>- Pérdida de confidencialidad de los datos</p><p>- Riesgos legales y regulatorios</p><p>- Daño de reputación</p>|<p>- Auditorías Periódicas De Configuración</p><p>- Validaciones Automáticas De Seguridad En La Nube.</p><p>- Controles De Acceso Por Defecto</p>|
|***03***|<p>- Integridad</p><p>- Confidencialidad Control de acceso</p>|<p>- **Supply Chain Attack:** ataque que compromete componentes confiables para distribuir código malicioso</p><p>- **Relationship Abuse:** uso indebido de relaciones de confianza entre sistemas.</p>|Externa|<p>Actualización de software de un proveedor confiable</p><p>(similar al caso NotPetya - 2017)</p>|<p>- Compromiso masivo de sistemas</p><p>- Pérdida de confianza en el proveedor</p>|<p>- Verificación de integridad después de instalación</p><p>- Segmentación de privilegios de aplicaciones</p>|
|***04***|<p>- Autenticación</p><p>- Control de acceso</p>|<p>- **Credential Compromise**: obtención no autorizada de credenciales válidas.</p><p>- **Phishing**: técnica de ingeniería social para robar información de autenticación.</p><p>- **Authentication Failure**: fallo del servicio de autenticación pese a su correcto funcionamiento técnico.</p>|Externa|Campañas de phishing dirigidas a usuarios|<p>- Acceso prolongado no autorizado</p><p>- Riesgo de escalamiento de privilegio</p>|<p>- Monitoreo de comportamiento de usuario</p><p>- Detección de accesos anómalos</p><p>- Concientización en seguridad.</p>|
|***05***|<p>Disponibilidad</p><p>Integridad</p>|<p>- **Data Destruction:** eliminación o daño deliberado de datos.</p><p>- **Availability Attack:** acción destinada a impedir el acceso legítimo a sistemas o información.</p>|Externa|Ejecución de ransomware con acceso previo|<p>- Interrupción prolongada de operaciones</p><p>- Dependencia de reconstrucción en los sistemas.</p>|<p>- Implementación de respaldos offline</p><p>- pruebas periódicas de recuperación.</p>|
|***06***|Confidencialidad, Control de acceso|<p>- **Insider** Threat: amenaza originada por una entidad interna con acceso legítimo.</p><p>- **Data** **Leakage**: divulgación no autorizada de información sensible.</p><p>- **Authorization** **Failure**: asignación inadecuada de privilegios.</p>|Interna|Uso indebido de accesos legítimo|<p>- Pérdida de información sensible</p><p>- Consecuencias legales y reputacionales</p><p>- Deterioro de la confianza empresarial</p>|<p>- Aplicación del principio de mínimo privilegio</p><p>- monitoreo de actividades internas</p><p>- auditorías periódicas</p>|
|***07***|<p>Integridad</p><p>No repudio</p>|<p>- **Evidentiary** **Integrity**: preservación de la validez probatoria de los datos.</p><p>- **Audit** **Trail**: registros que permiten reconstruir eventos de seguridad.</p><p>- **Data** **Modification**: alteración no autorizada de información.</p>|Externa|Manipulación directa de registros del sistema|<p>- Imposibilidad de reconstruir la secuencia de eventos</p><p>- Pérdida de evidencia digital </p><p>- Problemas en las investigaciones legales y forenses.</p>|<p>- centralización de registros</p><p>- Controles de integridad</p><p>- monitoreo continuo.</p>|
|***08***|Disponibilidad|<p>- Operational Failure: falla causada por errores internos en procesos o ejecución.</p><p>- Service Outage: interrupción no planificada de un servicio.</p>|No intencional|Actualización de software mal ejecutada|<p>- Interrupción masiva de servicios</p><p>- Afectación a operaciones críticas</p><p>- Pérdida de confianza en la estabilidad</p>|<p>- Pruebas previas en entornos controlados</p><p>- planes de rollback</p>|
|***09***|<p>Autenticación</p><p>Confidencialidad</p>|<p>- **Masquerade**: suplantación de identidad de una entidad legítima. </p><p>- **Social** **Engineering**: manipulación de usuarios para eludir controles técnicos.</p>|Externa|Correos electrónicos fraudulentos y sitios web falsos|<p>- Compromiso de credenciales e información personal</p><p>- riesgo de accesos no autorizados posteriores</p>|<p>- Autenticación fuerte</p><p>- concientización de usuarios</p><p>- monitoreo de dominios fraudulentos.</p>|
|***10***|<p>Confidencialidad</p><p>Integridad</p><p>Disponibilidad</p>|<p>- **Destructive** **Attack**: ataque cuyo objetivo es causar daño irreversible.</p><p>- **Data** **Exfiltration**: extracción no autorizada de información.</p><p>- **Data** **Destruction**: eliminación deliberada de datos y sistemas.</p>|Externa|Acciones destructivas ejecutadas tras acceso no autorizado|<p>- Pérdida total de información y sistemas</p><p>- Imposibilidad de recuperación </p><p>- consecuencias operativas extremas</p>|<p>- Detección temprana</p><p>- segmentación de red</p><p>- controles de acceso estrictos</p><p>- respaldos inmutables</p>|

### Conclusiones

Como podemos observar existe un sin número de posibilidades en las que un sistema se ve vulnerado, no solo por atacantes/ amenazas externas, si no, que incluso pueden ser no intencionales dentro de un mismo equipo, por lo que tener un enfoque y conciencia de las probables consecuencias existentes en estos ciberataques o problemas que pueden ocurrir es esencial para mantener los servicios de seguridad existentes, e incluso la base de la ciberseguridad, el modelo CIA (Confiabilidad, Integridad y Disponibilidad).

### Referencias

- ITU-T. (1991). Recommendation X.800: Security Architecture for Open Systems Interconnection. International Telecommunication Union.
- IETF. (2007). RFC 4949 – Internet Security Glossary, Version 2. <https://datatracker.ietf.org/doc/html/rfc4949>




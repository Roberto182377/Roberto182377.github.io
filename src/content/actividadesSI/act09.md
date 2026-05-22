---
title: "Actividad 09 - Red Team Report: Pentesting de My File Server 1"
description: "Evaluación de seguridad explotando servicios FTP anónimos, SSH y vulnerabilidad del Kernel (Dirty COW)."
date: "2026-03-10"
readTime: ""
image: "/assets/images/posts/img_Act09_portada.jpg"
slug: "act09-182377"
---

<div align="right">
  <a href="/assets/images/docs_P1/182377-act09.pdf" download>
    📄Descargar Reporte Completo (PDF)
  </a>
</div>

---
## 💾 Introducción

Este informe detalla una prueba de penetración sobre la máquina **My File Server 1**. La evaluación demostró debilidades críticas en configuraciones de servicios básicos y sistemas desactualizados. 

A través del acceso a un FTP anónimo, la exposición de credenciales y la inyección de llaves públicas SSH, se logró el acceso inicial. Finalmente, la falta de actualizaciones en el sistema operativo permitió escalar privilegios mediante el exploit **Dirty COW** (CVE-2016-5195), logrando el control total del servidor.

---

## 💾 Desarrollo Técnico: Walkthrough

### 1. Reconocimiento y Enumeración
1. **Descubrimiento de Red:** Con `netdiscover` se localizó la IP de la máquina víctima (`192.168.56.104`).
2. **Escaneo de Puertos:** ```bash
   nmap -sC -sV -p- 192.168.56.104
Resultados identificados: FTP (21, 2121), SSH (22), HTTP (80), SMB (445).3. Análisis Web: Al inspeccionar el puerto 80 con nikto, detectamos un archivo de texto sensible expuesto:Bash# Hallazgo: /readme.txt
# Contenido: "This might be interesting"
2. Fase de ExplotaciónAl acceder a http://192.168.56.104/readme.txt, encontramos una contraseña en texto plano: rootroot1.Acceso FTP: Con las credenciales obtenidas (smbuser : rootroot1), aprovechamos la configuración permisiva del servidor FTP para inyectar nuestra clave pública SSH en el directorio .ssh del usuario, permitiendo así acceso remoto autenticado.Acceso SSH:Bashssh smbuser@192.168.56.104
3. Post-Explotación (Escalada a Root)Tras enumerar el sistema, verificamos la versión del Kernel:Bashuname -a
# Salida: Linux fileserver 3.10.0-229.el7.x86_64
Detectamos que esta versión es vulnerable al exploit Dirty COW (CVE-2016-5195), el cual aprovecha una Race Condition en el kernel de Linux.Transferencia del exploit: Levantamos un servidor HTTP local y transferimos el código fuente a la máquina víctima.Compilación y Ejecución:Bashgcc dirtycow.c -o exploit -pthread
./exploit
Resultado: Se obtuvo una shell con privilegios de root instantáneamente.

## 💾 Análisis de Impacto y Riesgos
VulnerabilidadSeveridadImpactoExposición WebCríticaFuga de credenciales en texto plano.Configuración FTPAltaEscritura arbitraria de archivos (Inyección).Kernel VulnerableCríticaCompromiso total del sistema (Root).💾 Conclusiones y RecomendacionesLa explotación de My File Server 1 ejemplifica la importancia del Hardening de servidores.Mitigación inmediata: Deshabilitar el acceso FTP anónimo, eliminar archivos de configuración expuestos y aplicar parches críticos de Kernel (yum update).Mejora continua: Implementar un sistema de monitoreo de integridad de archivos y establecer una política formal de gestión de secretos y contraseñas.💾 Galería de Evidencias💾 PDF de la Actividad
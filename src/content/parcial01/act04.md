---
title: "Actividad 04 -  Mecanismos de defensa en red"
description: "Emplear IPTables en una topología de red buscando cumplir la funcion sitada"
date: "2026-02-04"
readTime: ""
image: "/assets/images/posts/img_Act04_portada.jpg"
slug: "act04-182377"
---

<div align="right">
  <a href="/assets/images/docs_P1/182377-act04.pdf" download>
    📄Descargar PDF
  </a>
</div>

---
## 💾 Introducción

La seguridad en redes informáticas depende en gran medida de la correcta definición de políticas de filtrado que regulen el tráfico entre redes internas y externas. Un firewall correctamente configurado permite controlar qué servicios pueden comunicarse, desde dónde y bajo qué condiciones, reduciendo significativamente la superficie de ataque de una infraestructura.

En esta actividad se analiza una topología de red compuesta por una red local, un firewall perimetral y acceso a Internet, con servidores internos de correo y web. A partir de esta arquitectura, se definen reglas de iptables que aplican principios fundamentales de seguridad como política restrictiva, control de estados de conexión y filtrado por protocolo, dirección IP y puertos.

---

## 💾 Desarrollo Técnico
### Firewall e IPTables
 Los firewalls crean una barrera entre una red de confianza y una red no fiable, esto funciona al establer reglas que regulan el tráfico autorizado y el que está bloqueado. Por lo que en Linux el firewall utilitario desarrollado es iptables..

  Siendo una potente herramienta de cortafuegos (firewall) basada en reglas para sistemas Linux, encargada de filtrar, bloquear o permitir el tráfico de red. Funciona a nivel de núcleo (kernel) mediante el módulo Netfilter, controlando paquetes entrantes, salientes y de reenvío, siendo esencial para la seguridad perimetral y la gestión de la traducción de direcciones de red (NAT). 

### IPV4 e IPV6
Iptables se usa para IPv4 e ip6tables para IPv6 . Tanto iptables como ip6tables comparten la misma sintaxis, pero algunas opciones son específicas de IPv4 o IPv6.

  Si el paquete IP llega al final de una cadena integrada, incluida una cadena vacía, entonces el objetivo de la política de la cadena determina el destino final del paquete IP. iptables es la utilidad de usuario que le permite trabajar con estas cadenas/reglas (tabla, cadena, reglas, masinformacion en la actividad pasada).


### Ejemplo de uso
* Permitir la conectividad de un servidor de paquetes entrantes solamente a los puertos 80/TCP y 443/TCP (Servidor Web) y por otro lado restringiendo el acceso de todos los paquetes entrantes al puerto 22/TCP (Donde se encuentra el servicio SSH) excepto para una dirección IP determinada (que puede ser una maquina de administración remota)
  1. En primera instancia, Limpiar todas las reglas actualmente establecidas en el servidor:
  ```
  iptables -F
  iptables -X
  ```
  2. Establecer la política de filtros, para Denegar por defecto todo
  ```
  iptables -P INPUT DROP
  iptables -P OUTPUT DROP
  iptables -P FORWARD DROP
  ```
  3. Aceptar todas las peticiones entrantes por HTTP al servidor web por el puerto 80 desde cualquier sitio
  ```
  iptables -A INPUT -p tcp -s 0/0 –sport 1024:65535 -d 192.168.1.33 –dport 80 -m state –state NEW,ESTABLISHED -j ACCEPT
  ```
  4. Aceptar todas las respuestas salientes por HTTP desde el servidor web por el puerto 80 a cualquier sitio
  ```
  iptables -A OUTPUT -p tcp -s 192.168.1.33 –sport 80 -d 0/0 –dport 1024:65535 -m state –state ESTABLISHED -j ACCEPT
  ```
  5. Aceptar todas las peticiones entrantes por HTTPS al servidor web por el puerto 443 desde cualquier sitio
  ```
  iptables -A INPUT -p TCP -s 0/0 –sport 1024:65535 -d 192.168.1.33 –dport 443 -m state –state NEW,ESTABLISHED -j ACCEPT
  ```
  6. Aceptar todas las respuestas salientes por HTTPS desde el servidor web por el puerto 443 a cualquier sitio
  ```
  iptables -A OUTPUT -p tcp -s 192.168.1.33 –sport 443 -d 0/0 –dport 1024:65535 -m state –state ESTABLISHED -j ACCEPT
  ```
  7. Aceptar conexiones entrantes SSH SOLAMENTE desde la dirección IP de administración (192.168.1.34) al servidor web en el puerto 22 TCP
  ```
  iptables -A INPUT -p tcp -s 192.168.1.34 –sport 1024:65535 -d 192.168.1.33 –dport 22 -m state –state NEW,ESTABLISHED -j ACCEPT
  ```
  8. Aceptar todo el trafico SSH saliente SOLAMENTE desde el servidor web en el puerto 22/TCP la dirección IP de administración
  ```
  iptables -A OUTPUT -p tcp -s 192.168.1.33 –sport 22 -d 192.168.1.34 –dport 1024:65535 -m state –state ESTABLISHED -j ACCEPT
  ```
  9. Finalmente, de forma explicita definir que todo el trafico entrante y/o saliente que no coincida con los criterios anteriormente declarados, deben ser borrados
  ```
  iptables -A INPUT -j DROP
  iptables -A OUTPUT -j DROP
  ```
Esta configuración se enfoca, principalmente en la capa de enlace y de transporte sobre el protocolo TCP/IP, permitiendo solamente aquellos paquetes interesantes y descartando cualquier otro tipo de paquete, de esta forma las peticiones y respuestas viajan de forma “segura” desde y hacia el servidor web.

---

## 💾 Material Multimedia

### Visualización de IPTables Firewall en sistemas Linux
![Act 04.1](/assets/images/posts/firewall-en-linux-2.jpg)

### Aplicación práctica de IPTables en una topología controlada
</iframe> <br/> <iframe width="560" height="315" src="https://youtu.be/NsSr7ajQqYE?si=7qJhJhjpAuFux7VX" title="NotPetya Maersk Case Study" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>

---

## 💾 Reflexión

El diseño de reglas de iptables basado en una política restrictiva demuestra la importancia de permitir solo lo estrictamente necesario, en lugar de confiar en configuraciones permisivas. El uso del seguimiento de estados de conexión mejora tanto la seguridad como el rendimiento del firewall, evitando reglas redundantes y bloqueos innecesarios.

---

## 💾 PDF
<embed 
  src="/assets/images/docs_P1/182377-act04.pdf" 
  type="application/pdf" 
  width="100%" 
  height="600px"
/>

---

## 💾 Referencias
* Arch Linux (s.f.), Iptables. https://wiki-archlinux-org.translate.goog/title/Iptables?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc
* Cloud (Diciembre, 2024). Configurar el firewall de Linux con iptables, https://help.ovhcloud.com/csm/es-dedicated-servers-firewall-iptables?id=kb_article_view&sysparm_article=KB0043437
* Sánchez J. (Abril, 2016). Linux: Tutorial IPTABLES - Un firewall fiable - Capítulo 1, https://www.sysadmit.com/2016/04/linux-tutorial-iptables-un-firewall-fiable-Capitulo-1.html
* Servando L. (s.f.), CNO V: Seguridad Informática, <a href="/assets/images/actividades_presentaciones_P1/S02-UPSLP_SI2026-v01-NUEVA VERSION.pdf">Presentación CNO V: Seguridad Informática</a>
* The Hacker Way (Mayo, 2011). Definiendo reglas IPTables para un Servidor Web, https://thehackerway.es/2011/05/05/definiendo-reglas-iptables-para-un-servidor-web/

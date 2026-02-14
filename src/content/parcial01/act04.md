---
title: "Actividad 04 -  Mecanismos de defensa en red"
description: "Brindar el comando corrcto para cumplir la funcion sitada"
date: "2026-02-04"
readTime: ""
image: "/assets/images/posts/post1.jpg"
slug: "act04-182377"
---
<div align="right" style="margin-bottom: 1rem;">
  <a href="/assets/images/docs_P1/182377-act04.pdf">📄PDF Actividad IV</a>
</div>

## MECANISMO DE DEFENSA EN RED

### Introducción

La seguridad en redes informáticas depende en gran medida de la correcta definición de políticas de filtrado que regulen el tráfico entre redes internas y externas. Un firewall correctamente configurado permite controlar qué servicios pueden comunicarse, desde dónde y bajo qué condiciones, reduciendo significativamente la superficie de ataque de una infraestructura.

En esta actividad se analiza una topología de red compuesta por una red local, un firewall perimetral y acceso a Internet, con servidores internos de correo y web. A partir de esta arquitectura, se definen reglas de iptables que aplican principios fundamentales de seguridad como política restrictiva, control de estados de conexión y filtrado por protocolo, dirección IP y puertos.

### Ejercicio
Teniendo en cuenta la topología de red mostrada completa la tabla con las reglas de iptables que deberían aplicarse en el Firewall para llevar a cabo las acciones solicitadas. Las reglas, siempre que sea posible, deben determinar protocolo, dirección IP origen y destino, puerto/s origen y destino y el estado de la conexión. 

![Act 04](/assets/images/posts/act04_img.png)

|**regla** |**COMANDO** |
| - | - |
|**1. Establecer una política restrictiva.** |<code>iptables -A INPUT -j DROP</code> |
|**2. Permitir el tráfico de conexiones ya establecidas** |`iptables -A INPUT -p tcp -m state ESTABLISHED -j ACCEPT`: |
|**3. Aceptar tráfico DNS (TCP) saliente de la red local** |`iptables -A OUTPUT -p tcp --sport 53 -j ACCEPT`: |
|**4. Aceptar correo entrante proveniente de Internet en el servidor de correo** |`iptables -A INTPUT -p tcp -s 192.1.2.10 -d 0.0.0.0 -- -j ACCEPT`: |
|**5. Permitir correo saliente a Internet desde el servidor de correo** |`iptables -A OUTPUT -p tcp -s 192.1.2.10 -j ACCEPT`: |
|**6. Aceptar conexiones HTTP desde Internet a nuestro servidor web** |`iptables -A INPUT -p tcp --dport 80 -d 192.1.2.11 -s 0.0.0.0 -j ACCEPT`: |
|**7. Permitir tráfico HTTP desde la red local a Internet** |<code>iptables -A INPUT -p tcp -d 0.0.0.0-j ACCEPT</code>  |

### Conclusiones

El diseño de reglas de iptables basado en una política restrictiva demuestra la importancia de permitir solo lo estrictamente necesario, en lugar de confiar en configuraciones permisivas. El uso del seguimiento de estados de conexión mejora tanto la seguridad como el rendimiento del firewall, evitando reglas redundantes y bloqueos innecesarios.

### Referencias
- Servando L. (s.f.), CNO V: Seguridad Informática, <a href="/assets/images/actividades_presentaciones_P1/S02-UPSLP_SI2026-v01-NUEVA VERSION.pdf">Presentación CNO V: Seguridad Informática</a>
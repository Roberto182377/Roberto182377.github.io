---
title: "Actividad 06 - Implementación de IPSec VPN"
description: "Elaboración en Packet Tracer"
date: "2026-02-16"
readTime: ""
image: "/assets/images/posts/post1.jpg"
slug: "act06-182377"
---

<div align="right">
  <a href="/assets/images/docs_P1/182377-act06.pdf" download>
    📄Descargar PDF
  </a>
</div>
<div align="right">
  <a href="/assets/images/docs_P1/182377-act06.pkt" download>
    💻Descargar Topología
  </a>
</div>

---

## 💾 Introducción

El IPSec se pude definir como el "Protocolo de Internet seguro", con el cual se ayuda a mantener seguros los datos enviados a través de las redes públicas, esto al agregar cifrado y autenticación para hacer que el protocolo sea más seguro.

Un VPN (red privada virtual), es una conexión encriptada entre variso equipos, estas conexiones se efetúan en redes públicas, donde los daros que se intercambian atraves de esa red se mantienen privados al estar encriptados.

Muchas VPN (no todas), hacen uso de los protocolos IPSec al establecer y ejecutar estas conexiones privadas, ya que esta se permite la encriptacion de los paquetes IP, además de autenticar la fuente de donde proceden los paquetes.

---

## 💾 Desarrollo
### Funcionamiento de IPSec

Las conexiones IPsec incluyen los siguientes pasos:
* **Intercambio de claves**
  Se establece un intercambio de claves (necesarios para encriptar y desencriptar), entre dispositivos conectados, para que cada dispositivo pueda desencriptar los mensajes del otro.

* **Encabezados y tráileres de los paquetes**
  Los datos envíados pasan por una red de division, haciendolos trozos mas pequeños (paquetes), con una carga útil , datos reales o encabezados, información de esos datos que permita al destinatario saber  

todos los datos que se envían por una red se dividen en trozos más pequeños llamados paquetes. Los paquetes contienen tanto una carga útil, o los datos reales que se envían, como encabezados, o información sobre esos datos para que los ordenadores que reciben los paquetes sepan qué hacer con ellos. IPsec añade varios encabezados a los paquetes de datos que contienen información de autenticación y encriptación. IPsec también añade tráilers, que van después de la carga útil de cada paquete y no antes.

Autenticación: IPsec proporciona autenticación para cada paquete, como un sello de autenticidad en un artículo coleccionable. Esto garantiza que los paquetes provienen de una fuente de confianza y no de un atacante.

Encriptación: IPsec encripta las cargas útiles dentro de cada paquete y el encabezado IP de cada paquete (a menos que se utilice el modo de transporte en lugar del modo túnel, ver más abajo). Esto hace que los datos enviados a través de IPsec se mantengan seguros y privados.

Transmisión: los paquetes IPsec encriptados recorren una o más redes hasta su destino mediante el uso de un protocolo de transporte. En esta etapa, el tráfico IPsec se diferencia del tráfico IP normal en que suele utilizar UDP como protocolo de transporte, en lugar de TCP. TCP, el Protocolo de control de transmisión, establece conexiones específicas entre dispositivos y garantiza la llegada de todos los paquetes. UDP, el Protocolo de datagrama de usuarios, no establece estas conexiones específicas. IPsec utiliza UDP porque permite que los paquetes IPsec atraviesen los firewalls.

Desencriptación: en el otro extremo de la comunicación, los paquetes se desencriptan, y las aplicaciones (por ejemplo, un navegador) pueden utilizar ahora los datos entregados.

### Protocolos empleados

### Modo túnel y Modo Transorte

### Glosarrio de comandos


---

## 💾 Reflexión


---

## 💾 Referencias
* Amazon AWS (s.f.), ¿Qué es IPsec? . https://aws.amazon.com/es/what-is/ipsec/
* Cisco (Abril, 2024). Comprensión del protocolo IPsec IKEv1,
https://www.cisco.com/c/es_mx/support/docs/security-vpn/ipsec-negotiation-ikeprotocols/217432-understand-ipsec-ikev1-protocol.html#toc-hId--1746390828
* CloudFlare (s.f.), What is IPsec? | How IPsec VPNs work.
https://www.cloudflare.com/learning/network-layer/what-is-ipsec/
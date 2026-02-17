---
title: "Actividad 06 - Implementación de IPSec VPN"
description: "Creación de topología en Packet Tracer implmentando IPSec"
date: "2026-02-16"
readTime: ""
image: "/assets/images/posts/post1.jpg"
slug: "act06-182377"
---
<<<<<<< HEAD

=======

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
  Los datos envíados pasan por una red de division, haciendolos trozos mas pequeños (paquetes), con una carga útil , datos reales o encabezados, información de esos datos que permita al destinatario saber qué hacer con ellos. 
  IPsec añade varios encabezados a los paquetes de datos que contienen información de autenticación y encriptación. IPsec también añade tráilers, que van después de la carga útil de cada paquete y no antes

* **Autenticación**
    IPSec la proporciona por cada paquete, esto en un sello en un artículo coleccionable, garantizando que los paquetes provengan de una fuente de confianza.

* **Encriptación**
    IPsec encripta las cargas útiles dentro de cada paquete y el encabezado IP de cada paquete (a menos que se utilice el modo de transporte en lugar del modo túnel), manteniendo los datos seguros y privados.

* **Transmisión**
     IPsec se diferencia del tráfico IP normal en que suele utilizar UDP como protocolo de transporte, en lugar de TCP, al no establecer conexiones específicas, por lo que IPsec utiliza UDP ya que permite que los paquetes IPsec atraviesen los firewalls.

* **Desencriptación**
    En el otro extremo de la comunicación, los paquetes se desencriptan, y las aplicaciones (por ejemplo, un navegador) pueden utilizar ahora los datos entregados.

### Protocolos empleados
En redes , un protocolo es una forma específica de formatear datos para que cualquier computadora en red pueda interpretarlos. IPsec no es un solo protocolo, sino un conjunto

| **Protocolo** | **Descripción** |
| :- | :- |
|**Encabezado de Autenticación (AH)**| Garantiza que los paquetes de datos provengan de una fuente confiable y que no hayan sido manipulados, como un sello de seguridad en un producto de consumo.  |
|**Carga Útil de Seguridad Encapsulada (ESP)**|Cifra el encabezado IP y la carga útil de cada paquete, a menos que se utilice el modo de transporte, en cuyo caso solo cifra la carga útil. ESP añade su propio encabezado y un finalizador a cada paquete de datos.  |
|**Asociación de Seguridad (SA)**|Serie de protocolos utilizados para negociar claves y algoritmos de cifrado. Uno de los protocolos SA más comunes es el Intercambio de Claves por Internet (IKE)|

### Modo túnel y Modo Transorte

El **modo túnel** IPsec se utiliza entre dos enrutadores dedicados, donde cada enrutador actúa como un extremo de un *"túnel"* virtual a través de una red pública. En el modo túnel IPsec, se cifra el encabezado IP original que contiene el destino final del paquete, además de su carga útil. Para indicar a los enrutadores intermediarios dónde reenviar los paquetes, IPsec añade un nuevo encabezado IP. En cada extremo del túnel, los enrutadores descifran los encabezados IP para entregar los paquetes a sus destinos.

En el modo de transporte, la carga útil de cada paquete se cifra, pero no el encabezado IP original. Por lo tanto, los enrutadores intermediarios pueden ver el destino final de cada paquete, a menos que se utilice un protocolo de tunelización independiente.

### Glosario de comandos

| Comando                      | Función                          |
| ---------------------------- | -------------------------------- |
| `hostname`                   | Asigna un nombre al router       |
| `interface g0/x`             | Accede a una interfaz            |
| `ip address`                 | Configura IP y máscara           |
| `no shutdown`                | Activa la interfaz               |
| `ip route 0.0.0.0 0.0.0.0`   | Define ruta por defecto          |
| `crypto isakmp policy`       | Crea política IKE (fase 1)       |
| `encryption aes 256`         | Define cifrado fuerte            |
| `authentication pre-share`   | Usa clave compartida             |
| `crypto isakmp key`          | Establece la clave precompartida |
| `crypto ipsec transform-set` | Define protección de datos       |
| `crypto map`                 | Asocia IPSec al tráfico          |
| `set peer`                   | Define el router remoto          |
| `set pfs`                    | Habilita Perfect Forward Secrecy |
| `match address`              | Asocia ACL al túnel              |
| `access-list permit ip`      | Define tráfico cifrado           |
| `show crypto isakmp sa`      | Verifica fase 1                  |
| `show crypto ipsec sa`       | Verifica fase 2                  |

---

## 💾 Material Multimedia

### Topología realizada

![Act 06](/assets/images/posts/topologia-act06.png)

### Manual Coamndos IPSec
<embed 
  src="/assets/images/docs_P1/14140-manual.pdf" 
  type="application/pdf" 
  width="100%" 
  height="600px"
/>

### Configuración IPSec - Práctica Packet Tracer (YouTube)
<iframe width="560" height="315" src="https://youtu.be/U9Qm92SbVME?si=AYYYaEim2xCuqC53" title="Configuracion practica IPSec" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

---

## 💾 Reflexión

VPN IPSec es una gran funcionalidad en el ambito del manejo de las redes, ya que, proporciona una estrucutra robusta, al emplear un conjunto de protocolos y herramientas que permiten un transporte seguro de datos entre paquetes.

Al realizar la topología planteada se puede observar que aunque lleve un tiempo y sea necesario cumplir con ciertos puntos para su funcionalidad, el manejo de encriptación, transporte, etc. valgan la pena, con las opciones que brinda para un sistema de red. 

---

## 💾 PDF
<embed 
  src="/assets/images/docs_P1/182377-act06.pdf" 
  type="application/pdf" 
  width="100%" 
  height="600px"
/>
## 💾 Referencias
* Amazon AWS (s.f.), ¿Qué es IPsec? . https://aws.amazon.com/es/what-is/ipsec/
* Cisco (Abril, 2024). Comprensión del protocolo IPsec IKEv1,
https://www.cisco.com/c/es_mx/support/docs/security-vpn/ipsec-negotiation-ikeprotocols/217432-understand-ipsec-ikev1-protocol.html#toc-hId--1746390828
* CloudFlare (s.f.), What is IPsec? | How IPsec VPNs work.
https://www.cloudflare.com/learning/network-layer/what-is-ipsec/
>>>>>>> 03bb23bc91e64a8d161db9b8cd66d29e364e451d
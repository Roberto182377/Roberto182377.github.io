---
title: "Actividad 03 - Interpretación y traducción de políticas de filtrado en iptables"
description: "Resolver los ejercicios planteados en base a lo visto del tema de IPtabls"
date: "2026-02-03"
readTime: ""
image: "/assets/images/posts/img_Act03_portada.jpg"
slug: "act03-182377"
---
<div align="right" style="margin-bottom: 1rem;">
  <a href="/assets/images/docs_P1/act03-182377.pdf">📄Descargar PDF</a>
</div>

---

## 💾 Introducción

El control del tráfico de red es un componente esencial de la seguridad informática, ya que permite definir qué comunicaciones son permitidas o bloqueadas dentro de un sistema. En sistemas GNU/Linux, iptables es una herramienta fundamental que actúa como interfaz de configuración del subsistema Netfilter, encargado de filtrar, modificar y gestionar paquetes de red a nivel del kernel.

Mediante el uso de tablas, cadenas y reglas, iptables permite implementar políticas de seguridad precisas, controlar accesos a servicios, proteger sistemas frente a accesos no autorizados y gestionar el flujo del tráfico entrante y saliente. Comprender su arquitectura y el flujo que sigue un paquete resulta clave para diseñar configuraciones de firewall eficaces y seguras

---
## 💾 Desarrollo Técnico
### IPTables
Iptables se utiliza para inspeccionar, modificar, reenviar, redirigir y/o descartar paquetes IP. El código para filtrar paquetes IP ya está integrado en el núcleo y está organizado en una colección de tablas. A continuación su arquitectura:

### Tablas
Las tablas se componen de un conjunto de cadenas predefinidas, cada tabla tiene un propósito específico

| **TABLA** | **PROPOSITO** |
| :- | :- |
|**FILTER**|Filtrado de paquetes(principal firewall)|
|**NAT**|Traducción de direcciones (Network Address Translation)|
|**MANGLE**|Modificación avanzada de paquetes (QoS, TTL)|
|**RAW**|Excepciones al seguimiento de conexiones|
|**SECURITY**|Aplicar etiquetas de seguridad SELinux|
 
### Cadenas
Las cadenas contienen reglas que se recorren en orden, son los momentos del tráfico

| **CADENA** | **PROPOSITO** |
| :- | :- |
|**INPUT**|Paquetes destinados al propio host|
|**OUTPUT**|Paquetes generados por el host|
|**FORWARD**|Paquetes que atraviesan el host (rutado)|
|**PREROUTING**|Modificaciones antes de rutear el paquete (NAT)|
|**POSTROUTING**|Modificaciones después del ruteo (NAT)|

### Reglas y Políticas
Cada regla consta de un predicado de posibles coincidencias y una acción correspondiente (llamada objetivo) que se ejecuta si el predicado es verdadero; es decir, se cumplen las condiciones.

| **REGLA** | **PROPOSITO** |
| :- | :- |
|**ACCEPT**|Permitir el paquete|
|**DROP**|Desechar el paquete sin respuesta|
|**REJECT**|Bloquear y enviar un mensaje ICMP de rechazo|
|**LOG**|Registrar en /var/log/messages o syslog|
|**DNAT**|Redirigir destino (usado en NAT)|
|**SNAT / MASQUERADE**|Modificar IP de origen (salida a Internet)|

### Restablecer reglas
Es posible limpiar y restablecer iptables a los valores predeterminados utilizando estos comandos:
 ```
 iptables -F
 iptables -X
 iptables -t nat -F
 iptables -t nat -X
 iptables -t mangle -F
 iptables -t mangle -X
 iptables -t raw -F
 iptables -t raw -X
 iptables -t security -F
 iptables -t security -X
 iptables -P INPUT ACCEPT
 iptables -P FORWARD ACCEPT
 iptables -P OUTPUT ACCEPT
 ```

---
## 💾 Material Multimedia
### Flujo de IPTables
![Act 03.1](/assets/images/posts/IPtables05.png)

### Ejemplo de comando
![Act 03.2](/assets/images/posts/IPtables04.png)

---

## 💾 Reflexión

El uso de iptables demuestra que la seguridad de red no depende únicamente de bloquear tráfico, sino de definir reglas coherentes y bien ordenadas que respondan al comportamiento esperado del sistema. La correcta selección de tablas, cadenas y estados de conexión permite aplicar políticas de seguridad granulares y eficientes.

Además, la práctica evidencia la importancia del orden de las reglas, del uso adecuado de módulos como state o multiport, y de mecanismos de registro para monitoreo. En conjunto, iptables se consolida como una herramienta poderosa que, bien utilizada, fortalece significativamente la postura de seguridad de un sistema Linux.

---
## 💾 PDF
<embed 
  src="/assets/images/docs_P1/act03-182377.pdf" 
  type="application/pdf" 
  width="100%" 
  height="600px"
/>

## 💾 Referencias
- Servando L. (s.f.), CNO V: Seguridad Informática, <a href="/assets/images/actividades_presentaciones_P1/S02-UPSLP_SI2026-v01-NUEVA VERSION.pdf">Presentación CNO V: Seguridad Informática</a>
* Sánchez J. (Abril, 2016). Linux: Tutorial IPTABLES - Un firewall fiable - Capítulo 1, https://www.sysadmit.com/2016/04/linux-tutorial-iptables-un-firewall-fiable-Capitulo-1.html
* Cloud (Diciembre, 2024). Configurar el firewall de Linux con iptables, https://help.ovhcloud.com/csm/es-dedicated-servers-firewall-iptables?id=kb_article_view&sysparm_article=KB0043437
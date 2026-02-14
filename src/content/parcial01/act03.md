---
title: "Actividad 03 - Interpretación y traducción de políticas de filtrado en iptables"
description: "Resolver los ejercicios planteados en base a lo visto del tema de IPtabls"
date: "2026-02-03"
readTime: ""
image: "/assets/images/posts/post1.jpg"
slug: "act03-182377"
---
<div align="right" style="margin-bottom: 1rem;">
  <a href="/assets/images/docs_P1/act03-182377.pdf">📄PDF Actividad III</a>
</div>

## IPTABLES

### Introducción

El control del tráfico de red es un componente esencial de la seguridad informática, ya que permite definir qué comunicaciones son permitidas o bloqueadas dentro de un sistema. En sistemas GNU/Linux, iptables es una herramienta fundamental que actúa como interfaz de configuración del subsistema Netfilter, encargado de filtrar, modificar y gestionar paquetes de red a nivel del kernel.

Mediante el uso de tablas, cadenas y reglas, iptables permite implementar políticas de seguridad precisas, controlar accesos a servicios, proteger sistemas frente a accesos no autorizados y gestionar el flujo del tráfico entrante y saliente. Comprender su arquitectura y el flujo que sigue un paquete resulta clave para diseñar configuraciones de firewall eficaces y seguras.

### Ejercicios

1. **Completa los espacios conforme se explica el flujo del paquete**
*Cuando un paquete llega al sistema, primero pasa por una tabla, después por una cadena y finalmente se ejecuta una acción.*

2. **Relaciona cada tabla con su propósito principal**
|**Tabla**|**Propósito principal**|**Ejemplo de uso**|
| :- | :- | :- |
|**FILTER**|*Filtrar paquetes*|*Bloqueo al tráfico excepto SSH*|
|**NAT**|*Traducir direcciones*|*Varios dispositivos comparten una IP pública*|
|**MANGLE**|*Modificar paquetes*|*Marcar un paquete como alta prioridad* |
|**RAW**|*Excepción al seguimiento de red*|*A que servicio se va un paquete*|
|**SECURITY**|*Aplicar tablas con permisos*|*Ciertos paquetes solo son manejados por algo/alguien*|

3. **Anatomía de un comando iptables:**
Iptables -A `INPUT` -p tcp -m `multiport` –dports 80,443 -j `ACCEPT`


4. **Este comando permite:**
*Crear una regla, todo lo que llegue de entrada (filtrer), de protocolo tcp en los puertos 80 y 443 sea aceptado.*

5. **Variables y opciones comunes**
*** a) Limitar intentos por minuto***
```
--limit 5/minut
```
*** b) Filtrar por IP de origen***
```
--s 192.168.25.0/24
```
*** c) Ver solo números, sin DNS (ni resolución de puertos)***
```
-list -n
```
*** d) Ver reglas con contadores (paquetes y bytes)***
```
-list -v
```

6. **¿Qué hace esta regla?**
***Iptables -A INPUT -i eth0 -p tcp -m multiport –dports 22,80,443 -m state –state NEW, ESTABLISHED -j ACCEPT***
*Crear una regla para la tabla FILTRER, la regla se añade al final, el paquete que pase por la interfaz eth0 de un protocolo tcp ya sea un estado de conexión establecido o nuevo será aceptado por los puertos 22()SSH), 80(HTTP) o 443(HTTPS).*

7. **Permitir tráfico HHTP entrante**
```
iptables -A INPUT -p tcp –dport 80 -j ACCEPT
```
8. **Permitir todo el tráfico saliente**
```
iptables -A OUTPOT -j ACCEPT
```
9. **Permitir SSH solo desde la IP 192.168.1.50**
```
iptables -A INPUT -p tcp -s 192.168.1.50 –dport 22 -j ACCEPT
```
10. **Permitir tráfico TCP entrante a puertos 80 y 443 solo si es conexión establecida o relacionada**
```
iptables -A INPUT -p tcp -m multiport –dports 80, 443\ -m state –state ESTABLISHED, RELATED -j ACCEPT
```
11. **Permitir tráfico TCP entrante por eth0 a 22, 80 y 443, registrar intentos y permitir solo NEW y ESTABLISHED**
```
iptables -A INPUT -i eth0 -p tcp -m multiport –dports 22, 80, 443\ -m state –state NEW, ESTABLISHED -j LOG –log-prefix “Try”
```
### Conclusiones
El uso de iptables demuestra que la seguridad de red no depende únicamente de bloquear tráfico, sino de definir reglas coherentes y bien ordenadas que respondan al comportamiento esperado del sistema. La correcta selección de tablas, cadenas y estados de conexión permite aplicar políticas de seguridad granulares y eficientes.

Además, la práctica evidencia la importancia del orden de las reglas, del uso adecuado de módulos como state o multiport, y de mecanismos de registro para auditoría y monitoreo. En conjunto, iptables se consolida como una herramienta poderosa que, bien utilizada, fortalece significativamente la postura de seguridad de un sistema Linux.

### Referencias
- Servando L. (s.f.), CNO V: Seguridad Informática, <a href="/assets/images/actividades_presentaciones_P1/S02-UPSLP_SI2026-v01-NUEVA VERSION.pdf">Presentación CNO V: Seguridad Informática</a>





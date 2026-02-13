---
title: "Actividad 03 - Interpretación y traducción de políticas de filtrado en iptables"
description: "Resolver los ejercicios planteados en base a lo visto del tema de IPtabls"
date: "2026-02-03"
readTime: ""
image: "/assets/images/posts/post1.jpg"
slug: "act03-182377"
---

**IPTABLES**

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
a. ***Limitar intentos por minuto***
```
--limit 5/minut
```

b. ***Filtrar por IP de origen***
```
--s 192.168.25.0/24
```

c. ***Ver solo números, sin DNS (ni resolución de puertos)***
```
-list -n
```

d. ***Ver reglas con contadores (paquetes y bytes)***
```
-list -v
```

6. **¿Qué hace esta regla?**

***Iptables -A INPUT -i eth0 -p tcp -m multiport –dports 22,80,443 \***

***-m state –state NEW, ESTABLISHED -j ACCEPT***

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




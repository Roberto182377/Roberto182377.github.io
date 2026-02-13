---
title: "Actividad 04 -  Mecanismos de defensa en red"
description: "Brindar el comando corrcto para cumplir la funcion sitada"
date: "2026-02-04"
readTime: ""
image: "/assets/images/posts/post1.jpg"
slug: "act04-182377"
---
**ACTIVIDAD 04** 

Teniendo en cuenta la topología de red mostrada completa la tabla con las reglas de iptables que deberían aplicarse en el Firewall para llevar a cabo las acciones solicitadas. Las reglas, siempre que sea posible, deben determinar protocolo, dirección IP origen y destino, puerto/s origen y destino y el estado de la conexión. 

![Act 04](/assets/images/posts/act04_img.png)



|**regla** |**COMANDO** |
| - | - |
|**1** |`iptables -A INPUT -j DROP`|
|**2** |`iptables -A INPUT -p tcp -m state ESTABLISHED -j ACCEPT`|
|**3** |```iptables -A OUTPUT -p tcp --sport 53 -j ACCEPT``` |
|**4** |```iptables -A INTPUT -p tcp -s 192.1.2.10 -d 0.0.0.0 -- -j ACCEPT``` |
|**5** |```iptables -A OUTPUT -p tcp -s 192.1.2.10 -j ACCEPT``` |
|**6** |```iptables -A INPUT -p tcp --dport 80 -d 192.1.2.11 -s 0.0.0.0 -j ACCEPT``` |
|**7** |```iptables -A INPUT -p tcp -d 0.0.0.0-j ACCEPT``` |
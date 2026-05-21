# Tipificación de Delitos Informáticos (Ley N° 21.459)

El ataque perpetrado por el grupo hacktivista "Guacamaya" contra la infraestructura del Estado Mayor Conjunto (EMCO) contempla una serie de acciones técnicas que se encuentran plenamente tipificadas en la actual **Ley N° 21.459 sobre Delitos Informáticos** de Chile. 

A continuación, se detalla el mapeo exacto entre las conductas del atacante y los artículos correspondientes de la ley:

## 1. Acción: Intrusión a los servidores y exfiltración de correos
* **Mapeo Legal:** Se tipifica bajo el **Artículo 2, Inciso Segundo (Acceso ilícito con ánimo de apoderamiento).**
* **Análisis de la conducta:** Los atacantes vulneraron los sistemas de seguridad perimetral y de autenticación del EMCO para ingresar a los servidores Microsoft Exchange. Esta acción no fue un mero acceso accidental, sino que tuvo el propósito deliberado de apoderarse de la información (350 GB de correos electrónicos clasificados) para su posterior difusión, lo que constituye la figura agravada descrita en este inciso de la ley.

## 2. Acción: Utilización de vulnerabilidades "ProxyShell"
* **Mapeo Legal:** Se tipifica bajo el **Artículo 8 (Abuso de los dispositivos).**
* **Análisis de la conducta:** Para lograr penetrar los servidores del Ejército, el grupo "Guacamaya" empleó herramientas técnicas y *exploits* diseñados específicamente para aprovechar la cadena de vulnerabilidades ProxyShell (CVE-2021-34473, entre otras). La ley castiga explícitamente a quienes posean, entreguen o utilicen programas computacionales, scripts o datos (como *payloads* maliciosos) creados o adaptados con el fin de cometer el delito de acceso ilícito.

## 3. Acción: Distribución y alojamiento de los datos robados en foros de internet
* **Mapeo Legal:** Se tipifica bajo el **Artículo 6 (Receptación de datos informáticos).**
* **Análisis de la conducta:** Tras extraer los 400.000 correos, los atacantes (y terceros asociados a ellos) procedieron a transferir, almacenar y distribuir esta información masiva a través de sitios de descarga y foros en la *Deep Web* y *Clearnet*. Al realizar esta comercialización y distribución con pleno conocimiento del origen ilícito de los datos (sabiendo que provenían de un hackeo a las Fuerzas Armadas chilenas), se configura el delito de receptación de datos informáticos.
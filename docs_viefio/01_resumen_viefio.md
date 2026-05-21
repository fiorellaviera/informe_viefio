# Resumen Ejecutivo: Incidente de Ciberseguridad en el Estado Mayor Conjunto (EMCO)

## 1. Descripción del Incidente (¿Qué pasó?)
En 2022, el Estado Mayor Conjunto (EMCO) de las Fuerzas Armadas de Chile fue víctima de uno de los incidentes de exfiltración de datos más severos en la historia de la seguridad nacional. El ataque resultó en el compromiso y la posterior publicación de aproximadamente 400.000 correos electrónicos institucionales, lo que se traduce en un volumen cercano a los 350 GB de información clasificada y sensible. 

El vector de compromiso inicial radicó en la explotación de vulnerabilidades críticas presentes en los servidores de correo on-premise Microsoft Exchange de la institución. Específicamente, los atacantes aprovecharon la cadena de vulnerabilidades conocida como "ProxyShell" (CVE-2021-34473, CVE-2021-34523 y CVE-2021-31207), las cuales permitían la ejecución remota de código (RCE) eludiendo los mecanismos de autenticación. A pesar de que el Equipo de Respuesta Ante Incidentes de Seguridad Informática (CSIRT) del Gobierno había emitido alertas de mitigación meses antes, los parches de seguridad no fueron aplicados a tiempo en la infraestructura del EMCO.

## 2. Cronología de los Hechos (¿Cuándo ocurrió?)
* **Agosto 2021:** Se publican globalmente las vulnerabilidades ProxyShell de Microsoft. CSIRT de Gobierno emite las alertas correspondientes a las instituciones del Estado.
* **Mayo 2022:** Periodo estimado en el que los atacantes lograron el acceso inicial y comenzaron la exfiltración silenciosa de los correos electrónicos desde los servidores del EMCO.
* **19 de septiembre de 2022:** Se hace público el incidente cuando los atacantes liberan los 350 GB de información en foros y sitios de internet, dejándolos a disposición del público general y medios de comunicación.

## 3. Actores Involucrados (¿Quiénes participaron?)
* **Actor de Amenaza (Threat Actor):** El colectivo hacktivista de origen latinoamericano denominado **"Guacamaya"**. Este grupo opera bajo motivaciones ideológicas (hacktivismo) y ejecutó campañas de exfiltración similares contra múltiples fuerzas armadas y policías en países como México, Colombia y Perú.
* **Organización Víctima:** El **Estado Mayor Conjunto (EMCO)**, organismo asesor del Ministerio de Defensa Nacional de Chile, encargado de la preparación y empleo conjunto de las Fuerzas Armadas.
* **Entidades Gubernamentales:** El **Ministerio de Defensa** (como ente fiscalizador y responsable político) y el **CSIRT de Gobierno** (involucrado en la alerta temprana y posterior análisis forense del incidente).

## 4. Impacto y Consecuencias
La brecha de seguridad generó un impacto crítico a nivel estratégico, táctico y reputacional:
* **Compromiso de la Seguridad Nacional:** Se expuso información confidencial sobre el despliegue operativo de tropas, planes de contingencia en zonas fronterizas y en la Macrozona Sur, monitoreo de amenazas externas y detalles sobre sistemas de armas y comunicaciones.
* **Impacto Institucional y Político:** La crisis derivó en la renuncia del entonces Jefe del Estado Mayor Conjunto, la apertura de sumarios administrativos internos y el inicio de investigaciones penales bajo la jurisdicción de la Justicia Militar por incumplimiento de deberes militares.
* **Efecto Regulatorio:** El incidente evidenció de manera insoslayable la fragilidad técnica e institucional del Estado frente a ciberamenazas avanzadas. En consecuencia, este evento se transformó en el principal catalizador legislativo que aceleró la tramitación y posterior promulgación de la nueva **Ley Marco sobre Ciberseguridad e Infraestructura Crítica de la Información** en Chile.
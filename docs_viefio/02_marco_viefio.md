# Marco Normativo Nacional e Internacional

Para el análisis legal del incidente de ciberseguridad que afectó al Estado Mayor Conjunto (EMCO), se identifican las siguientes normativas aplicables, las cuales regulan tanto los delitos cometidos por los atacantes como las responsabilidades en la gestión de la información por parte de la institución.

## 1. Ley N° 21.459 sobre Delitos Informáticos (Nacional - Chile)
Esta es la legislación penal chilena que tipifica las conductas ilícitas en el ciberespacio, actualizando la normativa a los estándares internacionales.
* **Aplicabilidad al caso:** Esta ley aplica directamente a las acciones ejecutadas por el grupo "Guacamaya". Específicamente, los atacantes vulneraron los servidores de correo Microsoft Exchange de la institución (explotando la vulnerabilidad ProxyShell) para obtener los 350 GB de información. Esto constituye textualmente el delito de **"Acceso ilícito" (Artículo 2)** y, dado que extrajeron los 400.000 correos, se configura el delito de **"Espionaje informático" (Artículo 3)**.

## 2. Ley N° 19.628 sobre Protección de la Vida Privada (Nacional - Chile)
Es la norma principal en Chile que regula el tratamiento, almacenamiento y protección de los datos de carácter personal en bases de datos públicas y privadas.
* **Aplicabilidad al caso:** La filtración de los 400.000 correos electrónicos no solo expuso secretos de Estado, sino que expuso datos personales de militares, funcionarios y civiles mencionados en dichas comunicaciones (rut, direcciones, estado de salud, etc.). El EMCO falló en su obligación de resguardar esta información, contraviniendo el **Artículo 11** de esta ley, que exige a los responsables de los registros cuidar los datos con la debida diligencia e impedir su filtración o acceso no autorizado.

## 3. Convenio de Budapest sobre Ciberdelincuencia (Internacional)
Es el primer tratado internacional que busca hacer frente a los delitos informáticos y los delitos en internet mediante la armonización de leyes nacionales, la mejora de las técnicas de investigación y el aumento de la cooperación internacional. Chile es Estado parte de este convenio.
* **Aplicabilidad al caso:** Dado que el colectivo hacktivista "Guacamaya" es una organización transnacional que operó desde fuera del territorio chileno (atacando también a México, Perú y Colombia), este tratado internacional es el marco habilitante que permite al Ministerio Público de Chile solicitar cooperación penal internacional y asistencia técnica mutua para rastrear e investigar el origen de los accesos remotos a los servidores del EMCO.

## 4. Estándar Internacional ISO/IEC 27001 (Internacional)
Norma internacional emitida por la Organización Internacional de Normalización (ISO) que describe cómo gestionar la seguridad de la información en una organización a través de un Sistema de Gestión de Seguridad de la Información (SGSI).
* **Aplicabilidad al caso:** El ataque ocurrió porque el EMCO mantuvo servidores expuestos a internet con vulnerabilidades conocidas desde agosto de 2021 sin aplicar los parches correspondientes. Esto demuestra una grave infracción a los controles normados por la ISO 27001 (específicamente en el dominio de "Gestión de Vulnerabilidades Técnicas" - Control A.12.6.1), evidenciando una negligencia administrativa en la mantención de la infraestructura tecnológica del Estado.
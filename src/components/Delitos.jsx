import { Gavel, AlertTriangle, ShieldAlert } from 'lucide-react'

function Delitos() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-8">
      {/* Encabezado del Componente */}
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-pink-50">
        <div className="p-3 bg-pink-100 rounded-full text-pink-500">
          <Gavel size={28} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-700">
          Tipificación de Delitos Informáticos
        </h2>
      </div>

      <p className="text-slate-600 mb-6 leading-relaxed text-justify">
        El análisis legal de las conductas ejecutadas por el grupo hacktivista "Guacamaya" contra la infraestructura del EMCO permite encuadrar las acciones bajo los siguientes artículos específicos de la <strong>Ley N° 21.459</strong> de Chile:
      </p>

      {/* Contenedor de Tarjetas Pastel */}
      <div className="space-y-6">
        
        {/* Delito 1: Artículo 2 */}
        <div className="bg-rose-50/40 rounded-2xl p-6 border border-pink-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-2">
            <ShieldAlert className="text-pink-400" size={22} />
            <h3 className="font-bold text-slate-700 text-lg">Artículo 2, Inciso Segundo</h3>
          </div>
          <span className="inline-block bg-pink-100 text-pink-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
            Acceso Ilícito Agravado
          </span>
          <p className="text-slate-600 text-sm leading-relaxed text-justify">
            Se configura mediante la intrusión no autorizada a los servidores Microsoft Exchange de la institución. Adquiere el carácter de agravado debido al ánimo deliberado de apoderarse y exfiltrar los 350 GB de comunicaciones militares confidenciales.
          </p>
        </div>

        {/* Delito 2: Artículo 8 */}
        <div className="bg-violet-50/40 rounded-2xl p-6 border border-violet-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="text-violet-400" size={22} />
            <h3 className="font-bold text-slate-700 text-lg">Artículo 8</h3>
          </div>
          <span className="inline-block bg-violet-100 text-violet-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
            Abuso de los Dispositivos
          </span>
          <p className="text-slate-600 text-sm leading-relaxed text-justify">
            Tipifica el uso técnico de herramientas informáticas, scripts y códigos maliciosos adaptados expresamente con el fin de explotar de manera remota la cadena de vulnerabilidades críticas "ProxyShell" para evadir la autenticación.
          </p>
        </div>

        {/* Delito 3: Artículo 6 */}
        <div className="bg-rose-50/20 rounded-2xl p-6 border border-pink-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-2">
            <ShieldAlert className="text-pink-400" size={22} />
            <h3 className="font-bold text-slate-700 text-lg">Artículo 6</h3>
          </div>
          <span className="inline-block bg-pink-100 text-pink-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
            Receptación de Datos Informáticos
          </span>
          <p className="text-slate-600 text-sm leading-relaxed text-justify">
            Aplica a la posterior comercialización, distribución masiva y alojamiento de los 400.000 correos electrónicos sustraídos en foros de descarga pública dentro de internet, con pleno conocimiento de su origen ilícito.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Delitos
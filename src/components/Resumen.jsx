import { FileText, Calendar, Users, AlertCircle } from 'lucide-react'

function Resumen() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-8">
      {/* Título de la sección */}
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-pink-50">
        <div className="p-3 bg-violet-100 rounded-full text-violet-500">
          <FileText size={28} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-700">
          Resumen Ejecutivo
        </h2>
      </div>

      <div className="space-y-8">
        
        {/* Qué pasó */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="text-pink-400" size={20} />
            <h3 className="text-lg font-bold text-slate-700">1. Descripción del Incidente</h3>
          </div>
          <p className="text-slate-600 leading-relaxed text-justify">
            En 2022, el Estado Mayor Conjunto (EMCO) de las Fuerzas Armadas de Chile fue víctima de uno de los incidentes de exfiltración de datos más severos en la historia de la seguridad nacional. El ataque resultó en el compromiso y la posterior publicación de aproximadamente 400.000 correos electrónicos institucionales, lo que se traduce en un volumen cercano a los 350 GB de información clasificada y sensible. El vector de compromiso inicial radicó en la explotación de vulnerabilidades críticas presentes en los servidores de correo on-premise Microsoft Exchange de la institución (vulnerabilidad "ProxyShell").
          </p>
        </section>

        {/* Cuándo ocurrió */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="text-pink-400" size={20} />
            <h3 className="text-lg font-bold text-slate-700">2. Cronología de los Hechos</h3>
          </div>
          <ul className="space-y-2 text-slate-600 ml-7 list-disc marker:text-pink-300">
            <li><strong>Agosto 2021:</strong> Se publican globalmente las vulnerabilidades ProxyShell. CSIRT de Gobierno emite alertas.</li>
            <li><strong>Mayo 2022:</strong> Periodo estimado de acceso inicial y exfiltración silenciosa.</li>
            <li><strong>19 de septiembre de 2022:</strong> Se hace público el incidente cuando los atacantes liberan los 350 GB en internet.</li>
          </ul>
        </section>

        {/* Quiénes participaron */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Users className="text-pink-400" size={20} />
            <h3 className="text-lg font-bold text-slate-700">3. Actores Involucrados</h3>
          </div>
          <ul className="space-y-2 text-slate-600 ml-7 list-disc marker:text-pink-300">
            <li><strong>Actor de Amenaza:</strong> El colectivo hacktivista denominado "Guacamaya".</li>
            <li><strong>Organización Víctima:</strong> El Estado Mayor Conjunto (EMCO).</li>
            <li><strong>Entidades Gubernamentales:</strong> Ministerio de Defensa y CSIRT de Gobierno.</li>
          </ul>
        </section>

      </div>
    </div>
  )
}

export default Resumen
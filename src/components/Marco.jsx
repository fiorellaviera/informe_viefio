import { Scale, ShieldCheck, Globe, FileCheck } from 'lucide-react'

function Marco() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-8">
      {/* Título de la sección */}
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-pink-50">
        <div className="p-3 bg-rose-100 rounded-full text-rose-500">
          <Scale size={28} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-700">
          Marco Normativo
        </h2>
      </div>

      {/* Grid de leyes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Ley Delitos Informáticos */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="text-rose-400" size={24} />
            <h3 className="font-bold text-slate-700">Ley N° 21.459 (Chile)</h3>
          </div>
          <p className="text-sm text-slate-600 mb-3 font-medium text-violet-500">
            Delitos Informáticos
          </p>
          <p className="text-slate-600 text-sm leading-relaxed text-justify">
            Aplica directamente a las acciones ejecutadas por "Guacamaya". Tipifica el <strong>"Acceso ilícito" (Art. 2)</strong> al vulnerar los servidores Microsoft Exchange, y el <strong>"Espionaje informático" (Art. 3)</strong> por la extracción de los 400.000 correos.
          </p>
        </div>

        {/* Ley Protección de Datos */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-3">
            <FileCheck className="text-rose-400" size={24} />
            <h3 className="font-bold text-slate-700">Ley N° 19.628 (Chile)</h3>
          </div>
          <p className="text-sm text-slate-600 mb-3 font-medium text-violet-500">
            Protección de la Vida Privada
          </p>
          <p className="text-slate-600 text-sm leading-relaxed text-justify">
            Aplica al EMCO. La institución falló en su obligación de resguardar la información personal expuesta, contraviniendo el <strong>Artículo 11</strong>, que exige cuidar los datos con la debida diligencia e impedir accesos no autorizados.
          </p>
        </div>

        {/* Convenio de Budapest */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="text-rose-400" size={24} />
            <h3 className="font-bold text-slate-700">Convenio de Budapest</h3>
          </div>
          <p className="text-sm text-slate-600 mb-3 font-medium text-violet-500">
            Internacional - Ciberdelincuencia
          </p>
          <p className="text-slate-600 text-sm leading-relaxed text-justify">
            Tratado que permite al Ministerio Público de Chile solicitar cooperación penal y asistencia técnica internacional para rastrear a este grupo hacktivista transnacional y el origen del ataque.
          </p>
        </div>

        {/* ISO 27001 */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="text-rose-400" size={24} />
            <h3 className="font-bold text-slate-700">ISO/IEC 27001</h3>
          </div>
          <p className="text-sm text-slate-600 mb-3 font-medium text-violet-500">
            Estándar Internacional
          </p>
          <p className="text-slate-600 text-sm leading-relaxed text-justify">
            Aplica a la infraestructura tecnológica. No parchar los servidores con vulnerabilidades conocidas desde 2021 demuestra una grave infracción a los controles técnicos (A.12.6.1 Gestión de Vulnerabilidades).
          </p>
        </div>

      </div>
    </div>
  )
}

export default Marco
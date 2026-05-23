import { Database, Fingerprint, Activity, UserX, FileWarning, EyeOff } from 'lucide-react'

function Datos() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-8">
      {/* Encabezado */}
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-pink-50">
        <div className="p-3 bg-pink-100 rounded-full text-pink-500">
          <Database size={28} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-700">
          Tratamiento de Datos Personales (Ley N° 19.628)
        </h2>
      </div>

      <p className="text-slate-600 mb-8 leading-relaxed text-justify">
        La filtración de 350 GB de correos no solo vulneró información de inteligencia militar, sino que expuso gravemente la privacidad de miles de funcionarios. Este escenario se analiza bajo la Ley N° 19.628 sobre Protección de la Vida Privada.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Columna Izquierda: Tipos de Datos */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-slate-700 border-b border-pink-100 pb-2">
            1. Datos Comprometidos
          </h3>
          
          {/* Datos Personales */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <Fingerprint className="text-violet-400" size={20} />
              <h4 className="font-bold text-slate-700">Datos Personales</h4>
            </div>
            <p className="text-xs text-slate-500 mb-2 italic">Información concerniente a personas naturales, identificadas o identificables (Art. 2, letra f).</p>
            <ul className="text-sm text-slate-600 list-disc ml-5 space-y-1 marker:text-violet-300">
              <li>Nombres completos y RUT.</li>
              <li>Correos electrónicos personales.</li>
              <li>Números de teléfono y direcciones particulares.</li>
            </ul>
          </div>

          {/* Datos Sensibles */}
          <div className="bg-rose-50/40 rounded-2xl p-5 border border-rose-100">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="text-rose-400" size={20} />
              <h4 className="font-bold text-rose-600">Datos Sensibles</h4>
            </div>
            <p className="text-xs text-rose-400/80 mb-2 italic">Se refieren a características físicas o morales, hechos o circunstancias de su vida privada o intimidad (Art. 2, letra g).</p>
            <ul className="text-sm text-slate-600 list-disc ml-5 space-y-1 marker:text-rose-300">
              <li><strong>Información médica y fichas clínicas:</strong> Licencias médicas y diagnósticos del personal militar expuestos en correos.</li>
            </ul>
          </div>
        </div>

        {/* Columna Derecha: Derechos ARCO */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-slate-700 border-b border-pink-100 pb-2">
            2. Afectación de Derechos ARCO
          </h3>
          
          <div className="space-y-4">
            {/* Acceso */}
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-pink-100 rounded-lg text-pink-500 shrink-0">
                <UserX size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-700 text-sm">Derecho de Acceso (Art. 12)</h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed text-justify">
                  El Estado falló en notificar a los afectados. Los titulares perdieron el derecho a exigir al EMCO información sobre el destino de sus datos, vulnerando textualmente la ley: <em>"Toda persona tiene derecho a exigir a quien sea responsable... información sobre los datos relativos a su persona"</em>.
                </p>
              </div>
            </div>

            {/* Cancelación */}
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-pink-100 rounded-lg text-pink-500 shrink-0">
                <FileWarning size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-700 text-sm">Derecho de Cancelación (Art. 13)</h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed text-justify">
                  Debido a la diseminación en la Deep Web, el EMCO quedó imposibilitado de cumplir con el mandato legal de eliminar o cancelar los datos cuando los titulares lo soliciten.
                </p>
              </div>
            </div>

            {/* Oposición */}
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-pink-100 rounded-lg text-pink-500 shrink-0">
                <EyeOff size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-700 text-sm">Derecho de Oposición</h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed text-justify">
                  Al hacerse pública la información médica y personal, los titulares perdieron por completo la capacidad de oponerse al tratamiento ilícito que cibercriminales puedan darle a futuro.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Datos
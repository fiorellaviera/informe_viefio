import { Sparkles, MessageSquare, Check, BrainCircuit } from 'lucide-react'

function Prompts() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-8">
      {/* Encabezado */}
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-pink-50">
        <div className="p-3 bg-fuchsia-100 rounded-full text-fuchsia-500">
          <Sparkles size={28} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-700">
          Bitácora de Uso de Inteligencia Artificial
        </h2>
      </div>

      <p className="text-slate-600 mb-8 leading-relaxed text-justify">
        Para el desarrollo de este análisis legal, se utilizó asistencia de Inteligencia Artificial (un modelo conversacional) para estructurar la investigación y alinear los hechos del caso EMCO con la normativa chilena vigente.
      </p>

      <div className="space-y-8">
        
        {/* Sección de Prompts */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="text-fuchsia-400" size={20} />
            <h3 className="text-lg font-bold text-slate-700">1. Registro de Prompts Utilizados</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Prompt 1 */}
            <div className="bg-fuchsia-50/40 rounded-2xl p-5 border border-fuchsia-100">
              <strong className="text-fuchsia-600 text-sm block mb-2">Sección: Resumen Ejecutivo</strong>
              <div className="bg-white p-3 rounded-xl border border-fuchsia-100 text-sm text-slate-600 italic mb-3">
                "Redacta un resumen ejecutivo formal sobre el hackeo al EMCO por el grupo Guacamaya. Incluye qué pasó, cuándo, actores e impacto."
              </div>
              <div className="flex gap-2 items-start text-sm text-slate-600">
                <Check className="text-fuchsia-400 shrink-0 mt-0.5" size={16} />
                <span><strong>Corrección:</strong> Se ajustó para incluir el detalle técnico de la vulnerabilidad "ProxyShell" y el volumen exacto (350 GB).</span>
              </div>
            </div>

            {/* Prompt 2 */}
            <div className="bg-fuchsia-50/40 rounded-2xl p-5 border border-fuchsia-100">
              <strong className="text-fuchsia-600 text-sm block mb-2">Sección: Tipificación de Delitos</strong>
              <div className="bg-white p-3 rounded-xl border border-fuchsia-100 text-sm text-slate-600 italic mb-3">
                "Analiza el caso del EMCO bajo la Ley 21.459. Mapea la intrusión, uso de exploits y publicación de datos con los artículos exactos."
              </div>
              <div className="flex gap-2 items-start text-sm text-slate-600">
                <Check className="text-fuchsia-400 shrink-0 mt-0.5" size={16} />
                <span><strong>Corrección:</strong> Se verificó rigurosamente que los artículos correspondieran a la ley actualizada y sus incisos.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Reflexión */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BrainCircuit className="text-fuchsia-400" size={20} />
            <h3 className="text-lg font-bold text-slate-700">2. Reflexión Final</h3>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-sm text-slate-600 leading-relaxed text-justify">
            El uso de herramientas de IA conversacional resultó ser un apoyo invaluable para la fase de investigación. A diferencia de pegar fragmentos aislados, mantener el contexto del caso (EMCO) y las leyes chilenas durante toda la sesión permitió generar un análisis cohesivo. Sin embargo, <strong>la IA requiere supervisión humana constante</strong>; fue necesario validar que los artículos citados pertenecieran a la normativa correcta, demostrando que la habilidad clave es dirigir a la IA, validar lo que produce y comprender el resultado final.
          </div>
        </div>

      </div>
    </div>
  )
}

export default Prompts
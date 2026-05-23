import { Lightbulb, CheckCircle2, ShieldAlert } from 'lucide-react'

function Conclusiones() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-8">
      {/* Encabezado */}
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-pink-50">
        <div className="p-3 bg-emerald-100 rounded-full text-emerald-500">
          <Lightbulb size={28} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-700">
          Conclusiones y Recomendaciones de Seguridad
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Columna Izquierda: Recomendaciones */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-slate-700 border-b border-emerald-50 pb-2">
            1. Recomendaciones de Mitigación
          </h3>
          
          <ul className="space-y-5">
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={20} />
              <div>
                <strong className="text-slate-700 block">Gestión Estricta de Vulnerabilidades</strong>
                <span className="text-sm text-slate-600 leading-relaxed text-justify block mt-1">Políticas obligatorias de actualización y parchado de sistemas (especialmente en servicios expuestos a internet como Microsoft Exchange), acatando alertas del CSIRT.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={20} />
              <div>
                <strong className="text-slate-700 block">Implementación de un SGSI (ISO/IEC 27001)</strong>
                <span className="text-sm text-slate-600 leading-relaxed text-justify block mt-1">Asegurar auditorías periódicas y evaluaciones de riesgo continuas sobre los activos de información del Estado.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={20} />
              <div>
                <strong className="text-slate-700 block">Arquitectura Zero Trust (Cero Confianza)</strong>
                <span className="text-sm text-slate-600 leading-relaxed text-justify block mt-1">No confiar por defecto en ningún usuario o dispositivo, requiriendo autenticación multifactor (MFA) y segmentación de redes.</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={20} />
              <div>
                <strong className="text-slate-700 block">CSIRTs Sectoriales</strong>
                <span className="text-sm text-slate-600 leading-relaxed text-justify block mt-1">Fortalecer equipos de respuesta ante incidentes dentro de cada rama de las FF.AA., con protocolos de contención automatizados.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Columna Derecha: Reflexión */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-slate-700 border-b border-emerald-50 pb-2">
            2. Reflexión Final
          </h3>
          
          <div className="bg-gradient-to-br from-emerald-50/50 to-teal-50/50 rounded-2xl p-6 border border-emerald-100 h-full">
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert className="text-emerald-500" size={24} />
              <h4 className="font-bold text-emerald-700">Un Punto de Inflexión</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed text-justify mb-4">
              El caso EMCO demostró empíricamente que la ciberseguridad ya no puede ser tratada como un problema netamente técnico o del departamento de informática, sino que es un pilar fundamental de la <strong>Seguridad Nacional</strong>. La negligencia en la mantención de sistemas expuso información clasificada y vulneró gravemente la privacidad de miles de funcionarios.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed text-justify">
              Desde el punto de vista regulatorio, este incidente fue un catalizador necesario. Desnudó las brechas operativas del Estado y obligó al poder legislativo a acelerar la promulgación de la <strong>Ley Marco sobre Ciberseguridad e Infraestructura Crítica de la Información</strong>, marcando el inicio de una cultura de resiliencia digital obligatoria en Chile.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Conclusiones
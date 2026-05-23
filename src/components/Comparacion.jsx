import { TableProperties } from 'lucide-react'

function Comparacion() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-8 overflow-hidden">
      {/* Título de la sección */}
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-pink-50">
        <div className="p-3 bg-fuchsia-100 rounded-full text-fuchsia-500">
          <TableProperties size={28} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-700">
          Comparación de Marcos Regulatorios
        </h2>
      </div>

      {/* Contenedor responsivo para la tabla */}
      <div className="overflow-x-auto rounded-2xl border border-pink-100 shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-pink-50 text-pink-600 text-sm">
              <th className="p-4 font-bold border-b border-pink-100">Marco / Estándar</th>
              <th className="p-4 font-bold border-b border-pink-100">Alcance y Sujeto Regulado</th>
              <th className="p-4 font-bold border-b border-pink-100">Bien Jurídico Protegido</th>
              <th className="p-4 font-bold border-b border-pink-100">Tipos de Sanciones</th>
              <th className="p-4 font-bold border-b border-pink-100">Aplicabilidad al caso EMCO</th>
            </tr>
          </thead>
          <tbody className="text-sm text-slate-600">
            
            {/* Fila 1: Ley 21.459 */}
            <tr className="hover:bg-rose-50/50 transition-colors border-b border-pink-50">
              <td className="p-4 font-bold text-slate-700">Ley N° 21.459<br/><span className="text-xs font-normal text-violet-400">Delitos Informáticos (Chile)</span></td>
              <td className="p-4 leading-relaxed">Aplica a cualquier persona natural o jurídica en territorio nacional (o con efectos en Chile) que cometa ilícitos.</td>
              <td className="p-4 leading-relaxed">La integridad, confidencialidad y disponibilidad de los sistemas informáticos.</td>
              <td className="p-4 leading-relaxed"><strong className="text-pink-500">Penales:</strong> Penas de presidio y multas, además de comiso de equipos.</td>
              <td className="p-4 leading-relaxed"><strong>Aplica a los atacantes ("Guacamaya").</strong> Tipifica el acceso ilícito y la exfiltración de los correos.</td>
            </tr>

            {/* Fila 2: Ley 19.628 */}
            <tr className="hover:bg-rose-50/50 transition-colors border-b border-pink-50">
              <td className="p-4 font-bold text-slate-700">Ley N° 19.628<br/><span className="text-xs font-normal text-violet-400">Protección de Datos (Chile)</span></td>
              <td className="p-4 leading-relaxed">Aplica a organismos públicos y privados que realicen tratamiento de datos personales.</td>
              <td className="p-4 leading-relaxed">La vida privada y la protección de los datos personales de los titulares.</td>
              <td className="p-4 leading-relaxed"><strong className="text-pink-500">Administrativas y Civiles:</strong> Sumarios, multas e indemnización por daños.</td>
              <td className="p-4 leading-relaxed"><strong>Aplica al EMCO.</strong> La institución falló en proteger los datos personales expuestos en la filtración.</td>
            </tr>

            {/* Fila 3: ISO 27001 */}
            <tr className="hover:bg-rose-50/50 transition-colors">
              <td className="p-4 font-bold text-slate-700">ISO/IEC 27001<br/><span className="text-xs font-normal text-violet-400">Estándar Internacional</span></td>
              <td className="p-4 leading-relaxed">Aplica a cualquier organización que desee implementar un SGSI.</td>
              <td className="p-4 leading-relaxed">La seguridad de la información organizacional, minimizando riesgos.</td>
              <td className="p-4 leading-relaxed"><strong className="text-pink-500">Certificación:</strong> Pérdida de certificación o daño reputacional grave.</td>
              <td className="p-4 leading-relaxed"><strong>Aplica a la infraestructura del EMCO.</strong> No parchar servidores contraviene los controles de esta norma.</td>
            </tr>

          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-600 text-justify">
        <strong className="text-violet-500">Análisis:</strong> La gestión de un incidente moderno no puede abordarse desde una sola normativa. Mientras la Ley N° 21.459 busca castigar a los culpables externos, la Ley N° 19.628 y la ISO 27001 apuntan a la responsabilidad interna de la organización por no garantizar el resguardo adecuado de la información.
      </div>
    </div>
  )
}

export default Comparacion

import { Briefcase, Terminal, Building, Users } from 'lucide-react'

function Responsabilidades() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-8">
      {/* Encabezado */}
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-pink-50">
        <div className="p-3 bg-pink-100 rounded-full text-pink-500">
          <Briefcase size={28} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-700">
          Responsabilidades Legales de los Actores
        </h2>
      </div>

      <p className="text-slate-600 mb-6 leading-relaxed text-justify">
        El incidente involucra responsabilidades compartidas que abarcan diferentes áreas del derecho. A continuación, se identifican los tres actores principales y sus respectivas responsabilidades:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Actor 1: Guacamaya */}
        <div className="bg-rose-50/50 rounded-2xl p-6 border border-rose-100 flex flex-col h-full hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-rose-200/50 rounded-lg text-rose-500">
              <Terminal size={24} />
            </div>
            <h3 className="font-bold text-slate-700 leading-tight">Grupo Hacktivista "Guacamaya"</h3>
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">Responsabilidad Penal</span>
              <p className="text-sm text-slate-600 mt-1">Bajo la <strong>Ley N° 21.459</strong> (Delitos Informáticos), enfrentan penas de presidio mayor por Acceso Ilícito (Art. 2) y Espionaje Informático (Art. 3).</p>
            </div>
            <div>
              <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">Responsabilidad Civil</span>
              <p className="text-sm text-slate-600 mt-1">Sujetos a indemnizar el daño moral y patrimonial bajo la <strong>Ley N° 19.628</strong> (Art. 23) a las personas afectadas.</p>
            </div>
          </div>
        </div>

        {/* Actor 2: EMCO */}
        <div className="bg-violet-50/50 rounded-2xl p-6 border border-violet-100 flex flex-col h-full hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-200/50 rounded-lg text-violet-500">
              <Building size={24} />
            </div>
            <h3 className="font-bold text-slate-700 leading-tight">Estado Mayor Conjunto (EMCO)</h3>
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <span className="text-xs font-bold text-violet-500 uppercase tracking-wider">Resp. Administrativa</span>
              <p className="text-sm text-slate-600 mt-1">Incurre en "Falta de Servicio" (<strong>Ley N° 18.575</strong>) e incumple el deber de diligencia en el resguardo de datos (<strong>Ley N° 19.628, Art. 11</strong>).</p>
            </div>
            <div>
              <span className="text-xs font-bold text-violet-500 uppercase tracking-wider">Responsabilidad Civil</span>
              <p className="text-sm text-slate-600 mt-1">El Estado es patrimonialmente responsable y puede ser demandado por funcionarios afectados exigiendo indemnización.</p>
            </div>
          </div>
        </div>

        {/* Actor 3: Alto Mando */}
        <div className="bg-pink-50/50 rounded-2xl p-6 border border-pink-100 flex flex-col h-full hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-pink-200/50 rounded-lg text-pink-500">
              <Users size={24} />
            </div>
            <h3 className="font-bold text-slate-700 leading-tight">Alto Mando y Jefaturas de TI</h3>
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <span className="text-xs font-bold text-pink-500 uppercase tracking-wider">Resp. Disciplinaria</span>
              <p className="text-sm text-slate-600 mt-1">Sujetos a sumarios y posible destitución por "notable abandono de deberes" (<strong>Estatuto Administrativo, Ley N° 18.834</strong>).</p>
            </div>
            <div>
              <span className="text-xs font-bold text-pink-500 uppercase tracking-wider">Justicia Militar (Penal)</span>
              <p className="text-sm text-slate-600 mt-1">Enfrentan cargos por "Incumplimiento de deberes militares" e "Infidelidad en la custodia de documentos" bajo el <strong>Código de Justicia Militar</strong>.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Responsabilidades
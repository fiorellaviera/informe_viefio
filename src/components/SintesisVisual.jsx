import { CloudAlert, CalendarClock, Scale, Gavel, ShieldCheck, Heart } from 'lucide-react'

// Este componente reemplaza la imagen estática AI por una "infografía" programada directamente en React/Tailwind.
// Mantiene el estilo kawaii-cozy y formal, y se integra automáticamente con el modo oscuro.

function SintesisVisual() {
  // Datos simplificados para el flujo de la infografía
  const pasos = [
    {
      id: 1,
      titulo: "El Vector de Ataque",
      descripcion: "Explotación de vulnerabilidades 'ProxyShell' en servidores Exchange expuestos.",
      icon: CloudAlert,
      color: "pink",
      textColor: "rose"
    },
    {
      id: 2,
      titulo: "Cronología Silenciosa",
      descripcion: "Mayo-Junio 2022: Acceso y exfiltración de 350GB (400k correos).",
      icon: CalendarClock,
      color: "violet",
      textColor: "purple"
    },
    {
      id: 3,
      titulo: "Impacto Legal y de Datos",
      descripcion: "Compromiso de Inteligencia Militar, planes de defensa y datos sensibles (fichas médicas).",
      icon: Scale,
      color: "fuchsia",
      textColor: "fuchsia"
    },
    {
      id: 4,
      titulo: "Responsabilidad del Estado",
      descripcion: "Falta de Servicio (Abandono de Deberes) y vulneración de derechos ARCO de funcionarios.",
      icon: Gavel,
      color: "violet",
      textColor: "purple"
    },
    {
      id: 5,
      titulo: "La Lección: Ciber-Resiliencia",
      descripcion: "Promulgación de la Ley Marco sobre Ciberseguridad y adopción de Zero Trust.",
      icon: ShieldCheck,
      color: "emerald",
      textColor: "emerald"
    }
  ];

  // Helper para asignar colores dinámicamente basados en el nombre
  const getColors = (baseColor) => {
    const palette = {
      pink: "bg-pink-100 text-pink-500 border-pink-100",
      violet: "bg-violet-100 text-violet-500 border-violet-100",
      fuchsia: "bg-fuchsia-100 text-fuchsia-500 border-fuchsia-100",
      emerald: "bg-emerald-100 text-emerald-500 border-emerald-100",
      rose: "text-rose-600 dark:text-rose-300",
      purple: "text-purple-600 dark:text-purple-300",
      emeraldText: "text-emerald-600 dark:text-emerald-300"
    }
    return palette[baseColor] || palette['pink'];
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-8 flex flex-col items-center">
      {/* Encabezado Principal de la Síntesis Visual */}
      <div className="flex items-center gap-4 mb-10 text-center flex-col md:flex-row">
        <div className="p-4 bg-violet-100 rounded-full text-violet-500">
          <Heart size={36} className="fill-current" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-slate-700 tracking-tight">
            Síntesis Visual Programada: Caso EMCO
          </h2>
          <p className="text-violet-400 font-medium mt-1">
            Una visión general técnico-legal creada en código, no en imagen.
          </p>
        </div>
      </div>

      {/* Flujo Visual Vertical (Estilo Infografía) */}
      <div className="w-full max-w-3xl relative space-y-6">
        {/* Línea Central Conectora (Cute) */}
        <div className="absolute left-[39px] md:left-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-pink-100 via-violet-100 to-emerald-100 rounded-full -translate-x-1/2"></div>

        {pasos.map((paso, index) => {
          const baseColor = paso.color;
          const colors = getColors(baseColor);
          const textClassName = getColors(paso.textColor);
          const Icon = paso.icon;

          return (
            <div key={paso.id} className="relative grid grid-cols-[80px_1fr] md:grid-cols-2 gap-6 items-center">
              
              {/* Ícono central flotante */}
              <div className="relative flex justify-center md:justify-center">
                <div className={`p-5 ${colors} rounded-full border-4 shadow-md transform hover:scale-110 transition-transform duration-300`}>
                  <Icon size={30} />
                </div>
              </div>

              {/* Tarjeta de Información (Kawaii-formal) */}
              <div className={`bg-slate-50 border ${colors} rounded-2xl p-6 shadow-inner md:max-w-md ${index % 2 === 0 ? 'md:justify-self-start' : 'md:justify-self-end md:order-first'}`}>
                <h3 className={`text-xl font-bold ${textClassName} mb-2 flex items-center gap-2`}>
                  <span className="opacity-60">#{paso.id}</span> {paso.titulo}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  {paso.descripcion}
                </p>
              </div>
            </div>
          );
        })}

        {/* Punto final cute */}
        <div className="absolute -bottom-5 left-[39px] md:left-1/2 w-5 h-5 bg-emerald-300 rounded-full -translate-x-1/2 border-4 border-white dark:border-slate-900 shadow-md"></div>
      </div>
    </div>
  )
}

export default SintesisVisual;
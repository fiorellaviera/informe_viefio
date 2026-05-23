import { useState } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'

function AccordionItem({ title, icon: Icon, children }) {
  // Estado para controlar si este menú está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-pink-100 overflow-hidden hover:border-pink-200 transition-colors mb-4">
      
      {/* Cabecera del menú (donde el usuario hace clic) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between gap-4 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          {Icon && (
            <div className={`p-3 rounded-full ${isOpen ? 'bg-fuchsia-100 text-fuchsia-500' : 'bg-pink-100 text-pink-500'}`}>
              <Icon size={24} />
            </div>
          )}
          <h2 className={`text-xl font-bold ${isOpen ? 'text-fuchsia-700' : 'text-slate-700'}`}>
            {title}
          </h2>
          {isOpen && <Sparkles className="text-pink-300" size={18} />}
        </div>
        
        {/* Ícono de flecha que rota */}
        <ChevronDown 
          className={`text-slate-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-fuchsia-500' : ''}`} 
          size={24} 
        />
      </button>

      {/* Contenido desplegable (el efecto cascada) */}
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100 p-8 pt-0' : 'max-h-0 opacity-0 p-0'
        }`}
      >
        {/* Aquí renderizamos el componente hijo (ej: <Resumen />) */}
        {children}
      </div>
    </div>
  )
}

export default AccordionItem
import { useState } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'

function AccordionItem({ title, icon: Icon, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white dark:bg-[#160d27] rounded-3xl shadow-sm border border-pink-100 dark:border-[#3b2853] overflow-hidden transition-colors duration-500 mb-4">
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between gap-4 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          {Icon && (
            <div className={`p-3 rounded-full transition-colors ${isOpen ? 'bg-fuchsia-100 text-fuchsia-500 dark:bg-[#3b2853] dark:text-fuchsia-400' : 'bg-pink-100 text-pink-500 dark:bg-[#23153c] dark:text-purple-400'}`}>
              <Icon size={24} />
            </div>
          )}
          <h2 className={`text-xl font-bold transition-colors ${isOpen ? 'text-fuchsia-700 dark:text-fuchsia-300' : 'text-slate-700 dark:text-purple-200'}`}>
            {title}
          </h2>
          {isOpen && <Sparkles className="text-pink-300 dark:text-fuchsia-400" size={18} />}
        </div>
        
        <ChevronDown 
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-fuchsia-500 dark:text-fuchsia-400' : 'text-slate-400 dark:text-purple-400'}`} 
          size={24} 
        />
      </button>

      <div 
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[3000px] opacity-100 p-8 pt-0' : 'max-h-0 opacity-0 p-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default AccordionItem
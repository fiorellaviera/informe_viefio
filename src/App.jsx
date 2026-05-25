import { useState } from 'react'
import { Shield, BookOpen, Scale, Gavel, TableProperties, Briefcase, Database, Lightbulb, Sparkles, Image as ImageIcon, Moon, Sun, Menu } from 'lucide-react'
import AccordionItem from './components/AccordionItem'
import SintesisVisual from './components/SintesisVisual'
import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/Conclusiones'
import Prompts from './components/Prompts'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Estado para el menú móvil

  // Función para hacer scroll suave a las secciones
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.scrollY - 100; // -100px para que el Navbar no tape el título
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Cierra el menú en móviles tras hacer clic
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-rose-50 flex flex-col font-sans transition-colors duration-500">
        
        {/* NAVBAR STICKY / BARRA DE NAVEGACIÓN (Efecto Cristal) */}
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#160d27]/80 backdrop-blur-md border-b-2 border-pink-100 dark:border-[#3b2853] transition-colors duration-500 shadow-sm">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            
            {/* Título en el Navbar */}
            <div className="flex items-center gap-3">
              <Shield size={28} className="text-pink-400" />
              <span className="font-extrabold text-slate-700 dark:text-purple-300 text-lg hidden sm:block">
                Evaluación 2 - EMCO
              </span>
            </div>

            {/* Links de Navegación (Escritorio) */}
            <div className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-600 dark:text-purple-400">
              <button onClick={() => scrollToSection('inicio')} className="hover:text-pink-500 dark:hover:text-pink-300 transition-colors">Inicio</button>
              <button onClick={() => scrollToSection('sintesis')} className="hover:text-violet-500 dark:hover:text-violet-300 transition-colors">Síntesis Visual</button>
              <button onClick={() => scrollToSection('informe')} className="hover:text-fuchsia-500 dark:hover:text-fuchsia-300 transition-colors">Informe Legal</button>
            </div>

            <div className="flex items-center gap-3">
              {/* Botón Mágico del Modo Oscuro */}
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 bg-pink-50 text-pink-500 hover:bg-pink-100 dark:bg-[#23153c] dark:text-purple-300 dark:hover:bg-[#3b2853] rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
                title="Cambiar tema"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Menú Hamburguesa (Móviles) */}
              <button 
                className="md:hidden p-2 text-slate-600 dark:text-purple-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          {/* Menú Desplegable (Móviles) */}
          {isMenuOpen && (
            <div className="md:hidden px-6 py-4 bg-white dark:bg-[#160d27] border-t border-pink-50 dark:border-[#3b2853] flex flex-col gap-4 font-bold text-slate-600 dark:text-purple-300 shadow-lg">
              <button onClick={() => scrollToSection('inicio')} className="text-left hover:text-pink-500">Inicio</button>
              <button onClick={() => scrollToSection('sintesis')} className="text-left hover:text-violet-500">Síntesis Visual</button>
              <button onClick={() => scrollToSection('informe')} className="text-left hover:text-fuchsia-500">Informe Legal</button>
            </div>
          )}
        </nav>

        {/* Encabezado Principal */}
        <header id="inicio" className="bg-white border-b-2 border-pink-100 py-12 px-6 shadow-sm relative transition-colors duration-500 dark:bg-[#160d27] dark:border-[#3b2853]">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <div>
              <h1 className="text-4xl font-extrabold text-slate-700 dark:text-purple-200 tracking-tight">
                Análisis de Ciberseguridad
              </h1>
              <p className="text-pink-400 dark:text-pink-300 font-medium mt-2 text-lg">
                T13034 Fundamentos de Seguridad de la Información
              </p>
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-4xl mx-auto px-6 py-10 w-full space-y-12">
          
          {/* Bienvenida */}
          <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-8 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-violet-400" />
              <h2 className="text-xl font-bold text-slate-700">
                Bienvenida
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              Este sitio contiene el análisis legal del caso <strong>Estado Mayor Conjunto (EMCO)</strong>.
              A continuación se presenta una síntesis visual programada en React y el informe interactivo en formato desplegable.
            </p>
          </div>

          {/* SÍNTESIS VISUAL PROGRAMADA */}
          <div id="sintesis" className="scroll-mt-24">
            <SintesisVisual />
          </div>

          {/* Informe Interactivo */}
          <div id="informe" className="space-y-6 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-slate-700 border-b border-pink-100 dark:border-[#3b2853] pb-3 mb-6">
              Detalle del Informe Legal
            </h2>
            <AccordionItem title="1. Resumen Ejecutivo" icon={Shield}>
              <Resumen />
            </AccordionItem>
            <AccordionItem title="2. Marco Normativo" icon={Scale}>
              <Marco />
            </AccordionItem>
            <AccordionItem title="3. Tipificación de Delitos" icon={Gavel}>
              <Delitos />
            </AccordionItem>
            <AccordionItem title="4. Comparación de Marcos" icon={TableProperties}>
              <Comparacion />
            </AccordionItem>
            <AccordionItem title="5. Responsabilidades Legales" icon={Briefcase}>
              <Responsabilidades />
            </AccordionItem>
            <AccordionItem title="6. Tratamiento de Datos (ARCO)" icon={Database}>
              <Datos />
            </AccordionItem>
            <AccordionItem title="7. Conclusiones y Recomendaciones" icon={Lightbulb}>
              <Conclusiones />
            </AccordionItem>
            <AccordionItem title="8. Bitácora de Prompts" icon={Sparkles}>
              <Prompts />
            </AccordionItem>
          </div>

        </main>

        {/* Pie de página con Enlace a GitHub */}
        <footer className="bg-pink-50 dark:bg-[#23153c] border-t border-pink-100 dark:border-[#3b2853] text-slate-500 text-sm py-8 px-6 mt-auto transition-colors duration-500">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center font-medium gap-4">
            
            {/* Nombre de estudiante con link a tu GitHub */}
            <a 
              href="https://github.com/fiorellaviera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 dark:text-purple-400 hover:text-pink-800 dark:hover:text-purple-200 hover:underline transition-colors flex items-center gap-2"
            >
              🌸 Estudiante: Fiorella Viera
            </a>

            <span className="text-center md:text-right">Docente: Rubén Schnettler L.<br className="md:hidden"/> INACAP Valparaíso</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
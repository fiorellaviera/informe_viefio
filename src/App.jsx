import { useState } from 'react'
import { Shield, BookOpen, Scale, Gavel, TableProperties, Briefcase, Database, Lightbulb, Sparkles, Image as ImageIcon, Moon, Sun, Menu, X } from 'lucide-react'
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Lista completa de todas las secciones para el Navbar
  const secciones = [
    { id: 'sintesis', nombre: 'Síntesis Visual' },
    { id: 'resumen', nombre: '1. Resumen' },
    { id: 'marco', nombre: '2. Marco Legal' },
    { id: 'delitos', nombre: '3. Delitos' },
    { id: 'comparacion', nombre: '4. Comparación' },
    { id: 'responsabilidades', nombre: '5. Actores' },
    { id: 'datos', nombre: '6. Datos ARCO' },
    { id: 'conclusiones', nombre: '7. Conclusiones' },
    { id: 'prompts', nombre: '8. Prompts IA' }
  ]

  // Función para hacer scroll exacto a cada componente
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.scrollY - 140; // Espacio extra para que el nav no tape el título
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-rose-50 dark:bg-[#0b0714] flex flex-col font-sans transition-colors duration-500">
        
        {/* NAVBAR STICKY CORREGIDO (Colores sólidos y todos los links) */}
        <nav className="sticky top-0 z-50 bg-rose-50 dark:bg-[#0b0714] border-b-2 border-pink-100 dark:border-[#3b2853] transition-colors duration-500 shadow-sm py-3">
          <div className="max-w-6xl mx-auto px-6">
            
            {/* Fila superior: Logo y Botones */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <Shield size={28} className="text-pink-400" />
                <span className="font-extrabold text-slate-700 dark:text-purple-300 text-lg">
                  Informe EMCO
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 bg-pink-100 text-pink-500 hover:bg-pink-200 dark:bg-[#23153c] dark:text-purple-300 dark:hover:bg-[#3b2853] rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
                  title="Cambiar tema"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Botón menú móviles */}
                <button 
                  className="lg:hidden p-2 text-slate-600 dark:text-purple-300 bg-white dark:bg-[#23153c] rounded-full shadow-sm border border-pink-100 dark:border-[#3b2853]"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {/* Fila inferior: Links de navegación (Escritorio) - Formato Píldoras */}
            <div className="hidden lg:flex flex-wrap items-center gap-2 mt-3">
              {secciones.map((seccion) => (
                <button 
                  key={seccion.id}
                  onClick={() => scrollToSection(seccion.id)} 
                  className="px-3 py-1.5 text-xs font-bold text-slate-600 dark:text-purple-300 bg-white dark:bg-[#160d27] border border-pink-100 dark:border-[#3b2853] rounded-full hover:bg-pink-100 hover:text-pink-600 dark:hover:bg-[#3b2853] dark:hover:text-purple-100 transition-colors shadow-sm"
                >
                  {seccion.nombre}
                </button>
              ))}
            </div>
          </div>

          {/* Menú Desplegable (Móviles) */}
          {isMenuOpen && (
            <div className="lg:hidden px-6 py-4 bg-white dark:bg-[#160d27] border-t border-pink-100 dark:border-[#3b2853] flex flex-col gap-3 font-bold text-sm text-slate-600 dark:text-purple-300 shadow-lg absolute w-full left-0 mt-3">
              {secciones.map((seccion) => (
                <button 
                  key={seccion.id}
                  onClick={() => scrollToSection(seccion.id)} 
                  className="text-left py-2 border-b border-pink-50 dark:border-[#23153c] hover:text-pink-500 dark:hover:text-pink-300 last:border-0"
                >
                  {seccion.nombre}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* Encabezado Principal */}
        <header className="bg-white border-b-2 border-pink-100 py-12 px-6 shadow-sm relative transition-colors duration-500 dark:bg-[#160d27] dark:border-[#3b2853]">
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
          <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-8 transition-colors duration-500 dark:bg-[#160d27] dark:border-[#3b2853]">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-violet-400" />
              <h2 className="text-xl font-bold text-slate-700 dark:text-purple-200">
                Bienvenida
              </h2>
            </div>
            <p className="text-slate-600 dark:text-purple-300 leading-relaxed text-justify">
              Este sitio contiene el análisis legal del caso <strong>Estado Mayor Conjunto (EMCO)</strong>.
              A continuación se presenta una síntesis visual programada en React y el informe interactivo en formato desplegable.
            </p>
          </div>

          <div id="sintesis" className="scroll-mt-32">
            <SintesisVisual />
          </div>

          {/* Contenedor de Componentes con IDs para el Scroll */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-700 dark:text-purple-200 border-b border-pink-100 dark:border-[#3b2853] pb-3 mb-6">
              Detalle del Informe Legal
            </h2>
            
            <div id="resumen" className="scroll-mt-36">
              <AccordionItem title="1. Resumen Ejecutivo" icon={Shield}>
                <Resumen />
              </AccordionItem>
            </div>
            
            <div id="marco" className="scroll-mt-36">
              <AccordionItem title="2. Marco Normativo" icon={Scale}>
                <Marco />
              </AccordionItem>
            </div>
            
            <div id="delitos" className="scroll-mt-36">
              <AccordionItem title="3. Tipificación de Delitos" icon={Gavel}>
                <Delitos />
              </AccordionItem>
            </div>
            
            <div id="comparacion" className="scroll-mt-36">
              <AccordionItem title="4. Comparación de Marcos" icon={TableProperties}>
                <Comparacion />
              </AccordionItem>
            </div>
            
            <div id="responsabilidades" className="scroll-mt-36">
              <AccordionItem title="5. Responsabilidades Legales" icon={Briefcase}>
                <Responsabilidades />
              </AccordionItem>
            </div>
            
            <div id="datos" className="scroll-mt-36">
              <AccordionItem title="6. Tratamiento de Datos (ARCO)" icon={Database}>
                <Datos />
              </AccordionItem>
            </div>
            
            <div id="conclusiones" className="scroll-mt-36">
              <AccordionItem title="7. Conclusiones y Recomendaciones" icon={Lightbulb}>
                <Conclusiones />
              </AccordionItem>
            </div>
            
            <div id="prompts" className="scroll-mt-36">
              <AccordionItem title="8. Bitácora de Prompts" icon={Sparkles}>
                <Prompts />
              </AccordionItem>
            </div>
          </div>

        </main>

        <footer className="bg-pink-50 dark:bg-[#23153c] border-t border-pink-100 dark:border-[#3b2853] text-slate-500 dark:text-purple-300 text-sm py-8 px-6 mt-auto transition-colors duration-500">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center font-medium gap-4">
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
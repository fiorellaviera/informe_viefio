import { Shield, BookOpen, Scale, Gavel, TableProperties, Briefcase, Database, Lightbulb, Sparkles, Image as ImageIcon } from 'lucide-react'
import AccordionItem from './components/AccordionItem'
import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/Conclusiones'
import Prompts from './components/Prompts'

function App() {
  return (
    <div className="min-h-screen bg-rose-50 flex flex-col font-sans">
      {/* Encabezado cute/formal */}
      <header className="bg-white border-b-2 border-pink-100 py-8 px-6 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <div className="p-3 bg-pink-100 rounded-full">
            <Shield size={36} className="text-pink-400" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-700 tracking-tight">
              Evaluación 2 - Unidad 2
            </h1>
            <p className="text-pink-400 font-medium mt-1">
              T13034 Fundamentos de Seguridad de la Información
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-10 w-full space-y-10">
        
        {/* SECCIÓN 1: Bienvenida (Esta se mantiene estática para introducción) */}
        <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-violet-400" />
            <h2 className="text-xl font-bold text-slate-700">
              Bienvenida
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-justify">
            Este sitio contiene el análisis legal del caso <strong>Estado Mayor Conjunto (EMCO)</strong>.
            A continuación se presenta el informe interactivo en formato desplegable y una síntesis visual del incidente.
          </p>
        </div>

        {/* SECCIÓN 2: Infografía Final */}
        <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-6 flex flex-col items-center justify-center text-center">
          <div className="p-4 bg-violet-100 rounded-full text-violet-500 mb-5">
            <ImageIcon size={40} />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-700">Síntesis Visual</h3>
          <p className="text-violet-400 font-medium mt-1 mb-6">
            Análisis Gráfico del Incidente
          </p>
          
          {/* Imagen de la Infografía */}
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl shadow-lg border border-pink-50">
            <img 
              src="/infografia.png" 
              alt="Infografía Caso EMCO" 
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <p className="mt-6 text-slate-400 text-xs italic">
            Diseño conceptual realizado con asistencia de IA y editado para precisión académica.
          </p>
        </div>

        {/* SECCIÓN 3: Informe Interactiva (Efecto Cascado/Acordeón) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-700 border-b border-pink-100 pb-3">
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

      {/* Pie de página cute/formal */}
      <footer className="bg-pink-50 border-t border-pink-100 text-slate-500 text-sm py-8 px-6 mt-auto">
        <div className="max-w-4xl mx-auto flex justify-between items-center font-medium">
          <span className="text-pink-600">🌸 Estudiante: Fiorella Viera</span>
          <span>Docente: Rubén Schnettler L. - INACAP Valparaíso</span>
        </div>
      </footer>
    </div>
  )
}

export default App
import { Shield, BookOpen } from 'lucide-react'
import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'

function App() {
  return (
    <div className="min-h-screen bg-rose-50 flex flex-col font-sans">
      {/* Encabezado en tonos pastel */}
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

      <main className="flex-1 max-w-4xl mx-auto px-6 py-10 w-full space-y-8">
        
        {/* Tarjeta de Bienvenida */}
        <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-violet-400" />
            <h2 className="text-xl font-bold text-slate-700">
              Bienvenida
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Este sitio contiene el análisis legal del caso <strong>Estado Mayor Conjunto (EMCO)</strong>.
            A continuación se presenta el informe detallado en formato interactivo.
          </p>
        </div>

        {/* Aquí se cargarán los componentes de tu informe */}
        <Resumen />
        <Marco />
        <Delitos />
        <Comparacion />
        <Responsabilidades />
      

      </main>

      {/* Pie de página cálido y formal */}
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
import { GANADERIA_DATA } from '@/constants/data'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <header className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800">Impacto Ganadero: Colombia y Cesar</h1>
        <p className="text-gray-600 mt-2">Análisis de impacto económico, social y productivo 2024-2025</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card de Impacto Económico */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
          <h2 className="text-xl font-bold mb-4">Económico</h2>
          <p className="text-3xl font-bold text-green-700">{GANADERIA_DATA.cesar.pib_agro}</p>
          <p className="text-sm text-gray-500">del PIB Agropecuario del Cesar</p>
        </div>
        
        {/* Card de Trazabilidad */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
          <h2 className="text-xl font-bold mb-4">Trazabilidad ICA</h2>
          <ul className="text-sm space-y-2">
            <li>✅ Identificación Nacional (DIN)</li>
            <li>✅ Predios Libres de Brucelosis</li>
            <li>✅ Estatus Exportador</li>
          </ul>
        </div>

        {/* Card Social */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-600">
          <h2 className="text-xl font-bold mb-4">Social</h2>
          <p className="font-semibold text-gray-700">1.1M Empleos Directos</p>
          <p className="text-sm text-gray-500 mt-2">Sustento del 81% de pequeños productores.</p>
        </div>
      </div>
    </main>
  )
}

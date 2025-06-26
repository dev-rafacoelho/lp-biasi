'use client'

import Image from 'next/image'

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      image: "/jardim.jpg",
      title: "Jardim Oriente",
      description: "Sem entrada e parcelamento em 156 vezes, liberado para construir imediatamente com estrutura 100% completa!",
      type: "Loteamento",
      highlight: "156x sem entrada"
    },
    {
      id: 2,
      image: "/canario.jpg",
      title: "Recanto dos Canários",
      description: "Sem entrada e parcelamento em 225 vezes, concorre a uma moto zero km na compra, obras avançadas!",
      type: "Loteamento",
      highlight: "225x + Moto 0km"
    },
    {
      id: 3,
      image: "/buritis.png",
      title: "Residencial Buritis",
      description: "Maior bairro da MT-140, muito consolidado, comércio local já estabilizado, poucas unidades disponíveis, lotes de 300 m²",
      type: "Loteamento",
      highlight: "Lotes 300m²"
    }
  ]

  return (
    <section id="imoveis" className="py-20 bg-gray-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Destaques do Nosso Portfólio
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Descubra os melhores imóveis selecionados especialmente para você. 
            Cada propriedade foi cuidadosamente escolhida por sua qualidade e potencial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 space-y-2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium block">
                    {property.type}
                  </span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium block">
                    {property.highlight}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{property.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{property.description}</p>
                <button 
                  onClick={() => {
                    // Store the selected property name for the form
                    sessionStorage.setItem('selectedProperty', property.title)
                    // Scroll to contact form
                    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
import Image from 'next/image'

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Apartamento de Alto Padrão - Centro",
      description: "3 suítes, 2 vagas, lazer completo. Conforto e sofisticação em cada detalhe.",
      type: "Apartamento"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Casa dos Sonhos - Condomínio X",
      description: "4 quartos, 500m² de área construída, espaço gourmet. Viva com segurança e tranquilidade.",
      type: "Casa"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Terreno para Construir - Bairro Y",
      description: "450m², excelente localização, pronto para construir seu projeto. Oportunidade única!",
      type: "Terreno"
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
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{property.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{property.description}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">
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
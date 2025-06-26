import Image from 'next/image'

export default function AboutSection() {

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher a Biasi Negócios Imobiliários?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Com anos de experiência no mercado imobiliário, nossa missão é conectar pessoas aos seus lares ideais, 
            oferecendo serviços de excelência e construindo relacionamentos duradouros baseados na confiança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/daneil.jpg"
              alt="Consultor imobiliário atendendo casal em escritório moderno"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Experiência que faz a diferença
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nossa equipe de especialistas está comprometida em oferecer um atendimento excepcional, 
              utilizando as melhores práticas do mercado e tecnologia de ponta para garantir que cada 
              cliente tenha uma experiência única e satisfatória.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Seja para comprar, vender ou investir, estamos aqui para tornar seu processo imobiliário 
              simples, seguro e bem-sucedido.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 
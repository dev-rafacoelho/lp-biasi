'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  const testimonials = [
    {
      id: 1,
      name: "Ana Lúcia S.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "A Biasi me ajudou a encontrar o apartamento perfeito para minha família. O atendimento foi impecável e eles cuidaram de tudo! Recomendo muito!"
    },
    {
      id: 2,
      name: "Marcos e Julia R.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Compramos nosso primeiro terreno com a Biasi. A consultoria foi fundamental e nos deu muita segurança para investir. Estamos realizando nosso sonho!"
    },
    {
      id: 3,
      name: "Carlos V.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Profissionalismo e transparência do início ao fim. Vendi meu imóvel de forma rápida e segura. A Biasi superou minhas expectativas!"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que nossos clientes dizem sobre nós
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação de nossos clientes é nossa maior conquista. Confira alguns depoimentos 
            de quem já teve a experiência Biasi.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto border-4 border-blue-500"
                />
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </blockquote>
              <cite className="text-lg font-semibold text-blue-500">
                {testimonials[currentTestimonial].name}
              </cite>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
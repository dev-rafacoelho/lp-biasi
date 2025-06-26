'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/fundo2.jpg"
        alt="Vista aérea de loteamento e terrenos"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
          Onde seus sonhos ganham endereço.
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-200 mb-8 font-light drop-shadow-md">
          Credibilidade para hoje, valorização para o amanhã.
        </h2>
        <button
          onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Encontre seu novo lar
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
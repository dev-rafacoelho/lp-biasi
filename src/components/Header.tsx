'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center h-16">
            <Image
              src={isScrolled ? "/01.png" : "/03.png"}
              alt="Biasi Negócios Imobiliários"
              width={350}
              height={260}
              className="h-full w-auto object-contain transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#inicio" 
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-[#014ab1]' 
                  : 'text-white hover:text-blue-400'
              }`}
            >
              Início
            </a>
            <a 
              href="#sobre" 
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-[#014ab1]' 
                  : 'text-white hover:text-blue-400'
              }`}
            >
              Sobre
            </a>
            <a 
              href="#imoveis" 
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-[#014ab1]' 
                  : 'text-white hover:text-blue-400'
              }`}
            >
              Imóveis
            </a>
            <a 
              href="#contato" 
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-[#014ab1]' 
                  : 'text-white hover:text-blue-400'
              }`}
            >
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#014ab1] hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 
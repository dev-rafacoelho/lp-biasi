'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    neighborhood: '',
    budget: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Formulário enviado:', formData)
    alert('Obrigado pelo seu interesse! Em breve entraremos em contato.')
  }

  return (
    <section id="contato" className="py-20 bg-blue-500">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Encontre o lar dos seus sonhos hoje!
              </h2>
              <p className="text-xl text-blue-100">
                Preencha o formulário e um de nossos especialistas entrará em contato 
                para te ajudar a encontrar o imóvel ideal.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(66) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="neighborhood" className="block text-gray-700 font-medium mb-2">
                    Bairro de Interesse
                  </label>
                  <input
                    type="text"
                    id="neighborhood"
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: Centro, Jardins..."
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">
                  Orçamento Aproximado
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione uma faixa</option>
                  <option value="ate-200k">Até R$ 200.000</option>
                  <option value="200k-500k">R$ 200.000 - R$ 500.000</option>
                  <option value="500k-1m">R$ 500.000 - R$ 1.000.000</option>
                  <option value="acima-1m">Acima de R$ 1.000.000</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensagem (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Conte-nos mais sobre o que você procura..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-colors duration-300 transform hover:scale-105"
              >
                Falar com um Especialista
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Pessoa contemplando horizonte através de janela com xícara de café"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="mt-6 text-center text-white">
              <p className="text-lg font-medium">
                &ldquo;Sua nova vida começa aqui&rdquo;
              </p>
              <p className="text-blue-100 mt-2">
                Deixe-nos ajudá-lo a encontrar o lar perfeito
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
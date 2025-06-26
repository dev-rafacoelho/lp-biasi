'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Toast from './Toast'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    neighborhood: '',
    budget: '',
    message: ''
  })

  const [toast, setToast] = useState({
    isVisible: false,
    message: '',
    type: 'success' as 'success' | 'error'
  })

  const [isLoading, setIsLoading] = useState(false)

  // Check for selected property from sessionStorage
  useEffect(() => {
    const selectedProperty = sessionStorage.getItem('selectedProperty')
    if (selectedProperty) {
      setFormData(prev => ({
        ...prev,
        neighborhood: selectedProperty,
        message: `Tenho interesse no loteamento ${selectedProperty}. Gostaria de receber mais informações.`
      }))
      // Clear the selection after using it
      sessionStorage.removeItem('selectedProperty')
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setToast({
          isVisible: true,
          message: 'Obrigado pelo seu interesse! Em breve entraremos em contato.',
          type: 'success'
        })
        // Limpar o formulário
        setFormData({
          name: '',
          email: '',
          phone: '',
          neighborhood: '',
          budget: '',
          message: ''
        })
      } else {
        setToast({
          isVisible: true,
          message: 'Erro ao enviar mensagem. Tente novamente.',
          type: 'error'
        })
      }
    } catch (error) {
      console.error('Erro:', error)
      setToast({
        isVisible: true,
        message: 'Erro ao enviar mensagem. Tente novamente.',
        type: 'error'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contato" className="py-20 bg-[#014ab1]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left mb-8"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Encontre o lar dos seus sonhos hoje!
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-xl text-blue-100"
              >
                Preencha o formulário e um de nossos especialistas entrará em contato 
                para te ajudar a encontrar o imóvel ideal.
              </motion.p>
            </motion.div>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-black font-medium mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#014ab1] focus:border-transparent placeholder-black text-black"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-black font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#014ab1] focus:border-transparent placeholder-black text-black"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6 text-black">
                <div>
                  <label htmlFor="phone" className="block text-black font-medium mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#014ab1] focus:border-transparent placeholder-black"
                    placeholder="(66) 99684-8866"
                  />
                </div>
                <div>
                  <label htmlFor="neighborhood" className="block text-black font-medium mb-2">
                    Loteamento/Bairro de Interesse
                  </label>
                  <input
                    type="text"
                    id="neighborhood"
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#014ab1] focus:border-transparent placeholder-black text-black"
                    placeholder="Ex: Jardim Oriente, Recanto dos Canários..."
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="budget" className="block text-black font-medium mb-2">
                  Valor de parcela esperado
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#014ab1] focus:border-transparent text-black"
                >
                  <option value="">Selecione uma faixa</option>
                  <option value="500-800">R$ 500 - R$ 800</option>
                  <option value="800-1300">R$ 800 - R$ 1.300</option>
                  <option value="1300-acima">R$ 1.300 - acima</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-black font-medium mb-2">
                  Mensagem (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#014ab1] focus:border-transparent placeholder-black text-black"
                  placeholder="Conte-nos mais sobre o que você procura..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '18px',
                  color: 'white',
                  backgroundColor: isLoading ? '#60A5FA' : '#3B82F6',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  border: 'none',
                  minHeight: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: isLoading ? 0.8 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.backgroundColor = '#2563EB'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.backgroundColor = '#3B82F6'
                  }
                }}
              >
                {isLoading ? (
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <span 
                      style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid white',
                        borderTop: '2px solid transparent',
                        borderRadius: '50%',
                        marginRight: '12px',
                        animation: 'spin 1s linear infinite'
                      }}
                    ></span>
                    Enviando...
                  </span>
                ) : (
                  'Falar com um Especialista'
                )}
              </button>
            </form>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <Image
                src="/sonho.jpg"
                alt="Pessoa contemplando horizonte através de janela com xícara de café"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-6 text-center text-white"
            >
              <p className="text-lg font-medium">
                &ldquo;Sua nova vida começa aqui&rdquo;
              </p>
              <p className="text-blue-100 mt-2">
                Deixe-nos ajudá-lo a encontrar o lar perfeito
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast({ ...toast, isVisible: false })}
      />
    </section>
  )
} 
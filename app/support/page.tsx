"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Mail, HelpCircle, ChevronDown } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [showMoreFAQ, setShowMoreFAQ] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Replace these with your EmailJS credentials
    const serviceID = "gmailMessage"
    const templateID = "template_i4op73u"
    const publicKey = "8QiCkTsjgL2ekFBKa"

    // EmailJS send function (you need to install: npm install @emailjs/browser)
    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        alert("Mensagem enviada com sucesso!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      })
      .catch(() => {
        alert("Erro ao enviar mensagem. Tente novamente.")
      })

    // Temporary fallback
    console.log("Form submitted:", formData)
    // alert("Mensagem enviada! Entraremos em contato em breve.")
  }

  const handleWhatsApp = () => {
    // Replace with your WhatsApp number
    const phoneNumber = "5565993576310" 
    const message = encodeURIComponent("Olá! Preciso de suporte com o Glyph Translator.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Central de Suporte</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudá-lo a aproveitar ao máximo o Glyph Translator. Encontre respostas para perguntas
              comuns ou entre em contato com nossa equipe de suporte.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Dúvidas Frequentes</h2>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-4">
                  <AccordionTrigger>Como funciona a tecnologia OCR?</AccordionTrigger>
                  <AccordionContent>
                    Nossa tecnologia OCR avançada usa algoritmos de aprendizado de máquina para reconhecer texto de
                    imagens e telas com precisão. Suporta múltiplos idiomas e pode lidar com várias fontes e estilos de
                    formatação.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-4">
                  <AccordionTrigger>Quais idiomas são suportados?</AccordionTrigger>
                  <AccordionContent>
                    O Glyph Translator suporta mais de 100 idiomas com detecção automática. Idiomas populares incluem
                    português, inglês, espanhol, francês, alemão, chinês, japonês, coreano e muitos outros.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-4">
                  <AccordionTrigger>Como faço para capturar texto de uma janela específica?</AccordionTrigger>
                  <AccordionContent>
                    Basta selecionar a opção Captura em Janela no menu principal e escolher a janela desejada. O aplicativo irá reconhecer automaticamente o texto visível nessa janela.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-4">
                  <AccordionTrigger>Posso usar offline?</AccordionTrigger>
                  <AccordionContent>
                    Atualmente, o Glyph Translator requer conexão com a internet para desempenho ideal. Estamos
                    trabalhando em recursos offline para versões futuras.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg px-4">
                  <AccordionTrigger>Posso traduzir texto de uma imagem ou PDF aberto na tela?</AccordionTrigger>
                  <AccordionContent>
                    Sim. Basta abrir o arquivo no seu visualizador preferido e usar qualquer modo de captura para selecionar o texto visível.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-8">
                <Button
                  onClick={() => setShowMoreFAQ(!showMoreFAQ)}
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 interactive-element"
                >
                  Mais Dúvidas
                  <ChevronDown className={`w-4 h-4 transition-transform ${showMoreFAQ ? "rotate-180" : ""}`} />
                </Button>
              </div>

              {showMoreFAQ && (
                <div className="mt-6">
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="more-1" className="border rounded-lg px-4">
                      <AccordionTrigger>O Glyph Translator funciona em jogos?</AccordionTrigger>
                      <AccordionContent>
                        Sim! O Glyph Translator é otimizado para funcionar com jogos, incluindo jogos em tela cheia. Ele
                        pode capturar e traduzir texto de diálogos, menus e interfaces de jogos em tempo real.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="more-2" className="border rounded-lg px-4">
                      <AccordionTrigger>Quais são os requisitos mínimos do sistema?</AccordionTrigger>
                      <AccordionContent>
                        Windows 10 ou superior, 4GB de RAM, 500MB de espaço livre em disco e conexão com a internet.
                        Para melhor desempenho, recomendamos 8GB de RAM e processador Intel i5 ou equivalente.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="more-3" className="border rounded-lg px-4">
                      <AccordionTrigger>Como funciona o Text-to-Speech (TTS)?</AccordionTrigger>
                      <AccordionContent>
                        Nosso TTS usa vozes neurais avançadas para pronunciar traduções com naturalidade. Suporta
                        múltiplos idiomas e permite ajustar velocidade e tom da voz conforme sua preferência.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="more-4" className="border rounded-lg px-4">
                      <AccordionTrigger>Posso traduzir vídeos e streams?</AccordionTrigger>
                      <AccordionContent>
                        Sim, o Glyph Translator pode capturar e traduzir legendas de vídeos, streams ao vivo e conteúdo
                        multimídia em tempo real, incluindo plataformas como YouTube, Netflix e Twitch.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="more-5" className="border rounded-lg px-4">
                      <AccordionTrigger>O aplicativo consome muitos recursos do sistema?</AccordionTrigger>
                      <AccordionContent>
                        O Glyph Translator é otimizado para baixo consumo de recursos. Usa aproximadamente 200-400MB de
                        RAM e menos de 5% da CPU durante uso normal, garantindo que não afete o desempenho de outros
                        aplicativos.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="more-6" className="border rounded-lg px-4">
                      <AccordionTrigger>Funciona com múltiplos monitores?</AccordionTrigger>
                      <AccordionContent>
                        Sim, o Glyph Translator suporta configurações de múltiplos monitores e pode capturar texto de
                        qualquer tela conectada ao seu sistema, incluindo monitores secundários e TVs.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="more-7" className="border rounded-lg px-4">
                      <AccordionTrigger>Como funciona a reconstrução de imagens?</AccordionTrigger>
                      <AccordionContent>
                        Nossa tecnologia de reconstrução de imagens substitui o texto original pela tradução mantendo o
                        estilo, fonte e formatação originais, criando uma experiência visual natural e imersiva.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="more-8" className="border rounded-lg px-4">
                      <AccordionTrigger>Posso personalizar as traduções e atalhos?</AccordionTrigger>
                      <AccordionContent>
                        Sim, o Glyph Translator oferece amplas opções de personalização, incluindo atalhos de teclado
                        customizáveis, glossários pessoais, preferências de tradução e configurações de interface
                        adaptáveis às suas necessidades.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              )}
            </div>

            {/* Contact Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Entre em Contato</h2>
                <p className="text-muted-foreground mb-6">
                  Não encontrou o que procura? Entre em contato diretamente com nossa equipe de suporte.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <Button
                    onClick={handleWhatsApp}
                    className="interactive-element flex items-center gap-2 bg-transparent"
                    variant="outline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Suporte WhatsApp
                  </Button>

                  <Button className="interactive-element flex items-center gap-2 bg-transparent" variant="outline">
                    <Mail className="w-4 h-4" />
                    Suporte por Email
                  </Button>
                </div>
              </div>

              <Card className="interactive-element">
                <CardHeader>
                  <CardTitle>Envie uma Mensagem</CardTitle>
                  <CardDescription>Preencha o formulário abaixo e retornaremos em até 24 horas.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        placeholder="Seu Nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                      <Input
                        type="email"
                        placeholder="Seu Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <Input
                      placeholder="Assunto"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                    <Textarea
                      placeholder="Descreva seu problema ou pergunta..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                    <Button type="submit" className="w-full interactive-element">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Languages, AudioLines, ImageIcon, Zap, Upload } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Tecnologia Avançada de Tradução
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            Traduza Qualquer Tela
            <br />
            <span className="glyph-logo text-primary">Instantaneamente</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Aplicativo revolucionário de tradução de tela com OCR, TTS e reconstrução de imagem. Quebre barreiras
            linguísticas com precisão profissional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/download">
              <Button size="lg" className="interactive-element">
                Baixar Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Recursos Poderosos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologia avançada que torna a tradução perfeita e precisa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="interactive-element">
              <CardHeader>
                <Eye className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Tecnologia OCR</CardTitle>
                <CardDescription>
                  Reconhecimento óptico de caracteres avançado para capturar texto de qualquer imagem ou tela
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="interactive-element">
              <CardHeader>
                <Languages className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Detecção Automática de Idioma</CardTitle>
                <CardDescription>Reconhece automaticamente o idioma de origem para tradução perfeita</CardDescription>
              </CardHeader>
            </Card>

            <Card className="interactive-element">
              <CardHeader>
                <AudioLines className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Texto para Fala</CardTitle>
                <CardDescription>TTS de alta qualidade para texto traduzido com síntese de voz natural</CardDescription>
              </CardHeader>
            </Card>

            <Card className="interactive-element">
              <CardHeader>
                <ImageIcon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Reconstrução de Imagem</CardTitle>
                <CardDescription>Reconstrói imagens com texto traduzido mantendo a formatação original</CardDescription>
              </CardHeader>
            </Card>

            <Card className="interactive-element">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Múltiplos Modos de Captura</CardTitle>
                <CardDescription>
                  Modos de captura por recorte, janela e tela cheia para qualquer necessidade de tradução
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="interactive-element">
              <CardHeader>
                <Upload className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Upload de Arquivo</CardTitle>
                <CardDescription>Faça upload ou arraste um arquivo para tradução</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pronto para Quebrar Barreiras Linguísticas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais que confiam no Glyph Translator para suas necessidades de tradução
          </p>
          <Link href="/download">
            <Button size="lg" className="interactive-element">
              Comece Hoje
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="/Logo.png" alt="Glyph Translator Logo" width={32} height={32} className="rounded-lg" />
            <span className="glyph-logo text-xl font-bold text-foreground">Glyph Translator</span>
          </div>
          <p className="text-muted-foreground">© 2024 Glyph Translator. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

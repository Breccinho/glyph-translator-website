"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Monitor, CheckCircle, AlertCircle } from "lucide-react"

export default function DownloadPage() {

  const handleDownload = () => {
  // Cria um link temporário para download
  const link = document.createElement("a")
  link.href = "/downloads/glyph-translator-setup.exe" // Caminho para seu arquivo
  link.download = "Glyph-Translator-Setup.exe" // Nome do arquivo baixado
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Download className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Baixar <span className="glyph-logo text-primary">Glyph Translator</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Comece com a tecnologia de tradução de tela mais avançada. Disponível para Windows.
            </p>
            <Badge variant="secondary" className="mb-8">
              Versão Oficial
            </Badge>
          </div>

          {/* Download Options */}
          <div className="flex justify-center mb-16">
            <Card className="interactive-element text-center max-w-md w-full border-primary">
              <CardHeader>
                <Badge className="mb-2">Recomendado</Badge>
                <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Windows</CardTitle>
                <CardDescription>Windows 10/11 (64-bit)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Versão 1.0.0
                    <br />
                    Tamanho: 125 MB
                  </div>
                  <Button className="w-full interactive-element" onClick={handleDownload}>
                    <Download className="w-4 h-4 mr-2" />
                    Baixar Agora
                  </Button> 
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Requirements */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="interactive-element">
              <CardHeader>
                <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
                <CardTitle>Requisitos do Sistema</CardTitle>
                <CardDescription>Especificações mínimas para desempenho ideal</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">RAM:</span>
                  <span>4 GB mínimo, 8 GB recomendado</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Armazenamento:</span>
                  <span>500 MB de espaço livre</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Internet:</span>
                  <span>Necessária para traduções</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Gráficos:</span>
                  <span>Compatível com qualquer interface gráfica</span>
                </div>
              </CardContent>
            </Card>

            <Card className="interactive-element">
              <CardHeader>
                <AlertCircle className="w-8 h-8 text-amber-500 mb-2" />
                <CardTitle>Lançamento Oficial</CardTitle>
                <CardDescription>Informações importantes sobre o lançamento</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Esta é a versão oficial do Glyph Translator, totalmente testada e otimizada para uso profissional.
                </p>
                <p className="text-sm text-muted-foreground">
                  Oferecemos suporte completo e atualizações regulares para garantir a melhor experiência de tradução.
                </p>
                <p className="text-sm text-muted-foreground">
                  Entre em contato conosco através dos nossos canais de suporte para qualquer dúvida ou assistência.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Future Platforms */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Outras Plataformas em Breve</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Estamos trabalhando para trazer o Glyph Translator para outras plataformas. Cadastre-se para receber
              atualizações sobre quando estarão disponíveis.
            </p>

            <div className="flex justify-center gap-8 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Monitor className="w-6 h-6" />
                <span>macOS</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Monitor className="w-6 h-6" />
                <span>Linux</span>
              </div>
            </div>

            <Button variant="outline" className="interactive-element bg-transparent">
              Notificar Quando Disponível
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

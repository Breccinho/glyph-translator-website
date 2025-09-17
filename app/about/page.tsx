import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Lightbulb, Heart, Globe, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Sobre o Glyph Translator
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Quebrando Barreiras Linguísticas
              <br />
              <span className="glyph-logo text-primary">Uma Tradução por Vez</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              O nosso propósito é quebrar as barreiras linguísticas, unificando o compartilhamento de experiências
              interculturais. Nossa missão é criar a tecnologia de tradução mais avançada e amigável disponível.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="interactive-element">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Democratizar o acesso à informação fornecendo tecnologia de tradução de ponta que é precisa, rápida e
                  acessível a todos. Nos esforçamos para eliminar barreiras linguísticas na educação, negócios e
                  comunicação diária.
                </p>
              </CardContent>
            </Card>

            <Card className="interactive-element">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Um mundo onde as diferenças linguísticas não limitam oportunidades. Vislumbramos um futuro onde
                  qualquer pessoa pode acessar, entender e contribuir para o conhecimento global, independentemente de
                  sua língua nativa.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Nossos Valores Principais</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="interactive-element text-center">
                <CardHeader>
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Inovação</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Continuamente empurrando as fronteiras da tecnologia de tradução, incorporando os últimos avanços tecnológicos
                  </p>
                </CardContent>
              </Card>

              <Card className="interactive-element text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Centrado no Usuário</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Cada recurso que construímos é projetado com nossos usuários em mente. Priorizamos a facilidade de
                    uso sem comprometer a funcionalidade.
                  </p>
                </CardContent>
              </Card>

              <Card className="interactive-element text-center">
                <CardHeader>
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Qualidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Mantemos os mais altos padrões na precisão da tradução e na confiabilidade do software para ganhar e
                    manter a confiança de nossos usuários.
                  </p>
                </CardContent>
              </Card>

              <Card className="interactive-element text-center">
                <CardHeader>
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Acessibilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Acreditamos que ferramentas de tradução poderosas devem ser acessíveis para todos, independentemente
                    de conhecimento técnico para sua utilização.
                  </p>
                </CardContent>
              </Card>

              <Card className="interactive-element text-center">
                <CardHeader>
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Precisão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nosso foco é entregar traduções precisas que preservam o significado, o contexto e as nuances
                    culturais.
                  </p>
                </CardContent>
              </Card>

              <Card className="interactive-element text-center">
                <CardHeader>
                  <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Aprendizado Contínuo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Constantemente aprendemos com feedback de usuários e padrões linguísticos em evolução para melhorar
                    nossos algoritmos de tradução.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Technology Section */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Construído com Tecnologia Avançada</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                O Glyph Translator combina OCR de ponta, tradução automática neural e tecnologias de processamento de
                imagem para oferecer precisão de tradução incomparável.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%+</div>
                <div className="text-sm text-muted-foreground">Precisão de Tradução</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Idiomas Suportados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">&lt;2s</div>
                <div className="text-sm text-muted-foreground">Tempo Médio de Processamento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

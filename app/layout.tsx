import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Glyph Translator - Tecnologia Avançada de Tradução de Tela",
  description: "Aplicativo profissional de tradução de tela com OCR, TTS e recursos de reconstrução de imagem",
  generator: "Glyph.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Carregando...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}

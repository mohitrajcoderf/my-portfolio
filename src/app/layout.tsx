import { ThemeProvider } from "@/components/providers/theme-provider"
import { siteConfig } from "@/config/site"
import "@/styles/globals.css"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL("https://mohitraj.xyz"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "mohit raj",
    "mohit raj portfolio",
    "mohit mahi",
    "mohit github",
    "mahii",
    "mahiii",
    "mahii github",
    "mahiii portfolio",
    "software developer"
  ],
  authors: [
    {
      name: "Mohit Raj",
      url: "https://mohitraj.xyz"
    }
  ],
  creator: "mohit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@mohit"
  },
  icons: {
    icon: "/favicon.ico"
  },
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        GeistSans.variable,
        GeistMono.variable
      )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-auto w-full mb-16 max-w-screen-sm overflow-x-hidden py-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

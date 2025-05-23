import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import { instrument_serif, inter, newsreader, ovo } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Mohit Raj-Web Developer & Designer",
  description:
    "Crafting interfaces. Building polished software and web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased min-h-screen",
        inter.variable,
        newsreader.variable,
        ovo.variable,
        instrument_serif.variable,
      )}
      suppressHydrationWarning
    >
      <body
        className={
          "container px-6 sm:px-0 bg-background contrast-less:opacity-80 overflow-x-hidden"
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={100}>
            <div className="blur" />
            <Nav />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
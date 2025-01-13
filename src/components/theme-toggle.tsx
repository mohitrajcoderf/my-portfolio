"use client"

import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {

    const { theme, setTheme } = useTheme()

    return (
        <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="rounded-full"
        variant="outline"
        size="icon">
            <Sun
                className="h-3 w-3 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
            <Moon
                className="absolute h-3 w-3 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
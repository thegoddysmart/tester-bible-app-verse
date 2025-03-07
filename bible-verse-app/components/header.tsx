"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookIcon as Bible, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b">
      <div className="container max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Bible className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg md:text-xl">Bible Verse of the Day</span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : "text-muted-foreground"}`}
            >
              Home
            </Link>
            <Link
              href="/favorites"
              className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/favorites" ? "text-primary" : "text-muted-foreground"}`}
            >
              Favorites
            </Link>
            <Link
              href="/categories"
              className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/categories" ? "text-primary" : "text-muted-foreground"}`}
            >
              Categories
            </Link>
          </nav>

          <ThemeToggle />

          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container max-w-4xl mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : "text-muted-foreground"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/favorites"
              className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/favorites" ? "text-primary" : "text-muted-foreground"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Favorites
            </Link>
            <Link
              href="/categories"
              className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/categories" ? "text-primary" : "text-muted-foreground"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}


"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FavoriteVerses } from "@/components/favorite-verses"
import type { BibleVerse } from "@/lib/types"

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<BibleVerse[]>([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteVerses")
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  const removeFavorite = (verseId: string) => {
    const updatedFavorites = favorites.filter((verse) => verse.id !== verseId)
    setFavorites(updatedFavorites)
    localStorage.setItem("favoriteVerses", JSON.stringify(updatedFavorites))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Favorite Verses</h1>
        <FavoriteVerses favorites={favorites} onRemove={removeFavorite} />
      </main>
      <Footer />
    </div>
  )
}


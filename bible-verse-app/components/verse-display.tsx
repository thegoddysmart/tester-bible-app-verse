"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, RefreshCw, Share2 } from "lucide-react"
import type { BibleVerse } from "@/lib/types"
import { fetchVerse } from "@/lib/api"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

interface VerseDisplayProps {
  category?: string
}

export function VerseDisplay({ category }: VerseDisplayProps) {
  const [verse, setVerse] = useState<BibleVerse | null>(null)
  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState<BibleVerse[]>([])

  useEffect(() => {
    loadVerse()

    // Load favorites from localStorage
    const storedFavorites = localStorage.getItem("favoriteVerses")
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [category])

  const loadVerse = async () => {
    setLoading(true)
    try {
      const newVerse = await fetchVerse(category)
      setVerse(newVerse)
    } catch (error) {
      console.error("Failed to fetch verse:", error)
      toast({
        title: "Error",
        description: "Failed to load verse. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleShare = async () => {
    if (!verse) return

    const shareText = `"${verse.text}" - ${verse.reference} (${verse.translation})`

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Bible Verse of the Day",
          text: shareText,
          url: window.location.href,
        })
      } catch (error) {
        console.error("Error sharing:", error)
        // Fallback to clipboard
        copyToClipboard(shareText)
      }
    } else {
      // Fallback to clipboard
      copyToClipboard(shareText)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard",
      description: "Verse copied to clipboard. You can now paste it anywhere.",
    })
  }

  const toggleFavorite = () => {
    if (!verse) return

    const isFavorite = favorites.some((fav) => fav.id === verse.id)

    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== verse.id)
      setFavorites(updatedFavorites)
      localStorage.setItem("favoriteVerses", JSON.stringify(updatedFavorites))
      toast({
        title: "Removed from favorites",
        description: "Verse has been removed from your favorites.",
      })
    } else {
      const updatedFavorites = [...favorites, verse]
      setFavorites(updatedFavorites)
      localStorage.setItem("favoriteVerses", JSON.stringify(updatedFavorites))
      toast({
        title: "Added to favorites",
        description: "Verse has been added to your favorites.",
      })
    }
  }

  const isFavorite = verse ? favorites.some((fav) => fav.id === verse.id) : false

  return (
    <div className="flex flex-col items-center">
      <Card className="w-full max-w-2xl">
        <CardContent className="pt-6">
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-6 w-3/4 mx-auto" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-2/3" />
              <div className="flex justify-end">
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
          ) : verse ? (
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-xl md:text-2xl font-serif leading-relaxed text-center">"{verse.text}"</p>
                <p className="text-right font-medium text-primary">
                  {verse.reference} <span className="text-muted-foreground">({verse.translation})</span>
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 pt-4">
                <Button variant="outline" size="sm" onClick={loadVerse}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  New Verse
                </Button>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant={isFavorite ? "default" : "outline"} size="sm" onClick={toggleFavorite}>
                  <Heart className={`mr-2 h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
                  {isFavorite ? "Saved" : "Save"}
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No verse available. Please try again.</p>
          )}
        </CardContent>
      </Card>
      <Toaster />
    </div>
  )
}


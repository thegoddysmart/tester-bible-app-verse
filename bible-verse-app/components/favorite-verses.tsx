"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import type { BibleVerse } from "@/lib/types"

interface FavoriteVersesProps {
  favorites: BibleVerse[]
  onRemove: (id: string) => void
}

export function FavoriteVerses({ favorites, onRemove }: FavoriteVersesProps) {
  if (favorites.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">You haven't saved any verses yet.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4">
      {favorites.map((verse) => (
        <Card key={verse.id}>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <p className="text-lg md:text-xl font-serif leading-relaxed">"{verse.text}"</p>
              <p className="text-right font-medium text-primary">
                {verse.reference} <span className="text-muted-foreground">({verse.translation})</span>
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline" size="sm" onClick={() => onRemove(verse.id)}>
              <Trash2 className="mr-2 h-4 w-4" />
              Remove
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}


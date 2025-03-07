"use client"

import { Button } from "@/components/ui/button"

interface CategorySelectorProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function CategorySelector({ selectedCategory, onSelectCategory }: CategorySelectorProps) {
  const categories = [
    { id: "faith", name: "Faith" },
    { id: "love", name: "Love" },
    { id: "strength", name: "Strength" },
    { id: "wisdom", name: "Wisdom" },
    { id: "hope", name: "Hope" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          onClick={() => onSelectCategory(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}


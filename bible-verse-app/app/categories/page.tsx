"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategorySelector } from "@/components/category-selector"
import { VerseDisplay } from "@/components/verse-display"

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("faith")

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Verse Categories</h1>
        <CategorySelector selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        <div className="mt-8">
          <VerseDisplay category={selectedCategory} />
        </div>
      </main>
      <Footer />
    </div>
  )
}


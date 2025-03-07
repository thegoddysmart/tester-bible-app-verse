import { VerseDisplay } from "@/components/verse-display"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <VerseDisplay />
      </main>
      <Footer />
    </div>
  )
}


import type { BibleVerse } from "./types"

// Mock data for demonstration purposes
const verses: BibleVerse[] = [
  {
    id: "1",
    text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
    reference: "John 3:16",
    translation: "ESV",
    category: "love",
  },
  {
    id: "2",
    text: "Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
    reference: "Proverbs 3:5-6",
    translation: "ESV",
    category: "faith",
  },
  {
    id: "3",
    text: "I can do all things through him who strengthens me.",
    reference: "Philippians 4:13",
    translation: "ESV",
    category: "strength",
  },
  {
    id: "4",
    text: "The fear of the LORD is the beginning of wisdom, and the knowledge of the Holy One is insight.",
    reference: "Proverbs 9:10",
    translation: "ESV",
    category: "wisdom",
  },
  {
    id: "5",
    text: "For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope.",
    reference: "Jeremiah 29:11",
    translation: "ESV",
    category: "hope",
  },
  {
    id: "6",
    text: "But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
    reference: "Isaiah 40:31",
    translation: "ESV",
    category: "strength",
  },
  {
    id: "7",
    text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.",
    reference: "Romans 8:28",
    translation: "ESV",
    category: "faith",
  },
  {
    id: "8",
    text: "A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another.",
    reference: "John 13:34",
    translation: "ESV",
    category: "love",
  },
  {
    id: "9",
    text: "If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.",
    reference: "James 1:5",
    translation: "ESV",
    category: "wisdom",
  },
  {
    id: "10",
    text: "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.",
    reference: "Romans 15:13",
    translation: "ESV",
    category: "hope",
  },
]

// In a real app, this would fetch from an API
export async function fetchVerse(category?: string): Promise<BibleVerse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  let filteredVerses = verses

  if (category) {
    filteredVerses = verses.filter((verse) => verse.category === category)

    // If no verses match the category, fall back to all verses
    if (filteredVerses.length === 0) {
      filteredVerses = verses
    }
  }

  // Get a random verse from the filtered list
  const randomIndex = Math.floor(Math.random() * filteredVerses.length)
  return filteredVerses[randomIndex]
}


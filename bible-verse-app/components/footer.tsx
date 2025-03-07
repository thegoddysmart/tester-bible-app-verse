export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">"Daily inspiration from God's Word"</p>
        <p className="text-xs text-muted-foreground mt-2">
          © {new Date().getFullYear()} Bible Verse of the Day |{" "}
          <a href="#" className="underline hover:text-primary">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  )
}


import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Markdown Magic</h1>
          <p className="mt-2 text-blue-100">Transform your text with ease</p>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 focus:ring-2 focus:ring-white/20"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}


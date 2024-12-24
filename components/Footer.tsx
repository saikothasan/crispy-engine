import { Github, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Markdown Magic</h3>
          <p className="mt-2 text-blue-100">Transforming text with ease</p>
        </div>
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-200">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-200">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="mailto:info@markdownmagic.com" className="hover:text-blue-300 transition-colors duration-200">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm text-blue-100">© 2023 Markdown Magic. All rights reserved.</p>
          <p className="text-sm text-blue-100 flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> by the Markdown Magic Team
          </p>
        </div>
      </div>
    </footer>
  )
}


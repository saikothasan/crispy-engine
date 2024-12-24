import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Download, Copy, Moon, PenTool, RotateCcw, Globe, CloudOff, Palette } from 'lucide-react'

export default function Features() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Powerful Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-indigo-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
              <Zap className="mr-2" /> Real-time Conversion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700 dark:text-gray-300">
              See your Markdown transformed instantly as you type, with an option to toggle auto-conversion.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-indigo-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
              <Globe className="mr-2" /> Multiple Formats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700 dark:text-gray-300">
              Convert your Markdown to Plain Text, HTML, LaTeX, and XML with just a click.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-indigo-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
              <Download className="mr-2" /> Easy Export
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700 dark:text-gray-300">
              Download your converted content in various formats with a single click.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-indigo-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
              <Copy className="mr-2" /> Copy to Clipboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700 dark:text-gray-300">
              Quickly copy your converted content to the clipboard for easy sharing.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-indigo-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
              <Moon className="mr-2" /> Dark Mode
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700 dark:text-gray-300">
              Switch between light and dark themes for comfortable use in any lighting condition.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-indigo-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
              <CloudOff className="mr-2" /> Offline Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700 dark:text-gray-300">
              Use Markdown Magic even without an internet connection. Your work is always accessible.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-indigo-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
              <PenTool className="mr-2" /> Rich Markdown Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700 dark:text-gray-300">
              Full support for standard Markdown syntax, including headers, lists, links, and more.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-indigo-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
              <RotateCcw className="mr-2" /> Responsive Design
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700 dark:text-gray-300">
              Use Markdown Magic on any device with our fully responsive design.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-indigo-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
              <Palette className="mr-2" /> Customizable Interface
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700 dark:text-gray-300">
              Personalize your workspace with customizable themes and layout options.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


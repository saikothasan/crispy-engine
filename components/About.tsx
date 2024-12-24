import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, FileText, Zap, Globe, Shield } from 'lucide-react'

export default function About() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">About Markdown Magic</h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg">
        Markdown Magic is your go-to tool for seamless content transformation. We empower creators, developers, and writers to effortlessly convert their Markdown into various formats, enhancing productivity and creativity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-indigo-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
              <Zap className="mr-2" /> Lightning Fast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700 dark:text-gray-300">
              Experience real-time conversion that keeps up with your thoughts, boosting your productivity.
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
              Convert your Markdown to Plain Text, HTML, LaTeX, and XML, catering to all your content needs.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-indigo-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
              <Shield className="mr-2" /> Secure & Private
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700 dark:text-gray-300">
              Your content stays on your device. We prioritize your privacy and data security.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


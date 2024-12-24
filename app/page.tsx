'use client'

import { useState } from 'react'
import { marked } from 'marked'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import About from '@/components/About'
import Features from '@/components/Features'
import FAQ from '@/components/FAQ'
import { Copy, Download, RefreshCcw } from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function Home() {
  const [markdown, setMarkdown] = useState('')
  const [outputs, setOutputs] = useState({
    plainText: '',
    html: '',
    latex: '',
    xml: ''
  })
  const [autoConvert, setAutoConvert] = useState(true)
  const [outputFormat, setOutputFormat] = useState('plainText')

  const convertMarkdown = async (input: string) => {
    setMarkdown(input)
    const plainText = input
    const html = await convertToHTML(input)
    const latex = convertToLatex(input)
    const xml = await convertToXML(input)
    setOutputs({ plainText, html, latex, xml })
  }

  const convertToLatex = (input: string): string => {
    let latex = input
      .replace(/#{1,6}\s?([^\n]+)/g, (match, p1, offset, string) => {
        const level = match.trim().indexOf(' ')
        return `\\${'sub'.repeat(level - 1)}section{${p1}}\n`
      })
      .replace(/\*\*(.+?)\*\*/g, '\\textbf{$1}')
      .replace(/\*(.+?)\*/g, '\\textit{$1}')
      .replace(/\[(.+?)\]$$(.+?)$$/g, '\\href{$2}{$1}')
    return latex
  }

  const convertToHTML = async (input: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      try {
        const html = marked(input)
        resolve(html)
      } catch (error) {
        reject(error)
      }
    })
  }

  const convertToXML = async (input: string): Promise<string> => {
    const parser = new DOMParser()
    const htmlDoc = parser.parseFromString(await convertToHTML(input), 'text/html')
    const serializer = new XMLSerializer()
    return serializer.serializeToString(htmlDoc)
  }

  const handleInputChange = (input: string) => {
    setMarkdown(input)
    if (autoConvert) {
      convertMarkdown(input)
    }
  }

  const handleConvert = () => {
    convertMarkdown(markdown)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard!')
  }

  const downloadFile = (content: string, fileType: string) => {
    const element = document.createElement('a')
    const file = new Blob([content], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `converted.${fileType}`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
    toast.success(`Downloaded ${fileType} file!`)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Tabs defaultValue="converter" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 rounded-xl bg-blue-100 dark:bg-blue-900">
            <TabsTrigger value="converter" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Converter</TabsTrigger>
            <TabsTrigger value="about" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">About</TabsTrigger>
            <TabsTrigger value="features" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Features</TabsTrigger>
            <TabsTrigger value="faq" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="converter" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Markdown Input</h2>
                <textarea
                  className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 transition-colors duration-200"
                  placeholder="Enter your Markdown here..."
                  value={markdown}
                  onChange={(e) => handleInputChange(e.target.value)}
                ></textarea>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="auto-convert"
                      checked={autoConvert}
                      onCheckedChange={setAutoConvert}
                    />
                    <Label htmlFor="auto-convert">Auto-convert</Label>
                  </div>
                  {!autoConvert && (
                    <Button onClick={handleConvert} className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
                      <RefreshCcw className="w-4 h-4 mr-2" />
                      Convert
                    </Button>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Output</h2>
                  <Select value={outputFormat} onValueChange={setOutputFormat}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plainText">Plain Text</SelectItem>
                      <SelectItem value="html">HTML</SelectItem>
                      <SelectItem value="latex">LaTeX</SelectItem>
                      <SelectItem value="xml">XML</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="relative">
                  <div className="w-full h-64 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-auto transition-colors duration-200">
                    <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200">{outputs[outputFormat as keyof typeof outputs]}</pre>
                  </div>
                  <div className="absolute top-2 right-2 space-x-2">
                    <Button size="icon" variant="outline" onClick={() => copyToClipboard(outputs[outputFormat as keyof typeof outputs])}>
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" onClick={() => downloadFile(outputs[outputFormat as keyof typeof outputs], outputFormat)}>
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="about">
            <About />
          </TabsContent>
          <TabsContent value="features">
            <Features />
          </TabsContent>
          <TabsContent value="faq">
            <FAQ />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}

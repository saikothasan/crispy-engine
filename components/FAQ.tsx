import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-b border-blue-200 dark:border-blue-800">
          <AccordionTrigger className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">What is Markdown?</AccordionTrigger>
          <AccordionContent className="text-gray-700 dark:text-gray-300">
            Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. It was created by John Gruber in 2004 and has become one of the world's most popular markup languages due to its simplicity and ease of use.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b border-blue-200 dark:border-blue-800">
          <AccordionTrigger className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">How does the converter work?</AccordionTrigger>
          <AccordionContent className="text-gray-700 dark:text-gray-300">
            Our converter uses advanced parsing algorithms to interpret your Markdown input and convert it into various formats. For HTML, we use a specialized Markdown parser. For LaTeX and XML, we've developed custom conversion logic to ensure accurate transformation while preserving the structure and meaning of your content.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b border-blue-200 dark:border-blue-800">
          <AccordionTrigger className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Can I use this converter offline?</AccordionTrigger>
          <AccordionContent className="text-gray-700 dark:text-gray-300">
            Yes! Markdown Magic is designed to work offline. Once you've loaded the website, you can use all its features without an internet connection. This makes it perfect for working on-the-go or in areas with limited connectivity.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b border-blue-200 dark:border-blue-800">
          <AccordionTrigger className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Is there a limit to how much text I can convert?</AccordionTrigger>
          <AccordionContent className="text-gray-700 dark:text-gray-300">
            There's no strict limit to the amount of text you can convert. However, very large documents (over 100,000 characters) may slow down the conversion process, especially on older devices. For optimal performance, we recommend converting smaller sections at a time for extremely large documents.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-b border-blue-200 dark:border-blue-800">
          <AccordionTrigger className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Do you support GitHub Flavored Markdown?</AccordionTrigger>
          <AccordionContent className="text-gray-700 dark:text-gray-300">
            Yes, our converter supports GitHub Flavored Markdown (GFM). This includes features like task lists, tables, and strikethrough text. However, some advanced GFM features like mentioning users or referencing issues may not be fully supported in all output formats.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="border-b border-blue-200 dark:border-blue-800">
          <AccordionTrigger className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">How accurate is the LaTeX conversion?</AccordionTrigger>
          <AccordionContent className="text-gray-700 dark:text-gray-300">
            Our LaTeX conversion is designed to be as accurate as possible, capturing the structure and formatting of your Markdown content. However, due to the differences between Markdown and LaTeX, some complex formatting or specific Markdown extensions may not have a direct LaTeX equivalent. In such cases, we strive to provide the closest possible representation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7" className="border-b border-blue-200 dark:border-blue-800">
          <AccordionTrigger className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Can I customize the output formats?</AccordionTrigger>
          <AccordionContent className="text-gray-700 dark:text-gray-300">
            Currently, we offer predefined output formats (Plain Text, HTML, LaTeX, and XML). While you can't customize these formats directly in the tool, you can easily modify the output after conversion to suit your specific needs. We're constantly working on improvements and may introduce customization options in future updates.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}


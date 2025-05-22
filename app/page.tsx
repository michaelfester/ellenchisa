import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-pink-50">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-48 mb-8 md:mb-0">
          <div className="mb-6">
            <Image
              src="/images/new-leaf-logo.png"
              alt="Marie and Michael Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </div>

          <nav className="space-y-2">
            <Link href="/" className="block py-2 px-4 bg-gray-100 text-gray-900 rounded">
              Home
            </Link>
            <Link href="/books" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Books
            </Link>
            <Link href="/stack" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Stack
            </Link>
            <Link href="/ama" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              AMA
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-6 border-8 border-white shadow-lg inline-block">
              <Image
                src="/images/marie-and-michael-main.png"
                alt="Marie and Michael"
                width={400}
                height={400}
                className="grayscale"
              />
            </div>

            <h1 className="text-3xl font-serif mb-6">Marie and Michael</h1>

            <p className="text-gray-700 mb-8">
              Hi, we're Marie and Michael, life partners and founders of{" "}
              <Link href="https://markprompt.com" className="underline hover:text-gray-900">
                Markprompt
              </Link>
              . We love to help entrepreneurs.
            </p>

            <div className="flex justify-center space-x-6">
              <Link href="https://twitter.com/marie" className="text-gray-700 hover:text-gray-900 flex items-center">
                Twitter Marie <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
              <Link href="https://twitter.com/michael" className="text-gray-700 hover:text-gray-900 flex items-center">
                Twitter Michael <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </main>
      </div>

      <footer className="text-center text-gray-500 text-sm py-8"></footer>
    </div>
  )
}

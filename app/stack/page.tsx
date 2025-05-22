import Image from "next/image"
import Link from "next/link"

export default function Stack() {
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
            <Link href="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Home
            </Link>
            <Link href="/books" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Books
            </Link>
            <Link href="/stack" className="block py-2 px-4 bg-gray-100 text-gray-900 rounded">
              Stack
            </Link>
            <Link href="/ama" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              AMA
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1">
          <h1 className="text-3xl font-serif mb-4">Stack</h1>

          <p className="text-gray-700 mb-8">The stack we use to run Markprompt.</p>

          <h2 className="text-2xl font-serif mb-6">Software</h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4 font-medium text-gray-700">Tool</th>
                  <th className="text-left py-2 font-medium text-gray-700">Category</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://figma.com" className="hover:underline">
                      Figma
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Design</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://superhuman.com" className="hover:underline">
                      Superhuman
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Email client</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://cursor.sh" className="hover:underline">
                      Cursor
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Code editor</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://v0.dev" className="hover:underline">
                      v0
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Code editor</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://hyper.is" className="hover:underline">
                      Hyper
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Terminal</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://www.notion.so/calendar" className="hover:underline">
                      Notion Calendar
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Calendar</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://www.reaper.fm" className="hover:underline">
                      Reaper
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Video editing</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://www.alfredapp.com" className="hover:underline">
                      Alfred
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Command bar</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://cleanshot.com" className="hover:underline">
                      Cleanshot
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Screenshots/recordings</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://1password.com" className="hover:underline">
                      1Password
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Password manager</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://slack.com" className="hover:underline">
                      Slack
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Internal communication</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://vercel.com" className="hover:underline">
                      Vercel
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Hosting</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://supabase.com" className="hover:underline">
                      Supabase
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Database</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://github.com" className="hover:underline">
                      GitHub
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Version control</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://linear.app" className="hover:underline">
                      Linear
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Bugs/feature tracking</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://markprompt.com" className="hover:underline">
                      Markprompt
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Customer support</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-serif mb-6">Hardware</h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4 font-medium text-gray-700">Hardware</th>
                  <th className="text-left py-2 font-medium text-gray-700">Category</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://moleskine.com" className="hover:underline">
                      Moleskine (dotted)
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Notebook</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://www.baronfig.com" className="hover:underline">
                      Baronfig Squire Rollerball Pen
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Pen</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://www.apple.com" className="hover:underline">
                      Macbook Pro 14"
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Laptop</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://www.apple.com" className="hover:underline">
                      Apple Studio Display
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Computer display</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://kinesis-ergo.com" className="hover:underline">
                      Kinesis Advantage360 Pro
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Keyboard</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://www.shure.com" className="hover:underline">
                      Shure SM7B
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Microphone</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://focusrite.com" className="hover:underline">
                      Focusrite Scarlett 2i2
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Mic preamp</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://rode.com" className="hover:underline">
                      Rode PSA1
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Mic stand</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-serif mb-6">Services</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4 font-medium text-gray-700">Service</th>
                  <th className="text-left py-2 font-medium text-gray-700">Category</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://angel.co" className="hover:underline">
                      AngelList
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Cap table management</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://mercury.com" className="hover:underline">
                      Mercury
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Corporate card</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://athena.com" className="hover:underline">
                      Athena
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Assistants and delegation tools</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://usestable.com" className="hover:underline">
                      Stable
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Physical mailbox</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://www.wsgr.com" className="hover:underline">
                      WSGR
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Legal services (happy to intro)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 text-gray-700">
                    <a href="https://finta.com" className="hover:underline">
                      Finta
                    </a>
                  </td>
                  <td className="py-3 text-gray-700">Accounting</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}

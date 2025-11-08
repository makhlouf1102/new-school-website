import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b">
      <nav className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors" href="#header">
              Internship Ally
            </a>
          </div>

          <NavigationMenu.Root className="hidden lg:flex">
            <NavigationMenu.List className="flex space-x-8">
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                  href="#about"
                >
                  About
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                  href="#services"
                >
                  Services
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                  href="#reviews"
                >
                  Reviews
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                  href="#faq"
                >
                  FAQ
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                  href="#contact"
                >
                  Contact
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>

          <div className="flex items-center">
            <a
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              href="https://calendly.com/"
              target="_blank"
              rel="noopener"
            >
              Book a Call
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
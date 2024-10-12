 // Start of Selection
'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, User, Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HomepageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-gray-900/75 border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg"
              alt="MangaRecap Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">MangaRecap</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/recaps" className="hover:text-blue-400">Recaps</Link>
            <Link href="/manga" className="hover:text-blue-400">Manga</Link>
            <Link href="/community" className="hover:text-blue-400">Community</Link>
            <Link href="/about" className="hover:text-blue-400">About</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="User">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative py-20 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=400&width=800')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Manga Recaps</h1>
          <p className="text-xl mb-8">
            Find and watch YouTube recaps of your favorite manga, manhwa, and webtoons
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex">
              <Input
                placeholder="Search for a manga, manhwa, or webtoon recap..."
                className="rounded-r-none"
              />
              <Button className="rounded-l-none">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Recap Categories */}
        <Tabs defaultValue="trending" className="mb-12">
          <TabsList className="mb-4 flex space-x-2">
            <TabsTrigger className="py-2 px-4" value="trending">Trending</TabsTrigger>
            <TabsTrigger className="py-2 px-4" value="new">New Releases</TabsTrigger>
            <TabsTrigger className="py-2 px-4" value="popular">Popular Genres</TabsTrigger>
          </TabsList>
          <TabsContent value="trending">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="bg-gray-800">
                  <CardHeader>
                    <Image
                      src={`/placeholder.svg?text=Manga+${item}`}
                      alt={`Manga ${item}`}
                      width={300}
                      height={200}
                      className="rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg">Manga Title {item}</CardTitle>
                    <CardDescription className="text-sm">
                      A brief description of the manga and its recap.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Watch Recap</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="new">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="bg-gray-800">
                  <CardHeader>
                    <Image
                      src={`/placeholder.svg?text=New+${item}`}
                      alt={`New Manga ${item}`}
                      width={300}
                      height={200}
                      className="rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg">New Manga {item}</CardTitle>
                    <CardDescription className="text-sm">
                      A brief description of the new manga release.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Watch Recap</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="popular">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Action', 'Romance', 'Fantasy', 'Sci-Fi', 'Horror', 'Comedy', 'Drama', 'Adventure'].map((genre) => (
                <Button key={genre} variant="outline" className="h-20">
                  {genre}
                </Button>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Recently Added Recaps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Recently Added Recaps</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="bg-gray-800">
                <div className="flex items-center p-4">
                  <Image
                    src={`/placeholder.svg?text=Recent+${item}`}
                    alt={`Recent Manga ${item}`}
                    width={100}
                    height={100}
                    className="rounded-lg mr-4 object-cover"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-lg">Recent Manga Title {item}</CardTitle>
                    <CardDescription className="text-sm">
                      A brief description of the recently added manga recap.
                    </CardDescription>
                  </div>
                  <Button className="ml-auto">Watch</Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Top Manga/Manhwa/Webtoons */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Top Manga/Manhwa/Webtoons</h2>
          <ScrollArea className="w-full whitespace-nowrap rounded-md border border-gray-700">
            <div className="flex w-max space-x-4 p-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Card key={item} className="w-[250px] bg-gray-800">
                  <CardHeader>
                    <Image
                      src={`/placeholder.svg?text=Top+${item}`}
                      alt={`Top Manga ${item}`}
                      width={250}
                      height={150}
                      className="rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="truncate text-lg">Top Manga Title {item}</CardTitle>
                    <CardDescription className="truncate text-sm">
                      A brief description of the top-rated manga.
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-blue-400">Home</Link>
                </li>
                <li>
                  <Link href="/recaps" className="hover:text-blue-400">Recaps</Link>
                </li>
                <li>
                  <Link href="/manga" className="hover:text-blue-400">Manga</Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-blue-400">Community</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-400">About</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Contact Us</h3>
              <p>Email: contact@mangarecap.com</p>
              <div className="flex space-x-4 mt-4">
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                    <path d="m10 15 5-3-5-3z"/>
                  </svg>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="hover:text-blue-400">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/copyright" className="hover:text-blue-400">Copyright Notice</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 MangaRecap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomepageComponent;
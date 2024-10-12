'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-cover bg-center" style={{backgroundImage: "url('/placeholder.svg?height=400&width=800')"}}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Connecting Stories with Visual Narratives</h1>
          <p className="text-xl mb-8">We help fans dive deeper into their favorite stories by linking manga/manhwa/webtoons with engaging YouTube recaps.</p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg mb-4">To create a seamless bridge between written narratives and visual storytelling, enhancing the manga experience for fans worldwide.</p>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg">A world where every manga, manhwa, and webtoon fan can easily access and enjoy high-quality video recaps, fostering a deeper understanding and appreciation of their favorite stories.</p>
            </div>
            <div className="flex justify-center">
              <Image src="/placeholder.svg" alt="Mission and Vision" width={400} height={400} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-800 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">It all began with a group of passionate manga fans who found themselves constantly searching for video recaps of their favorite series. Realizing the need for a centralized platform, we set out to create MangaRecap.</p>
            <p className="text-lg mb-4">Our journey wasn't without challenges. From curating high-quality content to developing a user-friendly interface, we've overcome numerous obstacles. But with each hurdle, our commitment to serving the manga community grew stronger.</p>
            <p className="text-lg">Today, we're proud to offer a unique service that connects manga enthusiasts with talented content creators, fostering a vibrant community of storytellers and listeners.</p>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <Card key={member} className="bg-gray-800">
                <CardContent className="p-6">
                  <Image src={`/placeholder.svg?text=Team Member ${member}`} alt={`Team Member ${member}`} width={200} height={200} className="rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-center">Team Member {member}</h3>
                  <p className="text-center mb-4">Role / Position</p>
                  <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-gray-800 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {['Discover', 'Curate', 'Create', 'Connect'].map((step, index) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step}</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
          <ScrollArea className="w-full whitespace-nowrap rounded-md">
            <div className="flex w-max space-x-4 p-4">
              {[1, 2, 3, 4].map((testimonial) => (
                <Card key={testimonial} className="w-[300px] bg-gray-800">
                  <CardContent className="p-6">
                    <p className="italic mb-4">"This platform has revolutionized the way I enjoy manga. The recaps are fantastic!"</p>
                    <p className="font-bold">- User {testimonial}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dive Deeper?</h2>
          <p className="text-xl mb-8">Join our community and start exploring amazing manga recaps today!</p>
          <Button size="lg" variant="secondary">
            Explore Recaps
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Contact Us</h3>
              <p>Email: contact@mangarecap.com</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-400">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <Youtube size={24} />
              </Link>
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

export default AboutPageComponent;

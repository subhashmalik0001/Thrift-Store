import Link from "next/link"
import Image from "next/image"
import { Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function BrowsePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/assets/Store Logo.png"
                alt="Thrift Store Logo"
                width={250}
                height={150}
                className="rounded"
                priority
              />
            </Link>

          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/browse" className="text-sm font-medium text-blue-600">
              Browse
            </Link>
            <Link href="/sell" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Sell
            </Link>
            <Link href="/bids" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Bids
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log In
            </Button>
            <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700">Sign Up</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search products..." className="pl-10" />
            </div>
            <Select defaultValue="featured">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="ending">Ending Soon</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="md:hidden">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="hidden md:block">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="books" />
                      <Label htmlFor="books">Books & Notes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="electronics" />
                      <Label htmlFor="electronics">Electronics</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cycles" />
                      <Label htmlFor="cycles">Cycles</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hostel" />
                      <Label htmlFor="hostel">Hostel Essentials</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="projects" />
                      <Label htmlFor="projects">Project Kits</Label>
                    </div>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="price">
                    <AccordionTrigger>Price Range</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="price-1" />
                          <Label htmlFor="price-1">Under ₹500</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="price-2" />
                          <Label htmlFor="price-2">₹500 - ₹1,000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="price-3" />
                          <Label htmlFor="price-3">₹1,000 - ₹5,000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="price-4" />
                          <Label htmlFor="price-4">₹5,000 - ₹10,000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="price-5" />
                          <Label htmlFor="price-5">Above ₹10,000</Label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="condition">
                    <AccordionTrigger>Condition</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="condition-1" />
                          <Label htmlFor="condition-1">Like New</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="condition-2" />
                          <Label htmlFor="condition-2">Good</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="condition-3" />
                          <Label htmlFor="condition-3">Fair</Label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="listing-type">
                    <AccordionTrigger>Listing Type</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-1" />
                          <Label htmlFor="type-1">Fixed Price</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-2" />
                          <Label htmlFor="type-2">Auction</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-3" />
                          <Label htmlFor="type-3">Open to Offers</Label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Browse Products</h2>
                <div className="text-sm text-muted-foreground">Showing 12 of 48 results</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 12 }).map((_, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative">
                      <Image
                        src={`/placeholder.svg?height=200&width=300`}
                        alt="Product image"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      {index % 3 === 0 && (
                        <Badge className="absolute top-2 right-2 bg-orange-500 hover:bg-orange-600">Sale</Badge>
                      )}
                      {index % 5 === 0 && (
                        <Badge className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600">Auction</Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">
                          {index % 4 === 0 && "Calculus Textbook"}
                          {index % 4 === 1 && "HP Laptop i5"}
                          {index % 4 === 2 && "Mountain Bike"}
                          {index % 4 === 3 && "Study Desk Lamp"}
                        </h3>
                        <span className="font-bold text-blue-600">
                          {index % 4 === 0 && "₹450"}
                          {index % 4 === 1 && "₹22,000"}
                          {index % 4 === 2 && "₹3,500"}
                          {index % 4 === 3 && "₹750"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {index % 4 === 0 && "Almost new, 3rd edition with all practice problems"}
                        {index % 4 === 1 && "8GB RAM, 512GB SSD, 2 years old, good condition"}
                        {index % 4 === 2 && "21-speed, front suspension, minor scratches"}
                        {index % 4 === 3 && "Adjustable brightness, USB charging port"}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {index % 4 === 0 && "Books"}
                          {index % 4 === 1 && "Electronics"}
                          {index % 4 === 2 && "Cycles"}
                          {index % 4 === 3 && "Hostel"}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {index % 3 === 0 && "Posted 2 days ago"}
                          {index % 3 === 1 && "5 bids"}
                          {index % 3 === 2 && "Ends in 6 hours"}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    4
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/assets/Store Logo.png"
                  alt="Thrift Store Logo"
                  width={250}
                  height={150}
                  className="rounded"
                  priority
                />
                <span className="text-xl font-bold text-blue-600">Thrift Store</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                The premier marketplace for college students to buy and sell second-hand items.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/browse" className="text-sm text-muted-foreground hover:text-blue-600">
                    Browse Products
                  </Link>
                </li>
                <li>
                  <Link href="/sell" className="text-sm text-muted-foreground hover:text-blue-600">
                    Sell an Item
                  </Link>
                </li>
                <li>
                  <Link href="/bids" className="text-sm text-muted-foreground hover:text-blue-600">
                    My Bids
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/category/books" className="text-sm text-muted-foreground hover:text-blue-600">
                    Books & Notes
                  </Link>
                </li>
                <li>
                  <Link href="/category/electronics" className="text-sm text-muted-foreground hover:text-blue-600">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link href="/category/cycles" className="text-sm text-muted-foreground hover:text-blue-600">
                    Cycles
                  </Link>
                </li>
                <li>
                  <Link href="/category/hostel" className="text-sm text-muted-foreground hover:text-blue-600">
                    Hostel Essentials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Help & Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-blue-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm text-muted-foreground hover:text-blue-600">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/safety" className="text-sm text-muted-foreground hover:text-blue-600">
                    Safety Tips
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-blue-600">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Thrift Store. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-blue-600">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-blue-600">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


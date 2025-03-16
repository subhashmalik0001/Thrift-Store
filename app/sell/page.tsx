"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Upload, X, Check, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SellPage() {
  const [images, setImages] = useState<string[]>([])
  const [listingType, setListingType] = useState("fixed")
  const [submitted, setSubmitted] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setImages((prev) => [...prev, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the data to your backend
    setSubmitted(true)
    // Reset form or redirect
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 500)
  }

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
            <span className="text-xl font-bold text-blue-600">Thrift Store</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/browse" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Browse
            </Link>
            <Link href="/sell" className="text-sm font-medium text-blue-600">
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
            <Button
              variant="outline"
              className="hidden md:flex"
              onClick={() => window.dispatchEvent(new CustomEvent("open-login"))}
            >
              Log In
            </Button>
            <Button
              className="hidden md:flex bg-blue-600 hover:bg-blue-700"
              onClick={() => window.dispatchEvent(new CustomEvent("open-signup"))}
            >
              Sign Up
            </Button>
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
      <main className="flex-1 py-10">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Sell Your Item</h1>
            <p className="text-muted-foreground">Fill out the form below to list your item for sale or auction.</p>
          </div>

          {submitted && (
            <Alert className="mb-8 bg-green-50 border-green-200">
              <Check className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-600">
                Your listing has been submitted successfully! We'll review it shortly.
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="e.g., Calculus Textbook 3rd Edition" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your item's condition, features, and any other relevant details..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="category">Category</Label>
                      <Select required>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="books">Books & Notes</SelectItem>
                          <SelectItem value="electronics">Electronics</SelectItem>
                          <SelectItem value="cycles">Cycles</SelectItem>
                          <SelectItem value="hostel">Hostel Essentials</SelectItem>
                          <SelectItem value="projects">Project Kits</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="condition">Condition</Label>
                      <Select required>
                        <SelectTrigger id="condition">
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">Like New</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                          <SelectItem value="poor">Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Listing Details</h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label>Listing Type</Label>
                    <RadioGroup defaultValue="fixed" value={listingType} onValueChange={setListingType}>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="fixed" id="fixed" />
                          <Label htmlFor="fixed" className="font-normal">
                            Fixed Price
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="auction" id="auction" />
                          <Label htmlFor="auction" className="font-normal">
                            Auction
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="offers" id="offers" />
                          <Label htmlFor="offers" className="font-normal">
                            Open to Offers
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="price">Price (₹)</Label>
                        {listingType === "auction" && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>This will be the starting bid for your auction</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
                      <Input id="price" type="number" min="0" step="1" placeholder="e.g., 500" required />
                    </div>

                    {listingType === "auction" && (
                      <div className="grid gap-2">
                        <Label htmlFor="duration">Auction Duration</Label>
                        <Select required>
                          <SelectTrigger id="duration">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 day</SelectItem>
                            <SelectItem value="3">3 days</SelectItem>
                            <SelectItem value="5">5 days</SelectItem>
                            <SelectItem value="7">7 days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Photos</h2>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label>Upload Images (max 5)</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                      {images.map((src, index) => (
                        <div key={index} className="relative aspect-square rounded-md overflow-hidden border bg-muted">
                          <Image
                            src={src || "/placeholder.svg"}
                            alt={`Product image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-1 right-1 h-6 w-6 rounded-full"
                            onClick={() => removeImage(index)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}

                      {images.length < 5 && (
                        <label className="flex flex-col items-center justify-center aspect-square rounded-md border-2 border-dashed border-muted-foreground/25 bg-muted cursor-pointer hover:bg-muted/80 transition-colors">
                          <div className="flex flex-col items-center justify-center p-4 text-center">
                            <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Upload Image</span>
                          </div>
                          <Input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                        </label>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Add up to 5 images of your item. The first image will be the cover image.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="contact-method">Preferred Contact Method</Label>
                      <Select required>
                        <SelectTrigger id="contact-method">
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="app">In-App Messaging</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="contact-info">Contact Information</Label>
                      <Input id="contact-info" placeholder="e.g., Phone number or email" required />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="meeting-location">Preferred Meeting Location</Label>
                    <Select required>
                      <SelectTrigger id="meeting-location">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="library">University Library</SelectItem>
                        <SelectItem value="cafeteria">Main Cafeteria</SelectItem>
                        <SelectItem value="student-center">Student Center</SelectItem>
                        <SelectItem value="hostel">Hostel Common Area</SelectItem>
                        <SelectItem value="other">Other (Specify in Description)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col space-y-4">
              <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700">
                Submit Listing
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                By submitting this listing, you agree to our{" "}
                <Link href="/terms" className="underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
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


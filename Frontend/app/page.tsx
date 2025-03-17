"use client"
import type { JSX } from "react"
import { useState } from "react"

import Link from "next/link"
import Image from "next/image"
import { Search, ArrowRight, BookOpen, Laptop, Bike, Home, PenToolIcon as Tool, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

export default function HomePage() {

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 md:py-32 overflow-hidden">
          <div className="container px-4 mx-auto relative z-10 flex flex-col items-center text-center">
            <div className="animate-fade-in-up">
              <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Buy, Sell, and Save on Campus
              </h1>
              <p className="mt-4 max-w-xl text-lg text-blue-100 mx-auto">
                Your one-stop marketplace for affordable second-hand college essentials
              </p>
            </div>
            <div className="mt-8 w-full max-w-md flex items-center gap-2 bg-white rounded-full p-1.5 shadow-lg animate-fade-in">
              <Search className="ml-3 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for books, laptops, cycles..."
                className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button size="sm" className="rounded-full bg-blue-600 hover:bg-blue-700">
                Search
              </Button>
            </div>
            <div className="mt-6 flex gap-4 animate-fade-in">
              <Button
                variant="outline"
                className="bg-white/20 text-white border-white/40 hover:bg-white/30 backdrop-blur-sm"
                onClick={() => (window.location.href = "/browse")}
              >
                Browse Products
              </Button>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => (window.location.href = "/sell")}
              >
                Start Selling
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('https://blogger.googleusercontent.com/img/a/AVvXsEjy9Qk6mpHKofvezAlnzrTog7UNDDraIPplir9ieYv1ziwqTzLXg-7V0vxkoBeJLOSYjHB2MsgS0pETzka4STg18koK2S8ufmWUlZ0vR_N0YsORO7vaUdVXffuDGUw2A4MQrdjqWZmg11XICAnzFB9lAnU4Byoy9JZCBKH4YtnkEwn7JcAu9qin8Vb7=s16000?height=600&width=120')] bg-cover bg-center opacity-10"></div>

          {/* Animated shapes */}
          <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-blue-400/20 animate-float"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-orange-400/20 animate-float-delay"></div>
          <div className="absolute top-3/4 left-1/3 w-16 h-16 rounded-full bg-white/10 animate-float-delay-long"></div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                Browse by Category
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full shadow-lg shadow-blue-500/50"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <Link
                href="/category/books"
                className="group flex flex-col items-center p-6 rounded-xl border bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4 shadow-inner">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Books</span>
              </Link>
              <Link
                href="/category/electronics"
                className="group flex flex-col items-center p-6 rounded-xl border bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4 shadow-inner">
                  <Laptop className="h-8 w-8 text-blue-600" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Electronics</span>
              </Link>
              <Link
                href="/category/cycles"
                className="group flex flex-col items-center p-6 rounded-xl border bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4 shadow-inner">
                  <Bike className="h-8 w-8 text-blue-600" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Cycles</span>
              </Link>
              <Link
                href="/category/hostel"
                className="group flex flex-col items-center p-6 rounded-xl border bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4 shadow-inner">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Hostel</span>
              </Link>
              <Link
                href="/category/projects"
                className="group flex flex-col items-center p-6 rounded-xl border bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4 shadow-inner">
                  <Tool className="h-8 w-8 text-blue-600" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Project Kits</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                Featured Products
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full shadow-lg shadow-blue-500/50 mb-8"></div>
              <div className="flex justify-center items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                <Link href="/browse" className="flex items-center gap-2 text-lg font-medium">
                  View all products <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <Tabs defaultValue="recent" className="w-full">
              <TabsList className="flex justify-center mb-8">
                <TabsTrigger value="recent" className="px-6 py-2 text-sm font-medium">Recently Added</TabsTrigger>
                <TabsTrigger value="trending" className="px-6 py-2 text-sm font-medium">Trending</TabsTrigger>
                <TabsTrigger value="ending" className="px-6 py-2 text-sm font-medium">Ending Soon</TabsTrigger>
              </TabsList>
              <TabsContent value="recent" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {[
                    {
                      title: "Calculus Textbook",
                      price: 450,
                      description: "Almost new, 3rd edition with all practice problems",
                      category: "Books",
                      postedTime: "2 days ago",
                      imageUrl: "https://i.etsystatic.com/12662587/r/il/b8d001/4683244517/il_fullxfull.4683244517_h66r.jpg"
                    },
                    {
                      title: "Dell Inspiron Laptop (i5, 8GB RAM)",
                      price: 28000,
                      description: "Well-maintained, includes charger & bag, great for coding",
                      category: "Electronics",
                      postedTime: "5 days ago",
                      imageUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSS2C_5xi153lZbE1J8PSgd-VuLQvF0e5YBIm4qLbCsijHpgwCcBz5rNHcKiGDL3O3qseBKwPlhNuinrZp0YKAW-8ysUs2sYUZRTehrUzCvOmA3OhDdFdEs&usqp=CAE"
                    },
                    {
                      title: "Hero Sprint Bicycle",
                      price: 3500,
                      description: "Good condition, perfect for campus rides, recently serviced",
                      category: "Cycles",
                      postedTime: "1 week ago",
                      imageUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxiJ3d_zH5Gw4wMC3y_SalFKZVhdLqleZAzGnYK7buqh1bZs9hiMmLCmdCK8Dk6Ssz7DKxhL_CQwwIbp8KnhiJ9HsDHDxEF5HqeLdgUAxUUiA47EHrSgRfJA&usqp=CAE"
                    },
                    {
                      title: "Study Table & Chair (Hostel Essential)",
                      price: 1200,
                      description: "Durable wooden table with foldable chair, space-saving design",
                      category: "Hostel Essentials",
                      postedTime: "3 days ago",
                      imageUrl: "https://m.media-amazon.com/images/I/71ECmxp2QYL.jpg"
                    }
                  ].map((item, index) => (
                    <Card key={index} className="overflow-hidden group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105">
                      <div className="relative">
                        <Image
                          src={item.imageUrl}
                          alt={`${item.title} image`}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover group-hover:opacity-95 transition-opacity"
                        />
                        <Badge className="absolute top-2 right-2 bg-orange-500 hover:bg-orange-600">Sale</Badge>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">{item.title}</h3>
                          <span className="font-bold text-blue-600 text-lg">₹{item.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="outline" className="text-xs font-medium">
                            {item.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">Posted {item.postedTime}</span>
                        </div>
                        <Button
                          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                          onClick={() => (window.location.href = `/product/${index + 1}`)}
                        >
                          View Product
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="trending" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "MacBook Air M1 (256GB SSD, 8GB RAM)",
                      price: 65000,
                      description: "Excellent condition, includes original box & charger, ideal for coding & design",
                      category: "Electronics",
                      trending: "15+ people viewed this today",
                      postedTime: "1 day ago",
                      imageUrl: "https://5.imimg.com/data5/WHATSAPP/Default/2023/12/367921325/SI/RJ/TN/156392130/macbook-air-m1chip-warranty-till-march-2024-8gb-ram-256gb-ssd-like-new-fresh-condition-with-all-accessories-60000.jpeg"
                    },
                    {
                      title: "NCERT Physics (Class 12) - Vol 1 & 2",
                      price: 700,
                      description: "Both books in great condition, includes handwritten notes for competitive exams",
                      category: "Books",
                      trending: "20+ students interested",
                      postedTime: "3 days ago",
                      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy_OqHuKJo8_7qFRRUusJNuBZiuIO2wGvzHoVrEGOWym7o7yyhNOC3AVuEsE30twlO6KM&usqp=CAU"
                    },
                    {
                      title: "Gaming Chair (Ergonomic, Adjustable)",
                      price: 5500,
                      description: "Like new, great for long study & gaming sessions, adjustable armrests & lumbar support",
                      category: "Hostel Essentials",
                      trending: "10+ inquiries in the last 24 hours",
                      postedTime: "2 days ago",
                      imageUrl: "https://m.media-amazon.com/images/I/816VxP7ZyTL._AC_UF894,1000_QL80_.jpg"
                    },
                    {
                      title: "JBL Wireless Earbuds (Active Noise Cancellation)",
                      price: 2800,
                      description: "Crystal clear sound, deep bass, 20+ hours battery backup",
                      category: "Electronics",
                      trending: "30+ students have saved this item",
                      postedTime: "5 days ago",
                      imageUrl: "https://m.media-amazon.com/images/I/41dZKZ3xq3L._QL92_SH45_SS200_.jpg"
                    }
                  ].map((item, index) => (
                    <Card key={index} className="overflow-hidden group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105">
                      <div className="relative">
                        <Image
                          src={item.imageUrl}
                          alt={`${item.title} image`}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover group-hover:opacity-95 transition-opacity"
                        />
                        <Badge className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600">Hot</Badge>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">{item.title}</h3>
                          <span className="font-bold text-blue-600 text-lg">₹{item.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-col gap-2 mb-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs font-medium">
                              {item.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">Posted {item.postedTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Badge variant="secondary" className="text-xs font-medium w-full text-center">
                              {item.trending}
                            </Badge>
                          </div>
                        </div>
                        <Button
                          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                          onClick={() => (window.location.href = `/product/${index + 1}`)}
                        >
                          View Product
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="ending" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "HP Pavilion Laptop (i7, 16GB RAM, 512GB SSD)",
                      price: 42000,
                      description: "High-performance laptop, great for coding & gaming. Charger included.",
                      category: "Electronics",
                      endingIn: "3 hours",
                      postedTime: "7 days ago",
                      imageUrl: "data:image/jpeg;base64,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"
                    },
                    {
                      title: "Engineering Mathematics Textbook (By B.S. Grewal)",
                      price: 350,
                      description: "Perfect for B.Tech students, slightly used, no markings inside.",
                      category: "Books",
                      endingIn: "5 hours",
                      postedTime: "6 days ago",
                      imageUrl: "data:image/jpeg;base64,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"
                    },
                    {
                      title: "Hostel Single Bed (With Mattress & Storage)",
                      price: 3200,
                      description: "Sturdy wooden bed, includes a soft mattress & built-in storage drawers.",
                      category: "Hostel Essentials",
                      endingIn: "2 hours",
                      postedTime: "5 days ago",
                      imageUrl: "https://images.woodenstreet.de/image/cache/data%2Fsingle-beds-mdf%2Fevaline-single-bed-with-box-storage%2Fflowery-wenge%2Fupdated%2Fnew-logo%2F1-750x650.jpg"
                    },
                    {
                      title: "Sony WH-1000XM4 Noise Cancelling Headphones",
                      price: 12500,
                      description: "Premium noise cancellation, deep bass, and 30-hour battery life.",
                      category: "Electronics",
                      endingIn: "4 hours",
                      postedTime: "7 days ago",
                      imageUrl: "https://static.digit.in/default/d9a54ef849e92fa6095d02b23f729a981dd969fd.jpeg"
                    }
                  ].map((item, index) => (
                    <Card key={index} className="overflow-hidden group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105">
                      <div className="relative">
                        <Image
                          src={item.imageUrl}
                          alt={`${item.title} image`}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover group-hover:opacity-95 transition-opacity"
                        />
                        <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">Ending Soon</Badge>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">{item.title}</h3>
                          <span className="font-bold text-blue-600 text-lg">₹{item.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-col gap-2 mb-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs font-medium">
                              {item.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">Posted {item.postedTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Badge variant="secondary" className="text-xs font-medium w-full text-center text-red-600">
                              Ends in {item.endingIn}
                            </Badge>
                          </div>
                        </div>
                        <Button
                          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                          onClick={() => (window.location.href = `/product/${index + 1}`)}
                        >
                          View Product
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                How It Works
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full shadow-lg shadow-blue-500/50"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group flex flex-col items-center text-center p-8 rounded-xl bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 mb-6 group-hover:bg-blue-200 transition-colors shadow-inner">
                  <span className="text-3xl font-bold text-blue-600 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">List Your Item</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Take photos, set a price, and create a listing in minutes. Our simple process makes it easy to get started.
                </p>
              </div>
              <div className="group flex flex-col items-center text-center p-8 rounded-xl bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 mb-6 group-hover:bg-blue-200 transition-colors shadow-inner">
                  <span className="text-3xl font-bold text-blue-600 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">Connect with Buyers</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Receive offers and messages from interested students. Negotiate prices and arrange meetups safely.
                </p>
              </div>
              <div className="group flex flex-col items-center text-center p-8 rounded-xl bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 mb-6 group-hover:bg-blue-200 transition-colors shadow-inner">
                  <span className="text-3xl font-bold text-blue-600 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">Make the Exchange</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Meet on campus and complete your transaction safely. Join our community of happy buyers and sellers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Left side content */}
              <div className="max-w-xl md:w-1/2">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-4">Ready to Sell Your Items?</h2>
                <p className="text-orange-100 mb-6">
                  Turn your unused items into cash and help fellow students save money. List your first item in minutes!
                </p>
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100"
                  onClick={() => window.location.href = '/sell'}
                >
                  Start Selling Now
                </Button>
              </div>

              {/* Right side image */}
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                <img
                  src="https://www.rd.com/wp-content/uploads/2022/07/RD-sell-used-online-Square-FT-GettyImages-1384947546-183430228.jpg"
                  alt="Student selling items"
                  className="rounded-lg shadow-lg w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-8 text-center">What Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Priya S.",
                  course: "Computer Science, 3rd Year",
                  quote: "Found my programming textbooks for half the bookstore price. Saved so much money!",
                },
                {
                  name: "Rahul M.",
                  course: "Mechanical Engineering, 2nd Year",
                  quote: "Sold my old cycle in just 2 days. The process was super easy and convenient.",
                },
                {
                  name: "Ananya K.",
                  course: "Economics, 4th Year",
                  quote: "Great platform to find affordable hostel essentials. Highly recommend!",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="text-yellow-400 flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-1"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="flex-1 text-muted-foreground italic mb-4">"{testimonial.quote}"</blockquote>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


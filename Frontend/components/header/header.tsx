"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
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
                <nav className={`${isMobileMenuOpen
                    ? "absolute top-full left-0 right-0 bg-white border-b shadow-lg md:shadow-none md:border-none md:bg-transparent md:relative md:top-0"
                    : "hidden"
                    } md:flex items-center gap-6`}>
                    <div className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-0">
                        <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors w-full md:w-auto text-center">
                            Home
                        </Link>
                        <Link href="/browse" className="text-sm font-medium hover:text-blue-600 transition-colors w-full md:w-auto text-center">
                            Browse
                        </Link>
                        <Link href="/sell" className="text-sm font-medium hover:text-blue-600 transition-colors w-full md:w-auto text-center">
                            Sell
                        </Link>
                        <Link href="/bids" className="text-sm font-medium hover:text-blue-600 transition-colors w-full md:w-auto text-center">
                            Bids
                        </Link>
                        <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors w-full md:w-auto text-center">
                            About
                        </Link>
                        <div className="flex flex-col md:hidden w-full gap-2 mt-4">
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={() => window.dispatchEvent(new CustomEvent("open-login"))}
                            >
                                Log In
                            </Button>
                            <Button
                                className="w-full bg-blue-600 hover:bg-blue-700"
                                onClick={() => window.dispatchEvent(new CustomEvent("open-signup"))}
                            >
                                Sign Up
                            </Button>
                        </div>
                    </div>
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
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header

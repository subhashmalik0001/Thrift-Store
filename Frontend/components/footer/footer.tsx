import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="border-t bg-gray-50">
            <div className="container mx-auto py-8 md:py-12 px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/assets/Store Logo.png"
                                alt="Thrift Store Logo"
                                width={250}
                                height={150}
                                className="rounded"
                            />

                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            The premier marketplace for college students to buy and sell second-hand items.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-blue-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-blue-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-blue-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                            </Link>
                        </div>
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
                            <li>
                                <Link href="/category/projects" className="text-sm text-muted-foreground hover:text-blue-600">
                                    Project Kits
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
    )
}

export default Footer

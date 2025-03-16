import ProductClient from "./ProductClient"

// This is a server component
async function getProduct(id: string) {
  // Simulate a delay to mimic API call
  await new Promise((resolve) => setTimeout(resolve, 500))
  
  // Mock product data - in real app this would fetch from an API
  return {
    id,
    title: "HP Laptop i5 8GB RAM 512GB SSD",
    price: 22000,
    description:
      "This laptop is in excellent condition, only 2 years old. It has an Intel i5 processor, 8GB RAM, and a 512GB SSD. Battery life is still great (about 5 hours on a full charge). Comes with original charger and laptop bag.",
    condition: "Good",
    category: "Electronics",
    seller: {
      name: "Rahul M.",
      rating: 4.8,
      joinedDate: "Aug 2022",
      responseRate: "98%",
    },
    location: "University Library",
    postedDate: "3 days ago",
    views: 42,
    isAuction: true,
    currentBid: 22000,
    bidCount: 5,
    endTime: "2023-06-15T18:00:00",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  }
}

interface PageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: PageProps) {
  // Ensure params.id is treated as a Promise
  const id = String(params.id)
  const product = await getProduct(id)
  
  return <ProductClient product={product} />
}


"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, Filter, Eye } from "lucide-react"
import Image from "next/image"

export default function Collection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("id")
  const [filterRarity, setFilterRarity] = useState("all")

  // Available Sudoz images with different colors
  const sudozImages = ["/images/sudoz-green.png", "/images/sudoz-purple.png", "/images/sudoz-yellow.png"]

  // Color themes for different variants
  const colorThemes = [
    { name: "GREEN", color: "green", rarity: "Common" },
    { name: "PURPLE", color: "purple", rarity: "Rare" },
    { name: "YELLOW", color: "yellow", rarity: "Epic" },
    { name: "RED", color: "red", rarity: "Legendary" },
    { name: "BLUE", color: "blue", rarity: "Epic" },
    { name: "CYAN", color: "cyan", rarity: "Rare" },
    { name: "MONOCHROME", color: "gray", rarity: "Mythic" },
    { name: "RAINBOW", color: "rainbow", rarity: "Legendary" },
  ]

  // Function to get random image
  const getRandomImage = () => {
    return sudozImages[Math.floor(Math.random() * sudozImages.length)]
  }

  // Function to get random color theme
  const getRandomTheme = () => {
    return colorThemes[Math.floor(Math.random() * colorThemes.length)]
  }

  // Mock collection data with randomized images and themes
  const collection = Array.from({ length: 24 }, (_, i) => {
    const theme = getRandomTheme()
    return {
      id: i + 1,
      name: `SUDOZ #${1000 + i}`,
      level: Math.floor(Math.random() * 10) + 1,
      rarity: Math.floor(Math.random() * 10) + 1,
      value: Math.floor(Math.random() * 50) + 5,
      image: getRandomImage(),
      theme: theme,
      attributes: [theme.name, theme.rarity, "EVOLVED"],
      owner: "0x1234...5678",
    }
  })

  const filteredCollection = collection
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterRarity === "all" || item.rarity.toString() === filterRarity),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "level":
          return b.level - a.level
        case "rarity":
          return b.rarity - a.rarity
        case "value":
          return b.value - a.value
        default:
          return a.id - b.id
      }
    })

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Moving animated background blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl moving-blur-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl moving-blur-2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-300/6 rounded-full blur-3xl moving-blur-3"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white tracking-wide">
              <ArrowLeft className="w-4 h-4 mr-2" />
              BACK
            </Button>
          </Link>
          <div className="text-2xl font-bold text-green-400 tracking-wider">SUDOZ COLLECTION</div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-6 py-8">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="SEARCH ARTIFACTS..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-900/80 border-gray-700 text-white placeholder-gray-400 tracking-wide"
            />
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48 bg-gray-900/80 border-gray-700 text-white tracking-wide">
              <SelectValue placeholder="SORT BY" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="id">ID</SelectItem>
              <SelectItem value="level">LEVEL</SelectItem>
              <SelectItem value="rarity">RARITY</SelectItem>
              <SelectItem value="value">VALUE</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterRarity} onValueChange={setFilterRarity}>
            <SelectTrigger className="w-48 bg-gray-900/80 border-gray-700 text-white tracking-wide">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="FILTER BY RARITY" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">ALL RARITIES</SelectItem>
              {Array.from({ length: 10 }, (_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()}>
                  RARITY {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Collection Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gray-900/80 border-gray-700">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white tracking-wider">5,555</div>
              <div className="text-gray-400 text-sm tracking-wider">TOTAL SUPPLY</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/80 border-gray-700">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white tracking-wider">2,847</div>
              <div className="text-gray-400 text-sm tracking-wider">OWNERS</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/80 border-gray-700">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white tracking-wider">15.2</div>
              <div className="text-gray-400 text-sm tracking-wider">FLOOR PRICE</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/80 border-gray-700">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white tracking-wider">84,750</div>
              <div className="text-gray-400 text-sm tracking-wider">VOLUME</div>
            </CardContent>
          </Card>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredCollection.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="bg-gray-900/80 border-gray-700 cursor-pointer transition-all duration-300 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/10 hover:scale-105">
                  <CardContent className="p-4">
                    <div className="aspect-square mb-3 relative overflow-hidden rounded-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                        style={{
                          filter:
                            item.theme.color === "red"
                              ? "hue-rotate(240deg) saturate(1.2)"
                              : item.theme.color === "blue"
                                ? "hue-rotate(180deg) saturate(1.1)"
                                : item.theme.color === "cyan"
                                  ? "hue-rotate(150deg) saturate(1.3)"
                                  : item.theme.color === "gray"
                                    ? "grayscale(1) contrast(1.2)"
                                    : item.theme.color === "rainbow"
                                      ? "hue-rotate(45deg) saturate(1.5) brightness(1.1)"
                                      : "none",
                        }}
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-black/50 text-white text-xs tracking-wide">
                          #{item.id}
                        </Badge>
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge
                          variant="secondary"
                          className={`text-xs tracking-wide ${
                            item.theme.color === "green"
                              ? "bg-green-500/20 text-green-400 border-green-400/30"
                              : item.theme.color === "purple"
                                ? "bg-purple-500/20 text-purple-400 border-purple-400/30"
                                : item.theme.color === "yellow"
                                  ? "bg-yellow-500/20 text-yellow-400 border-yellow-400/30"
                                  : item.theme.color === "red"
                                    ? "bg-red-500/20 text-red-400 border-red-400/30"
                                    : item.theme.color === "blue"
                                      ? "bg-blue-500/20 text-blue-400 border-blue-400/30"
                                      : item.theme.color === "cyan"
                                        ? "bg-cyan-500/20 text-cyan-400 border-cyan-400/30"
                                        : item.theme.color === "gray"
                                          ? "bg-gray-500/20 text-gray-400 border-gray-400/30"
                                          : "bg-gradient-to-r from-red-500/20 to-purple-500/20 text-white border-white/30"
                          }`}
                        >
                          {item.theme.name}
                        </Badge>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-sm mb-2 tracking-wide">{item.name}</h3>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400 tracking-wide">LEVEL {item.level}</span>
                      <span className="text-green-400 tracking-wide">R{item.rarity}</span>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold tracking-wider">{item.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                      style={{
                        filter:
                          item.theme.color === "red"
                            ? "hue-rotate(240deg) saturate(1.2)"
                            : item.theme.color === "blue"
                              ? "hue-rotate(180deg) saturate(1.1)"
                              : item.theme.color === "cyan"
                                ? "hue-rotate(150deg) saturate(1.3)"
                                : item.theme.color === "gray"
                                  ? "grayscale(1) contrast(1.2)"
                                  : item.theme.color === "rainbow"
                                    ? "hue-rotate(45deg) saturate(1.5) brightness(1.1)"
                                    : "none",
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-400 tracking-wide">LEVEL</div>
                      <div className="text-lg font-bold tracking-wider">{item.level}/10</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 tracking-wide">RARITY</div>
                      <div className="text-lg font-bold tracking-wider">{item.rarity}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 tracking-wide">VALUE</div>
                      <div className="text-lg font-bold tracking-wider">{item.value} SUI</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 tracking-wide">THEME</div>
                      <div className="text-lg font-bold tracking-wider">{item.theme.name}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-400 mb-2 tracking-wide">ATTRIBUTES</div>
                    <div className="flex flex-wrap gap-2">
                      {item.attributes.map((attr, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className={`tracking-wide ${
                            attr === item.theme.name
                              ? `${
                                  item.theme.color === "green"
                                    ? "bg-green-500/20 text-green-400"
                                    : item.theme.color === "purple"
                                      ? "bg-purple-500/20 text-purple-400"
                                      : item.theme.color === "yellow"
                                        ? "bg-yellow-500/20 text-yellow-400"
                                        : item.theme.color === "red"
                                          ? "bg-red-500/20 text-red-400"
                                          : item.theme.color === "blue"
                                            ? "bg-blue-500/20 text-blue-400"
                                            : item.theme.color === "cyan"
                                              ? "bg-cyan-500/20 text-cyan-400"
                                              : item.theme.color === "gray"
                                                ? "bg-gray-500/20 text-gray-400"
                                                : "bg-gradient-to-r from-red-500/20 to-purple-500/20 text-white"
                                }`
                              : "bg-gray-700 text-gray-300"
                          }`}
                        >
                          {attr}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-400 tracking-wide">OWNER</div>
                    <div className="text-sm font-mono">{item.owner}</div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1 bg-green-400 hover:bg-green-500 text-black font-bold tracking-wide">
                      <Eye className="w-4 h-4 mr-2" />
                      VIEW DETAILS
                    </Button>
                    <Link href="/evolve-lab" className="flex-1">
                      <Button variant="outline" className="w-full border-gray-600 hover:bg-gray-800 tracking-wide">
                        EVOLVE
                      </Button>
                    </Link>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {filteredCollection.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg tracking-wide">NO ARTIFACTS FOUND MATCHING YOUR CRITERIA.</div>
          </div>
        )}
      </main>
    </div>
  )
}

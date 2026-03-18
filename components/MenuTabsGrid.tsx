'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface MenuItem {
  name: string
  description: string
  price: string
}
interface Category {
  name: string
  items: MenuItem[]
}
interface MenuTabsGridProps {
  categories: Category[]
}

export default function MenuTabsGrid({
  categories = [
    { name: 'Antipasti', items: [{ name: 'Burrata Toscana', description: 'Heirloom tomatoes, basil oil, sea salt', price: '$16' }, { name: 'Calamari Fritti', description: 'Lemon aioli, cherry pepper', price: '$18' }] },
    { name: 'Pasta', items: [{ name: 'Tagliatelle Bolognese', description: 'Slow-braised beef, parmigiano', price: '$27' }, { name: 'Cacio e Pepe', description: 'Pecorino romano, cracked pepper', price: '$24' }] },
    { name: 'Secondi', items: [{ name: 'Branzino', description: 'Lemon caper butter, grilled fennel', price: '$36' }, { name: 'Veal Marsala', description: 'Wild mushrooms, marsala reduction', price: '$39' }] },
  ],
}: Partial<MenuTabsGridProps>) {
  const [active, setActive] = useState(categories[0]?.name || '')
  const activeCategory = categories.find((c) => c.name === active) || categories[0]

  return (
    <section id="menu" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-serif text-3xl text-[#722F37] md:text-5xl">Menu Highlights</h2>
        <p className="mt-3 max-w-2xl text-[#606C38]">Crafted with seasonal ingredients and classic Italian technique.</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button key={cat.name} onClick={() => setActive(cat.name)} variant={active === cat.name ? 'default' : 'outline'} className={active === cat.name ? 'bg-[#722F37] text-white' : 'border-[#DDA15E] text-[#722F37]'}>
              {cat.name}
            </Button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activeCategory?.items.map((item) => (
            <Card key={item.name} className="rounded-xl border-[#DDA15E]/30 p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-xl text-[#722F37]">{item.name}</h3>
                <span className="font-semibold text-[#606C38]">{item.price}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

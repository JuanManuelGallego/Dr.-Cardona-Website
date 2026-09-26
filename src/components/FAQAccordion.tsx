'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqContent } from '@/content/text'

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="space-y-4">
      {faqContent.items.map((item) => {
        const isOpen = openItems.includes(item.id)
        const contentId = `faq-content-${item.id}`
        const buttonId = `faq-button-${item.id}`

        return (
          <div key={item.id} className="card-base overflow-hidden transition-colors">
            <button
              id={buttonId}
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors"
              aria-expanded={isOpen}
              aria-controls={contentId}
            >
              <span className="font-heading text-lg font-medium text-foreground pr-4">{item.question}</span>
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            <div
              id={contentId}
              aria-labelledby={buttonId}
              className={isOpen ? 'block' : 'hidden'}
            >
              <div className="px-6 pb-6 pt-1">
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

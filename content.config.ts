import { defineContentConfig, defineCollection } from '@nuxt/content'
import { date, z } from 'zod'

export default defineContentConfig({
  collections: {
    extraits: defineCollection({
      type: 'data',
      source: 'le-choeur/extraits/*.yml',
      schema: z.object({
        section: z.string(),
        title: z.string(),
        links: z.array(z.object({
          title: z.string(),
          date: z.string().optional(),
          context: z.string().optional(),
          href: z.string()
        })),
        avatar: z.string(),
        url: z.string()
      })
    }),
    repertoire: defineCollection({
      type: 'data',
      source: 'le-choeur/repertoire/*.yml',
      schema: z.object({
        title: z.string(),
        class: z.string().optional(),
        items: z.array(z.object({
          title: z.string(),
        })),
      })
    }),
    partenaires: defineCollection({
      type: 'data',
      source: 'le-choeur/partenaires/*.yml',
      schema: z.object({
        title: z.string(),
        class: z.string().optional(),
        items: z.array(z.object({
          title: z.string(),
        })),
      })
    }),
    discographie: defineCollection({
      type: 'data',
      source: 'le-choeur/discographie/*.yml',
      schema: z.object({
        type: z.string(),
        title: z.string(),
        date: z.string(),
        art: z.string(),
        links: z.array(z.object({
          icon: z.string(),
          href: z.string().optional(),
        })),
      })
    }),
    events: defineCollection({
      type: 'data',
      source: 'events/*.yml',
      schema: z.object({
        title: z.string(),
        ville: z.string(),
        lieu: z.string(),
        datetime: z.string(),
        url: z.string(),
        type: z.string(),
        widget: z.string().optional()
      })
    }),
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        section: z.string(),
        breadcrumb: z.array(z.object({
          title: z.string(),
          href: z.string()
        })),
        title: z.string(),
        accueil: z.string()
      })
    })
  }
})

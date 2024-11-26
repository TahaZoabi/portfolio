export { ThemeProvider } from '../lib/theme-provider.tsx'

export const NAV_LINKS = ['home', 'about me', 'projects', 'contact me']

export interface Project {
  id: number
  title: string
  description: string
  img: string
  link: string | null
}

export const projects: Project[] = [
  {
    id: 3,
    title: 'Notionary',
    description:
      'A practical full-stack notes app that offers seamless note creation, editing, and deletion, paired with simple categorization and data storage',
    img: '/Notionary.png',
    link: 'https://github.com/TahaZoabi/Notionary'
  },

  {
    id: 2,
    title: 'REST-API',
    description:
      'A full CRUD REST API built with Express.js and Prisma, providing endpoints for managing products and their categories.',
    img: '/rest-api-1.svg',
    link: 'https://github.com/TahaZoabi/REST-API'
  },
  {
    id: 1,
    title: 'Portfolio',
    description:
      'A personal portfolio showcasing my projects, skills, and experience, with a clean, responsive design.',
    img: '/portfolio.png',
    link: 'https://github.com/TahaZoabi/portfolio'
  }
]

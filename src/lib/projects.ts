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
    id: 5,
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
  },
  {
    id: 2,
    title: 'Phone-Book',
    description:
      'A simple phone book app for managing contacts, featuring options to add, edit, and delete entries.',
    img: '/phone-book.png',
    link: 'https://github.com/TahaZoabi/Phone-Book-V2'
  },
  {
    id: 3,
    title: 'Java Quiz-App',
    description:
      'An interactive quiz app built with Java to test knowledge on various topics, with scoring feature.',
    img: '/java-quiz.png',
    link: 'https://github.com/TahaZoabi/Quiz-Application'
  },
  {
    id: 4,
    title: 'Java Todo-List',
    description:
      'A basic task management app to create, edit, and track tasks, designed to keep you organized.',
    img: '/java-todo.png',
    link: 'https://github.com/TahaZoabi/JAVA-TODO'
  }
]

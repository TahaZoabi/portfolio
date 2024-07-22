'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <div className="flex flex-col min-h-screen">
        <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <span className="text-lg font-semibold">Taha Zoabi</span>
          </Link>
          <Button variant="outline" size="icon" className="lg:hidden" onClick={toggleMenu}>
            {menuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
          {/* Navigation links for large screens */}
          <nav className={`hidden lg:flex flex-grow items-center justify-end space-x-4 sm:space-x-6`}>
            <Link href="#about" className="text-sm font-medium hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </header>
        <nav className={`lg:hidden absolute top-14 right-0 ${menuOpen ? 'block' : 'hidden'} bg-gray-900 text-white py-2 px-4`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline" prefetch={false}>
              Contact
            </Link>
          </div>
        </nav>
        <main className="flex-1">
          <section id="about" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <div id="about" className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  About Me
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Taha Zoabi</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hello! I'm Taha Zoabi, a 24-year-old first-year Software Engineering student diving into Java.
                  Passionate about coding and problem-solving, I'm eager to master Java's power and versatility in
                  creating innovative solutions. Excited about the possibilities ahead in software development!
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                      href="#contact"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                  >
                    Contact Me
                  </Link>
                  <Link
                      href="#projects"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                  >
                    View Projects
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <Avatar className="w-32 h-32 border-4 border-primary">
                  <AvatarImage src="/avatar.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </section>
          <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <div id="projects" className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Check out my work</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I've worked on a variety of projects, from web applications to mobile apps. Here are a few of my
                  favorites.
                </p>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>To-Do App</CardTitle>
                    <CardDescription>
                      A Java Todo App is a beginner-friendly project that helps users manage tasks. It allows you to add
                      tasks with descriptions and due dates, mark tasks as completed, and delete tasks. This project
                      teaches fundamental Java skills like handling user input and organizing data efficiently. It's a
                      practical way to improve coding abilities while creating a useful tool for everyday task management.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                        src="/todo.png"
                        width={400}
                        height={225}
                        alt="Project 1"
                        className="object-cover object-center aspect-w-16 aspect-h-9 rounded-md"
                    />
                  </CardContent>

                  <CardFooter>
                    <Link
                        href="https://github.com/TahaZoabi/JAVA-TODO"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                        target="_blank"
                    >
                      GitHub Link
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Phone-Book</CardTitle>
                    <CardDescription>
                      I've developed a simple Phone Book app using vanilla JavaScript. It allows users to add contacts
                      with names and phone numbers, which are displayed in a list format on the webpage. The app also
                      features a delete function for removing contacts. This project enhanced my understanding of
                      JavaScript's ability to manipulate the DOM and manage data dynamically.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                        src="/phonebook.png"
                        width={400}
                        height={225}
                        alt="Project 2"
                        className="object-cover object-center aspect-w-16 aspect-h-9 rounded-md"
                    />
                  </CardContent>
                  <CardFooter>
                    <Link
                        href="https://github.com/TahaZoabi/Phone-Book"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                        target="_blank"
                    >
                      GitHub Link
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
          <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <div id="contact" className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Contact Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's get in touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'd love to hear from you! Feel free to reach out with any questions or just to say hello.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-4">
                  <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                  <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                  <Textarea placeholder="Message" className="max-w-lg flex-1" />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">&copy; 2024 Taha Zoabi. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="https://x.com/dev_range"
                  target="_blank" className="text-xs hover:underline" prefetch={false}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
              </svg>
            </Link>
            <Link href="https://github.com/TahaZoabi" target="_blank" className="text-xs hover:underline" prefetch={false}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
                <path
                    d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
              </svg>
            </Link>
          </nav>
        </footer>
      </div>
  );
}

function MenuIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <line x1="4" y1="6" x2="20" y2="6"/>
        <line x1="4" y1="12" x2="20" y2="12"/>
        <line x1="4" y1="18" x2="20" y2="18"/>
      </svg>
  );
}

function MountainIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M8 3l4 8 5-5 5 15H2L8 3z"/>
      </svg>
  );
}

function XIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M18 6l-12 12M6 6l12 12" />
      </svg>
  );
}

export default HomePage;

"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Download, ArrowDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AnimatedText, ClientMotion } from "@/components/client-animations"
import { SiTiktok } from "react-icons/si"

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <AnimatedText text="Omar  El Hajji" className="text-4xl md:text-5xl font-bold tracking-tight" />
              <AnimatedText
                text="English Teacher/Professor"
                className="text-2xl md:text-3xl font-semibold mt-2 bg-gradient-to-r from-orange-500 to-yellow-200 bg-clip-text text-transparent"
                once={true}
              />
            </div>
            <ClientMotion
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              English teacher passionate about helping students develop strong reading, writing, and communication skills. Experienced in creating engaging lessons that inspire a love of language and literature.
            </ClientMotion>
            <ClientMotion
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button asChild className="relative overflow-hidden group bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="#contact">
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-white dark:bg-gray-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Link>
              </Button>
              <Button variant="outline" asChild className="relative overflow-hidden group">
                <Link href="#projects">
                  <span className="relative z-10">View Projects</span>
                  <span className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Link>
              </Button>
              <Button variant="secondary" asChild className="relative overflow-hidden group">
                <Link href="/documents/resume.pdf" target="_blank" download>
                  <Download className="w-4 h-4 mr-2" />
                  <span className="relative z-10">Resume</span>
                  <span className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Link>
              </Button>
            </ClientMotion>
            <ClientMotion
              className="flex gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link
                href="https://www.linkedin.com/in/omar-el-hajji-a0723b62"
                target="_blank"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.tiktok.com/@naturalenglish_with_omar"
                target="_blank"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors transform hover:scale-110 duration-300">
                <SiTiktok className="w-5 h-7" />
              </Link>
              <Link
                href="https://google.com/"
                target="_blank"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
              >
                <ExternalLink className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:"
                className="text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </ClientMotion>
          </div>
          <ClientMotion
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image src="/images/profile.png" alt="Muhammad Murad" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-600/20 mix-blend-overlay" />
            </div>
          </ClientMotion>
        </div>

        <ClientMotion
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <Link
            href="#about"
            className="text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </Link>
        </ClientMotion>
      </div>
    </section>
  )
}

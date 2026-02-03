import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin, FaWordpress, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Rukshan Portfolio&trade;
            </Link>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} Rukshan Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/Yrukshan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rukshan-ekanayake-963b5a35b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="http://rukshan58.wordpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaWordpress className="h-6 w-6" />
            </a>
            <a
              href="mailto:yrukshan345@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaEnvelope className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 
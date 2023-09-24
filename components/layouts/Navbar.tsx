'use client'

import Image from 'next/image'
import Button from '../core/button'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpenNavMobile, setIsOpenNavMobile] = useState(false);

  return (
    <header>
      <div className="border-b border-[#d8d8dc] text-theme-text gap-2">
        <div className="flex justify-between items-center py-4 sm:py-8 px-4 sm:px-10 xl:container">
          <div className="px-4">
            <Link href="/" className="block relative w-[100px] sm:w-[153px] aspect-[3/1]">
              <Image
                src="/images/logo.png"
                alt="logo"
                className="object-contain"
                fill={true}
              />
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <button className="hover-underline hover:text-theme-secondary active:text-theme-text">
              Usługi
            </button>
            <Link href="/produkt" className="hover-underline hover:text-theme-secondary active:text-theme-text">
              Dla developera
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <Button title="Zaloguj" />
            <Button title="Zostań klientem" />
            <div className="flex gap-2 items-center">
              <button className="hover:text-theme-secondary transition">PL</button>
              |
              <button className="hover:text-theme-secondary transition">EN</button>
            </div>
          </div>
          <button
            onClick={() => setIsOpenNavMobile(true)}
            className="lg:hidden flex items-center gap-2"
          >
            Menu
            <FiMenu fontSize={24} />
          </button>
        </div>
      </div>
      {isOpenNavMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="block lg:hidden fixed inset-0 bg-white z-[999]"
        >
          <div className="absolute top-10 right-10">
            <button onClick={() => setIsOpenNavMobile(false)}>
              <AiOutlineClose fontSize={24} />
            </button>
          </div>
          <div className="w-full h-full flex items-center justify-end">
            <div className="flex flex-col items-end gap-6 px-10">
              <Link
                href="/"
                className="block relative w-[120px] sm:w-[153px] aspect-[3/1]"
                onClick={() => setIsOpenNavMobile(false)}
              >
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  className="object-contain"
                  fill={true}
                />
              </Link>
              <button
                className="hover-underline hover:text-theme-secondary active:text-theme-text"
                onClick={() => setIsOpenNavMobile(false)}
              >
                Usługi
              </button>
              <Link
                href="/produkt"
                className="hover-underline hover:text-theme-secondary active:text-theme-text"
                onClick={() => setIsOpenNavMobile(false)}
              >
                Dla developera
              </Link>
              <Button
                title="Zaloguj"
                onClick={() => setIsOpenNavMobile(false)}
              />
              <Button
                title="Zostań klientem"
                onClick={() => setIsOpenNavMobile(false)}
              />
              <div className="flex gap-2 items-center">
                <button
                  className="hover:text-theme-secondary transition"
                  onClick={() => setIsOpenNavMobile(false)}
                >
                  PL
                </button>
                |
                <button
                  className="hover:text-theme-secondary transition"
                  onClick={() => setIsOpenNavMobile(false)}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Navbar

'use client'

import Image from "next/image"
import Button from "../core/button"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="w-full border-t border-[#d8d8dc] text-theme-text text-sm">
      <div className="py-4 px-4 sm:px-10 xl:container flex justify-between items-center gap-y-10 gap-x-20 flex-wrap">
        <Image
          src="/images/logo2.png"
          alt="logo"
          width={77}
          height={77}
        />
        <div className="flex flex-col">
          <ul className="space-y-2">
            <Link href="/firmie1" className="block w-max hover-underline hover:text-theme-secondary active:text-theme-text">
              O firmie
            </Link>
            <Link href="kariera" className="block w-max hover-underline hover:text-theme-secondary active:text-theme-text">
              Kariera
            </Link>
            <Link href="" className="block w-max hover-underline hover:text-theme-secondary active:text-theme-text">
              Polityka prywatności
            </Link>
            <Link href="" className="block w-max hover-underline hover:text-theme-secondary active:text-theme-text">
              Polityka plików cookies
            </Link>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="space-y-2">
            <Link href="" className="block w-max hover-underline hover:text-theme-secondary active:text-theme-text">
              Dla płatnika
            </Link>
            <Link href="" className="block w-max hover-underline hover:text-theme-secondary active:text-theme-text">
              Dla developera
            </Link>
            <Link href="" className="block w-max hover-underline hover:text-theme-secondary active:text-theme-text">
              Dla biznesu
            </Link>
          </ul>
        </div>
        <Button title="Pomoc" />
        <div className="flex flex-col">
          <ul>
            <li>Vimoni Smart Payment Services Sp z o.o.</li>
            <li>KRS: 0001009022 </li>
            <li>NIP: 6751775420 </li>
            <li>REGON: 523979275 </li>
            <li>kapitał zakładowy 100 000 PLN </li>
            <li>w całości opłacony </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

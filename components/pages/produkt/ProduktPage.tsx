'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'

const ProduktPage = () => {
  return (
    <div className="relative flex justify-between w-full px-10 xl:container py-28 pt-10 sm:pt-20">
      <div className="absolute -right-[340px] -top-0 flex aspect-square w-[700px] h-[700px]">
        <Image src="/images/Component2.png" alt="Placeholder" fill={true} />
      </div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 200, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: .6 }}
        className="relative flex flex-col gap-20"
      >
        <Link href="/plugins">
          <div className="bg-[#EDEEF2] flex flex-col gap-2 justify-center px-8 md:px-16 py-8 sm:py-16 max-w-[563px] border-2 rounded-3xl md:rounded-[60px] shadow-[7px_7px_15px_5px_#00000019]">
            <h1 className="font-semibold text-2xl text-theme-primary">
              PLUGINS
            </h1>
            <p className="text-theme-text">
              Przygotowaliśmy dla Ciebie wtyczki którymi łatwo zintegrujesz się
              z platformą Vimoni Payment System.
            </p>
          </div>
        </Link>
        <Link href="/api">
          <div className="bg-[#EDEEF2] flex flex-col gap-2 justify-center px-8 md:px-16 py-8 sm:py-16 max-w-[563px] border-2 rounded-3xl md:rounded-[60px] shadow-[7px_7px_15px_5px_#00000019]">
            <h1 className="font-semibold text-2xl text-theme-primary">
              REST API
            </h1>
            <p className="text-theme-text">
              Za pomocą API Vimoni Payments System możesz wdrożyć i zarządzać
              funkcjami istotnymi dla Ciebie
            </p>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default ProduktPage

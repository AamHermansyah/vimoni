'use client'

import Button from "@/components/core/button"
import Image from "next/image"
import { motion } from 'framer-motion'

const MainPage = () => {
  return (
    <div className="relative w-full px-10 xl:container py-44 overflow-hidden">
      <div className="absolute -right-[340px] -top-0 flex w-[700px] aspect-square">
        <Image src="/images/Component2.png" alt="Placeholder" fill={true} />
      </div>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -200, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: .6 }}
        className="relative space-y-8"
      >
        <h1 className="font-semibold text-5xl sm:text-6xl text-theme-primary">
          Wybierz Vimoni
        </h1>
        <p className="text-theme-text text-xl sm:text-2xl max-w-[640px]">
          Sprawdź nowoczesne usługi płatnicze dla eCommerce dzięki platformie
          Vimoni Smart Payment Systems
        </p>
        <Button title="Wiecej" className="w-max" />
      </motion.div>
    </div>
  );
};

export default MainPage;

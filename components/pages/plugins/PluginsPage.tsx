'use client'

import Image from "next/image"
import { useState } from "react"
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'

const PluginsPage = () => {
  const [isOpenNavMobile, setIsOpenNavMobile] = useState(false);

  return (
    <motion.div
      className="relative lg:flex w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'linear', duration: 1 }}
    >
      <div className="hidden lg:block basis-[256px] bg-[#e8e9ed] py-20 px-8">
        <h3 className="text-xl text-theme-primary font-semibold">PLUGINS</h3>
        <div className="flex flex-col border-t-2 border-[#d8d8dc] text-theme-text w-full pt-8 gap-6">
          <button className="w-max">Przegląd</button>
          <button className="w-max">Tworzenie plugina</button>
        </div>
      </div>
      <div className="block lg:hidden text-right px-4 sm:px-10 py-4">
        <div
          className={`${isOpenNavMobile ? 'translate-x-0' : '-translate-x-[100%]'
            } block lg:hidden fixed inset-y-0 left-0 w-full max-w-[256px] bg-[#e8e9ed] border-r-[1px] border-gray-300 py-20 px-8 text-left shadow-lg z-[998] transition-all duration-200 ease-out`}
        >
          <h3 className="text-xl text-theme-primary font-semibold">PLUGINS</h3>
          <div className="flex flex-col border-t-2 border-[#d8d8dc] text-theme-text w-full pt-8 gap-6">
            <button className="w-max">Przegląd</button>
            <button className="w-max">Tworzenie plugina</button>
          </div>
        </div>
        <button onClick={() => setIsOpenNavMobile((display) => !display)}>
          {isOpenNavMobile ? <AiOutlineClose fontSize={24} /> : <FiMenu fontSize={24} />}
        </button>
      </div>
      <div className="py-4 lg:py-20 px-4 sm:px-10">
        <div className="flex gap-2 sm:gap-8 w-full py-4">
          <div className="place-self-start flex justify-center">
            <Image src={"/images/electric.png"} alt="logo" width={64} height={64} />
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-2xl underline underline-offset-2 text-theme-primary">
              Plugins
            </h1>
            <p className="text-theme-text max-w-[600px]">
              Przyjmuj płatności za pomocą naszych pluginów na wiodących
              rozwiązaniach technologicznych.
            </p>
          </div>
        </div>
        <div className="flex text-theme-text border-t-2 border-[#d8d8dc] py-4 mb-8 max-w-[840px]">
          <p>
            Oferujemy różnorodne wtyczki dla wiodących rozwiązań technologicznych,
            aby zapewnić Twoim klientom najlepsze doświadczenia podczas procesu
            realizacji zamówienia. Nasze wtyczki są łatwe do zintegrowania i
            zawierają funkcjonalności platformy płatności Adyen dostarczone wraz z
            gotowym rozwiązaniem.
          </p>
        </div>
        <div className="border-t-2 max-w-[65px] border-[#d8d8dc]">
        </div>
        <div className="flex flex-col gap-2 py-3">
          <h2 className="font-semibold text-xl text-theme-primary">
            ZBUDOWANE PRZEZ VIMONI
          </h2>
          <p className="text-theme-text">
            Wszystkie te pluginy są tworzone i utrzymywane przez nasz zespół.
          </p>
        </div>
        <div className="flex gap-8 flex-wrap text-theme-text py-8">
          <button className="bg-[#EDEEF2] flex flex-col gap-2 justify-center items-center px-8 w-full sm:w-[242px] h-[168px] rounded-xl plugin-shadow">
            <Image
              src={"/images/blue_link.png"}
              alt="SmartLink Payment"
              width={40}
              height={40}
            />
            <p className="text-center">SmartLink Payments</p>
          </button>
          <button className="bg-[#EDEEF2] flex flex-col gap-2 justify-center items-center px-8 w-full sm:w-[242px] h-[168px] rounded-xl plugin-shadow">
            <Image
              src={"/images/red_link.png"}
              alt="SmartLink Payments"
              width={40}
              height={40}
            />
            <p className="text-center">SmartLink Payments</p>
          </button>
          <button className="bg-[#EDEEF2] flex flex-col gap-2 justify-center items-center px-8 w-full sm:w-[242px] h-[168px] rounded-xl plugin-shadow">
            <Image
              src={"/images/green_pay.png"}
              alt="PowerPay"
              width={40}
              height={40}
            />
            <p className="text-center">PowerPay</p>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default PluginsPage

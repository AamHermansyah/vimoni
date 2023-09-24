'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'

const Firmie1Page = () => {
  return (
    <div className="relative flex justify-between w-full px-4 sm:px-10 xl:container py-10 sm:py-20">
      <div className="absolute -right-[340px] -top-0 flex aspect-square w-[700px] h-[700px]">
        <Image src="/images/Component2.png" alt="Placeholder" fill={true} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'linear', duration: 1 }}
        className="relative flex flex-col gap-12"
      >
        <h1 className="text-theme-primary font-bold text-5xl">
          NASZA HISTORIA
        </h1>
        <h2 className="text-theme-primary underline underline-offset-4 font-bold text-3xl">
          Jak zaczęliśmy
        </h2>
        <div className="max-w-[600px] flex flex-col gap-4 -mt-6">
          <p className="text-theme-text">
            W 2022 roku podczas jednego ze spotkań branżowych narodził się
            pomysł zbudowania prawdziwie &quot;chmurowego&quot; rozwiązania
            płatniczego, które zapewni skalowalność ale przede wszystkim
            bezpieczeństwo transakcji płatniczych swoim klientom.
          </p>
          <p className="text-theme-text">
            Od pomysłu do realizacji minęło kilka mesięcy, kiedy to
            kompletowaliśmy zespół doswiadczonych specjalitów z obszaru IT,
            płatności online i bezpieczeństwa. Na początku 2023 roku uzyskaliśmy
            wpis na listę KNF jako Mała Instytucja Płatnicza. Następnie staliśmy
            się członkiem Polskiego Standardu Płatności, co pozwala nam
            bezpśrednio oferować płatności BLIK. Tak oto rozwijamy swoją
            działalność i każdego dnia dokładamy kolejne elmenty do naszej
            układanki tworząc wyjątkowe rozwiązanie płatnicza w skali Polski i
            Europy.
          </p>
          <div className="flex justify-end items-center mt-8">
            <Link href="/firmie2" className="font-medium text-theme-text hover:text-theme-secondary active:text-theme-text items-center text-sm hover-underline">
              Zespół →
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Firmie1Page;

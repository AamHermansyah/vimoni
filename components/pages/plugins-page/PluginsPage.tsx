import Image from "next/image"

const PluginsPage = () => {
  return (
    <div className="relative flex flex-col justify-center container w-full px-[200px] pb-10 ml-48 ">
      <div className="left-[-200px] absolute h-full w-[256px] bg-[#e8e9ed] py-20 px-12 flex flex-col justify-start gap-8">
          <h3 className="text-xl text-theme-primary font-semibold">
            PLUGINS
          </h3>
        <div className="flex flex-col border-t-2 border-[#d8d8dc] text-theme-text w-full pt-8 gap-6">
          <a>Przegląd</a>
          <a>Tworzenie plugina</a>
        </div>
      </div>
      <div className="flex gap-8 w-[579px] py-4 mt-4">
        <Image
          src={"/images/electric.png"}
          alt="logo"
          width={70}
          height={20}
        />
        <div className="flex flex-col w-full gap-4">
          <h1 className="font-bold text-2xl underline underline-offset-2 text-theme-primary">Plugins</h1>
          <p className="text-theme-text">Przyjmuj płatności za pomocą naszych pluginów na wiodących rozwiązaniach technologicznych.</p>
        </div>
      </div>
      <div className="flex text-theme-text border-t-2 border-[#d8d8dc] py-4 mb-8">
        <p>Oferujemy różnorodne wtyczki dla wiodących rozwiązań technologicznych, aby zapewnić Twoim klientom najlepsze doświadczenia podczas procesu realizacji zamówienia. Nasze wtyczki są łatwe do zintegrowania i zawierają funkcjonalności platformy płatności Adyen dostarczone wraz z gotowym rozwiązaniem.</p>
      </div>
      <div className="flex flex-col gap-2 py-3">
        <h2 className="font-semibold text-xl text-theme-primary">Zbudowane przez Vimoni</h2>
        <p className="text-theme-text">Wszystkie te pluginy są tworzone i utrzymywane przez nasz zespół.</p>
      </div>
      <div className="flex justify-evenly text-theme-text py-8">
        <div className="bg-[#EDEEF2] flex flex-col gap-2 justify-center container px-16 w-[242px] h-[242px] border-2 rounded-xl shadow-[7px_7px_15px_5px_#00000019]">
            <Image
              src={"/images/blue_link.png"}
              alt="SmartLink Payment"
              width={40}
              height={40}
            />
            <p>SmartLink Payments</p>
        </div>
        <div className="bg-[#EDEEF2] flex flex-col gap-2 justify-center container px-16 w-[242px] h-[242px] border-2 rounded-xl shadow-[7px_7px_15px_5px_#00000019]">
            <Image
              src={"/images/red_link.png"}
              alt="SmartLink Payments"
              width={40}
              height={40}
            />
            <p>SmartLink Payments</p>
        </div>
        <div className="bg-[#EDEEF2] flex flex-col gap-2 justify-center container px-16 w-[242px] h-[242px] border-2 rounded-xl shadow-[7px_7px_15px_5px_#00000019]">
            <Image
              src={"/images/green_pay.png"}
              alt="PowerPay"
              width={40}
              height={40}
            />
            <p>SmartLink Payments</p>
        </div>
      </div>
    </div>
  )
}

export default PluginsPage
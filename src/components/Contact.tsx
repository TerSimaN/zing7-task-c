import Button from "./Button"

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-12 px-[436px] pt-[101px]">
        <div className="flex flex-col items-center gap-y-6">
            <h1 className="font-space-grotesk font-semibold text-7xl leading-[108%] tracking-[-4px] text-center text-white">
                Готови ли сте да работим заедно?
            </h1>
            <p className="font-inter font-normal text-xl leading-[170%] text-center text-white">
                Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси
            </p>
        </div>
        <div className="flex flex-row h-[72px]">
            <input className="font-inter font-normal text-base leading-6 tracking-[-0.3px] text-right border rounded-l-lg border-white gap-x-5 px-5 py-6"
             type="tel" placeholder="Мобилен телефон">
                
             </input>
            <button className="border rounded-r-lg border-swamp-yellow bg-swamp-yellow text-swamp-green w-[137px]">
                Изпрати
            </button>
        </div>
    </div>
  )
}

export default Contact
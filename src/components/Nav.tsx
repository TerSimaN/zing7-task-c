import Button from "./Button"

const Nav = () => {
  return (
    <header className="flex justify-between items-center pt-[32px] px-[152px] w-auto">
        <span className="font-space-grotesk font-bold text-[29.65px] leading-[140%] tracking-[-0.62px] text-swamp-blue">Website</span>
        <ul className="flex gap-10 text-left font-inter font-medium text-base leading-[170%]">
            <li className="text-swamp-green">
                <a href="/">Начало</a>
            </li>
            <li className="text-swamp-gray">
                <a>За нас</a>
            </li>
            <li className="text-swamp-gray">
                <a>Услуги</a>
            </li>
            <li className="text-swamp-gray">
                <a>Цени</a>
            </li>
            <li className="text-swamp-gray">
                <a>Как работи</a>
            </li>
            <li className="text-swamp-gray">
                <a>Контакти</a>
            </li>
        </ul>
        <div className="flex flex-row items-center gap-9">
            <span className="font-inter font-medium leading-4 text-swamp-green">Профил</span>
            <Button label="Заявка за пратка" />
        </div>
    </header>
  )
}

export default Nav
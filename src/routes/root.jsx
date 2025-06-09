import { Outlet } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Root() {
  return (
    <div className="min-h-screen bg-white dark:bg-blackB text-dark dark:text-white ">
      <header className="px-8 py-16 max-w-7xl mx-auto">
        <img src="src/assets/imgs/LogoA.svg" alt="logo" className=" mb-4" />
        <nav className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2  lg:mt-0">
            <p className="font-Inter font-bold text-5xl mb-6 w-2/3">
              Saiba tudo em um só
              <span className="text-secondary-default">lugar</span>.
            </p>

            <p className="text-base font-normal font-Inter mb-4">
              Personagens. localizações, episódios e muito mais.
            </p>
            <div className="mb-6">
              <DarkModeToggle />
            </div>
            <p className="font-Inter font-normal text-base  block dark:hidden text-secondary-default">
              Wubba Lubba Dub Dub! Cuidado com os olhos.
            </p>
            <p className="font-Inter font-normal text-base hidden dark:block text-secondary-default">
              Ai sim, Porr#@%&*
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="src/assets/imgs/HighLightImage (2).svg"
              alt="Logo Light"
              className="block dark:hidden w-1/2"
            />
            <img
              src="src/assets/imgs/HighlightImage.svg"
              alt="Logo Dark"
              className="hidden dark:block w-[774px]"
            />
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4">
        <Outlet />
      </main>
    </div>
  );
}

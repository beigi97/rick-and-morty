import { EarthIcon, HeartIcon, HelpIcon } from "../routes/Icons";

export default function LocationCardList({ locations, onClick }) {
  return (
    <div className=" flex flex-wrap ">
      {locations.map((location) => (
        <div
          key={location.id}
          className=" w-full   sm:w-[calc(50%-16px)]
          md:w-[calc(33.3333%-16px)]
          lg:w-[calc(25%-16px)]
          xl:w-[calc(20%-16px)]
          2xl:w-[calc(14.2857%-16px)]
          mb-8
        
           bg-primary dark:bg-blackA p-4 m-2 relative rounded-2xl flex flex-col justify-between"
        >
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <EarthIcon className="w-12 h-12" />
          </span>

          <h2 className="font-Inter font-normal text-base text-blackA dark:text-white text-center">
            {location.type}
          </h2>
          <h2 className="font-Inter font-normal text-base text-secondary-default text-center ">
            {location.name}
          </h2>

          <div className="flex flex-col items-center mt-auto">
            <div
              onClick={() => onClick(location)}
              className="flex  w-fit font-Inter text-sm font-normal px-1 py-2 rounded-[32px]  dark:bg-blackA hover:bg-secondary-dark text-white bg-secondary-default transition-colors duration-200 cursor-pointer  "
            >
              <HelpIcon className="w-5 h-5 mr-2" />
              Saiba mais
            </div>

            <HeartIcon className="w-8 h-8 m-auto mt-3" />
          </div>
        </div>
      ))}
    </div>
  );
}

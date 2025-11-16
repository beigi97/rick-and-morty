import {
  EarthIcon,
  FaceIcon,
  HeartIcon,
  HelpIcon,
  TickIcon,
} from "../routes/Icons";

export default function PersonagensCardList({ characters, onClick }) {
  return (
    <>
      <div className="flex flex-wrap gap-4 gap-y-4 w-full ">
        {characters.map((character) => (
          <div
            key={character.id}
            className=" w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] bg-primary dark:bg-blackA rounded-lg shadow-md overflow-hidden  flex flex-col justify-between"
          >
            <div className="cursor-pointer" onClick={() => onClick(character)}>
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-64 object-cover p-4 rounded-2xl"
              />
            </div>

            <div className="px-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className=" text-lg font-bold text-blackA dark:text-white ">
                  {character.name}
                </h2>
                <HeartIcon className="ml-auto w-12 h-12" />
              </div>
              <h3 className="text-blackA dark:text-white font-Inter font-normal text-base flex items-center">
                <TickIcon className="mr-2 w-4 h-4" />
                {character.status}
              </h3>
              <h3 className="mb-2 font-Inter font-normal text-base flex items-center text-blackA dark:text-white">
                <FaceIcon className="mr-2 w-4 h-4" />
                {character.species}
              </h3>
              <h3 className=" font-Inter font-normal text-base flex items-center text-blackA dark:text-white">
                <EarthIcon className="w-4 h-4 mr-2" />
                {character.origin.name}
              </h3>
              <div
                onClick={() => onClick(character)}
                className="flex  ml-auto my-4  w-fit font-Inter text-sm font-normal px-4 py-2 rounded-[32px]  dark:bg-blackA hover:bg-secondary-dark text-white bg-secondary-default transition-colors duration-200 cursor-pointer "
              >
                <HelpIcon className="mr-2 w-5 h-5" />
                Saiba mais
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

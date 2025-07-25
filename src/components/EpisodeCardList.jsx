import { HeartIcon, HelpIcon, VideoPlayIcon } from "../routes/Icons";

export default function EpisodeCardList({ episodes, onClick }) {
  return (
    <div className=" flex  flex-wrap ">
      {episodes.map((episode) => (
        <div
          key={episode.id}
          className="bg-primary dark:bg-blackA p-4 m-2 rounded-2xl w-full
      sm:w-[calc(50%-16px)]
      md:w-[calc(33.3333%-16px)]
      lg:w-[calc(25%-16px)]
      xl:w-[calc(20%-16px)]   flex flex-col justify-between"
        >
          <div className="flex mb-3">
            <VideoPlayIcon className="w-6 h-6" />
            <h2 className="border-r-4 border-r-blackA dark:border-r-white pr-2 text-blackA dark:text-white">
              {episode.name}
            </h2>
            <h2 className="pl-2 text-blackA dark:text-white">
              {episode.episode}
            </h2>
          </div>
          <div className="flex  mt-auto ">
            <div
              onClick={() => onClick(episode)}
              className="flex  w-fit font-Inter text-sm font-normal px-1 py-2 rounded-[32px]  dark:bg-blackA hover:bg-secondary-dark text-white bg-secondary-default transition-colors duration-200 cursor-pointer  "
            >
              <HelpIcon className="w-5 h-5 mr-2" />
              Saiba mais
            </div>

            <HeartIcon className="ml-auto w-8 h-8" />
          </div>
        </div>
      ))}
    </div>
  );
}

import { useState } from "react";
import { getEpisodeList } from "../api/getEpisodeList";
import EpisodeCardList from "../components/EpisodeCardList";
import { Link, useLoaderData } from "react-router-dom";
import { HeartIcon, MinimalFaceIcon, VideoPlayIcon } from "./Icons";

export async function loader() {
  const data = await getEpisodeList();
  const episodes = data.results;
  const info = data.info;

  return { episodes, info };
}

export default function EpisodeList() {
  const { episodes: initialEpisode, info } = useLoaderData();
  const [episodes, setEpisodes] = useState(initialEpisode);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectEpisode, setSelectEpisode] = useState(null);

  const feachEpisodes = async (newPage) => {
    const data = await getEpisodeList(newPage);
    setEpisodes(data.results);
    setPage(newPage);
    setHasMore(newPage < data.info.pages);
  };

  const handleClick = (episode) => {
    setSelectEpisode(episode);
  };

  return (
    <>
      <div className="bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto pt-8">
          {selectEpisode && (
            <>
              <Link to={`/`}>
                <img
                  src="src/assets/imgs/LogoA.svg"
                  alt="logo"
                  className=" mb-8"
                />
              </Link>
              <span>
                <VideoPlayIcon className="w-16 h-16 mr-2" />
              </span>
              <h2 className=" flex font-Inter font-bold text-5xl my-6 text-blackA dark:text-white ">
                {selectEpisode.name}

                <HeartIcon className="w-14 h-14 ml-4" />
              </h2>
              <div className="font-Inter text-2xl font-normal mb-16 flex ">
                <span className="mr-6 flex text-blackA dark:text-white">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      d="M26 4H23V3C23 2.73478 22.8946 2.48043 22.7071 2.29289C22.5196 2.10536 22.2652 2 22 2C21.7348 2 21.4804 2.10536 21.2929 2.29289C21.1054 2.48043 21 2.73478 21 3V4H11V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2C9.73478 2 9.48043 2.10536 9.29289 2.29289C9.10536 2.48043 9 2.73478 9 3V4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V26C4 26.5304 4.21071 27.0391 4.58579 27.4142C4.96086 27.7893 5.46957 28 6 28H26C26.5304 28 27.0391 27.7893 27.4142 27.4142C27.7893 27.0391 28 26.5304 28 26V6C28 5.46957 27.7893 4.96086 27.4142 4.58579C27.0391 4.21071 26.5304 4 26 4ZM9 6V7C9 7.26522 9.10536 7.51957 9.29289 7.70711C9.48043 7.89464 9.73478 8 10 8C10.2652 8 10.5196 7.89464 10.7071 7.70711C10.8946 7.51957 11 7.26522 11 7V6H21V7C21 7.26522 21.1054 7.51957 21.2929 7.70711C21.4804 7.89464 21.7348 8 22 8C22.2652 8 22.5196 7.89464 22.7071 7.70711C22.8946 7.51957 23 7.26522 23 7V6H26V10H6V6H9ZM26 26H6V12H26V26Z"
                      className="fill-blackA dark:fill-white"
                    />
                  </svg>
                  {selectEpisode.air_date}
                </span>
                <span className="flex text-blackA dark:text-white">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7H27C27.2652 7 27.5196 7.10536 27.7071 7.29289C27.8946 7.48043 28 7.73478 28 8C28 8.26522 27.8946 8.51957 27.7071 8.70711C27.5196 8.89464 27.2652 9 27 9H5C4.73478 9 4.48043 8.89464 4.29289 8.70711C4.10536 8.51957 4 8.26522 4 8ZM17 15H5C4.73478 15 4.48043 15.1054 4.29289 15.2929C4.10536 15.4804 4 15.7348 4 16C4 16.2652 4.10536 16.5196 4.29289 16.7071C4.48043 16.8946 4.73478 17 5 17H17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16C18 15.7348 17.8946 15.4804 17.7071 15.2929C17.5196 15.1054 17.2652 15 17 15ZM17 23H5C4.73478 23 4.48043 23.1054 4.29289 23.2929C4.10536 23.4804 4 23.7348 4 24C4 24.2652 4.10536 24.5196 4.29289 24.7071C4.48043 24.8946 4.73478 25 5 25H17C17.2652 25 17.5196 24.8946 17.7071 24.7071C17.8946 24.5196 18 24.2652 18 24C18 23.7348 17.8946 23.4804 17.7071 23.2929C17.5196 23.1054 17.2652 23 17 23ZM31 20C30.9999 20.1695 30.9567 20.3362 30.8745 20.4845C30.7923 20.6327 30.6738 20.7577 30.53 20.8475L22.53 25.8475C22.3787 25.9421 22.2048 25.9944 22.0264 25.9992C21.848 26.0039 21.6716 25.9607 21.5154 25.8743C21.3593 25.7878 21.2292 25.6611 21.1386 25.5074C21.0479 25.3537 21.0001 25.1785 21 25V15C21.0001 14.8215 21.0479 14.6464 21.1386 14.4926C21.2292 14.3389 21.3593 14.2122 21.5154 14.1257C21.6716 14.0393 21.848 13.9961 22.0264 14.0008C22.2048 14.0056 22.3787 14.0579 22.53 14.1525L30.53 19.1525C30.6738 19.2423 30.7923 19.3673 30.8745 19.5155C30.9567 19.6638 30.9999 19.8305 31 20ZM28.1138 20L23 16.8037V23.1963L28.1138 20Z"
                      className="fill-blackA dark:fill-white"
                    />
                  </svg>
                  {selectEpisode.episode}
                </span>
              </div>
              <p className="flex text-blackA dark:text-white">
                <MinimalFaceIcon className="w-8 h-8" />
                {selectEpisode.characters.length} Personagens participaram deste
                episódio
              </p>
              <hr className="border-t-4 border-secondary-default mt-52" />
            </>
          )}
          <div className=" flex items-center mb-16 mt-12 ">
            <VideoPlayIcon className="w-12 h-12" />
            <h2 className="font-Inter text-2xl font-bold w-44 text-blackA dark:text-white ">
              Mais episódios
            </h2>
          </div>
          <EpisodeCardList episodes={episodes} onClick={handleClick} />

          <div className="flex justify-center items-center py-16 gap-4">
            <button
              onClick={() => feachEpisodes(page - 1)}
              disabled={page === 1}
              className={`text-3xl px-2  text-blackA dark:text-white ${
                page === 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:text-gray-400"
              }`}
            >
              &#60;
            </button>

            {[...Array(4)].map((_, index) => {
              const startPage = page > 1 ? page - 1 : 1;

              const pageNum = startPage + index;
              return (
                <button
                  key={pageNum}
                  onClick={() => feachEpisodes(pageNum)}
                  className={`px-3 py-1 text-blackA dark:text-white font-normal text-base border rounded-full ${
                    page === pageNum
                      ? "bg-secondary-default text-black font-bold"
                      : "hover:bg-secondary-dark"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => feachEpisodes(page + 1)}
              disabled={page === info.pages}
              className={`text-3xl px-2 text-blackA dark:text-white ${
                page === info.pages
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:text-gray-400"
              }`}
            >
              &#62;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

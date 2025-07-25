import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { getFirstPageCharacters } from "../api/getFirstPageCharacters";
import PersonagensCardList from "../components/PersonagensCardList";
import { getFirstPageEpisodes } from "../api/getFirstPageEpisodes";
import EpisodeCardList from "../components/EpisodeCardList";
import { getFirstPageLocations } from "../api/getFirstPageLocations";
import LocationCardList from "../components/LocationCardList";
import { GridIcon } from "./Icons";

export async function loader() {
  const charactersData = await getFirstPageCharacters();
  const episodesData = await getFirstPageEpisodes();
  const locationData = await getFirstPageLocations();
  const characters = charactersData.results;
  const episodes = episodesData.results;
  const locations = locationData.results;

  return { characters, episodes, locations };
}

export default function Home() {
  const { characters, episodes, locations } = useLoaderData();
  const visibleCharacters = characters.slice(0, 8);
  const visibleEpisodes = episodes.slice(0, 5);
  const visibleLocations = locations.slice(0, 7);

  return (
    <div className="min-h-screen p-4">
      <div className="flex mb-8">
        <h2 className="font-Inter font-bold text-2xl mr-4">Personagens</h2>
        <Link
          to="/personagens"
          className="font-Inter text-sm font-normal px-4 py-2 rounded-[32px]  dark:bg-blackA hover:bg-secondary-dark text-white bg-secondary-default transition-colors duration-200 flex"
        >
          <GridIcon className="mr-2 " />
          Ver todos
        </Link>
      </div>

      <PersonagensCardList characters={visibleCharacters} />
      <div className="mt-16 flex mb-8">
        <h2 className="font-Inter text-2xl font-bold mr-4">Episódios</h2>
        <Link
          to="/episodes"
          className="font-Inter text-sm font-normal px-4 py-2 rounded-[32px]  dark:bg-blackA hover:bg-secondary-dark text-white bg-secondary-default transition-colors duration-200 flex"
        >
          <GridIcon className="mr-2 " />
          Ver todos
        </Link>
      </div>
      <EpisodeCardList episodes={visibleEpisodes} />
      <div className="flex mt-14 mb-12">
        <h2 className="font-Inter text-2xl font-bold mr-4 ">Localizações</h2>
        <Link
          to="/locations"
          className=" font-Inter text-sm font-normal px-4 py-2 rounded-[32px]  dark:bg-blackA hover:bg-secondary-dark text-white bg-secondary-default transition-colors duration-200 flex"
        >
          <GridIcon className="mr-2 " />
          Ver todos
        </Link>
      </div>
      <LocationCardList locations={visibleLocations} />

      <img src="src/assets/imgs/LogoA.svg" alt="logo" className="p-20 " />
    </div>
  );
}

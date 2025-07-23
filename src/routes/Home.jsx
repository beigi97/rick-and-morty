import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { getFirstPageCharacters } from "../api/getFirstPageCharacters";
import PersonagensCardList from "../components/PersonagensCardList";
import { getFirstPageEpisodes } from "../api/getFirstPageEpisodes";
import EpisodeCardList from "../components/EpisodeCardList";
import { getFirstPageLocations } from "../api/getFirstPageLocations";
import LocationCardList from "../components/LocationCardList";
import { Spinner } from "flowbite-react";

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
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="min-h-screen p-4">
      <div className="flex mb-8">
        <h2 className="font-Inter font-bold text-2xl mr-4">Personagens</h2>
        <Link
          to="/personagens"
          className="font-Inter text-sm font-normal px-4 py-2 rounded-[32px]  dark:bg-blackA hover:bg-secondary-dark text-white bg-secondary-default transition-colors duration-200 flex"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M6.75 0.75H2.25C1.85218 0.75 1.47064 0.908035 1.18934 1.18934C0.908035 1.47064 0.75 1.85218 0.75 2.25V6.75C0.75 7.14782 0.908035 7.52936 1.18934 7.81066C1.47064 8.09196 1.85218 8.25 2.25 8.25H6.75C7.14782 8.25 7.52936 8.09196 7.81066 7.81066C8.09196 7.52936 8.25 7.14782 8.25 6.75V2.25C8.25 1.85218 8.09196 1.47064 7.81066 1.18934C7.52936 0.908035 7.14782 0.75 6.75 0.75ZM6.75 6.75H2.25V2.25H6.75V6.75ZM15.75 0.75H11.25C10.8522 0.75 10.4706 0.908035 10.1893 1.18934C9.90804 1.47064 9.75 1.85218 9.75 2.25V6.75C9.75 7.14782 9.90804 7.52936 10.1893 7.81066C10.4706 8.09196 10.8522 8.25 11.25 8.25H15.75C16.1478 8.25 16.5294 8.09196 16.8107 7.81066C17.092 7.52936 17.25 7.14782 17.25 6.75V2.25C17.25 1.85218 17.092 1.47064 16.8107 1.18934C16.5294 0.908035 16.1478 0.75 15.75 0.75ZM15.75 6.75H11.25V2.25H15.75V6.75ZM6.75 9.75H2.25C1.85218 9.75 1.47064 9.90804 1.18934 10.1893C0.908035 10.4706 0.75 10.8522 0.75 11.25V15.75C0.75 16.1478 0.908035 16.5294 1.18934 16.8107C1.47064 17.092 1.85218 17.25 2.25 17.25H6.75C7.14782 17.25 7.52936 17.092 7.81066 16.8107C8.09196 16.5294 8.25 16.1478 8.25 15.75V11.25C8.25 10.8522 8.09196 10.4706 7.81066 10.1893C7.52936 9.90804 7.14782 9.75 6.75 9.75ZM6.75 15.75H2.25V11.25H6.75V15.75ZM15.75 9.75H11.25C10.8522 9.75 10.4706 9.90804 10.1893 10.1893C9.90804 10.4706 9.75 10.8522 9.75 11.25V15.75C9.75 16.1478 9.90804 16.5294 10.1893 16.8107C10.4706 17.092 10.8522 17.25 11.25 17.25H15.75C16.1478 17.25 16.5294 17.092 16.8107 16.8107C17.092 16.5294 17.25 16.1478 17.25 15.75V11.25C17.25 10.8522 17.092 10.4706 16.8107 10.1893C16.5294 9.90804 16.1478 9.75 15.75 9.75ZM15.75 15.75H11.25V11.25H15.75V15.75Z"
              fill="white"
            />
          </svg>
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
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M6.75 0.75H2.25C1.85218 0.75 1.47064 0.908035 1.18934 1.18934C0.908035 1.47064 0.75 1.85218 0.75 2.25V6.75C0.75 7.14782 0.908035 7.52936 1.18934 7.81066C1.47064 8.09196 1.85218 8.25 2.25 8.25H6.75C7.14782 8.25 7.52936 8.09196 7.81066 7.81066C8.09196 7.52936 8.25 7.14782 8.25 6.75V2.25C8.25 1.85218 8.09196 1.47064 7.81066 1.18934C7.52936 0.908035 7.14782 0.75 6.75 0.75ZM6.75 6.75H2.25V2.25H6.75V6.75ZM15.75 0.75H11.25C10.8522 0.75 10.4706 0.908035 10.1893 1.18934C9.90804 1.47064 9.75 1.85218 9.75 2.25V6.75C9.75 7.14782 9.90804 7.52936 10.1893 7.81066C10.4706 8.09196 10.8522 8.25 11.25 8.25H15.75C16.1478 8.25 16.5294 8.09196 16.8107 7.81066C17.092 7.52936 17.25 7.14782 17.25 6.75V2.25C17.25 1.85218 17.092 1.47064 16.8107 1.18934C16.5294 0.908035 16.1478 0.75 15.75 0.75ZM15.75 6.75H11.25V2.25H15.75V6.75ZM6.75 9.75H2.25C1.85218 9.75 1.47064 9.90804 1.18934 10.1893C0.908035 10.4706 0.75 10.8522 0.75 11.25V15.75C0.75 16.1478 0.908035 16.5294 1.18934 16.8107C1.47064 17.092 1.85218 17.25 2.25 17.25H6.75C7.14782 17.25 7.52936 17.092 7.81066 16.8107C8.09196 16.5294 8.25 16.1478 8.25 15.75V11.25C8.25 10.8522 8.09196 10.4706 7.81066 10.1893C7.52936 9.90804 7.14782 9.75 6.75 9.75ZM6.75 15.75H2.25V11.25H6.75V15.75ZM15.75 9.75H11.25C10.8522 9.75 10.4706 9.90804 10.1893 10.1893C9.90804 10.4706 9.75 10.8522 9.75 11.25V15.75C9.75 16.1478 9.90804 16.5294 10.1893 16.8107C10.4706 17.092 10.8522 17.25 11.25 17.25H15.75C16.1478 17.25 16.5294 17.092 16.8107 16.8107C17.092 16.5294 17.25 16.1478 17.25 15.75V11.25C17.25 10.8522 17.092 10.4706 16.8107 10.1893C16.5294 9.90804 16.1478 9.75 15.75 9.75ZM15.75 15.75H11.25V11.25H15.75V15.75Z"
              fill="white"
            />
          </svg>
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
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 "
          >
            <path
              d="M6.75 0.75H2.25C1.85218 0.75 1.47064 0.908035 1.18934 1.18934C0.908035 1.47064 0.75 1.85218 0.75 2.25V6.75C0.75 7.14782 0.908035 7.52936 1.18934 7.81066C1.47064 8.09196 1.85218 8.25 2.25 8.25H6.75C7.14782 8.25 7.52936 8.09196 7.81066 7.81066C8.09196 7.52936 8.25 7.14782 8.25 6.75V2.25C8.25 1.85218 8.09196 1.47064 7.81066 1.18934C7.52936 0.908035 7.14782 0.75 6.75 0.75ZM6.75 6.75H2.25V2.25H6.75V6.75ZM15.75 0.75H11.25C10.8522 0.75 10.4706 0.908035 10.1893 1.18934C9.90804 1.47064 9.75 1.85218 9.75 2.25V6.75C9.75 7.14782 9.90804 7.52936 10.1893 7.81066C10.4706 8.09196 10.8522 8.25 11.25 8.25H15.75C16.1478 8.25 16.5294 8.09196 16.8107 7.81066C17.092 7.52936 17.25 7.14782 17.25 6.75V2.25C17.25 1.85218 17.092 1.47064 16.8107 1.18934C16.5294 0.908035 16.1478 0.75 15.75 0.75ZM15.75 6.75H11.25V2.25H15.75V6.75ZM6.75 9.75H2.25C1.85218 9.75 1.47064 9.90804 1.18934 10.1893C0.908035 10.4706 0.75 10.8522 0.75 11.25V15.75C0.75 16.1478 0.908035 16.5294 1.18934 16.8107C1.47064 17.092 1.85218 17.25 2.25 17.25H6.75C7.14782 17.25 7.52936 17.092 7.81066 16.8107C8.09196 16.5294 8.25 16.1478 8.25 15.75V11.25C8.25 10.8522 8.09196 10.4706 7.81066 10.1893C7.52936 9.90804 7.14782 9.75 6.75 9.75ZM6.75 15.75H2.25V11.25H6.75V15.75ZM15.75 9.75H11.25C10.8522 9.75 10.4706 9.90804 10.1893 10.1893C9.90804 10.4706 9.75 10.8522 9.75 11.25V15.75C9.75 16.1478 9.90804 16.5294 10.1893 16.8107C10.4706 17.092 10.8522 17.25 11.25 17.25H15.75C16.1478 17.25 16.5294 17.092 16.8107 16.8107C17.092 16.5294 17.25 16.1478 17.25 15.75V11.25C17.25 10.8522 17.092 10.4706 16.8107 10.1893C16.5294 9.90804 16.1478 9.75 15.75 9.75ZM15.75 15.75H11.25V11.25H15.75V15.75Z"
              fill="white"
            />
          </svg>
          Ver todos
        </Link>
      </div>
      <LocationCardList locations={visibleLocations} />

      <img src="src/assets/imgs/LogoA.svg" alt="logo" className="p-20 " />
    </div>
  );
}

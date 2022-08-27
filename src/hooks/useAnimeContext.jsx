import { AnimeContext } from "../context/AnimeContext";
import { useContext } from "react";

export const useAnimeContext = () => {
    const context = useContext(AnimeContext);

    return context;
}
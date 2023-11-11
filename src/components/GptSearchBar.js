import React, { useRef, useState } from "react";
import openai from "../utils/openAi";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptSearchMovieResults } from "../utils/redux/gptSlice";

const GptSearchBar = () => {
    const searchValue = useRef();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    console.log(loading, "LOADINF");

    const searchMovieDetails = async (movieName) => {
        try {
            const data = await fetch(
                `https://api.themoviedb.org/3/search/movie?query=${movieName}`,
                TMDB_API_OPTIONS
            );
            const json = await data.json();
            return json.results;
        } catch (error) {
            console.log(error, "ERROR");
        }
    };

    const searchUsingGPT = async () => {
        try {
            setLoading(true);
            const GPTPrompt = `Recommend me some movies for this query ${searchValue.current.value}. Just give me examples of 5 movies with comma seperated names like this example I am giving you.Please follow this format strictly in your answers. Example: Don, Sholay, Gadar, Taare Zameen Par, Tiger-3`;

            const chatCompletion = await openai.chat.completions.create({
                messages: [{ role: "user", content: GPTPrompt }],
                model: "gpt-3.5-turbo",
            });

            // const chatCompletion = {
            //     id: "chatcmpl-8IgmXBWl94kBuJFoVmPlfPqdRng37",
            //     object: "chat.completion",
            //     created: 1699465049,
            //     model: "gpt-3.5-turbo-0613",
            //     choices: [
            //         {
            //             index: 0,
            //             message: {
            //                 role: "assistant",
            //                 content:
            //                     "Mughal-E-Azam, Pakeezah, Amar Akbar Anthony, Kabhi Kabhie, Deewaar",
            //             },
            //             finish_reason: "stop",
            //         },
            //     ],
            //     usage: {
            //         prompt_tokens: 68,
            //         completion_tokens: 27,
            //         total_tokens: 95,
            //     },
            // };

            const movieSuggestions =
                chatCompletion.choices[0].message.content.split(",");
            const promiseArray = movieSuggestions?.map((movie) =>
                searchMovieDetails(movie)
            );

            const movieResults = await Promise.all(promiseArray);

            const selectedMovies = [];
            for (const movieArr of movieResults) {
                if (movieArr.length > 0) {
                    selectedMovies.push(movieArr[0]);
                }
            }

            dispatch(addGptSearchMovieResults(selectedMovies));
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-[10%]">
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-1/2 m-auto bg-black"
            >
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                ></label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        ref={searchValue}
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="What would you like to watch today?"
                        required
                    />
                    <button
                        disabled={loading}
                        onClick={searchUsingGPT}
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>
            <div>
                <h1 className="m-4 p-4 text-white text-3xl font-bold text-center">{loading ? "Please wait we are fetching the top 5 results for your search": ""}</h1>
            </div>
        </div>
    );
};

export default GptSearchBar;

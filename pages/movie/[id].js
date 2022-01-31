
import { getSession, useSession } from 'next-auth/client';
import {useEffect, useState} from 'react';
import { PlusIcon, XIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Header from '../../components/Header'
import Hero from "../../components/Hero";
import ReactPlayer from 'react-player';


const Movie = ({result}) => {
  console.log(result)
  const [session] = useSession()
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [showPlayer, setShowPlayer] = useState(false)

  useEffect(() => {
      if(!session){
          router.push('/');
      }
  },[])

  const index = result.videos.results.findIndex(element=> element.type === "Trailer")
  console.log(
		`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`
	);
  return (
		<div>
			<Head>
				<title>{result.title || result.original_title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			{!session ? (
				<Hero />
			) : (
				<section className="relative z-50">
					<div className="relative min-h-[calc(100vh-72px)] ">
						<Image
							src={
								`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
								`${BASE_URL}${result.poster_path}`
							}
							layout="fill"
							objectFit="cover"
							alt={result.title || result.original_title}
						/>
					</div>
					<div
						className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12
                    space-y-6 z-30 "
					>
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
							{result.title || result.original_title}
						</h1>
						<div className="flex items-center space-x-3 md:space-x-5">
							<button
								className="text-xs md:text-base bg-[#f9f9f9] text-black flex justify-center items-center
                            py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
							>
								<img
									className="h-6 md:h-8"
									src="/images/play-icon-black.svg"
									alt="play"
								/>
								<span className="uppercase font-medium tracking-wide">
									Play
								</span>
							</button>

							<button
								className="text-xs md:text-base bg-black/30 
                                text-[#f9f9f9] border border-[#f9f9f9] flex justify-center items-center
                                py-2.5 px-6 rounded hover:bg-[#a09e9e21]"
								onClick={() => setShowPlayer(true)}
							>
								<img
									className="h-6 md:h-8"
									src="/images/play-icon-white.svg"
									alt="play"
								/>
								<span className="uppercase font-medium tracking-wide">
									Trailer
								</span>
							</button>
							<div
								className="rounded-full border-2 border-wihte w-11 h-11
                            flex justify-center items-center bg-black/60 cursor-pointer"
							>
								<PlusIcon className="h-6" />
							</div>
							<div
								className="rounded-full border-2 border-wihte w-11 h-11
                            flex justify-center items-center bg-black/60 cursor-pointer"
							>
								<img src="/images/group-icon.svg" alt="group" />
							</div>
						</div>
						<div className="flex w-[110px] justify-between items-center text-xs md:text-sm">
							<span
								className="rounded-lg border-2 border-wihte  p-[10px] w-11 h-9
                            flex justify-center items-center bg-black/60 cursor-pointer"
							>
								{result.vote_average}
							</span>
							<span
								className="rounded-lg border-2 border-wihte p-[10px] w-118 h-9
                            flex justify-center items-center bg-black/60 cursor-pointer"
							>
								{result.adult ? "+18" : "Family"}
							</span>
						</div>
						<p className="text-xs md:text-sm">
							{result.release_date || result.first_air_date} •{" "}
							{Math.floor(result.runtime / 60)}h {result.runtime % 60}m{" "}
							{result.genres.map((genre) => " | " + genre.name + " ")}{" "}
						</p>
						<h4 className="text-sm md:text-lg max-w-4xl">{result.overview}</h4>
					</div>

					<div className="absolute inset-0 bg-black opacity-20 h-full w-full z-10"></div>
					{showPlayer && (
						<div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
					)}
					<div
						className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
							showPlayer ? "opacity-100 z-50" : "opacity-0"
						}`}
					>
						<div
							className="flex items-center justify-between bg-black
                         text-[#f9f9f9] p-3.5"
						>
							<span className="font-semibold">Play Trailer</span>
							<div
								className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50
                            hover:opacity-75 hover:bg-[#0F0F0F]"
								onClick={() => setShowPlayer(false)}
							>
								<XIcon className="h-5" />
							</div>
						</div>
						<div className="relative pt-[56.25%]">
							<ReactPlayer
								url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
								width="100%"
								height="100%"
								style={{ position: "absolute", top: "0", left: "" }}
								controls={true}
								playing={showPlayer}
							/>
						</div>
						
					</div>
				</section>
			)}
		</div>
	);
};

export default Movie;


export async function getServerSideProps(context){
    const session = await getSession(context);

    const {id} = context.query;

    const request = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
		);
    const data = await request.json()
     

    return {
        props: {
            session,
            result: data,
        }
    }
} 
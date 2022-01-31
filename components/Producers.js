
import Image from 'next/image';
import React from 'react';

const Producers = () => {
  return (
		//   <section className="auto-cols-fr">
		<section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
			<div className="producer group">
				<Image
					src="/images/disnep.png"
					alt="producer"
					layout="fill"
					objectFit="cover"
				/>
				<video
					autoPlay
					loop
					muted
					playsInline
					className="hidden group-hover:inline rounded-[3px] object-cover w-[100%]"
				>
					<source src="/videos/disn.mp4" type="video/mp4" />
				</video>
			</div>
			<div className="producer group">
				<Image
					src="/images/pixar.png"
					alt="producer"
					layout="fill"
					objectFit="cover"
				/>
				<video
					autoPlay
					loop
					muted
					playsInline
					className="hidden group-hover:inline rounded-[3px] object-cover w-[100%]"
				>
					<source src="/videos/pixar.mp4" type="video/mp4" />
				</video>
			</div>

			<div className="producer group">
				<Image
					src="/images/marvel.png"
					alt="producer"
					layout="fill"
					objectFit="cover"
				/>
				<video
					autoPlay
					loop
					muted
					playsInline
					className="hidden group-hover:inline rounded-[3px] object-cover w-[100%]"
				>
					<source src="/videos/marvel.mp4" type="video/mp4" />
				</video>
			</div>

			<div className="producer group">
				<Image
					src="/images/starwars.png"
					layout="fill"
					objectFit="cover"
					alt="producer"
				/>
				<video
					autoPlay
					loop
					playsInline
					className="hidden group-hover:inline rounded-[3px] object-cover w-[100%]"
				>
					<source src="/videos/star-wars.mp4" type="video/mp4" />
				</video>
			</div>

			<div className="producer group">
				<Image
					src="/images/national-geographic.png"
					layout="fill"
					objectFit="cover"
					alt="producer"
				/>
				<video
					autoPlay
					loop
					playsInline
					className="hidden group-hover:inline rounded-[3px] object-cover w-[100%]"
				>
					<source src="/videos/national-geographic.mp4" type="video/mp4" />
				</video>
			</div>
		</section>
	);
};

export default Producers;

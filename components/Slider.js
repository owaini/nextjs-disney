import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
		<section className="relative mt-7 shadow-2x1 max-w-screen-2x1 mx-auto">
			<Carousel
				autoPlay
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={5000}
			>
				<div>
					<img loading="lazy" src="/images/slider-5.jpeg" alt="" />
				</div>
				<div>
					<img loading="lazy" src="/images/slider-8.jpeg" alt="" />
				</div>
				<div>
					<img loading="lazy" src="/images/slider-9.jpeg" alt="" />
				</div>
				<div>
					<img loading="lazy" src="/images/slider-11.jpeg" alt="" />
				</div>
			</Carousel>
		</section>
	);
};

export default Slider;

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./SwiperCarousel.scss";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

export const SwiperCarousel = () => {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty("--progress", 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};

	const options = {
		modules: [EffectCoverflow, Pagination, Navigation, Autoplay],
		effect: "coverflow",
		spaceBetween: 30,
		grabCursor: true,
		centeredSlides: true,
		breakpoints: {
			0: {
				slidesPerView: "auto"
			},
			520: {
				slidesPerView: "auto"
			},
			950: {
				slidesPerView: "auto"
			}
		},
		coverflowEffect: {
			rotate: 30,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: false
		},
		pagination: {
			type: "fraction"
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
			clickable: true
		},
		loop: true,
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false
		// },
		onAutoplayTimeLeft: onAutoplayTimeLeft
	};

	const slides = [
		{
			id: 1,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=1",
			name: "Elcho Effects",
			position: "Full-Stack DevX"
		},
		{
			id: 2,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=2",
			name: "Elcho Effects",
			position: "Full-Stack DevX"
		},
		{
			id: 3,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=3",
			name: "Elcho Effects",
			position: "Full-Stack DevX"
		},
		{
			id: 4,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=4",
			name: "Elcho Effects",
			position: "Full-Stack DevX"
		},
		{
			id: 5,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=5",
			name: "Elcho Effects",
			position: "Full-Stack DevX"
		},
		{
			id: 6,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=6",
			name: "Elcho Effects",
			position: "Full-Stack DevX"
		},
		{
			id: 7,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=7",
			name: "Elcho Effects",
			position: "Full-Stack DevX"
		},
		{
			id: 8,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=8",
			name: "Elcho Effects",
			position: "Full-Stack DevX"
		},
		{
			id: 9,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=9",
			name: "Elcho Effects",
			position: "Full-Stack DevX"
		},
		{
			id: 10,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=10",
			name: "Elcho Effects",
			position: "Full-Stack DevX"
		},
		{
			id: 11,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=11",
			name: "Elcho Effects",
			position: "Full-Stack DevX"
		},
		{
			id: 12,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=12",
			name: "Elcho Effects",
			position: "Full-Stack DevX"
		}
	];

	return (
		<>
			<Swiper {...options} className="my-slide">
				{slides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<div className="card">
							<img src={slide.imgSrc} />
							<div className="about__people">
								<h2>{slide.name}</h2>
								<p>{slide.position}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
				<div className="autoPlay-progress" slot="container-end">
					<svg viewBox="0 0 48 48" ref={progressCircle}>
						<circle cx="24" cy="24" r="20"></circle>
					</svg>
					<span ref={progressContent}></span>
				</div>
			</Swiper>
			<div className="slider-controller">
				<div className="swiper-button-prev button">prev</div>
				<div className="swiper-button-next button">next</div>
			</div>
		</>
	);
};

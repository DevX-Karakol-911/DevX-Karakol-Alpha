import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./SwiperCarousel.scss";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import pic from "./img-slider/Elcho911.webp";

export const SwiperCarousel = () => {
	const [swiper, setSwiper] = useState(null);
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
			rotate: 25,
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
		autoplay: {
			delay: 2500,
			disableOnInteraction: false
		},
		onAutoplayTimeLeft: onAutoplayTimeLeft
	};

	const slides = [
		{
			id: 1,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=1",
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 2,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=2",
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 3,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=3",
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 4,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=4",
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 5,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=5",
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 6,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=6",
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 7,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=7",
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 8,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=8",
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 9,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=9",
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 10,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=10",
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 11,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=11",
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 12,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=12",
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 13,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=13",
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 14,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=14",
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 15,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=15",
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 16,
			imgSrc: "https://api.lorem.space/image/game?w=1920&h1080is=16",
			name: "Elcho911",
			position: "Full-Stack DevXer"
		}
	];

	const slideTo = (index) => swiper.slideTo(index);

	return (
		<>
			<Swiper {...options} onSwiper={setSwiper}>
				{slides.map((slide, index) => (
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

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./SwiperCarousel.scss";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import pic from "./img-slider/Elcho911.webp";

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
			// 1200: {
			// 	slidesPerView: 5
			// }
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
			imgSrc: pic,
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 2,
			imgSrc: pic,
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 3,
			imgSrc: pic,
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 4,
			imgSrc: pic,
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 5,
			imgSrc: pic,
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 6,
			imgSrc: pic,
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 7,
			imgSrc: pic,
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 8,
			imgSrc: pic,
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 9,
			imgSrc: pic,
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 10,
			imgSrc: pic,
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 11,
			imgSrc: pic,
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 12,
			imgSrc: pic,
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 13,
			imgSrc: pic,
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 14,
			imgSrc: pic,
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 15,
			imgSrc: pic,
			name: "Elcho911",
			position: "Full-Stack DevXer"
		},
		{
			id: 16,
			imgSrc: pic,
			name: "Elcho911",
			position: "Full-Stack DevXer"
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

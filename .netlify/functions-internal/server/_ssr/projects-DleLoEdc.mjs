//#region node_modules/.nitro/vite/services/ssr/assets/projects-DleLoEdc.js
var projects = [{
	slug: "parkour-day-staefa",
	id: "01",
	title: "Parkour Day Stäfa",
	category: "Event Film & High-Velocity FPV",
	year: 2026,
	client: "Parkour Day Stäfa",
	location: "Stäfa, Zürich, CH",
	cover: "https://img.youtube.com/vi/4mwIvmZ5y7c/maxresdefault.jpg",
	video: "https://youtu.be/4mwIvmZ5y7c",
	overview: "A premium high-velocity event film capturing the extreme movement, athletic flow, and precision of Parkour Day Stäfa through cinematic ground views and custom close-proximity FPV tracking.",
	challenge: "Chasing highly agile athletes through complex architectural structures with zero margin for error, preserving the raw kinetic energy of parkour while maintaining cinematic composition.",
	concept: "Dynamic flow. Aligning the FPV drone's flight vectors directly with the physical momentum of the athletes to create a seamless, continuous feeling of movement.",
	production: "An intensive one-day shoot utilizing synchronized high-speed drone pilots and steady ground cameras, following coordinated lines across pre-scouted urban obstacles.",
	result: "A fast-paced, high-impact brand film delivering outstanding engagement and setting a new visual benchmark for regional athletic event coverage.",
	services: [
		"FPV Cinematography",
		"Direction",
		"Creative Editing",
		"Color Grading",
		"Sound Design"
	],
	equipment: [
		"Custom 5\" FPV Drone (GoPro HERO12 Black)",
		"DJI FPV Drone",
		"Custom Cinelifter with 2-axis gimbal"
	],
	status: "Released",
	featured: true
}];
function getProject(slug) {
	return projects.find((p) => p.slug === slug);
}
//#endregion
export { projects as n, getProject as t };

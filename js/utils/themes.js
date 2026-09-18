// ************ Themes ************
function getAvailableThemes() {
	let list = ["default", "binary"]
	if (player.points.gte("1e1e9")) {
		list.push("softcap")
	}
	if (player.points.gte("1e1e33")) {
		list.push("softcap2")
	}
	if (player.points.gte("1e1.796e308")) {
		list.push("softcap3")
	}
	if (player.points.gte("eeeeee2")) {
		list.push("hardcap")
	}
	return list
}

var themes = ["default", "binary", "softcap", "softcap2", "softcap3", "hardcap"]

var colors = {
	default: {
		1: "#ffffff",//Branch color 1
		2: "#bfbfbf",//Branch color 2
		3: "#7f7f7f",//Branch color 3
		color: "#dfdfdf",
		points: "#ffffff",
		locked: "#bf8f8f",
		background: "#0f0f0f",
		background_tooltip: "rgba(0, 0, 0, 0.75)",
	},
	binary: {
		1: "#005400",
		2: "#005400",
		3: "#005400",
		color: "#878686",
		points: "#09ff00",
		locked: "#ffffff",
		background: "#000000",
		background_tooltip: "rgba(13, 37, 1, 0.75)",
	},
	softcap: {
		1: "#990000",
		2: "#660000",
		3: "#440000",
		color: "#d1c7a5",
		points: "#ffcc00",
		locked: "#555555",
		background: "#1c1c1c",
		background_tooltip: "rgba(40, 40, 40, 0.85)",
	},
	softcap2: {
		1: "#ff6600",
		2: "#b34700",
		3: "#803300",
		color: "#e6ccb3",
		points: "#ff5500",
		locked: "#3d3d3d",
		background: "#140e0a",
		background_tooltip: "rgba(41, 23, 12, 0.85)",
	},
	softcap3: {
		1: "#00b3ff",
		2: "#0077aa",
		3: "#004466",
		color: "#cccccc",
		points: "#e6e6e6",
		locked: "#1a1a1a",
		background: "#12151c",
		background_tooltip: "rgba(18, 21, 28, 0.9)",
	},
	hardcap: {
		1: "#9900ee",
		2: "#6600aa",
		3: "#330066",
		color: "#e6ccff",
		points: "#cc00ff",
		locked: "#222222",
		background: "#050008",
		background_tooltip: "rgba(25, 0, 35, 0.9)",
	},
}
function changeTheme() {

	colors_theme = colors[options.theme || "default"];
	document.body.style.setProperty('--background', colors_theme["background"]);
	document.body.style.setProperty('--background_tooltip', colors_theme["background_tooltip"]);
	document.body.style.setProperty('--color', colors_theme["color"]);
	document.body.style.setProperty('--points', colors_theme["points"]);
	document.body.style.setProperty("--locked", colors_theme["locked"]);
}
function getThemeName() {
	return options.theme? options.theme : "default";
}

function switchTheme() {
	let available = getAvailableThemes()
	let index = available.indexOf(options.theme)
	if (options.theme === null || index >= available.length-1 || index < 0) {
		options.theme = available[0];
	}
	else {
		index ++;
		options.theme = available[index];
	}
	changeTheme();
	resizeCanvas();
}

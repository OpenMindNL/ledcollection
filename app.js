"use strict";

function init() {
};

var Animation = Homey.manager('ledring').Animation;

Array.prototype.concat.apply([], [
	[
		{ id: 'white_alert', colors: [[0, 0, 0], [255, 255, 255]] },
		{ id: 'red_alert', colors: [[0, 0, 0], [255, 0, 0]] },
		{ id: 'orange_alert', colors: [[0, 0, 0], [255, 85, 0]] },
		{ id: 'yellow_alert', colors: [[0, 0, 0], [255, 255, 0]] },
		{ id: 'green_alert', colors: [[0, 0, 0], [0, 255, 0]] },
		{ id: 'cyan_alert', colors: [[0, 0, 0], [0, 255, 255]] },
		{ id: 'blue_alert', colors: [[0, 0, 0], [0, 0, 255]] },
		{ id: 'purple_alert', colors: [[0, 0, 0], [64, 0, 255]] },
		{ id: 'magenta_alert', colors: [[0, 0, 0], [255, 0, 255]] },
		{ id: 'red_blue_alert', colors: [[255, 0, 0], [0, 0, 255]] }
	].map(screensaver => Object.assign(
		{ generator: generateLedAlert, options: Object.assign({ fps: 1, tfps: 4, rpm: 60 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_flash_white', colors: [[255, 255, 255]] },
		{ id: 'led_flash_red', colors: [[255, 0, 0]] },
		{ id: 'led_flash_orange', colors: [[255, 85, 0]] },
		{ id: 'led_flash_yellow', colors: [[255, 255, 0]] },
		{ id: 'led_flash_green', colors: [[0, 255, 0]] },
		{ id: 'led_flash_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_flash_blue', colors: [[0, 0, 255]] },
		{ id: 'led_flash_purple', colors: [[64, 0, 255]] },
		{ id: 'led_flash_magenta', colors: [[255, 0, 255]] }
	].map(screensaver => Object.assign(
		{ generator: generateFlash, options: Object.assign({ fps: 16, tfps: 16, rpm: 0 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_solid_white', colors: [[255, 255, 255]] },
		{ id: 'led_solid_red', colors: [[255, 0, 0]] },
		{ id: 'led_solid_orange', colors: [[255, 85, 0]] },
		{ id: 'led_solid_yellow', colors: [[255, 255, 0]] },
		{ id: 'led_solid_green', colors: [[0, 255, 0]] },
		{ id: 'led_solid_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_solid_blue', colors: [[0, 0, 255]] },
		{ id: 'led_solid_purple', colors: [[64, 0, 255]] },
		{ id: 'led_solid_magenta', colors: [[255, 0, 255]] }
	].map(screensaver => Object.assign(
		{ generator: generateSolid, options: Object.assign({ fps: 1, tfps: 60, rpm: 0 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_flow', colors: [] }
	].map(screensaver => Object.assign(
		{ generator: generateFlow, options: Object.assign({ fps: 1, tfps: 60, rpm: 0 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_random_colors', colors: [] }
	].map(screensaver => Object.assign(
		{ generator: generateRandomColors, options: Object.assign({ fps: 1, tfps: 60, rpm: 3 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_breathe_white', colors: [[255, 255, 255]] },
		{ id: 'led_breathe_red', colors: [[255, 0, 0]] },
		{ id: 'led_breathe_orange', colors: [[255, 85, 0]] },
		{ id: 'led_breathe_yellow', colors: [[255, 255, 0]] },
		{ id: 'led_breathe_green', colors: [[0, 255, 0]] },
		{ id: 'led_breathe_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_breathe_blue', colors: [[0, 0, 255]] },
		{ id: 'led_breathe_purple', colors: [[64, 0, 255]] },
		{ id: 'led_breathe_magenta', colors: [[255, 0, 255]] },
		{ id: 'led_breathe_flow', colors: [[0, 0, 0]] }
	].map(screensaver => Object.assign(
		{ generator: generateBreathe, options: Object.assign({ fps: 1, tfps: 60, rpm: 0 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_sparkle_random', colors: [[-1, -1, -1]] },
		{ id: 'led_sparkle_white', colors: [[255, 255, 255]] },
		{ id: 'led_sparkle_red', colors: [[255, 0, 0]] },
		{ id: 'led_sparkle_orange', colors: [[255, 85, 0]] },
		{ id: 'led_sparkle_yellow', colors: [[255, 255, 0]] },
		{ id: 'led_sparkle_green', colors: [[0, 255, 0]] },
		{ id: 'led_sparkle_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_sparkle_blue', colors: [[0, 0, 255]] },
		{ id: 'led_sparkle_purple', colors: [[64, 0, 255]] },
		{ id: 'led_sparkle_magenta', colors: [[255, 0, 255]] },
		{ id: 'led_sparkle_flow', colors: [[0, 0, 0]] }
	].map(screensaver => Object.assign(
		{ generator: generateSparkle, options: Object.assign({ fps: 4, tfps: 60, rpm: 2 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_satellite_white', colors: [[255, 255, 255]] },
		{ id: 'led_satellite_red', colors: [[255, 0, 0]] },
		{ id: 'led_satellite_orange', colors: [[255, 85, 0]] },
		{ id: 'led_satellite_yellow', colors: [[255, 255, 0]] },
		{ id: 'led_satellite_green', colors: [[0, 255, 0]] },
		{ id: 'led_satellite_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_satellite_blue', colors: [[0, 0, 255]] },
		{ id: 'led_satellite_purple', colors: [[64, 0, 255]] },
		{ id: 'led_satellite_magenta', colors: [[255, 0, 255]] },
		{ id: 'led_satellite_flow', colors: [[0, 0, 0]] },
		{ id: 'led_satellite_random', colors: [[-1, -1, -1]] }
	].map(screensaver => Object.assign(
		{ generator: generateSatellite, options: Object.assign({ fps: 1, tfps: 60, rpm: 10 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_lighthouse_white', colors: [[255, 255, 255]] },
		{ id: 'led_lighthouse_red', colors: [[255, 0, 0]] },
		{ id: 'led_lighthouse_orange', colors: [[255, 85, 0]] },
		{ id: 'led_lighthouse_yellow', colors: [[255, 255, 0]] },
		{ id: 'led_lighthouse_green', colors: [[0, 255, 0]] },
		{ id: 'led_lighthouse_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_lighthouse_blue', colors: [[0, 0, 255]] },
		{ id: 'led_lighthouse_purple', colors: [[64, 0, 255]] },
		{ id: 'led_lighthouse_magenta', colors: [[255, 0, 255]] },
		{ id: 'led_lighthouse_flow', colors: [[0, 0, 0]] },
		{ id: 'led_lighthouse_random', colors: [[-1, -1, -1]] }
	].map(screensaver => Object.assign(
		{ generator: generateLighthouse, options: Object.assign({ fps: 1, tfps: 60, rpm: 10 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_clockwork_white', colors: [[255, 255, 255]] },
		{ id: 'led_clockwork_red', colors: [[255, 0, 0]] },
		{ id: 'led_clockwork_orange', colors: [[255, 85, 0]] },
		{ id: 'led_clockwork_yellow', colors: [[255, 255, 0]] },
		{ id: 'led_clockwork_green', colors: [[0, 255, 0]] },
		{ id: 'led_clockwork_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_clockwork_blue', colors: [[0, 0, 255]] },
		{ id: 'led_clockwork_purple', colors: [[64, 0, 255]] },
		{ id: 'led_clockwork_magenta', colors: [[255, 0, 255]] },
		{ id: 'led_clockwork_flow', colors: [[0, 0, 0]] }
	].map(screensaver => Object.assign(
		{ generator: generateClockwork, options: Object.assign({ fps: 24, tfps: 60, rpm: 0 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_butterfly_white', colors: [[255, 255, 255]] },
		{ id: 'led_butterfly_red', colors: [[255, 0, 0]] },
		{ id: 'led_butterfly_orange', colors: [[255, 85, 0]] },
		{ id: 'led_butterfly_yellow', colors: [[255, 255, 0]] },
		{ id: 'led_butterfly_green', colors: [[0, 255, 0]] },
		{ id: 'led_butterfly_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_butterfly_blue', colors: [[0, 0, 255]] },
		{ id: 'led_butterfly_purple', colors: [[64, 0, 255]] },
		{ id: 'led_butterfly_magenta', colors: [[255, 0, 255]] },
		{ id: 'led_butterfly_flow', colors: [[0, 0, 0]] }
	].map(screensaver => Object.assign(
		{ generator: generateButterfly, options: Object.assign({ fps: 5, tfps: 60, rpm: 0 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_triangle_rgb', colors: [[255, 0, 0], [0, 255, 0], [0, 0, 255]] },
		{ id: 'led_triangle_rgb_fast', colors: [[255, 0, 0], [0, 255, 0], [0, 0, 255]], options: { rpm: 60 } },
		{ id: 'led_triangle_cmy', colors: [[0, 255, 255], [255, 0, 255], [255, 255, 0]] },
		{ id: 'led_triangle_cmy_fast', colors: [[0, 255, 255], [255, 0, 255], [255, 255, 0]], options: { rpm: 60 } }
	].map(screensaver => Object.assign(
		{ generator: generateTriangle, options: Object.assign({ fps: 1, tfps: 60, rpm: 10 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_pulsetrain_white', colors: [[255, 255, 255]] },
		{ id: 'led_pulsetrain_red', colors: [[255, 0, 0]] },
		{ id: 'led_pulsetrain_orange', colors: [[255, 85, 0]] },
		{ id: 'led_pulsetrain_yellow', colors: [[255, 255, 0]] },
		{ id: 'led_pulsetrain_green', colors: [[0, 255, 0]] },
		{ id: 'led_pulsetrain_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_pulsetrain_blue', colors: [[0, 0, 255]] },
		{ id: 'led_pulsetrain_purple', colors: [[64, 0, 255]] },
		{ id: 'led_pulsetrain_magenta', colors: [[255, 0, 255]] },
		{ id: 'led_pulsetrain_flow', colors: [[0, 0, 0]] }
	].map(screensaver => Object.assign(
		{ generator: generatePulsetrain, options: Object.assign({ fps: 12, tfps: 60, rpm: 17 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_frontpulse_white', colors: [[255, 255, 255]] },
		{ id: 'led_frontpulse_red', colors: [[255, 0, 0]] },
		{ id: 'led_frontpulse_orange', colors: [[255, 85, 0]] },
		{ id: 'led_frontpulse_yellow', colors: [[255, 255, 0]] },
		{ id: 'led_frontpulse_green', colors: [[0, 255, 0]] },
		{ id: 'led_frontpulse_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_frontpulse_blue', colors: [[0, 0, 255]] },
		{ id: 'led_frontpulse_purple', colors: [[64, 0, 255]] },
		{ id: 'led_frontpulse_magenta', colors: [[255, 0, 255]] }
	].map(screensaver => Object.assign(
		{ generator: generateFrontpulse, options: Object.assign({ fps: 9, tfps: 60, rpm: 0 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_pulsar_white', colors: [[255, 255, 255]] },
		{ id: 'led_pulsar_red', colors: [[255, 0, 0]] },
		{ id: 'led_pulsar_orange', colors: [[255, 85, 0]] },
		{ id: 'led_pulsar_yellow', colors: [[255, 255, 0]] },
		{ id: 'led_pulsar_green', colors: [[0, 255, 0]] },
		{ id: 'led_pulsar_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_pulsar_blue', colors: [[0, 0, 255]] },
		{ id: 'led_pulsar_purple', colors: [[64, 0, 255]] },
		{ id: 'led_pulsar_magenta', colors: [[255, 0, 255]] },
		{ id: 'led_pulsar_flow', colors: [[0, 0, 0]] }
	].map(screensaver => Object.assign(
		{ generator: generatePulsar, options: Object.assign({ fps: 12, tfps: 60, rpm: 0 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_oncoming_red_orange', colors: [[255, 0, 0], [255, 85, 0]] },
		{ id: 'led_oncoming_red_yellow', colors: [[255, 0, 0], [255, 255, 0]] },
		{ id: 'led_oncoming_red_green', colors: [[255, 0, 0], [0, 255, 0]] },
		{ id: 'led_oncoming_red_cyan', colors: [[255, 0, 0], [0, 255, 255]] },
		{ id: 'led_oncoming_red_blue', colors: [[255, 0, 0], [0, 0, 255]] },
		{ id: 'led_oncoming_red_purple', colors: [[255, 0, 0], [64, 0, 255]] },
		{ id: 'led_oncoming_red_magenta', colors: [[255, 0, 0], [255, 0, 255]] },

		{ id: 'led_oncoming_orange_yellow', colors: [[255, 85, 0], [255, 255, 0]] },
		{ id: 'led_oncoming_orange_green', colors: [[255, 85, 0], [0, 255, 0]] },
		{ id: 'led_oncoming_orange_cyan', colors: [[255, 85, 0], [0, 255, 255]] },
		{ id: 'led_oncoming_orange_blue', colors: [[255, 85, 0], [0, 0, 255]] },
		{ id: 'led_oncoming_orange_purple', colors: [[255, 85, 0], [64, 0, 255]] },
		{ id: 'led_oncoming_orange_magenta', colors: [[255, 85, 0], [255, 0, 255]] },

		{ id: 'led_oncoming_yellow_green', colors: [[255, 255, 0], [0, 255, 0]] },
		{ id: 'led_oncoming_yellow_cyan', colors: [[255, 255, 0], [0, 255, 255]] },
		{ id: 'led_oncoming_yellow_blue', colors: [[255, 255, 0], [0, 0, 255]] },
		{ id: 'led_oncoming_yellow_purple', colors: [[255, 255, 0], [64, 0, 255]] },
		{ id: 'led_oncoming_yellow_magenta', colors: [[255, 255, 0], [255, 0, 255]] },

		{ id: 'led_oncoming_green_cyan', colors: [[0, 255, 0], [0, 255, 255]] },
		{ id: 'led_oncoming_green_blue', colors: [[0, 255, 0], [0, 0, 255]] },
		{ id: 'led_oncoming_green_purple', colors: [[0, 255, 0], [64, 0, 255]] },
		{ id: 'led_oncoming_green_magenta', colors: [[0, 255, 0], [255, 0, 255]] },

		{ id: 'led_oncoming_cyan_blue', colors: [[0, 255, 255], [0, 0, 255]] },
		{ id: 'led_oncoming_cyan_purple', colors: [[0, 255, 255], [64, 0, 255]] },
		{ id: 'led_oncoming_cyan_magenta', colors: [[0, 255, 255], [255, 0, 255]] },

		{ id: 'led_oncoming_blue_purple', colors: [[0, 0, 255], [64, 0, 255]] },
		{ id: 'led_oncoming_blue_magenta', colors: [[0, 0, 255], [255, 0, 255]] },

		{ id: 'led_oncoming_purple_magenta', colors: [[64, 0, 255], [255, 0, 255]] }
	].map(screensaver => Object.assign(
		{ generator: generateOncoming, options: Object.assign({ fps: 12, tfps: 60, rpm: 3 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_newtonian_red_orange', colors: [[255, 0, 0], [255, 85, 0]] },
		{ id: 'led_newtonian_red_yellow', colors: [[255, 0, 0], [255, 255, 0]] },
		{ id: 'led_newtonian_red_green', colors: [[255, 0, 0], [0, 255, 0]] },
		{ id: 'led_newtonian_red_cyan', colors: [[255, 0, 0], [0, 255, 255]] },
		{ id: 'led_newtonian_red_blue', colors: [[255, 0, 0], [0, 0, 255]] },
		{ id: 'led_newtonian_red_purple', colors: [[255, 0, 0], [64, 0, 255]] },
		{ id: 'led_newtonian_red_magenta', colors: [[255, 0, 0], [255, 0, 255]] },

		{ id: 'led_newtonian_orange_yellow', colors: [[255, 85, 0], [255, 255, 0]] },
		{ id: 'led_newtonian_orange_green', colors: [[255, 85, 0], [0, 255, 0]] },
		{ id: 'led_newtonian_orange_cyan', colors: [[255, 85, 0], [0, 255, 255]] },
		{ id: 'led_newtonian_orange_blue', colors: [[255, 85, 0], [0, 0, 255]] },
		{ id: 'led_newtonian_orange_purple', colors: [[255, 85, 0], [64, 0, 255]] },
		{ id: 'led_newtonian_orange_magenta', colors: [[255, 85, 0], [255, 0, 255]] },

		{ id: 'led_newtonian_yellow_green', colors: [[255, 255, 0], [0, 255, 0]] },
		{ id: 'led_newtonian_yellow_cyan', colors: [[255, 255, 0], [0, 255, 255]] },
		{ id: 'led_newtonian_yellow_blue', colors: [[255, 255, 0], [0, 0, 255]] },
		{ id: 'led_newtonian_yellow_purple', colors: [[255, 255, 0], [64, 0, 255]] },
		{ id: 'led_newtonian_yellow_magenta', colors: [[255, 255, 0], [255, 0, 255]] },

		{ id: 'led_newtonian_green_cyan', colors: [[0, 255, 0], [0, 255, 255]] },
		{ id: 'led_newtonian_green_blue', colors: [[0, 255, 0], [0, 0, 255]] },
		{ id: 'led_newtonian_green_purple', colors: [[0, 255, 0], [64, 0, 255]] },
		{ id: 'led_newtonian_green_magenta', colors: [[0, 255, 0], [255, 0, 255]] },

		{ id: 'led_newtonian_cyan_blue', colors: [[0, 255, 255], [0, 0, 255]] },
		{ id: 'led_newtonian_cyan_purple', colors: [[0, 255, 255], [64, 0, 255]] },
		{ id: 'led_newtonian_cyan_magenta', colors: [[0, 255, 255], [255, 0, 255]] },

		{ id: 'led_newtonian_blue_purple', colors: [[0, 0, 255], [64, 0, 255]] },
		{ id: 'led_newtonian_blue_magenta', colors: [[0, 0, 255], [255, 0, 255]] },

		{ id: 'led_newtonian_purple_magenta', colors: [[64, 0, 255], [255, 0, 255]] }
	].map(screensaver => Object.assign(
		{ generator: generateNewtonian, options: Object.assign({ fps: 20, tfps: 60, rpm: 0 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_scanner_white', colors: [[255, 255, 255]] },
		{ id: 'led_scanner_red', colors: [[255, 0, 0]] },
		{ id: 'led_scanner_orange', colors: [[255, 85, 0]] },
		{ id: 'led_scanner_yellow', colors: [[255, 255, 0]] },
		{ id: 'led_scanner_green', colors: [[0, 255, 0]] },
		{ id: 'led_scanner_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_scanner_blue', colors: [[0, 0, 255]] },
		{ id: 'led_scanner_purple', colors: [[64, 0, 255]] },
		{ id: 'led_scanner_magenta', colors: [[255, 0, 255]] }
	].map(screensaver => Object.assign(
		{ generator: generateScannerFrames, options: Object.assign({ fps: 3, tfps: 60, rpm: 0 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_gort_red_yellow', colors: [[255, 255, 0], [255, 0, 0]] },
		{ id: 'led_gort_red_green', colors: [[0, 255, 0], [255, 0, 0]] },
		{ id: 'led_gort_red_cyan', colors: [[0, 255, 255], [255, 0, 0]] },
		{ id: 'led_gort_red_blue', colors: [[0, 0, 255], [255, 0, 0]] },
		{ id: 'led_gort_red_magenta', colors: [[255, 0, 255], [255, 0, 0]] },

		{ id: 'led_gort_yellow_red', colors: [[255, 0, 0], [255, 255, 0]] },
		{ id: 'led_gort_yellow_green', colors: [[0, 255, 0], [255, 255, 0]] },
		{ id: 'led_gort_yellow_cyan', colors: [[0, 255, 255], [255, 255, 0]] },
		{ id: 'led_gort_yellow_blue', colors: [[0, 0, 255], [255, 255, 0]] },
		{ id: 'led_gort_yellow_magenta', colors: [[255, 0, 255], [255, 255, 0]] },

		{ id: 'led_gort_green_red', colors: [[255, 0, 0], [0, 255, 0]] },
		{ id: 'led_gort_green_yellow', colors: [[255, 255, 0], [0, 255, 0]] },
		{ id: 'led_gort_green_cyan', colors: [[0, 255, 255], [0, 255, 0]] },
		{ id: 'led_gort_green_blue', colors: [[0, 0, 255], [0, 255, 0]] },
		{ id: 'led_gort_green_magenta', colors: [[255, 0, 255], [0, 255, 0]] },

		{ id: 'led_gort_cyan_red', colors: [[255, 0, 0], [0, 255, 255]] },
		{ id: 'led_gort_cyan_yellow', colors: [[255, 255, 0], [0, 255, 255]] },
		{ id: 'led_gort_cyan_green', colors: [[0, 255, 0], [0, 255, 255]] },
		{ id: 'led_gort_cyan_blue', colors: [[0, 0, 255], [0, 255, 255]] },
		{ id: 'led_gort_cyan_magenta', colors: [[255, 0, 255], [0, 255, 255]] },

		{ id: 'led_gort_blue_red', colors: [[255, 0, 0], [0, 0, 255]] },
		{ id: 'led_gort_blue_yellow', colors: [[255, 255, 0], [0, 0, 255]] },
		{ id: 'led_gort_blue_green', colors: [[0, 255, 0], [0, 0, 255]] },
		{ id: 'led_gort_blue_cyan', colors: [[0, 255, 255], [0, 0, 255]] },
		{ id: 'led_gort_blue_magenta', colors: [[255, 0, 255], [0, 0, 255]] },

		{ id: 'led_gort_magenta_red', colors: [[255, 0, 0], [255, 0, 255]] },
		{ id: 'led_gort_magenta_yellow', colors: [[255, 255, 0], [255, 0, 255]] },
		{ id: 'led_gort_magenta_green', colors: [[0, 255, 0], [255, 0, 255]] },
		{ id: 'led_gort_magenta_cyan', colors: [[0, 255, 255], [255, 0, 255]] },
		{ id: 'led_gort_magenta_blue', colors: [[0, 0, 255], [255, 0, 255]] }
	].map(screensaver => Object.assign(
		{ generator: generateGort, options: Object.assign({ fps: 3, tfps: 60, rpm: 0 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_eyes_white', colors: [[255, 255, 255], [255, 255, 255]] },
		{ id: 'led_eyes_red', colors: [[255, 0, 0], [255, 0, 0]] },
		{ id: 'led_eyes_orange', colors: [[255, 85, 0], [255, 85, 0]] },
		{ id: 'led_eyes_yellow', colors: [[255, 255, 0], [255, 255, 0]] },
		{ id: 'led_eyes_green', colors: [[0, 255, 0], [0, 255, 0]] },
		{ id: 'led_eyes_cyan', colors: [[0, 255, 255], [0, 255, 255]] },
		{ id: 'led_eyes_blue', colors: [[0, 0, 255], [0, 0, 255]] },
		{ id: 'led_eyes_purple', colors: [[64, 0, 255], [64, 0, 255]] },
		{ id: 'led_eyes_magenta', colors: [[255, 0, 255], [255, 0, 255]] },

		{ id: 'led_eyes_red_yellow', colors: [[255, 255, 0], [255, 0, 0]] },
		{ id: 'led_eyes_red_green', colors: [[0, 255, 0], [255, 0, 0]] },
		{ id: 'led_eyes_red_cyan', colors: [[0, 255, 255], [255, 0, 0]] },
		{ id: 'led_eyes_red_blue', colors: [[0, 0, 255], [255, 0, 0]] },
		{ id: 'led_eyes_red_magenta', colors: [[255, 0, 255], [255, 0, 0]] },

		{ id: 'led_eyes_yellow_red', colors: [[255, 0, 0], [255, 255, 0]] },
		{ id: 'led_eyes_yellow_green', colors: [[0, 255, 0], [255, 255, 0]] },
		{ id: 'led_eyes_yellow_cyan', colors: [[0, 255, 255], [255, 255, 0]] },
		{ id: 'led_eyes_yellow_blue', colors: [[0, 0, 255], [255, 255, 0]] },
		{ id: 'led_eyes_yellow_magenta', colors: [[255, 0, 255], [255, 255, 0]] },

		{ id: 'led_eyes_green_red', colors: [[255, 0, 0], [0, 255, 0]] },
		{ id: 'led_eyes_green_yellow', colors: [[255, 255, 0], [0, 255, 0]] },
		{ id: 'led_eyes_green_cyan', colors: [[0, 255, 255], [0, 255, 0]] },
		{ id: 'led_eyes_green_blue', colors: [[0, 0, 255], [0, 255, 0]] },
		{ id: 'led_eyes_green_magenta', colors: [[255, 0, 255], [0, 255, 0]] },

		{ id: 'led_eyes_cyan_red', colors: [[255, 0, 0], [0, 255, 255]] },
		{ id: 'led_eyes_cyan_yellow', colors: [[255, 255, 0], [0, 255, 255]] },
		{ id: 'led_eyes_cyan_green', colors: [[0, 255, 0], [0, 255, 255]] },
		{ id: 'led_eyes_cyan_blue', colors: [[0, 0, 255], [0, 255, 255]] },
		{ id: 'led_eyes_cyan_magenta', colors: [[255, 0, 255], [0, 255, 255]] },

		{ id: 'led_eyes_blue_red', colors: [[255, 0, 0], [0, 0, 255]] },
		{ id: 'led_eyes_blue_yellow', colors: [[255, 255, 0], [0, 0, 255]] },
		{ id: 'led_eyes_blue_green', colors: [[0, 255, 0], [0, 0, 255]] },
		{ id: 'led_eyes_blue_cyan', colors: [[0, 255, 255], [0, 0, 255]] },
		{ id: 'led_eyes_blue_magenta', colors: [[255, 0, 255], [0, 0, 255]] },

		{ id: 'led_eyes_magenta_red', colors: [[255, 0, 0], [255, 0, 255]] },
		{ id: 'led_eyes_magenta_yellow', colors: [[255, 255, 0], [255, 0, 255]] },
		{ id: 'led_eyes_magenta_green', colors: [[0, 255, 0], [255, 0, 255]] },
		{ id: 'led_eyes_magenta_cyan', colors: [[0, 255, 255], [255, 0, 255]] },
		{ id: 'led_eyes_magenta_blue', colors: [[0, 0, 255], [255, 0, 255]] }
	].map(screensaver => Object.assign(
		{ generator: generateEyes, options: Object.assign({ fps: 2, tfps: 60, rpm: 0 }, screensaver.options) },
		screensaver
	))
]).forEach((screensaver) => {

	// create animation with screensaver.options and generator(colors) function
	var animation = new Animation({
		options: screensaver.options,
		frames: screensaver.generator.apply(null, screensaver.colors)
	});

	// register animation
	animation.register(function (err, result) {
		Homey.manager('ledring').registerScreensaver(screensaver.id, animation);
		if (err) return Homey.error(err);
	})
});


// ==================== Pattern generators ====================

function generateSolid( colRGB ) {
	var frames = [];
	var frame = [];
	var color = colRGB;

	// for every pixel...
	for( var pixel = 0; pixel < 24; pixel++ ) {
		frame.push({ r: color[0], g: color[1], b: color[2] });
	}
	frames.push(frame);
	return frames;
}

function generateFlash( colRGB ) {
	var frames = [];

	// for every frame...
	for( var fr = 0; fr < 32; fr++ ){
		var frame = [];
		if( fr == 2 ){
			var color = colRGB;
		} else {
			var color = [0, 0, 0];
		}

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}
	return frames;
}

function generateFlow() {
	var frames = [];
	var col = getColorFlow(30);

	// for every frame...
	for( var fr = 0; fr < col.length; fr++ ){
		var frame = [];
		var color = col[fr];

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}
	return frames;
}

function generateBreathe( colRGB ) {
	var frames = [];
	var maxFr = 8, divFr = maxFr/2, stepFr = 255/divFr;
	var levMin = 8, levDiv = (255-levMin)/255 * stepFr;

	var nframe = maxFr;

	if(colRGB[0] == 0 && colRGB[1] == 0 && colRGB[2] == 0){ // color flow
		var nCycle = 11;
		var col = getColorFlow(nCycle * nframe);
	} else { // fixed color
		var nCycle = 1;
		var col = [colRGB]; for(var i = 0; i< nCycle * nframe; i++){ col.push(colRGB); }
	}

	// pattern cycles to complete 1 color cycle...
	for( var cycle = 0; cycle < nCycle; cycle++ ){


	// for every frame...
	for( var fr = 0; fr < maxFr; fr++ ){
		var frame = [];
		var color = [0, 0, 0];
		var xCol = col[cycle*nframe+ fr];
		var divR = xCol[0]/255, divG = xCol[1]/255, divB = xCol[2]/255; 

		if(fr < divFr){
			if( xCol[0]>0 ){ color[0] = Math.floor( (levMin + levDiv * fr)*divR ); }
			if( xCol[1]>0 ){ color[1] = Math.floor( (levMin + levDiv * fr)*divG ); }
			if( xCol[2]>0 ){ color[2] = Math.floor( (levMin + levDiv * fr)*divB ); }
		}else{
			if( xCol[0]>0 ){ color[0] = Math.floor( (levMin + levDiv * (maxFr-1-fr) )*divR ); }
			if( xCol[1]>0 ){ color[1] = Math.floor( (levMin + levDiv * (maxFr-1-fr) )*divG ); }
			if( xCol[2]>0 ){ color[2] = Math.floor( (levMin + levDiv * (maxFr-1-fr) )*divB ); }
		}

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}

	}
	return frames;
}

function generateRandomColors() {
	var frames = [];

	// for every frame...
	for( var fr = 0; fr < 60; fr++ ){
		var frame = [];

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			var color = [0, 0, 0];
			if(Math.floor( pixel/4)*4 == pixel){
				color = [Math.floor(Math.random()*4)*85 , Math.floor(Math.random()*4)*85 , Math.floor(Math.random()*4)*85 ];
				if(color[0] > 0 && color[1] > 0 && color[2] > 0){
					color[Math.floor(Math.random()*3)] = 0;
				}
			}
			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}
	return frames;
}

function generateSparkle( colRGB ) {
	var frames = [];
	var nframe = 30;

	if(colRGB[0] == 0 && colRGB[1] == 0 && colRGB[2] == 0){ // color flow
		var nCycle = 4;
		var col = getColorFlow(nCycle * nframe);
	} else { // fixed color
		var nCycle = 1;
		var col = [colRGB]; for(var i = 0; i< nCycle * nframe; i++){ col.push(colRGB); }
	}

	// pattern cycles to complete 1 color cycle...
	for( var cycle = 0; cycle < nCycle; cycle++ ){


	// for every frame...
	for( var fr = 0; fr < 30; fr++ ){
		var frame = [];
		var dots = [ Math.floor(Math.random() * 8) , Math.floor(Math.random() * 8) , Math.floor(Math.random() * 8) ];

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			var color = [ 0, 0, 0 ];
			if( pixel == dots[0] || pixel == dots[1] + 8 || pixel == dots[2] + 16 ){
				var dat = Math.floor(Math.random() * 255) + 1;

				for( var i=0; i<3; i++) {
					if( colRGB[i] >= 0 ){
						color[i] = Math.round(col[cycle*nframe+ fr][i]/255 * dat);
					}else{
						color[i] = Math.floor( Math.random() * 4) *85;
					}
				}
				if( colRGB == [-1,-1,-1] && ( color[0] > 0 && color[1] > 0 && color[2] > 0 ) ){
					color[Math.floor(Math.random()*3)] = 0;
				}
			}
			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}

	}
	return frames;
}

function generateSatellite( colRGB ) {
	var frames = [];

	if(colRGB[0] == 0 && colRGB[1] == 0 && colRGB[2] == 0){ // color flow
		var col = getColorFlow(30);
	} else if(colRGB[0] == -1 && colRGB[1] == -1 && colRGB[2] == -1){ // random colors
		var col = getRandomColors();
	} else { // fixed color
		var col = [colRGB];
	}

	// for every frame...
	for( var fr = 0; fr < col.length; fr++ ){
		var frame = [];

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			if( pixel == 0 ) { var color = col[fr]; } else  { var color = [ 0, 0, 0 ]; }
			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}
	return frames;
}

function generateLighthouse( colRGB ){
	var frames = [];

	if(colRGB[0] == 0 && colRGB[1] == 0 && colRGB[2] == 0){ // color flow
		var col = getColorFlow(30);
	} else if(colRGB[0] == -1 && colRGB[1] == -1 && colRGB[2] == -1){ // random colors
		var col = getRandomColors();
	} else { // fixed color
		var col = [colRGB];
	}

	// for every frame...
	for( var fr = 0; fr < col.length; fr++ ){
		var frame = [];

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {

			if( ( pixel == 6 ) || ( pixel == 18 ) ){
				var color = col[fr];
			} else {
				var color = [0,0,0];
			}
			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}
	return frames;
}

function generateClockwork( colRGB ){
	var frames = [];
	var nframe = 48;

	if(colRGB[0] == 0 && colRGB[1] == 0 && colRGB[2] == 0){ // color flow
		var nCycle = 3;
		var col = getColorFlow(nCycle * nframe);
	} else { // fixed color
		var nCycle = 1;
		var col = [colRGB]; for(var i = 0; i< nCycle * nframe; i++){ col.push(colRGB); }
	}

	// pattern cycles to complete 1 color cycle...
	for( var cycle = 0; cycle < nCycle; cycle++ ){

	// for every frame...
	for( var fr = 0; fr < nframe; fr++ ){
		var frame = [];

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			var color = [0,0,0];
			var px = pixel + 9; if( px > 23 ){px -= 24;}
			var px2 = px + 12; if( px2 > 23 ){px2 -= 24;}
			
			if( fr<24 ){
				if( (px == fr) || (px2 == fr) ){
					color = col[cycle*nframe+ fr];
				}
			} else {
				if( (px == 48 - fr) || (px2 == 48 - fr)  || (px + 24 == 48 - fr) || (px2 + 24 == 48 - fr) ){
					color = col[cycle*nframe+ fr];
				}
			}
			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}

	}
	return frames;
}

function generateButterfly( colRGB ){
	var frames = [];
	var nframe = 18;

	if(colRGB[0] == 0 && colRGB[1] == 0 && colRGB[2] == 0){ // color flow
		var nCycle = 7;
		var col = getColorFlow(nCycle * nframe);
	} else { // fixed color
		var nCycle = 1;
		var col = [colRGB]; for(var i = 0; i< nCycle * nframe; i++){ col.push(colRGB); }
	}

	
	// pattern cycles to complete 1 color cycle...
	for( var cycle = 0; cycle < nCycle; cycle++ ){

	// for every frame...
	for( var fr = 0; fr < nframe; fr++ ){
		var frame = [];

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			var color = [0,0,0];
			var px = pixel + 3; if( px > 23 ){px -= 24;}
			
			if( fr<6 ){ // expansion
				var p1 = 6 - fr, p2 = 6 + fr;
				var p3 = nframe - fr, p4 = nframe + fr;

				if( (( px >= p1) && ( px <= p2 )) || (( px >= p3) && ( px <= p4 )) ){
					color = col[cycle*nframe+ fr];
					if(px != p1 && px != p2 && px != p3 && px != p4){
						color = [Math.round(color[0] / 2), Math.round(color[1] / 2), Math.round(color[2] / 2)];
					}
				}

			} else if( fr<10 ){ // contraction
				var p1 = 6 - (10 - fr ), p2 = 6 + (10 - fr );
				var p3 = nframe - (10 - fr ), p4 = nframe + (10 - fr );

				if(( px >= p1 &&  px <= p2) || ( px >= p3 &&  px <= p4) ){
					color = col[cycle*nframe+ fr];
					if(px != p1 && px != p2 && px != p3 && px != p4){
						color = [Math.round(color[0] / 2), Math.round(color[1] / 2), Math.round(color[2] / 2)];
					}
				}

			} else  if( fr<14 ){ // fade-out
				if( px == 6 || px == 18 ){
					var div = Math.pow( 2, fr - 10 );
					color = col[cycle*nframe+ fr];
					color = [Math.round(color[0] / div), Math.round(color[1] / div), Math.round(color[2] / div)];
				}

			} else  if( fr<18 ){ // fade-in
				if( px == 6 || px == 18 ){
					var div = Math.pow( 2, 18 - fr );
					color = col[cycle*nframe+ fr];
					color = [Math.round(color[0] / div), Math.round(color[1] / div), Math.round(color[2] / div)];
				}
			}
			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}

	}
	return frames;
}

function generateTriangle( colRGB1, colRGB2, colRGB3 ) {
	var frames = [];
	var frame = [];

	// for every pixel...
	for( var pixel = 0; pixel < 24; pixel += 1 ) {
		var color = [ 0, 0, 0 ];
		if( pixel == 0){ color = colRGB1; }
		if( pixel == 8){ color = colRGB2; }
		if( pixel == 16){ color = colRGB3; }
		frame.push({ r: color[0], g: color[1], b: color[2] });
	}
	frames.push(frame);
	return frames;
}

function generatePulsetrain( colRGB ) {
	var frames = [];
	var nframe = 32;

	if(colRGB[0] == 0 && colRGB[1] == 0 && colRGB[2] == 0){ // color flow
		var nCycle = 6;
		var col = getColorFlow(nCycle * nframe);
	} else { // fixed color
		var nCycle = 1;
		var col = [colRGB]; for(var i = 0; i< nCycle * nframe; i++){ col.push(colRGB); }
	}

	// pattern cycles to complete 1 color cycle...
	for( var cycle = 0; cycle < nCycle; cycle++ ){

	// for every frame...
	for( var fr = 0; fr < nframe; fr++ ){
		var frame = [];
	
		if(fr<16){
			var colDiv = Math.pow(2, fr/4);
		} else {
			var colDiv = Math.pow(2, (31-fr)/4);
		}
		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel += 1 ) {
			var color = [ 0, 0, 0 ];
			if( Math.floor(pixel/4)*4 == pixel){
				color = [ Math.round(col[cycle*nframe+ fr][0]/colDiv), Math.round(col[cycle*nframe+ fr][1]/colDiv), Math.round(col[cycle*nframe+ fr][2]/colDiv) ];
			}
			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}

	}
	return frames;
}

function generateFrontpulse( colRGB ) {
	var frames = [];
	var colpix = [];
	var divR = colRGB[0]/255, divG = colRGB[1]/255, divB = colRGB[2]/255; 

	// for every frame...
	for( var fr = 0; fr < 12; fr++ ){
		var frame = [];
		var pixnum1 = 21 - fr;
		var pixnum2 = 21 + fr;
		if( pixnum1 > 23){ pixnum1 -=24; }
		if( pixnum2 > 23){ pixnum2 -=24; }

		colpix = [0, 0, 0];
		if( colRGB[0]>0 ){ colpix[0] = Math.round( 255/Math.pow(2,fr/1.4) *divR ); }
		if( colRGB[1]>0 ){ colpix[1] = Math.round( 255/Math.pow(2,fr/1.4) *divG ); }
		if( colRGB[2]>0 ){ colpix[2] = Math.round( 255/Math.pow(2,fr/1.4) *divB ); }

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			var color = [0,0,0];

			if( ( pixel == pixnum1 ) || ( pixel == pixnum2 ) ){
				color = colpix;
				if( pixel == 21 ){ color = [ colRGB[0] + 32, colRGB[1] + 32, colRGB[2] + 32 ]; }
				if( color[0] > 255 ) {color[0] = 255;}
				if( color[1] > 255 ) {color[1] = 255;}
				if( color[2] > 255 ) {color[2] = 255;}
			}else{
				if( pixel == 21 ){ color = colpix; }
			}

			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}
	return frames;
}

function generatePulsar( colRGB ) {
	var frames = [];

	if(colRGB[0] == 0 && colRGB[1] == 0 && colRGB[2] == 0){ // color flow
		var col = getColorFlow(24);
	} else { // fixed color
		var col = [colRGB]; for(var i = 0; i<24; i++){ col.push(colRGB); }
	}


	// for every frame...
	for( var fr = 0; fr < 24; fr++ ){
		var frame = [];

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			var color = [0,0,0];
			var px = pixel + 3; if( px > 23 ){px -= 24;}
			
			if( fr<12 ){
				if( px >= 0 && px <= fr ){
					color = col[fr];
				} else if( px <= 24 && px >= 24-fr ){
					color = col[fr];
				}
			} else {
				if( px >= fr-12 && px <= 12 ){
					color = col[fr];
				} else if( px < 36-fr && px >= 12 ){
					color = col[fr];
				}
			}

			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}
	// 50% off
	for( var fr = 0; fr < 24; fr++ ){
		var frame = [];
		for( var pixel = 0; pixel < 24; pixel++ ) {
			frame.push({ r: 0, g: 0, b: 0 });
		}
		frames.push(frame);
	}
	return frames;
}

function generateOncoming( colRGB1, colRGB2 ) {
	var frames = [];

	// for every frame...
	for( var fr = 0; fr < 24; fr++ ){
		var frame = [];
		var pixnum1 = fr;
		var pixnum2 = 23 - fr;

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			var color = [ 0, 0, 0 ];

			if( ( pixel == pixnum1 ) ){
				color[0] += colRGB1[0];
				color[1] += colRGB1[1];
				color[2] += colRGB1[2];
			}
			if( ( pixel == pixnum2 ) ){
				color[0] += colRGB2[0];
				color[1] += colRGB2[1];
				color[2] += colRGB2[2];
			}
			var colCheck = 1;
			if( color[0] > 255) { if( color[0] / 255 > colCheck ) { colCheck = color[0] / 255; } }
			if( color[1] > 255) { if( color[1] / 255 > colCheck ) { colCheck = color[1] / 255; } }
			if( color[2] > 255) { if( color[2] / 255 > colCheck ) { colCheck = color[2] / 255; } }
			color[0] = Math.round( color[0] / colCheck );
			color[1] = Math.round( color[1] / colCheck );
			color[2] = Math.round( color[2] / colCheck );

			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}
	return frames;
}

function generateNewtonian( colRGB1, colRGB2 ) {
	var frames = [];
	var pixnum1 = 0;
	var pixnum2 = 12;

	// for every frame...
	for( var fr = 1; fr < 44; fr++ ){
		var frame = [];

		if( fr <= 11 ){
			pixnum1 = fr;
			pixnum2 = 12;
		} else if( fr >= 12 && fr <=22 ){
			pixnum1 = 12;
			pixnum2 = fr+1;
		} else if( fr >= 23 && fr <=33 ){
			pixnum1 = 12;
			pixnum2 = 46-fr;
		} else if( fr >= 34 && fr <=44 ){
			pixnum1 = 45-fr;
			pixnum2 = 12;
		}
		pixnum1 += 9
		pixnum2 += 9
		if ( pixnum1 > 23 ){ pixnum1 -= 24; }
		if ( pixnum2 > 23 ){ pixnum2 -= 24; }

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			var color = [ 0, 0, 0 ];
			if( ( pixel == pixnum1 ) ){ color = colRGB2; }
			if( ( pixel == pixnum2 ) ){ color = colRGB1; }

			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}
	return frames;
}

function generateScannerFrames( colRGB ) {
	var cR = colRGB[0] + 4; if(colRGB[0] > 255) {colRGB[0] = 255;}
	var cG = colRGB[1] + 4; if(colRGB[1] > 255) {colRGB[1] = 255;}
	var cB = colRGB[2] + 4; if(colRGB[2] > 255) {colRGB[2] = 255;}

	var frames = [];
	// for every frame...
	for( var fr = 0; fr < 12; fr++ ){
		var frame = [];

		if( fr <= 6 ){
			var pixnum = fr * 2 + 15;
		} else {
			var pixnum = ( 12 - fr) * 2 + 15;
		}
		if ( pixnum > 23 ){ pixnum -= 24; }

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			var color = [ 0, 0, 0 ];
			if( ( pixel <= 3 ) || ( pixel >= 15 ) ){
				var color = [ 0, 0, 0 ];
				if( Math.floor( pixel / 2) * 2 != pixel ){
					var color = [ Math.round( colRGB[0] / 32 ), Math.round( colRGB[1] / 32 ), Math.round( colRGB[2] / 32 ) ];
					if( ( pixel == pixnum ) ){ color = [ cR, cG, cB ]; }
				}
			}
			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}
	return frames;
}

function generateGort( colRGB1, colRGB2 ) {
	var frames = [];
	
	var colRGB3 = [1, 1, 1];
	for( var i = 0; i<3; i++){
		colRGB3[i] = Math.round(colRGB3[i] - colRGB1[i]/510 - colRGB2[i]/510);
	}
	// for every frame...
	for( var fr = 0; fr < 16; fr++ ){
		var frame = [];

		if( fr < 9 ){ var pixnum = fr + 17; } else { var pixnum = 33 - fr; }
		var pixnum1 = pixnum + 1, pixnum2 = pixnum - 1, pixnum3 = pixnum + 2, pixnum4 = pixnum - 2;
		if( pixnum > 23){ pixnum -=24; }
		if( pixnum1 > 23){ pixnum1 -=24; }
		if( pixnum2 > 23){ pixnum2 -=24; }
		if( pixnum3 > 23){ pixnum3 -=24; }
		if( pixnum4 > 23){ pixnum4 -=24; }

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			var color = colRGB3;
			if( pixel == pixnum ){ color = colRGB1; }
			if( pixel == pixnum1 || pixel == pixnum2 ){ color = [Math.round(colRGB2[0]/8), Math.round(colRGB2[1]/8), Math.round(colRGB2[2]/8)]; }
			if( pixel == pixnum3 || pixel == pixnum4 ){ color = [Math.round(colRGB2[0]), Math.round(colRGB2[1]), Math.round(colRGB2[2])]; }

			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}
	return frames;
}

function generateEyes( colRGB1, colRGB2 ) {
	var frames = [];
	var color = [];
	var pixcenter = 21, pixdest = 0, pixnum =[];
	var blinkOn = false;
	var nFrame = 120;

	if(colRGB1[0]==colRGB2[0] && colRGB1[1]==colRGB2[1] && colRGB1[2]==colRGB2[2]){
		if( colRGB1[0] == 255 && colRGB1[1] == 255 && colRGB1[2] == 255 ){
			var colRGB2 = [4, 4, 4];
			var colRGB3 = [2, 2, 2];
		} else {
			var colRGB2 = [Math.round((255-colRGB1[0])/64), Math.round((255-colRGB1[1])/64), Math.round((255-colRGB1[2])/64) ];
			var colRGB3 = [Math.round((255-colRGB1[0])/128), Math.round((255-colRGB1[1])/128), Math.round((255-colRGB1[2])/128) ];
		}
		var colRGB4 = [Math.round(colRGB1[0]/32), Math.round(colRGB1[1]/32), Math.round(colRGB1[2]/32) ];

	} else {
		var colDiv1 = 0; for(var i = 0; i<3; i++){ if( colRGB1[i] > 0){ colDiv1++; } }
		var colDiv2 = 0; for(var i = 0; i<3; i++){ if( colRGB2[i] > 0){ colDiv2++; } }
		
		if( colDiv1 == colDiv2 ){ colDiv1 = 1; colDiv2 = 2; } else { colDiv2++; }

		colRGB1 = [Math.round(colRGB1[0]/Math.pow( 2, colDiv1)), Math.round(colRGB1[1]/Math.pow( 2, colDiv1)), Math.round(colRGB1[2]/Math.pow( 2, colDiv1)) ];
		colRGB2 = [Math.round(colRGB2[0]/Math.pow( 2, colDiv2)), Math.round(colRGB2[1]/Math.pow( 2, colDiv2)), Math.round(colRGB2[2]/Math.pow( 2, colDiv2)) ];

		var colRGB3 = [Math.round(colRGB2[0]/1.5), Math.round(colRGB2[1]/1.5), Math.round(colRGB2[2]/1.5) ];
		var colRGB4 = [Math.round(colRGB2[0]/8), Math.round(colRGB2[1]/8), Math.round(colRGB2[2]/8) ];
	}


	// for every frame...
	for( var fr = 0; fr < nFrame ; fr++ ){
		var frame = [];

		// if at destination, set new center destination... or not
		if( !blinkOn && pixdest == 0 && Math.random() >= 0.7 ){
			pixdest = 21 + Math.round(Math.random()*6-3);
		}
		// move center toward destination
		if(pixdest > 0 ){
			blinkOn = false;

			if( pixcenter > pixdest ){
				pixcenter -= 1;
			} else if( pixcenter < pixdest ){
				pixcenter += 1; 
			} else { pixdest = 0; } // set arrived at the destination
		} else {
			if(blinkOn){
				blinkOn = false;
			} else {
				blinkOn = Math.random()<0.1;
			}
		}
		// last frames: move to start position
		if( fr >= nFrame -3 ){ pixdest = 21; }
		
		// get eye pixels
		for( var i = 1; i<7; i++){
			if(Math.floor(i/2)*2 == i ){
				pixnum[i] = pixcenter - 1 - Math.floor((i+1)/2);
				//if( i == 6 ){ pixnum[i]--; }
			} else {
				pixnum[i] = pixcenter + 1 + Math.floor((i+1)/2);
				//if( i == 5 ){ pixnum[i]++; }
			}
			if( pixnum[i] > 23){ pixnum[i] -=24; } else if ( pixnum[i] < 0 ){pixnum[i] += 24;}
		}

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			if( pixel == pixnum[1] || pixel == pixnum[2] ) { // eyes center side
				if(blinkOn){
					color =  colRGB4;
				} else {
					color =  colRGB3;
				}
			} else if( pixel == pixnum[3] || pixel == pixnum[4] ) { // eyes center
				if(blinkOn){
					color =  [0, 0, 0];
				} else {
					color =  colRGB1;
				}
			} else if( pixel == pixnum[5] || pixel == pixnum[6] ) { // eyes outside
				if(blinkOn){
					color =  colRGB4;
				} else {
					color =  colRGB2;
				}
			} else  { color = [0, 0, 0]; }

			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}
	return frames;
}

function generateLedAlert( colRGB1, colRGB2 ) {
	var frames = [];
	var frame = [];
	var color = [];

	// for every pixel...
	for( var pixel = 0; pixel < 24; pixel++ ) {
		if( pixel < 12 ) { color = colRGB1; } else  { color = colRGB2; }
		frame.push({ r: color[0], g: color[1], b: color[2] });
	}
	frames.push(frame);
	return frames;
}


// ==================== various functions ==================== //

function getColorFlow(nStep){
	var fStep = 255/(nStep/6), col = [], r = 255, g = 0, b = 0;
	col.push([r, g, b]);
	while( g < 255 ){ g += fStep; col.push([Math.round(r), Math.round(g), Math.round(b)]); }
	while( r >0 )	{ r -= fStep; col.push([Math.round(r), Math.round(g), Math.round(b)]); }
	while( b < 255 ){ b += fStep; col.push([Math.round(r), Math.round(g), Math.round(b)]); }
	while( g >0 )	{ g -= fStep; col.push([Math.round(r), Math.round(g), Math.round(b)]); }
	while( r < 255 ){ r += fStep; col.push([Math.round(r), Math.round(g), Math.round(b)]); }
	while( b >0 )	{ b -= fStep; col.push([Math.round(r), Math.round(g), Math.round(b)]); }
	return col;
}

function getRandomColors(){
	var col = [], c = [0, 0, 0];
	for( var i = 0; i < 109; i++ ){
			c = [0, 0, 0];
		while(c[0] == c[1] && c[1] == c[2]){
			c[0] = Math.floor( Math.random() * 4)*85;
			c[1] = Math.floor( Math.random() * 4)*85;
			c[2] = Math.floor( Math.random() * 4)*85;
		}
		if( c[0]>0 && c[1]>0 && c[2]>0 ){c[Math.floor(Math.random()*3)] = 0;}
		col.push(c);
	}
	return col;
}

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
		{ id: 'magenta_alert', colors: [[0, 0, 0], [255, 0, 255]] },
		{ id: 'blue_alert', colors: [[0, 0, 0], [0, 0, 255]] },
		{ id: 'red_blue_alert', colors: [[255, 0, 0], [0, 0, 255]] },
	].map(screensaver => Object.assign(
		{ generator: generateLedAlert, options: Object.assign({ fps: 1, tfps: 4, rpm: 60 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: '' +
		'', colors: [[255, 0, 0]] },
		{ id: 'led_scanner_red', colors: [[255, 0, 0]] },
		{ id: 'led_scanner_orange', colors: [[255, 127, 0]] },
		{ id: 'led_scanner_yellow', colors: [[255, 255, 0]] },
		{ id: 'led_scanner_green', colors: [[0, 255, 0]] },
		{ id: 'led_scanner_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_scanner_blue', colors: [[0, 0, 255]] },
		{ id: 'led_scanner_purple', colors: [[64, 0, 255]] },
		{ id: 'led_scanner_magenta', colors: [[255, 0, 255]] },
	].map(screensaver => Object.assign(
		{ generator: generateScannerFrames, options: Object.assign({ fps: 3, tfps: 60, rpm: 0 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_gort_red_yellow', colors: [[255, 255, 0], [255, 0, 0], [0, 0, 1]] },
		{ id: 'led_gort_blue_magenta', colors: [[255, 0, 255], [0, 0, 255], [0, 1, 1]] },
		{ id: 'led_gort_green_cyan', colors: [[0, 255, 255], [0, 255, 0], [1, 0, 0]] },
	].map(screensaver => Object.assign(
		{ generator: generateGort, options: Object.assign({ fps: 3, tfps: 60, rpm: 0 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_random_colors', colors: [] },
	].map(screensaver => Object.assign(
		{ generator: generateRandomColors, options: Object.assign({ fps: 1, tfps: 60, rpm: 3 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_sparkle_random', colors: [[-1, -1, -1]] },
		{ id: 'led_sparkle_blue', colors: [[0, 0, 255]] },
		{ id: 'led_sparkle_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_sparkle_green', colors: [[0, 255, 0]] },
		{ id: 'led_sparkle_yellow', colors: [[255, 255, 0]] },
		{ id: 'led_sparkle_orange', colors: [[255, 85, 0]] },
		{ id: 'led_sparkle_red', colors: [[255, 0, 0]] },
		{ id: 'led_sparkle_magenta', colors: [[255, 0, 255]] },
		{ id: 'led_sparkle_purple', colors: [[64, 0, 255]] },
	].map(screensaver => Object.assign(
		{ generator: generateSparkle, options: Object.assign({ fps: 4, tfps: 60, rpm: 2 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_satellite_red', colors: [[255, 0, 0]] },
		{ id: 'led_satellite_orange', colors: [[255, 85, 0]] },
		{ id: 'led_satellite_yellow', colors: [[255, 255, 0]] },
		{ id: 'led_satellite_green', colors: [[0, 255, 0]] },
		{ id: 'led_satellite_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_satellite_blue', colors: [[0, 0, 255]] },
		{ id: 'led_satellite_purple', colors: [[64, 0, 255]] },
		{ id: 'led_satellite_magenta', colors: [[255, 0, 255]] },
	].map(screensaver => Object.assign(
		{ generator: generateSatellite, options: Object.assign({ fps: 1, tfps: 60, rpm: 10 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_lighthouse_white', colors: [[255, 255, 255]] },
		{ id: 'led_lighthouse_red', colors: [[255, 0, 0]] },
		{ id: 'led_lighthouse_green', colors: [[0, 255, 0]] },
		{ id: 'led_lighthouse_blue', colors: [[0, 0, 255]] },
		{ id: 'led_lighthouse_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_lighthouse_magenta', colors: [[255, 0, 255]] },
		{ id: 'led_lighthouse_yellow', colors: [[255, 255, 0]] },
	].map(screensaver => Object.assign(
		{ generator: generateLighthouse, options: Object.assign({ fps: 1, tfps: 60, rpm: 10 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_triangle_rgb', colors: [[255, 0, 0], [0, 255, 0], [0, 0, 255]] },
		{ id: 'led_triangle_rgb_fast', colors: [[255, 0, 0], [0, 255, 0], [0, 0, 255]], options: { rpm: 60 } },
		{ id: 'led_triangle_cmy', colors: [[0, 255, 255], [255, 0, 255], [255, 255, 0]] },
		{ id: 'led_triangle_cmy_fast', colors: [[0, 255, 255], [255, 0, 255], [255, 255, 0]], options: { rpm: 60 } },
	].map(screensaver => Object.assign(
		{ generator: generateTriangle, options: Object.assign({ fps: 1, tfps: 60, rpm: 10 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_frontpulse_blue', colors: [[0, 0, 255]] },
		{ id: 'led_frontpulse_cyan', colors: [[0, 255, 255]] },
		{ id: 'led_frontpulse_green', colors: [[0, 255, 0]] },
		{ id: 'led_frontpulse_yellow', colors: [[255, 255, 0]] },
		{ id: 'led_frontpulse_orange', colors: [[255, 85, 0]] },
		{ id: 'led_frontpulse_red', colors: [[255, 0, 0]] },
		{ id: 'led_frontpulse_magenta', colors: [[255, 0, 255]] },
		{ id: 'led_frontpulse_purple', colors: [[64, 0, 255]] },
	].map(screensaver => Object.assign(
		{ generator: generateFrontpulse, options: Object.assign({ fps: 9, tfps: 60, rpm: 0 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_oncoming_red_green', colors: [[255, 0, 0], [0, 255, 0]] },
		{ id: 'led_oncoming_red_blue', colors: [[255, 0, 0], [0, 0, 255]] },
		{ id: 'led_oncoming_red_cyan', colors: [[255, 0, 0], [0, 255, 255]] },
		{ id: 'led_oncoming_green_blue', colors: [[0, 255, 0], [0, 0, 255]] },
		{ id: 'led_oncoming_green_magenta', colors: [[0, 255, 0], [255, 0, 255]] },
		{ id: 'led_oncoming_blue_yellow', colors: [[0, 0, 255], [255, 255, 0]] },
	].map(screensaver => Object.assign(
		{ generator: generateOncoming, options: Object.assign({ fps: 12, tfps: 60, rpm: 3 }, screensaver.options) },
		screensaver
	)),
	[
		{ id: 'led_newtonian_red_green', colors: [[255, 0, 0], [0, 255, 0]] },
		{ id: 'led_newtonian_red_blue', colors: [[255, 0, 0], [0, 0, 255]] },
		{ id: 'led_newtonian_red_cyan', colors: [[255, 0, 0], [0, 255, 255]] },
		{ id: 'led_newtonian_green_blue', colors: [[0, 255, 0], [0, 0, 255]] },
		{ id: 'led_newtonian_green_magenta', colors: [[0, 255, 0], [255, 0, 255]] },
		{ id: 'led_newtonian_blue_yellow', colors: [[0, 0, 255], [255, 255, 0]] },
	].map(screensaver => Object.assign(
		{ generator: generateNewtonian, options: Object.assign({ fps: 20, tfps: 60, rpm: 0 }, screensaver.options) },
		screensaver
	)),
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

// ==================== Pattern generators ==================== //

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

function generateScannerFrames( colRGB ) {
	var cR = colRGB[0] + 4; if(colRGB[0] > 255) {colRGB[0] = 255;}
	var cG = colRGB[1] + 4; if(colRGB[1] > 255) {colRGB[1] = 255;}
	var cB = colRGB[2] + 4; if(colRGB[2] > 255) {colRGB[2] = 255;}

	var frames = [];
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
			frame.push({ r: color[0], g: color[1], b: color[2] })
		}
		frames.push(frame);
	}
	return frames;
}

function generateGort( colRGB1, colRGB2, colRGB3 ) {
	var frames = [];
	var frame = [];

	// for every frame...
	for( var fr = 0; fr < 16; fr++ ){
		frame = [];

		if( fr < 9 ){
			var pixnum = fr + 17;
		} else {
			var pixnum = 33 - fr;
		}
		var pixnum1 = pixnum + 1;
		var pixnum2 = pixnum - 1;
		var pixnum3 = pixnum + 2;
		var pixnum4 = pixnum - 2;
		if( pixnum > 23){ pixnum -=24; }
		if( pixnum1 > 23){ pixnum1 -=24; }
		if( pixnum2 > 23){ pixnum2 -=24; }
		if( pixnum3 > 23){ pixnum3 -=24; }
		if( pixnum4 > 23){ pixnum4 -=24; }


		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			var color = colRGB3;

			if( pixel == pixnum ){ color = colRGB1; }
			if( pixel == pixnum1 || pixel == pixnum2 ){ color = colRGB2; }
			if( pixel == pixnum3 || pixel == pixnum4 ){ color = colRGB2; }

			frame.push({ r: color[0], g: color[1], b: color[2] });
		}
		frames.push(frame);
	}
	return frames;
}

function generateRandomColors() {
	var frames = [];
	var frame = [];

	// for every frame...
	for( var fr = 0; fr < 60; fr++ ){
		frame = [];

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
	var frame = [];

	// for every frame...
	for( var fr = 0; fr < 30; fr++ ){
		frame = [];
		var dots = [ Math.floor(Math.random() * 8) , Math.floor(Math.random() * 8) , Math.floor(Math.random() * 8) ];

		// for every pixel...
		for( var pixel = 0; pixel < 24; pixel++ ) {
			var color = [ 0, 0, 0 ];
			if( pixel == dots[0] || pixel == dots[1] + 8 || pixel == dots[2] + 16 ){
				var dat = Math.floor(Math.random() * 255) + 1;

				for( var i=0; i<3; i++) {
					if( colRGB[i] >= 0 ){
						color[i] = Math.round(colRGB[i]/255 * dat);
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
	return frames;
}

function generateSatellite( colRGB ) {
	var frames = [];
	var frame = [];
	var color;

	// for every pixel...
	for( var pixel = 0; pixel < 24; pixel++ ) {
		if( pixel == 0 ) { color = colRGB; } else  { color = [ 0, 0, 0 ]; }
		frame.push({ r: color[0], g: color[1], b: color[2] });
	}
	frames.push(frame);
	return frames;
}

function generateLighthouse( colRGB ){
	var frames = [];
	var frame = [];

	// for every pixel...
	for( var pixel = 0; pixel < 24; pixel++ ) {
		var color = [0,0,0];

		if( ( pixel == 6 ) || ( pixel == 18 ) ){
			color = colRGB;
		}
		frame.push({
			r: color[0], // 0 - 255
			g: color[1], // 0 - 255
			b: color[2]  // 0 - 255
		})
	}
	frames.push(frame);
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
		frame.push({ r: color[0], g: color[1], b: color[2] })
	}
	frames.push(frame);
	return frames;
}

function generateFrontpulse( colRGB ) {
	var frames = [];
	var colpix = colRGB;

	// for every frame...
	for( var fr = 0; fr < 12; fr++ ){
		var frame = [];
		var pixnum1 = 21 - fr;
		var pixnum2 = 21 + fr;
		if( pixnum1 > 23){ pixnum1 -=24; }
		if( pixnum2 > 23){ pixnum2 -=24; }

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

			frame.push({ r: color[0], g: color[1], b: color[2] })
		}
		colpix = [ Math.round( colpix[0]/2 ), Math.round( colpix[1]/2 ), Math.round( colpix[2]/2 ) ];
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
			color[0] = color[0] / colCheck;
			color[1] = color[1] / colCheck;
			color[2] = color[2] / colCheck;

			frame.push({ r: color[0], g: color[1], b: color[2] })
		}
		frames.push(frame);
	}
	return frames;
}

function generateNewtonian( colRGB1, colRGB2 ) {
	var frames = [];
	var pixnum1 = 0;
	var pixnum2 = 12;

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

			frame.push({ r: color[0], g: color[1], b: color[2] })
		}
		frames.push(frame);
	}
	return frames;
}

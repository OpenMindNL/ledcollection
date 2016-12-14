"use strict";

function init() {
};

var Animation = Homey.manager('ledring').Animation;

// ------------ start white_alert --------------------

frames = generateLedAlert( [ 0, 0, 0 ], [ 255, 255, 255] );

var animation_white_alert = new Animation({
    options: {
        fps     : 1, 
        tfps    : 4, 
        rpm     : 60,
    },
    frames    : frames
})

// register animation_white_alert
animation_white_alert.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'white_alert', animation_white_alert );
	if( err ) return Homey.error(err);
})

// ------------ end white_alert --------------------


// ------------ start red_alert --------------------

frames = generateLedAlert( [ 0, 0, 0 ], [ 255, 0, 0] );

var animation_red_alert = new Animation({
    options: {
        fps     : 1, 
        tfps    : 4, 
        rpm     : 60,
    },
    frames    : frames
})

// register animation_red_alert
animation_red_alert.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'red_alert', animation_red_alert );
	if( err ) return Homey.error(err);
})

// ------------ end red_alert --------------------


// ------------ start orange_alert --------------------

frames = generateLedAlert( [ 0, 0, 0 ], [ 255, 85, 0] );

var animation_orange_alert = new Animation({
    options: {
        fps     : 1, 
        tfps    : 4, 
        rpm     : 60,
    },
    frames    : frames
})

// register animation_orange_alert
animation_orange_alert.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'orange_alert', animation_orange_alert );
	if( err ) return Homey.error(err);
})

// ------------ end orange_alert --------------------


// ------------ start yellow_alert --------------------

frames = generateLedAlert( [ 0, 0, 0 ], [ 255, 255, 0] );

var animation_yellow_alert = new Animation({
    options: {
        fps     : 1, 
        tfps    : 4, 
        rpm     : 60,
    },
    frames    : frames
})

// register animation_yellow_alert
animation_yellow_alert.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'yellow_alert', animation_yellow_alert );
	if( err ) return Homey.error(err);
})

// ------------ end yellow_alert --------------------


// ------------ start green_alert --------------------

frames = generateLedAlert( [ 0, 0, 0 ], [ 0, 255, 0] );

var animation_green_alert = new Animation({
    options: {
        fps     : 1, 
        tfps    : 4, 
        rpm     : 60,
    },
    frames    : frames
})

// register animation_green_alert
animation_green_alert.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'green_alert', animation_green_alert );
	if( err ) return Homey.error(err);
})

// ------------ end green_alert --------------------


// ------------ start cyan_alert --------------------

frames = generateLedAlert( [ 0, 0, 0 ], [ 0, 255, 255] );

var animation_cyan_alert = new Animation({
    options: {
        fps     : 1, 
        tfps    : 4, 
        rpm     : 60,
    },
    frames    : frames
})

// register animation_cyan_alert
animation_cyan_alert.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'cyan_alert', animation_cyan_alert );
	if( err ) return Homey.error(err);
})

// ------------ end cyan_alert --------------------


// ------------ start magenta_alert --------------------

frames = generateLedAlert( [ 0, 0, 0 ], [ 255, 0, 255] );

var animation_magenta_alert = new Animation({
    options: {
        fps     : 1, 
        tfps    : 4, 
        rpm     : 60,
    },
    frames    : frames
})

// register animation_magenta_alert
animation_magenta_alert.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'magenta_alert', animation_magenta_alert );
	if( err ) return Homey.error(err);
})

// ------------ end magenta_alert --------------------


// ------------ start blue_alert --------------------

frames = generateLedAlert( [ 0, 0, 0 ], [ 0, 0, 255] );

var animation_blue_alert = new Animation({
    options: {
        fps     : 1, 
        tfps    : 4, 
        rpm     : 60,
    },
    frames    : frames
})

// register animation_blue_alert
animation_blue_alert.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'blue_alert', animation_blue_alert );
	if( err ) return Homey.error(err);
})

// ------------ end blue_alert --------------------


// ------------ start red_blue_alert --------------------

frames = generateLedAlert( [ 255, 0, 0 ], [ 0, 0, 255] );

var animation_red_blue_alert = new Animation({
    options: {
        fps     : 1, 
        tfps    : 4, 
        rpm     : 60,
    },
    frames    : frames
})

// register animation_red_blue_alert
animation_red_blue_alert.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'red_blue_alert', animation_red_blue_alert );
	if( err ) return Homey.error(err);
})

// ------------ end red_blue_alert --------------------


// ------------ start led_scanner_red --------------------

frames = generateScannerFrames( [ 255, 0, 0 ] );

var animation_led_scanner_red = new Animation({
    options: {
        fps     : 3, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_scanner_red
animation_led_scanner_red.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_scanner_red', animation_led_scanner_red );
	if( err ) return Homey.error(err);
})

// ------------ end led_scanner_red --------------------


// ------------ start led_scanner_orange --------------------

frames = generateScannerFrames( [ 255, 127, 0 ] );

var animation_led_scanner_orange = new Animation({
    options: {
        fps     : 3, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_scanner_orange
animation_led_scanner_orange.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_scanner_orange', animation_led_scanner_orange );
	if( err ) return Homey.error(err);
})

// ------------ end led_scanner_orange --------------------


// ------------ start led_scanner_yellow --------------------

frames = generateScannerFrames( [ 255, 255, 0 ] );

var animation_led_scanner_yellow = new Animation({
    options: {
        fps     : 3, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_scanner_yellow
animation_led_scanner_yellow.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_scanner_yellow', animation_led_scanner_yellow );
	if( err ) return Homey.error(err);
})

// ------------ end led_scanner_yellow --------------------


// ------------ start led_scanner_green --------------------

frames = generateScannerFrames( [ 0, 255, 0 ] );

var animation_led_scanner_green = new Animation({
    options: {
        fps     : 3, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_scanner_green
animation_led_scanner_green.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_scanner_green', animation_led_scanner_green );
	if( err ) return Homey.error(err);
})

// ------------ end led_scanner_green --------------------


// ------------ start led_scanner_cyan --------------------

frames = generateScannerFrames( [ 0, 255, 255 ] );

var animation_led_scanner_cyan = new Animation({
    options: {
        fps     : 3, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_scanner_cyan
animation_led_scanner_cyan.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_scanner_cyan', animation_led_scanner_cyan );
	if( err ) return Homey.error(err);
})

// ------------ end led_scanner_cyan --------------------


// ------------ start led_scanner_blue --------------------

frames = generateScannerFrames([ 0, 0, 255 ]);

var animation_led_scanner_blue = new Animation({
    options: {
        fps     : 3, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_scanner_blue
animation_led_scanner_blue.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_scanner_blue', animation_led_scanner_blue );
	if( err ) return Homey.error(err);
})

// ------------ end led_scanner_blue --------------------


// ------------ start led_scanner_purple --------------------

frames = generateScannerFrames([ 64, 0, 255 ]);

var animation_led_scanner_purple = new Animation({
    options: {
        fps     : 3, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_scanner_purple
animation_led_scanner_purple.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_scanner_purple', animation_led_scanner_purple );
	if( err ) return Homey.error(err);
})

// ------------ end led_scanner_purple --------------------


// ------------ start led_scanner_magenta --------------------

frames = generateScannerFrames([ 255, 0, 255 ]);

var animation_led_scanner_magenta = new Animation({
    options: {
        fps     : 3, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_scanner_magenta
animation_led_scanner_magenta.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_scanner_magenta', animation_led_scanner_magenta );
	if( err ) return Homey.error(err);
})

// ------------ end led_scanner_magenta --------------------


// ------------ start led_gort_red_yellow --------------------

frames = generateGort( [ 255, 255, 0 ], [ 255, 0, 0 ], [ 0, 0, 1 ] );

var animation_led_gort_red_yellow = new Animation({
    options: {
        fps     : 3, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_gort_red_yellow
animation_led_gort_red_yellow.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_gort_red_yellow', animation_led_gort_red_yellow );
	if( err ) return Homey.error(err);
})

// ------------ end led_gort_red_yellow --------------------


// ------------ start led_gort_blue_magenta --------------------

frames = generateGort( [ 255, 0, 255 ], [ 0, 0, 255 ], [ 0, 1, 1 ] );

var animation_led_gort_blue_magenta = new Animation({
    options: {
        fps     : 3, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_gort_blue_magenta
animation_led_gort_blue_magenta.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_gort_blue_magenta', animation_led_gort_blue_magenta );
	if( err ) return Homey.error(err);
})

// ------------ end led_gort_blue_magenta --------------------


// ------------ start led_gort_green_cyan --------------------

frames = generateGort( [ 0, 255, 255 ], [ 0, 255, 0 ], [ 1, 0, 0 ] );

var animation_led_gort_green_cyan = new Animation({
    options: {
        fps     : 3, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_gort_green_cyan
animation_led_gort_green_cyan.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_gort_green_cyan', animation_led_gort_green_cyan );
	if( err ) return Homey.error(err);
})

// ------------ end led_gort_green_cyan --------------------


// ------------ start led_random_colors --------------------

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

var animation_led_random_colors = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 3,
    },
    frames    : frames
})

// register animation_led_random_colors
animation_led_random_colors.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_random_colors', animation_led_random_colors );
	if( err ) return Homey.error(err);
})

// ------------ end led_random_colors --------------------


// ------------ start led_sparkle_random --------------------

frames = generateSparkle( [ -1, -1, -1] );

var animation_led_sparkle_random = new Animation({
    options: {
        fps     : 4, 
        tfps    : 60, 
        rpm     : 2,
    },
    frames    : frames
})

// register animation_led_sparkle_random
animation_led_sparkle_random.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_sparkle_random', animation_led_sparkle_random );
	if( err ) return Homey.error(err);
})

// ------------ end led_sparkle_random --------------------


// ------------ start led_sparkle_blue --------------------

frames = generateSparkle( [ 0, 0, 255] );

var animation_led_sparkle_blue = new Animation({
    options: {
        fps     : 4, 
        tfps    : 60, 
        rpm     : 2,
    },
    frames    : frames
})

// register animation_led_sparkle_blue
animation_led_sparkle_blue.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_sparkle_blue', animation_led_sparkle_blue );
	if( err ) return Homey.error(err);
})

// ------------ end led_sparkle_blue --------------------


// ------------ start led_sparkle_cyan --------------------

frames = generateSparkle( [ 0, 255, 255] );

var animation_led_sparkle_cyan = new Animation({
    options: {
        fps     : 4, 
        tfps    : 60, 
        rpm     : 2,
    },
    frames    : frames
})

// register animation_led_sparkle_cyan
animation_led_sparkle_cyan.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_sparkle_cyan', animation_led_sparkle_cyan );
	if( err ) return Homey.error(err);
})

// ------------ end led_sparkle_cyan --------------------


// ------------ start led_sparkle_green --------------------

frames = generateSparkle( [ 0, 255, 0] );

var animation_led_sparkle_green = new Animation({
    options: {
        fps     : 4, 
        tfps    : 60, 
        rpm     : 2,
    },
    frames    : frames
})

// register animation_led_sparkle_green
animation_led_sparkle_green.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_sparkle_green', animation_led_sparkle_green );
	if( err ) return Homey.error(err);
})

// ------------ end led_sparkle_green --------------------


// ------------ start led_sparkle_yellow --------------------

frames = generateSparkle( [ 255, 255, 0] );

var animation_led_sparkle_yellow = new Animation({
    options: {
        fps     : 4, 
        tfps    : 60, 
        rpm     : 2,
    },
    frames    : frames
})

// register animation_led_sparkle_yellow
animation_led_sparkle_yellow.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_sparkle_yellow', animation_led_sparkle_yellow );
	if( err ) return Homey.error(err);
})

// ------------ end led_sparkle_yellow --------------------


// ------------ start led_sparkle_orange --------------------

frames = generateSparkle( [ 255, 85, 0] );

var animation_led_sparkle_orange = new Animation({
    options: {
        fps     : 4, 
        tfps    : 60, 
        rpm     : 2,
    },
    frames    : frames
})

// register animation_led_sparkle_orange
animation_led_sparkle_orange.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_sparkle_orange', animation_led_sparkle_orange );
	if( err ) return Homey.error(err);
})

// ------------ end led_sparkle_orange --------------------


// ------------ start led_sparkle_red --------------------

frames = generateSparkle( [ 255, 0, 0] );

var animation_led_sparkle_red = new Animation({
    options: {
        fps     : 4, 
        tfps    : 60, 
        rpm     : 2,
    },
    frames    : frames
})

// register animation_led_sparkle_red
animation_led_sparkle_red.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_sparkle_red', animation_led_sparkle_red );
	if( err ) return Homey.error(err);
})

// ------------ end led_sparkle_red --------------------


// ------------ start led_sparkle_magenta --------------------

frames = generateSparkle( [ 255, 0, 255] );

var animation_led_sparkle_magenta = new Animation({
    options: {
        fps     : 4, 
        tfps    : 60, 
        rpm     : 2,
    },
    frames    : frames
})

// register animation_led_sparkle_magenta
animation_led_sparkle_magenta.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_sparkle_magenta', animation_led_sparkle_magenta );
	if( err ) return Homey.error(err);
})

// ------------ end led_sparkle_magenta --------------------


// ------------ start led_sparkle_purple --------------------

frames = generateSparkle( [ 64, 0, 255] );

var animation_led_sparkle_purple = new Animation({
    options: {
        fps     : 4, 
        tfps    : 60, 
        rpm     : 2,
    },
    frames    : frames
})

// register animation_led_sparkle_purple
animation_led_sparkle_purple.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_sparkle_purple', animation_led_sparkle_purple );
	if( err ) return Homey.error(err);
})

// ------------ end led_sparkle_purple --------------------


// ------------ start led_satellite_red --------------------

frames = generateSatellite( [ 255, 0, 0 ] );

var animation_led_satellite_red = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_satellite_red
animation_led_satellite_red.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_satellite_red', animation_led_satellite_red );
	if( err ) return Homey.error(err);
})

// ------------ end led_satellite_red --------------------


// ------------ start led_satellite_orange --------------------

frames = generateSatellite( [ 255, 85, 0 ] );

var animation_led_satellite_orange = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_satellite_orange
animation_led_satellite_orange.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_satellite_orange', animation_led_satellite_orange );
	if( err ) return Homey.error(err);
})

// ------------ end led_satellite_orange --------------------


// ------------ start led_satellite_yellow --------------------

frames = generateSatellite( [ 255, 255, 0 ] );

var animation_led_satellite_yellow = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_satellite_yellow
animation_led_satellite_yellow.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_satellite_yellow', animation_led_satellite_yellow );
	if( err ) return Homey.error(err);
})

// ------------ end led_satellite_yellow --------------------


// ------------ start led_satellite_green --------------------

frames = generateSatellite( [ 0, 255, 0 ] );

var animation_led_satellite_green = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_satellite_green
animation_led_satellite_green.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_satellite_green', animation_led_satellite_green );
	if( err ) return Homey.error(err);
})

// ------------ end led_satellite_green --------------------


// ------------ start led_satellite_cyan --------------------

frames = generateSatellite( [ 0, 255, 255 ] );

var animation_led_satellite_cyan = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_satellite_cyan
animation_led_satellite_cyan.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_satellite_cyan', animation_led_satellite_cyan );
	if( err ) return Homey.error(err);
})

// ------------ end led_satellite_cyan --------------------


// ------------ start led_satellite_blue --------------------

frames = generateSatellite( [ 0, 0, 255 ] );

var animation_led_satellite_blue = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_satellite_blue
animation_led_satellite_blue.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_satellite_blue', animation_led_satellite_blue );
	if( err ) return Homey.error(err);
})

// ------------ end led_satellite_blue --------------------


// ------------ start led_satellite_purple --------------------

frames = generateSatellite( [ 64, 0, 255 ] );

var animation_led_satellite_purple = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_satellite_purple
animation_led_satellite_purple.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_satellite_purple', animation_led_satellite_purple );
	if( err ) return Homey.error(err);
})

// ------------ end led_satellite_purple --------------------


// ------------ start led_satellite_magenta --------------------

frames = generateSatellite( [ 255, 0, 255 ] );

var animation_led_satellite_magenta = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_satellite_magenta
animation_led_satellite_magenta.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_satellite_magenta', animation_led_satellite_magenta );
	if( err ) return Homey.error(err);
})

// ------------ end led_satellite_magenta --------------------


// ------------ start led_lighthouse_white --------------------

frames = generateLighthouse( [255, 255, 255] );

var animation_led_lighthouse_white = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_lighthouse_white
animation_led_lighthouse_white.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_lighthouse_white', animation_led_lighthouse_white );
	if( err ) return Homey.error(err);
})

// ------------ end led_lighthouse_white --------------------


// ------------ start led_lighthouse_red --------------------

frames = generateLighthouse( [255, 0, 0] );

var animation_led_lighthouse_red = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_lighthouse_red
animation_led_lighthouse_red.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_lighthouse_red', animation_led_lighthouse_red );
	if( err ) return Homey.error(err);
})

// ------------ end led_lighthouse_red --------------------


// ------------ start led_lighthouse_green --------------------

frames = generateLighthouse( [0, 255, 0] );

var animation_led_lighthouse_green = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_lighthouse_green
animation_led_lighthouse_green.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_lighthouse_green', animation_led_lighthouse_green );
	if( err ) return Homey.error(err);
})

// ------------ end led_lighthouse_green --------------------


// ------------ start led_lighthouse_blue --------------------

frames = generateLighthouse( [0, 0, 255] );

var animation_led_lighthouse_blue = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_lighthouse_blue
animation_led_lighthouse_blue.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_lighthouse_blue', animation_led_lighthouse_blue );
	if( err ) return Homey.error(err);
})

// ------------ end led_lighthouse_blue --------------------


// ------------ start led_lighthouse_cyan --------------------

frames = generateLighthouse( [0, 255, 255] );

var animation_led_lighthouse_cyan = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_lighthouse_cyan
animation_led_lighthouse_cyan.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_lighthouse_cyan', animation_led_lighthouse_cyan );
	if( err ) return Homey.error(err);
})

// ------------ end led_lighthouse_cyan --------------------


// ------------ start led_lighthouse_magenta --------------------

frames = generateLighthouse( [255, 0, 255] );

var animation_led_lighthouse_magenta = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_lighthouse_magenta
animation_led_lighthouse_magenta.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_lighthouse_magenta', animation_led_lighthouse_magenta );
	if( err ) return Homey.error(err);
})

// ------------ end led_lighthouse_magenta --------------------


// ------------ start led_lighthouse_yellow --------------------

frames = generateLighthouse( [255, 255, 0] );

var animation_led_lighthouse_yellow = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_lighthouse_yellow
animation_led_lighthouse_yellow.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_lighthouse_yellow', animation_led_lighthouse_yellow );
	if( err ) return Homey.error(err);
})

// ------------ end led_lighthouse_yellow --------------------


// ------------ start led_triangle_rgb --------------------

frames = generateTriangle( [ 255, 0, 0 ], [ 0, 255, 0 ], [ 0, 0, 255 ] );

var animation_led_triangle_rgb = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_triangle_rgb
animation_led_triangle_rgb.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_triangle_rgb', animation_led_triangle_rgb );
	if( err ) return Homey.error(err);
})

// ------------ end led_triangle_rgb --------------------

// --- with same frames...
// ------------ start led_triangle_rgb_fast --------------------

var animation_led_triangle_rgb_fast = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 60,
    },
    frames    : frames
})

// register animation_led_triangle_rgb_fast
animation_led_triangle_rgb_fast.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_triangle_rgb_fast', animation_led_triangle_rgb_fast );
	if( err ) return Homey.error(err);
})

// ------------ end led_triangle_rgb_fast --------------------


// ------------ start led_triangle_cmy --------------------

frames = generateTriangle( [ 0, 255, 255 ], [ 255, 0, 255 ], [ 255, 255, 0 ] );

var animation_led_triangle_cmy = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 10,
    },
    frames    : frames
})

// register animation_led_triangle_cmy
animation_led_triangle_cmy.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_triangle_cmy', animation_led_triangle_cmy );
	if( err ) return Homey.error(err);
})

// ------------ end led_triangle_cmy --------------------

// --- with same frames...
// ------------ start led_triangle_cmy_fast --------------------

var animation_led_triangle_cmy_fast = new Animation({
    options: {
        fps     : 1, 
        tfps    : 60, 
        rpm     : 60,
    },
    frames    : frames
})

// register animation_led_triangle_cmy_fast
animation_led_triangle_cmy_fast.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_triangle_cmy_fast', animation_led_triangle_cmy_fast );
	if( err ) return Homey.error(err);
})

// ------------ end led_triangle_cmy_fast --------------------


// ------------ start led_frontpulse_blue --------------------

frames = generateFrontpulse( [ 0, 0, 255 ] );

var animation_led_frontpulse_blue = new Animation({
    options: {
        fps     : 9, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_frontpulse_blue
animation_led_frontpulse_blue.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_frontpulse_blue', animation_led_frontpulse_blue );
	if( err ) return Homey.error(err);
})

// ------------ end led_frontpulse_blue --------------------


// ------------ start led_frontpulse_cyan --------------------

frames = generateFrontpulse( [ 0, 255, 255 ] );

var animation_led_frontpulse_cyan = new Animation({
    options: {
        fps     : 9, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_frontpulse_cyan
animation_led_frontpulse_cyan.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_frontpulse_cyan', animation_led_frontpulse_cyan );
	if( err ) return Homey.error(err);
})

// ------------ end led_frontpulse_cyan --------------------


// ------------ start led_frontpulse_green --------------------

frames = generateFrontpulse( [ 0, 255, 0 ] );

var animation_led_frontpulse_green = new Animation({
    options: {
        fps     : 9, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_frontpulse_green
animation_led_frontpulse_green.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_frontpulse_green', animation_led_frontpulse_green );
	if( err ) return Homey.error(err);
})

// ------------ end led_frontpulse_green --------------------


// ------------ start led_frontpulse_yellow --------------------

frames = generateFrontpulse( [ 255, 255, 0 ] );

var animation_led_frontpulse_yellow = new Animation({
    options: {
        fps     : 9, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_frontpulse_yellow
animation_led_frontpulse_yellow.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_frontpulse_yellow', animation_led_frontpulse_yellow );
	if( err ) return Homey.error(err);
})

// ------------ end led_frontpulse_yellow --------------------


// ------------ start led_frontpulse_orange --------------------

frames = generateFrontpulse( [ 255, 85, 0 ] );

var animation_led_frontpulse_orange = new Animation({
    options: {
        fps     : 9, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_frontpulse_orange
animation_led_frontpulse_orange.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_frontpulse_orange', animation_led_frontpulse_orange );
	if( err ) return Homey.error(err);
})

// ------------ end led_frontpulse_orange --------------------


// ------------ start led_frontpulse_red --------------------

frames = generateFrontpulse( [ 255, 0, 0 ] );

var animation_led_frontpulse_red = new Animation({
    options: {
        fps     : 9, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_frontpulse_red
animation_led_frontpulse_red.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_frontpulse_red', animation_led_frontpulse_red );
	if( err ) return Homey.error(err);
})

// ------------ end led_frontpulse_red --------------------


// ------------ start led_frontpulse_magenta --------------------

frames = generateFrontpulse( [ 255, 0, 255 ] );

var animation_led_frontpulse_magenta = new Animation({
    options: {
        fps     : 9, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_frontpulse_magenta
animation_led_frontpulse_magenta.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_frontpulse_magenta', animation_led_frontpulse_magenta );
	if( err ) return Homey.error(err);
})

// ------------ end led_frontpulse_magenta --------------------


// ------------ start led_frontpulse_purple --------------------

frames = generateFrontpulse( [ 64, 0, 255 ] );

var animation_led_frontpulse_purple = new Animation({
    options: {
        fps     : 9, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_frontpulse_purple
animation_led_frontpulse_purple.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_frontpulse_purple', animation_led_frontpulse_purple );
	if( err ) return Homey.error(err);
})

// ------------ end led_frontpulse_purple --------------------


// ------------ start led_oncoming_red_green --------------------

frames = generateOncoming( [ 255, 0, 0 ], [ 0, 255, 0] );

var animation_led_oncoming_red_green = new Animation({
    options: {
        fps     : 12, 
        tfps    : 60, 
        rpm     : 3,
    },
    frames    : frames
})

// register animation_led_oncoming_red_green
animation_led_oncoming_red_green.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_oncoming_red_green', animation_led_oncoming_red_green );
	if( err ) return Homey.error(err);
})

// ------------ end led_oncoming_red_green --------------------


// ------------ start led_oncoming_red_blue --------------------

frames = generateOncoming( [ 255, 0, 0 ], [ 0, 0, 255] );

var animation_led_oncoming_red_blue = new Animation({
    options: {
        fps     : 12, 
        tfps    : 60, 
        rpm     : 3,
    },
    frames    : frames
})

// register animation_led_oncoming_red_blue
animation_led_oncoming_red_blue.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_oncoming_red_blue', animation_led_oncoming_red_blue );
	if( err ) return Homey.error(err);
})

// ------------ end led_oncoming_red_blue --------------------


// ------------ start led_oncoming_red_cyan --------------------

frames = generateOncoming( [ 255, 0, 0 ], [ 0, 255, 255] );

var animation_led_oncoming_red_cyan = new Animation({
    options: {
        fps     : 12, 
        tfps    : 60, 
        rpm     : 3,
    },
    frames    : frames
})

// register animation_led_oncoming_red_cyan
animation_led_oncoming_red_cyan.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_oncoming_red_cyan', animation_led_oncoming_red_cyan );
	if( err ) return Homey.error(err);
})

// ------------ end led_oncoming_red_cyan --------------------


// ------------ start led_oncoming_green_blue --------------------

frames = generateOncoming( [ 0, 255, 0 ], [ 0, 0, 255] );

var animation_led_oncoming_green_blue = new Animation({
    options: {
        fps     : 12, 
        tfps    : 60, 
        rpm     : 3,
    },
    frames    : frames
})

// register animation_led_oncoming_green_blue
animation_led_oncoming_green_blue.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_oncoming_green_blue', animation_led_oncoming_green_blue );
	if( err ) return Homey.error(err);
})

// ------------ end led_oncoming_green_blue --------------------


// ------------ start led_oncoming_green_magenta --------------------

frames = generateOncoming( [ 0, 255, 0 ], [ 255, 0, 255] );

var animation_led_oncoming_green_magenta = new Animation({
    options: {
        fps     : 12, 
        tfps    : 60, 
        rpm     : 3,
    },
    frames    : frames
})

// register animation_led_oncoming_green_magenta
animation_led_oncoming_green_magenta.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_oncoming_green_magenta', animation_led_oncoming_green_magenta );
	if( err ) return Homey.error(err);
})

// ------------ end led_oncoming_green_magenta --------------------


// ------------ start led_oncoming_blue_yellow --------------------

frames = generateOncoming( [ 0, 0, 255 ], [ 255, 255, 0 ] );

var animation_led_oncoming_blue_yellow = new Animation({
    options: {
        fps     : 12, 
        tfps    : 60, 
        rpm     : 3,
    },
    frames    : frames
})

// register animation_led_oncoming_blue_yellow
animation_led_oncoming_blue_yellow.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_oncoming_blue_yellow', animation_led_oncoming_blue_yellow );
	if( err ) return Homey.error(err);
})

// ------------ end led_oncoming_blue_yellow --------------------


// ------------ start led_newtonian_red_green --------------------

frames = generateNewtonian( [ 255, 0, 0 ], [ 0, 255, 0 ] );

var animation_led_newtonian_red_green = new Animation({
    options: {
        fps     : 20, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_newtonian_red_green
animation_led_newtonian_red_green.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_newtonian_red_green', animation_led_newtonian_red_green );
	if( err ) return Homey.error(err);
})

// ------------ end led_newtonian_red_green --------------------


// ------------ start led_newtonian_red_blue --------------------

frames = generateNewtonian( [ 255, 0, 0 ], [ 0, 0, 255 ] );

var animation_led_newtonian_red_blue = new Animation({
    options: {
        fps     : 20, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_newtonian_red_blue
animation_led_newtonian_red_blue.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_newtonian_red_blue', animation_led_newtonian_red_blue );
	if( err ) return Homey.error(err);
})

// ------------ end led_newtonian_red_blue --------------------


// ------------ start led_newtonian_red_cyan --------------------

frames = generateNewtonian( [ 255, 0, 0 ], [ 0, 255, 255 ] );

var animation_led_newtonian_red_cyan = new Animation({
    options: {
        fps     : 20, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_newtonian_red_cyan
animation_led_newtonian_red_cyan.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_newtonian_red_cyan', animation_led_newtonian_red_cyan );
	if( err ) return Homey.error(err);
})

// ------------ end led_newtonian_red_cyan --------------------


// ------------ start led_newtonian_green_blue --------------------

frames = generateNewtonian( [ 0, 255, 0 ], [ 0, 0, 255 ] );

var animation_led_newtonian_green_blue = new Animation({
    options: {
        fps     : 20, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_newtonian_green_blue
animation_led_newtonian_green_blue.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_newtonian_green_blue', animation_led_newtonian_green_blue );
	if( err ) return Homey.error(err);
})

// ------------ end led_newtonian_green_blue --------------------


// ------------ start led_newtonian_green_magenta --------------------

frames = generateNewtonian( [ 0, 255, 0 ], [ 255, 0, 255 ] );

var animation_led_newtonian_green_magenta = new Animation({
    options: {
        fps     : 20, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_newtonian_green_magenta
animation_led_newtonian_green_magenta.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_newtonian_green_magenta', animation_led_newtonian_green_magenta );
	if( err ) return Homey.error(err);
})

// ------------ end led_newtonian_green_magenta --------------------


// ------------ start led_newtonian_blue_yellow --------------------

frames = generateNewtonian( [ 0, 0, 255 ], [ 255, 255, 0 ] );

var animation_led_newtonian_blue_yellow = new Animation({
    options: {
        fps     : 20, 
        tfps    : 60, 
        rpm     : 0,
    },
    frames    : frames
})

// register animation_led_newtonian_blue_yellow
animation_led_newtonian_blue_yellow.register(function(err, result){
	Homey.manager('ledring').registerScreensaver( 'led_newtonian_blue_yellow', animation_led_newtonian_blue_yellow );
	if( err ) return Homey.error(err);
})

// ------------ end led_newtonian_blue_yellow --------------------




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

function generateSparkle( colRGB ) {
	var frames = [];
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
			var pixnum1 = fr;
			var pixnum2 = 12;
		} else if( fr >= 12 && fr <=22 ){
			var pixnum1 = 12;
			var pixnum2 = fr+1;
		} else if( fr >= 23 && fr <=33 ){
			var pixnum1 = 12;
			var pixnum2 = 46-fr;
		} else if( fr >= 34 && fr <=44 ){
			var pixnum1 = 45-fr;
			var pixnum2 = 12;
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

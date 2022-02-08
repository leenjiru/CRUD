<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to CodeIgniter</title>

	<style type="text/css">

	::selection { background-color: #E13300; color: white; }
	::-moz-selection { background-color: #E13300; color: white; }

	body {
		background-color: #fff;
		margin: 40px;
		font: 13px/20px normal Helvetica, Arial, sans-serif;
		color: #4F5155;
	}

	a {
		color: #003399;
		background-color: transparent;
		font-weight: normal;
	}

	h1 {
		color: #444;
		background-color: transparent;
		border-bottom: 1px solid #D0D0D0;
		font-size: 19px;
		font-weight: normal;
		margin: 0 0 14px 0;
		padding: 14px 15px 10px 15px;
	}

	code {
		font-family: Consolas, Monaco, Courier New, Courier, monospace;
		font-size: 12px;
		background-color: #f9f9f9;
		border: 1px solid #D0D0D0;
		color: #002166;
		display: block;
		margin: 14px 0 14px 0;
		padding: 12px 10px 12px 10px;
	}

	#body {
		margin: 0 15px 0 15px;
	}

	p.footer {
		text-align: right;
		font-size: 11px;
		border-top: 1px solid #D0D0D0;
		line-height: 32px;
		padding: 0 10px 0 10px;
		margin: 20px 0 0 0;
	}

	#container {
		margin: 10px;
		border: 1px solid #D0D0D0;
		box-shadow: 0 0 8px #D0D0D0;
	}
	</style>
</head>
<body>
<script type="text/javascript">
	var BASE_URL = 'http://localhost/notes/CRUD/index.php/';
	var Ext = Ext || {}; // Ext namespace won't be defined yet...

	// This function is called by the Microloader after it has performed basic
	// device detection. The results are provided in the "tags" object. You can
	// use these tags here or even add custom tags. These can be used by platform
	// filters in your manifest or by platformConfig expressions in your app.
	//
	Ext.beforeLoad = function (tags) {
		var s = location.search,  // the query string (ex "?foo=1&bar")
				profile;

		// For testing look for "?classic" or "?modern" in the URL to override
		// device detection default.
		//
		if (s.match(/\bclassic\b/)) {
			profile = 'classic';
		}
		else if (s.match(/\bmodern\b/)) {
			profile = 'modern';
		}
		else {
			profile = tags.desktop ? 'classic' : 'modern';
			//profile = tags.phone ? 'modern' : 'classic';
		}

		Ext.manifest = profile; // this name must match a build profile name

		// This function is called once the manifest is available but before
		// any data is pulled from it.
		//
		//return function (manifest) {
		// peek at / modify the manifest object
		//};
	};
</script>
<!-- The line below must be kept intact for Sencha Cmd to build your application -->
<script id="microloader" data-app="6954ab01-6ef0-4487-8174-48f927b1d797" type="text/javascript" src="bootstrap.js"></script>

</body>
</html>

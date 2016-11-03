# Image Loader

A lightweight jQuery plugin to initiate and monitor image loading. Requires jQuery 1.6+.

Tested support: Chrome, Firefox, Safari, IE9+

## Setup

Include jQuery (1.6+) and the Image Loader plugin files.

```html
<!-- Image Loader jQuery Plugin -->
<script src="image-loader/image-loader.js"></script>
```

Call the plugin on elements with `img` `src` or `background-image` pictures that should be downloaded immediately when the page is accessed.

```javascript
// simple
$( 'img, .load-bg' ).imageLoader();

// custom settings
$( 'img, .load-bg' ).imageLoader({
  complete: completeCallback,
  success: successCallback,
  fail: failCallback
});
function successCallback(){
  alert( 'all files downloaded' );
}
function failCallback( failed ){
  for( var i in failed ){
    alert( 'failed to download: ' + failed[ i ] );
  }
}
function completeCallback(){
  alert( 'all files downloaded or failed' );
}
```

## Settings

Setting | Type | Default | Description
--- | --- | --- | ---
complete | function | null | Callback function to run after all images have either downloaded or failed to download.
success | function | null | Callback function to run after all images have successfully downloaded.
fail | function | null | Callback function to run when one or more images have failed to download. An argument is passed to this function with an array of links that failed to download.
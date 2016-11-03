/*! Image Loader 1.0.0 | MIT *
 * https://github.com/jpcurrier/image-loader !*/
( function( $ ){
	$.fn.imageLoader = function( options ){

		// default options
		var settings = $.extend({
      complete: null,
      success: null,
      fail: null
		}, options );

    var load = [],
      count = 0,
      failed = [];
    this.each( function(){
      if( $( this ).is( 'img' ) )
        load.push( $( this ).attr( 'src' ) );
      else
        load.push( $( this ).css( 'background-image' ).slice( 4, -1 ).replace( /"/g, '' ) );
    } );
    for( var i = 0; i < load.length; i++ ){
      $.ajax({
        url: load[ i ],
        loadPos: i
      })
        .fail( function(){
          failed.push( load[ this.loadPos ] );
        } )
        .always( function(){
          count++;
          if( count === load.length ){
            if( failed.length )
              settings.fail( failed );
            else
              settings.success();
            if( settings.complete )
              settings.complete();
          }
        } );
    }
  };
} )( jQuery );
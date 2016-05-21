/*

For this quiz, can you use this script, which is in the <head> of index.html,
to change the boring placeholder image to a picture of a cute puppy?

Remember, you'll need to pass a function into the jQuery object to run
when the document is ready.

Here's a URL for a picture of a puppy: http://placepuppy.it/350/150

Good luck!

*/

$( document ).ready(function() {
    console.log( "ready!" );
    $('.article-item').children('img').attr('src', 'http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Images.jpg');
});

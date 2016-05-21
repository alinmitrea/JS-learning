/*
For this quiz, use a jQuery tag selector to grab all of the <li>s on the page!
*/

// Start with this variable! (don't delete it!)
var listElements;

listElements = $('li');// your code goes here!
console.log(listElements);

var articleItems;
articleItems = $('.article-item');// your code goes here!
console.log(articleItems);

var nav;

nav = $('#nav');// your code goes here!
console.log(nav);

var articleList, h1, kids, parents;

articleList = $('.article-list');

h1 = articleList.siblings('h1');// Your code goes here!

kids = articleList.find('*');// Your code goes here!

parents = articleList.parents('div');// Your code goes here!

console.log(h1, kids, parents);

/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

// your code goes here!
article2 = $('.featured');
article3 = article2.next();

article2.toggleClass('featured');
article3.addClass('featured');

/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;

navList = $('.nav-item').first().children();// your code goes here!
navList.attr('href','#1');

/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    var val;
    val = $('.articles').find('h1').text($('#input').val());// Your code goes here!
});

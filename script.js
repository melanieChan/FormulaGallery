// Accordion
// code tutorial used: https://www.youtube.com/watch?v=VTdSW57--yM
var accordion_array = document.getElementsByClassName('accordion');
// makes array of all accordion buttons

// loop through every accordion button
for (var i = 0; i < accordion_array.length; i++) {

  // click button to open/close inner accordion content
  accordion_array[i].onclick = function() {
    var content = this.nextElementSibling;
    // this : accordion_array
    // nextElementSibling : inner accordion content

    // accordion already open, & user clicked to close
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    }

    // accordion is closed, user wants to open
    else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}


// Slideshow
// code tutorial used: https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideshows = ['p-series', 'ratio-test', 'nth-term']; /// array of slideshows
var slideIndex = [1,1,1]; /// each element in array represents the first slide of each slideshow

showSlide(1, 0); // 1st slide of 1st show
showSlide(1, 1); // 1st slide of 2nd show
showSlide(1, 2); // 3rd show

// change slide if the previous/next buttons are clicked
// offset is difference btwn destination slide & current slide you're on
/// showNum indicates which slideshow
function changeSlide(offset, showNum) {
  showSlide(slideIndex[showNum] += offset, showNum);
  /// function needs 2 arguments:
  /// 1) which slide
  /// 2) which slideshow
}

function showSlide(slideNum, showNum) {
  var allSlides = document.getElementsByClassName(slideshows[showNum]);
  // array of all slides                                 /// of selected slideshow

  // user clicked next button on last slide
  if (slideNum > allSlides.length)
    {
      // carousel starts from beginning again
      slideIndex[showNum] = 1;
    }

  // user clicked previous on first slide
  if (slideNum < 1)
    {
      slideIndex[showNum] = allSlides.length;
    }

  // hide every slide
  for (i = 0; i < allSlides.length; i++)
  {
    allSlides[i].style.display = 'none';
  }

  // show desired slide
  allSlides[slideIndex[showNum]-1].style.display = "block";
  // desired slide is an element in array
  // slideIndex - 1 is index of desired slide
}


/// Adding a new slideshows:
/// give class name ( class="carousel_content [class name]")
/// add class name to var slideshows
/// add element w/ value '1' to var slideIndex
/// make new function showSlide(1,[index of slideshow on var slidesshows])
/// add to next/previous buttons: onclick="changeSlide(-1, [index of slideshow on var slidesshows])"


// filter
// code tutorial used: https://www.youtube.com/watch?v=aVn0tHZa0CQ
$(document).ready(function() {
  // when a filter is clicked
  $('.filter').click(function () {

    var category = $(this).attr('id'); // category that is being clicked by user

    // everything dissolves
    $('.card_container').addClass('hide');
    $('.card_container').addClass('elimate-space');
    //$(".card_container").hide("slow");

    // user clicked 'all'
    // everything reappears
    if (category === 'all') {
      /*$(".card_container").show(3000);*/
      setTimeout(function () {
        $('.card_container').removeClass('hide');
      }, 250);

      $('.card_container').removeClass('elimate-space');
    }

    // user clicked specific category
    else {

      // items of selected category appear
      setTimeout(function () {
        $('.' + category).removeClass('hide');
        // id of category has to match class of flip card,
      }, 250);
      $('.' + category).removeClass('elimate-space');
      //$("."+category).show(300);
    }
  });
});

// import games from './ui.module';
import details from './details.module.js';

//this is faster that event load
$(document).ready(function(){
  $('.loading').fadeOut(1000,function(){
     $('body').css({'overflow':'auto'})
     console.log("hn ph[m")
  })
  $(window).scroll(function(){
    let scroll = $(window).scrollTop()
    let navOffset  = $('.games').offset().top
    console.log('scroll', scroll)
    if(scroll > navOffset) {
      $('nav').css({ 'top': '0'})
    } else {

      $('nav').css({ 'top': '183px'})
    }
})
$('.navbar-nav a[href^="#"]').click(function(){
  let cuurentCat = $(this).attr('href')
  console.log(cuurentCat)
    let filterCat = cuurentCat.slice(1);
    console.log(filterCat);
  //show cat data
 singleGame = new details(filterCat)
  singleGame.getsingleGameData(filterCat);
})
// $('.game').click(function(){
//   let currentLink = $(this).attr('href')
//   console.log(currentLink)
//   let setOffset =$(currentLink).offset().top;
//   $('body , html').animate({scrollTop: setOffset}, 1000);
// })
let singleGame = new details('mmorpg')
singleGame.getsingleGameData('mmorpg');
})



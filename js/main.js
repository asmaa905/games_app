import Games from './games.module.js';
import details from './details.module.js';
import uui from './ui.module.js';
let games = new Games()
let singleGame = new details()
let UI = new uui()
//this is faster that event load
$(document).ready(function(){
  $('.loading').fadeOut(1000,function(){
     $('body').css({'overflow':'auto'})
  })
  $(window).scroll(function(){
    let scroll = $(window).scrollTop()
    //let gamesOffset  = $('.games').offset().top
    if(scroll ) {
      $('nav').css({ 'top': '0'})
    } else {
      $('nav').css({ 'top': '183px'})
    }
  })
  $('.navbar-nav a[href^="#"]').click(function(){
  let cuurentCat = $(this).attr('href')
  let filterCat = cuurentCat.slice(1);
  // remove othe active nav-link
  $('.navbar-nav a[href^="#"]').removeClass('active');
  // add  active to the current active nav-link
  $(this).addClass('active');
  // show cat data
  games = new Games(filterCat)
  games.getGamesData(filterCat).then((data)=>{
    UI.showCards(data)
    showDetailsGameEvents();
  })
  })

  try {
    games.getGamesData('mmorpg').then((data)=>{
    UI.showCards(data);
    // add event listener to card componet
    showDetailsGameEvents();

  })
  }catch {
  }
 function showDetailsGameEvents(){
    // add event listener to card componet
    //check games length
    if($('.gamee').length) {
      $('.gamee').click(async function(){
        let gameId = $(this).attr('game-id')
        //show cat game
        $('.loading').fadeIn(1000,function(){
          $('body').css({'overflow':'auto'})
        })
      //get single game details api
      await singleGame.getsingleGameData(gameId).then((data)=>{
        //show loading untill page load
        $('.loading').fadeOut(1000,function(){
          $('body').css({'overflow':'auto'});
          // hide games page
          $("#games").addClass("d-none");
          $("#games").removeClass("d-block");
          //show game details page
          $("#detailsSec").removeClass("d-none");
          $('#detailsSec').addClass("d-block");
          // display game details in html
          UI.showgameDetail(data)
          //add close event but here because it not work when game details not build yet
          $('#closeBtn').click(function(){
            // hide details sec
            $("#detailsSec").addClass("d-none");
            $('#detailsSec').removeClass("d-block");
            // show games componet
            $("#games").removeClass("d-none");
            $("#games").addClass("d-block");          
          })
        })
      })
      })

    }
 }
})




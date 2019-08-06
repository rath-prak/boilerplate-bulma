  //Active link to current page
  let path = window.location.pathname.split('/').pop();
  if (path == '') {
    path = 'index.html';
  }

  let target = $('nav a[href="'+path+'"]');
  let targetFooterMenu = $('.footer-menu a[href="'+path+'"]');
  target.addClass('active');
  targetFooterMenu.addClass('active');

//  $(".nav a").on("click", function(){
//     $(".nav").find(".active").removeClass("active");
//     $(this).parent().addClass("active");
//     console.log("testing");
//   });
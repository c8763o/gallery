// $(function(){
//   $('.Btn4Animation').click(function(){
//     if($(this).text() == '動畫 ▸')
//       $(this).text('動畫 ▾')
//     else
//     $(this).text('動畫 ▸');
//   });
// });


// $(function(){
//   $('.wrong').click(function(){
//     if($(this).css('background-color','#000000'))
//       $(this).css('background-color','red')
//     else
//     $(this).css('background-color','#000000');
//   });
// });


$('.wrong').click(function(){
  $(this).css('background-color','#d33737').css('color','white').addClass('animate__animated').addClass('animate__shakeX');
});

$('.right').click(function(){
  $(this).css('background-color','#48cf4c').css('color','white').addClass('animate__animated').addClass('animate__tada');
});


$('.tLineText').mouseenter(function(){
  $(this).css('color','white').css('font-size','1.2rem').removeClass('col-lg-2').addClass('col-lg-3');
});
$('.tLineText').mouseleave(function(){
  $(this).css('color','black').css('font-size','1rem').removeClass('col-lg-3').addClass('col-lg-2');
});

$('#born').mouseenter(function(){
  $(this).css('color','white').html('出生').css('font-size','1.5rem');
});
$('#born').mouseleave(function(){
  $(this).css('color','black').html('1947年6月24日').css('font-size','1.5rem');
});
$('#died').mouseenter(function(){
  $(this).css('color','white').html('長眠').css('font-size','1.5rem');
});
$('#died').mouseleave(function(){
  $(this).css('color','black').html('2021年10月09日').css('font-size','1.5rem');
});

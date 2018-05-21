// function toggle(id){
//   var e = document.getElementById(id);
//   if(e.style.display == 'block'){
//     e.style.display ='none';
//     console.log(e.style.display);
//   }
//   else{
//     e.style.display ='block';
//     console.log(e.style.display);
//   }
// }

$('.toggleButton').on('click', function(){
  $(this).toggleClass('clicked');
});

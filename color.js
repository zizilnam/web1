var links = {
  setcolor : function(color){
    // alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = 'color';
    //   i = i + 1;
    // }
    $('a').css('color', color);
    }
  }
var body = {
  setbackgroundColor : function(color){
    document.querySelector('body').style.backgroundColor = color;
  },
  setcolor : function(color){
    document.querySelector('body').style.color = color;
  }
}
function ndhandler(self){
  var target = document.querySelector('body').style;
  if(self.value==='night'){
  body.setbackgroundColor('black');
  body.setcolor('white');
  self.value='day';
  links.setcolor('blue')
} else{
  body.setbackgroundColor('white');
  body.setcolor('black');
  self.value='night';
  links.setcolor('powderblue');
  }
}

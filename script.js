
// SPECIMEN PAGE MOTION 

var changeAll= true;
$(".changebutton").click(function(){

    if (changeAll==true) {
        $(".module").css('transform', 'rotate(640deg)');
        $(".horizontal").css('width', '10%');
        $(".vertical").css('height', '10%');
        changeAll=false; 
    }
    else {
        $(".module").css('transform', 'rotate(0deg)');
        $(".horizontal").css('width', '100%');
        $(".horizontal").css('height', '30%');
        $(".horizontal").css('borderRadius', '0px');
        $(".horizontal").css('top', '36%');
        $(".vertical").css('transform', 'rotate(180deg)');
        $(".vertical").css('width', '30%');
        $(".vertical").css('height', '100%');
        $(".vertical").css('borderRadius', '0px');
      
        changeAll=true;
    }   
});


var changeThread= true;
$(".colorbutton").click(function(){

    if (changeThread==true) {
        $(".horizontal").css("background-color", '#EB2746');
        $(".vertical").css('background-color', '#2749EB');
        changeThread=false; 
    }
    else {
        $(".horizontal").css('background-color', '#52C439');
        $(".vertical").css('background-color', '#5b1ad3');
        changeThread=true;
    }  
  
});

$(document).ready(function(){
    $("#A").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#A .horizontal").css('transform', 'rotate(270deg)');
        $("#A .vertical").css('transform', 'rotate(180deg)');
        $("#A .horizontal").css('top', '0%');
        $("#A .horizontal").css('borderRadius', '0px');
        $("#A .vertical").css('borderRadius', '0px');
        $("#A .horizontal").css('width', '100%');
        $("#A .horizontal").css('height', '30%');
        $("#A .vertical").css('width', '30%');
        $("#A .vertical").css('height', '100%');
    });
    $("#A").mouseout(function(){
//   on mouse out change back to the points
          $("#A .horizontal").css('width', '45%');
          $("#A .horizontal").css('height', '45%');
          $("#A .vertical").css('width', '45%');
          $("#A .vertical").css('height', '45%');
          $("#A .horizontal").css('borderRadius', '100px');
          $("#A .vertical").css('borderRadius', '100px');
          $("#A .horizontal").css('transform', 'rotate(90deg)');
      });
});

var changeA1= true;
$("#A").click(function(){
    if (changeA1==true) {
//       make it into the "weaving"
        $("#A .horizontal").css('transform', 'rotate(0deg)');
        $("#A .horizontal").css('width', '100%');
        $("#A .horizontal").css('height', '30%');
        $("#A .horizontal").css('borderRadius', '0px');
        $("#A .horizontal").css('top', '36%');
        changeA1=false;
    }  
    else {
        $("#A .horizontal").css('transform', 'rotate(0deg)');
        $("#A .horizontal").css('width', '100%');
        $("#A .horizontal").css('height', '30%');
        $("#A .horizontal").css('borderRadius', '0px');
        $("#A .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#B").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#B .horizontal").css('transform', 'rotate(270deg)');
        $("#B .vertical").css('transform', 'rotate(180deg)');
        $("#B .horizontal").css('top', '0%');
        $("#B .horizontal").css('borderRadius', '0px');
        $("#B .vertical").css('borderRadius', '0px');
        $("#B .horizontal").css('width', '100%');
        $("#B .horizontal").css('height', '30%');
        $("#B .vertical").css('width', '30%');
        $("#B .vertical").css('height', '100%');
    });
    $("#B").mouseout(function(){
//   on mouse out change back to the points
          $("#B .horizontal").css('width', '45%');
          $("#B .horizontal").css('height', '45%');
          $("#B .vertical").css('width', '45%');
          $("#B .vertical").css('height', '45%');
          $("#B .horizontal").css('borderRadius', '100px');
          $("#B .vertical").css('borderRadius', '100px');
          $("#B .horizontal").css('transform', 'rotate(90deg)');
      });
});

var changeB= true;
$("#B").click(function(){
    if (changeB==true) {
//       make it into the "weaving"
        $("#B .horizontal").css('transform', 'rotate(0deg)');
        $("#B .horizontal").css('width', '100%');
        $("#B .horizontal").css('height', '30%');
        $("#B .horizontal").css('borderRadius', '0px');
        $("#B .horizontal").css('top', '36%');
        changeB=false;
    }  
    else {
       $("#B .horizontal").css('transform', 'rotate(0deg)');
        $("#B .horizontal").css('width', '100%');
        $("#B .horizontal").css('height', '30%');
        $("#B .horizontal").css('borderRadius', '0px');
        $("#B .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#C").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#C .horizontal").css('transform', 'rotate(270deg)');
        $("#C .vertical").css('transform', 'rotate(180deg)');
        $("#C .horizontal").css('top', '0%');
        $("#C .horizontal").css('borderRadius', '0px');
        $("#C .vertical").css('borderRadius', '0px');
        $("#C .horizontal").css('width', '100%');
        $("#C .horizontal").css('height', '30%');
        $("#C .vertical").css('width', '30%');
        $("#C .vertical").css('height', '100%');
    });
    $("#C").mouseout(function(){
//   on mouse out change back to the points
          $("#C .horizontal").css('width', '45%');
          $("#C .horizontal").css('height', '45%');
          $("#C .vertical").css('width', '45%');
          $("#C .vertical").css('height', '45%');
          $("#C .horizontal").css('borderRadius', '100px');
          $("#C .vertical").css('borderRadius', '100px');
          $("#C .horizontal").css('transform', 'rotate(90deg)');
      });
});

var changeC= true;
$("#C").click(function(){
    if (changeC==true) {
//       make it into the "weaving"
        $("#C .horizontal").css('transform', 'rotate(0deg)');
        $("#C .horizontal").css('width', '100%');
        $("#C .horizontal").css('height', '30%');
        $("#C .horizontal").css('borderRadius', '0px');
        $("#C .horizontal").css('top', '36%');
        changeC=false;
    }  
    else {
       $("#C .horizontal").css('transform', 'rotate(0deg)');
        $("#C .horizontal").css('width', '100%');
        $("#C .horizontal").css('height', '30%');
        $("#C .horizontal").css('borderRadius', '0px');
        $("#C .horizontal").css('top', '36%');
    }
});


$(document).ready(function(){
    $("#D").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#D .horizontal").css('transform', 'rotate(270deg)');
        $("#D .vertical").css('transform', 'rotate(180deg)');
        $("#D .horizontal").css('top', '0%');
        $("#D .horizontal").css('borderRadius', '0px');
        $("#D .vertical").css('borderRadius', '0px');
        $("#D .horizontal").css('width', '100%');
        $("#D .horizontal").css('height', '30%');
        $("#D .vertical").css('width', '30%');
        $("#D .vertical").css('height', '100%');
    });
    $("#D").mouseout(function(){
//   on mouse out change back to the points
          $("#D .horizontal").css('width', '45%');
          $("#D .horizontal").css('height', '45%');
          $("#D .vertical").css('width', '45%');
          $("#D .vertical").css('height', '45%');
          $("#D .horizontal").css('borderRadius', '100px');
          $("#D .vertical").css('borderRadius', '100px');
          $("#D .horizontal").css('transform', 'rotate(90deg)');
      });
});

var changeD= true;
$("#D").click(function(){
    if (changeD==true) {
//       make it into the "weaving"
        $("#D .horizontal").css('transform', 'rotate(0deg)');
        $("#D .horizontal").css('width', '100%');
        $("#D .horizontal").css('height', '30%');
        $("#D .horizontal").css('borderRadius', '0px');
        $("#D .horizontal").css('top', '36%');
        changeD=false;
    }  
    else {
       $("#D .horizontal").css('transform', 'rotate(0deg)');
        $("#D .horizontal").css('width', '100%');
        $("#D .horizontal").css('height', '30%');
        $("#D .horizontal").css('borderRadius', '0px');
        $("#D .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#E").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#E .horizontal").css('transform', 'rotate(270deg)');
        $("#E .vertical").css('transform', 'rotate(180deg)');
        $("#E .horizontal").css('top', '0%');
        $("#E .horizontal").css('borderRadius', '0px');
        $("#E .vertical").css('borderRadius', '0px');
        $("#E .horizontal").css('width', '100%');
        $("#E .horizontal").css('height', '30%');
        $("#E .vertical").css('width', '30%');
        $("#E .vertical").css('height', '100%');
    });
    $("#E").mouseout(function(){
//   on mouse out change back to the points
          $("#E .horizontal").css('width', '45%');
          $("#E .horizontal").css('height', '45%');
          $("#E .vertical").css('width', '45%');
          $("#E .vertical").css('height', '45%');
          $("#E .horizontal").css('borderRadius', '100px');
          $("#E .vertical").css('borderRadius', '100px');
          $("#E .horizontal").css('transform', 'rotate(90deg)');
      });
});

var changeE= true;
$("#E").click(function(){
    if (changeE==true) {
//       make it into the "weaving"
        $("#E .horizontal").css('transform', 'rotate(0deg)');
        $("#E .horizontal").css('width', '100%');
        $("#E .horizontal").css('height', '30%');
        $("#E .horizontal").css('borderRadius', '0px');
        $("#E .horizontal").css('top', '36%');
        changeE=false;
    }  
    else {
       $("#E .horizontal").css('transform', 'rotate(0deg)');
        $("#E .horizontal").css('width', '100%');
        $("#E .horizontal").css('height', '30%');
        $("#E .horizontal").css('borderRadius', '0px');
        $("#E .horizontal").css('top', '36%');
    }
});


$(document).ready(function(){
    $("#F").mouseover(function(){
//       making the points rotate and turn into needles
//       makinG horizontal 
        $("#F .horizontal").css('transform', 'rotate(270deg)');
        $("#F .vertical").css('transform', 'rotate(180deg)');
        $("#F .horizontal").css('top', '0%');
        $("#F .horizontal").css('borderRadius', '0px');
        $("#F .vertical").css('borderRadius', '0px');
        $("#F .horizontal").css('width', '100%');
        $("#F .horizontal").css('height', '30%');
        $("#F .vertical").css('width', '30%');
        $("#F .vertical").css('height', '100%');
    });
    $("#F").mouseout(function(){
//   on mouse out change back to the points
          $("#F .horizontal").css('width', '45%');
          $("#F .horizontal").css('height', '45%');
          $("#F .vertical").css('width', '45%');
          $("#F .vertical").css('height', '45%');
          $("#F .horizontal").css('borderRadius', '100px');
          $("#F .vertical").css('borderRadius', '100px');
          $("#F .horizontal").css('transform', 'rotate(90deg)');
      });
});

var changeF= true;
$("#F").click(function(){
    if (changeF==true) {
//       make it into the "weaving"
        $("#F .horizontal").css('transform', 'rotate(0deg)');
        $("#F .horizontal").css('width', '100%');
        $("#F .horizontal").css('height', '30%');
        $("#F .horizontal").css('borderRadius', '0px');
        $("#F .horizontal").css('top', '36%');
        changeF=false;
    }  
    else {
       $("#F .horizontal").css('transform', 'rotate(0deg)');
        $("#F .horizontal").css('width', '100%');
        $("#F .horizontal").css('height', '30%');
        $("#F .horizontal").css('borderRadius', '0px');
        $("#F .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#G").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#G .horizontal").css('transform', 'rotate(270deg)');
        $("#G .vertical").css('transform', 'rotate(180deg)');
        $("#G .horizontal").css('top', '0%');
        $("#G .horizontal").css('borderRadius', '0px');
        $("#G .vertical").css('borderRadius', '0px');
        $("#G .horizontal").css('width', '100%');
        $("#G .horizontal").css('height', '30%');
        $("#G .vertical").css('width', '30%');
        $("#G .vertical").css('height', '100%');
    });
    $("#G").mouseout(function(){
//   on mouse out change back to the points
          $("#G .horizontal").css('width', '45%');
          $("#G .horizontal").css('height', '45%');
          $("#G .vertical").css('width', '45%');
          $("#G .vertical").css('height', '45%');
          $("#G .horizontal").css('borderRadius', '100px');
          $("#G .vertical").css('borderRadius', '100px');
          $("#G .horizontal").css('transform', 'rotate(90deg)');
      });
});

var changeG= true;
$("#G").click(function(){
    if (changeG==true) {
//       make it into the "weaving"
        $("#G .horizontal").css('transform', 'rotate(0deg)');
        $("#G .horizontal").css('width', '100%');
        $("#G .horizontal").css('height', '30%');
        $("#G .horizontal").css('borderRadius', '0px');
        $("#G .horizontal").css('top', '36%');
        changeG=false;
    }  
    else {
       $("#G .horizontal").css('transform', 'rotate(0deg)');
        $("#G .horizontal").css('width', '100%');
        $("#G .horizontal").css('height', '30%');
        $("#G .horizontal").css('borderRadius', '0px');
        $("#G .horizontal").css('top', '36%');
    }
});


$(document).ready(function(){
    $("#H").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#H .horizontal").css('transform', 'rotate(270deg)');
        $("#H .vertical").css('transform', 'rotate(180deg)');
        $("#H .horizontal").css('top', '0%');
        $("#H .horizontal").css('borderRadius', '0px');
        $("#H .vertical").css('borderRadius', '0px');
        $("#H .horizontal").css('width', '100%');
        $("#H .horizontal").css('height', '30%');
        $("#H .vertical").css('width', '30%');
        $("#H .vertical").css('height', '100%');
    });
    $("#H").mouseout(function(){
//   on mouse out change back to the points
          $("#H .horizontal").css('width', '45%');
          $("#H .horizontal").css('height', '45%');
          $("#H .vertical").css('width', '45%');
          $("#H .vertical").css('height', '45%');
          $("#H .horizontal").css('borderRadius', '100px');
          $("#H .vertical").css('borderRadius', '100px');
          $("#H .horizontal").css('transform', 'rotate(90deg)');
      });
});

var changeH= true;
$("#H").click(function(){
    if (changeH==true) {
//       make it into the "weaving"
        $("#H .horizontal").css('transform', 'rotate(0deg)');
        $("#H .horizontal").css('width', '100%');
        $("#H .horizontal").css('height', '30%');
        $("#H .horizontal").css('borderRadius', '0px');
        $("#H .horizontal").css('top', '36%');
        changeH=false;
    }  
    else {
       $("#H .horizontal").css('transform', 'rotate(0deg)');
        $("#H .horizontal").css('width', '100%');
        $("#H .horizontal").css('height', '30%');
        $("#H .horizontal").css('borderRadius', '0px');
        $("#H .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#I").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#I .horizontal").css('transform', 'rotate(270deg)');
        $("#I .vertical").css('transform', 'rotate(180deg)');
        $("#I .horizontal").css('top', '0%');
        $("#I .horizontal").css('borderRadius', '0px');
        $("#I .vertical").css('borderRadius', '0px');
        $("#I .horizontal").css('width', '100%');
        $("#I .horizontal").css('height', '30%');
        $("#I .vertical").css('width', '30%');
        $("#I .vertical").css('height', '100%');
    });
    $("#I").mouseout(function(){
//   on mouse out change back to the points
          $("#I .horizontal").css('width', '45%');
          $("#I .horizontal").css('height', '45%');
          $("#I .vertical").css('width', '45%');
          $("#I .vertical").css('height', '45%');
          $("#I .horizontal").css('borderRadius', '100px');
          $("#I .vertical").css('borderRadius', '100px');
          $("#I .horizontal").css('transform', 'rotate(90deg)');
      });
});

var changeI= true;
$("#I").click(function(){
    if (changeI==true) {
//       make it into the "weaving"
        $("#I .horizontal").css('transform', 'rotate(0deg)');
        $("#I .horizontal").css('width', '100%');
        $("#I .horizontal").css('height', '30%');
        $("#I .horizontal").css('borderRadius', '0px');
        $("#I .horizontal").css('top', '36%');
        changeI=false;
    }  
    else {
       $("#I .horizontal").css('transform', 'rotate(0deg)');
        $("#I .horizontal").css('width', '100%');
        $("#I .horizontal").css('height', '30%');
        $("#I .horizontal").css('borderRadius', '0px');
        $("#I .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#J").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#J .horizontal").css('transform', 'rotate(270deg)');
        $("#J .vertical").css('transform', 'rotate(180deg)');
        $("#J .horizontal").css('top', '0%');
        $("#J .horizontal").css('borderRadius', '0px');
        $("#J .vertical").css('borderRadius', '0px');
        $("#J .horizontal").css('width', '100%');
        $("#J .horizontal").css('height', '30%');
        $("#J .vertical").css('width', '30%');
        $("#J .vertical").css('height', '100%');
    });
    $("#J").mouseout(function(){
//   on mouse out change back to the points
          $("#J .horizontal").css('width', '45%');
          $("#J .horizontal").css('height', '45%');
          $("#J .vertical").css('width', '45%');
          $("#J .vertical").css('height', '45%');
          $("#J .horizontal").css('borderRadius', '100px');
          $("#J .vertical").css('borderRadius', '100px');
          $("#J .horizontal").css('transform', 'rotate(90deg)');
      });
});

var changeJ= true;
$("#J").click(function(){
    if (changeJ==true) {
//       make it into the "weaving"
        $("#J .horizontal").css('transform', 'rotate(0deg)');
        $("#J .horizontal").css('width', '100%');
        $("#J .horizontal").css('height', '30%');
        $("#J .horizontal").css('borderRadius', '0px');
        $("#J .horizontal").css('top', '36%');
        changeJ=false;
    }  
    else {
       $("#J .horizontal").css('transform', 'rotate(0deg)');
        $("#J .horizontal").css('width', '100%');
        $("#J .horizontal").css('height', '30%');
        $("#J .horizontal").css('borderRadius', '0px');
        $("#J .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#K").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#K .horizontal").css('transform', 'rotate(270deg)');
        $("#K .vertical").css('transform', 'rotate(180deg)');
        $("#K .horizontal").css('top', '0%');
        $("#K .horizontal").css('borderRadius', '0px');
        $("#K .vertical").css('borderRadius', '0px');
        $("#K .horizontal").css('width', '100%');
        $("#K .horizontal").css('height', '30%');
        $("#K .vertical").css('width', '30%');
        $("#K .vertical").css('height', '100%');
    });
    $("#K").mouseout(function(){
//   on mouse out change back to the points
          $("#K .horizontal").css('width', '45%');
          $("#K .horizontal").css('height', '45%');
          $("#K .vertical").css('width', '45%');
          $("#K .vertical").css('height', '45%');
          $("#K .horizontal").css('borderRadius', '100px');
          $("#K .vertical").css('borderRadius', '100px');
          $("#K .horizontal").css('transform', 'rotate(90deg)');
      });
});

var changeK= true;
$("#K").click(function(){
    if (changeK==true) {
//       make it into the "weaving"
        $("#K .horizontal").css('transform', 'rotate(0deg)');
        $("#K .horizontal").css('width', '100%');
        $("#K .horizontal").css('height', '30%');
        $("#K .horizontal").css('borderRadius', '0px');
        $("#K .horizontal").css('top', '36%');
        changeK=false;
    }  
    else {
       $("#K .horizontal").css('transform', 'rotate(0deg)');
        $("#K .horizontal").css('width', '100%');
        $("#K .horizontal").css('height', '30%');
        $("#K .horizontal").css('borderRadius', '0px');
        $("#K .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#L").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#L .horizontal").css('transform', 'rotate(270deg)');
        $("#L .vertical").css('transform', 'rotate(180deg)');
        $("#L .horizontal").css('top', '0%');
        $("#L .horizontal").css('borderRadius', '0px');
        $("#L .vertical").css('borderRadius', '0px');
        $("#L .horizontal").css('width', '100%');
        $("#L .horizontal").css('height', '30%');
        $("#L .vertical").css('width', '30%');
        $("#L .vertical").css('height', '100%');
    });
    $("#L").mouseout(function(){
//   on mouse out change back to the points
          $("#L .horizontal").css('width', '45%');
          $("#L .horizontal").css('height', '45%');
          $("#L .vertical").css('width', '45%');
          $("#L .vertical").css('height', '45%');
          $("#L .horizontal").css('borderRadius', '100px');
          $("#L .vertical").css('borderRadius', '100px');
          $("#L .horizontal").css('transform', 'rotate(90deg)');
      });
});

var changeL= true;
$("#L").click(function(){
    if (changeL==true) {
//       make it into the "weaving"
        $("#L .horizontal").css('transform', 'rotate(0deg)');
        $("#L .horizontal").css('width', '100%');
        $("#L .horizontal").css('height', '30%');
        $("#L .horizontal").css('borderRadius', '0px');
        $("#L .horizontal").css('top', '36%');
        changeL=false;
    }  
    else {
       $("#L .horizontal").css('transform', 'rotate(0deg)');
        $("#L .horizontal").css('width', '100%');
        $("#L .horizontal").css('height', '30%');
        $("#L .horizontal").css('borderRadius', '0px');
        $("#L .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#M").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#M .horizontal").css('transform', 'rotate(270deg)');
        $("#M .vertical").css('transform', 'rotate(180deg)');
        $("#M .horizontal").css('top', '0%');
        $("#M .horizontal").css('borderRadius', '0px');
        $("#M .vertical").css('borderRadius', '0px');
        $("#M .horizontal").css('width', '100%');
        $("#M .horizontal").css('height', '30%');
        $("#M .vertical").css('width', '30%');
        $("#M .vertical").css('height', '100%');
    });
    $("#M").mouseout(function(){
//   on mouse out change back to the points
          $("#M .horizontal").css('width', '45%');
          $("#M .horizontal").css('height', '45%');
          $("#M .vertical").css('width', '45%');
          $("#M .vertical").css('height', '45%');
          $("#M .horizontal").css('borderRadius', '100px');
          $("#M .vertical").css('borderRadius', '100px');
          $("#M .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeM= true;
$("#M").click(function(){
    if (changeM==true) {
//       make it into the "weaving"
        $("#M .horizontal").css('transform', 'rotate(0deg)');
        $("#M .horizontal").css('width', '100%');
        $("#M .horizontal").css('height', '30%');
        $("#M .horizontal").css('borderRadius', '0px');
        $("#M .horizontal").css('top', '36%');
        changeM=false;
    }  
    else {
       $("#M .horizontal").css('transform', 'rotate(0deg)');
        $("#M .horizontal").css('width', '100%');
        $("#M .horizontal").css('height', '30%');
        $("#M .horizontal").css('borderRadius', '0px');
        $("#M .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#N").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#N .horizontal").css('transform', 'rotate(270deg)');
        $("#N .vertical").css('transform', 'rotate(180deg)');
        $("#N .horizontal").css('top', '0%');
        $("#N .horizontal").css('borderRadius', '0px');
        $("#N .vertical").css('borderRadius', '0px');
        $("#N .horizontal").css('width', '100%');
        $("#N .horizontal").css('height', '30%');
        $("#N .vertical").css('width', '30%');
        $("#N .vertical").css('height', '100%');
    });
    $("#N").mouseout(function(){
//   on mouse out change back to the points
          $("#N .horizontal").css('width', '45%');
          $("#N .horizontal").css('height', '45%');
          $("#N .vertical").css('width', '45%');
          $("#N .vertical").css('height', '45%');
          $("#N .horizontal").css('borderRadius', '100px');
          $("#N .vertical").css('borderRadius', '100px');
          $("#N .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeN= true;
$("#N").click(function(){
    if (changeM==true) {
//       make it into the "weaving"
        $("#N .horizontal").css('transform', 'rotate(0deg)');
        $("#N .horizontal").css('width', '100%');
        $("#N .horizontal").css('height', '30%');
        $("#N .horizontal").css('borderRadius', '0px');
        $("#N .horizontal").css('top', '36%');
        changeN=false;
    }  
    else {
       $("#N .horizontal").css('transform', 'rotate(0deg)');
        $("#N .horizontal").css('width', '100%');
        $("#N .horizontal").css('height', '30%');
        $("#N .horizontal").css('borderRadius', '0px');
        $("#N .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#O").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#O .horizontal").css('transform', 'rotate(270deg)');
        $("#O .vertical").css('transform', 'rotate(180deg)');
        $("#O .horizontal").css('top', '0%');
        $("#O .horizontal").css('borderRadius', '0px');
        $("#O .vertical").css('borderRadius', '0px');
        $("#O .horizontal").css('width', '100%');
        $("#O .horizontal").css('height', '30%');
        $("#O .vertical").css('width', '30%');
        $("#O .vertical").css('height', '100%');
    });
    $("#O").mouseout(function(){
//   on mouse out change back to the points
          $("#O .horizontal").css('width', '45%');
          $("#O .horizontal").css('height', '45%');
          $("#O .vertical").css('width', '45%');
          $("#O .vertical").css('height', '45%');
          $("#O .horizontal").css('borderRadius', '100px');
          $("#O .vertical").css('borderRadius', '100px');
          $("#O .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeO= true;
$("#O").click(function(){
    if (changeO==true) {
//       make it into the "weaving"
        $("#O .horizontal").css('transform', 'rotate(0deg)');
        $("#O .horizontal").css('width', '100%');
        $("#O .horizontal").css('height', '30%');
        $("#O .horizontal").css('borderRadius', '0px');
        $("#O .horizontal").css('top', '36%');
        changeO=false;
    }  
    else {
       $("#O .horizontal").css('transform', 'rotate(0deg)');
        $("#O .horizontal").css('width', '100%');
        $("#O .horizontal").css('height', '30%');
        $("#O .horizontal").css('borderRadius', '0px');
        $("#O .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#P").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#P .horizontal").css('transform', 'rotate(270deg)');
        $("#P .vertical").css('transform', 'rotate(180deg)');
        $("#P .horizontal").css('top', '0%');
        $("#P .horizontal").css('borderRadius', '0px');
        $("#P .vertical").css('borderRadius', '0px');
        $("#P .horizontal").css('width', '100%');
        $("#P .horizontal").css('height', '30%');
        $("#P .vertical").css('width', '30%');
        $("#P .vertical").css('height', '100%');
    });
    $("#P").mouseout(function(){
//   on mouse out change back to the points
          $("#P .horizontal").css('width', '45%');
          $("#P .horizontal").css('height', '45%');
          $("#P .vertical").css('width', '45%');
          $("#P .vertical").css('height', '45%');
          $("#P .horizontal").css('borderRadius', '100px');
          $("#P .vertical").css('borderRadius', '100px');
          $("#P .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeP= true;
$("#P").click(function(){
    if (changeP==true) {
//       make it into the "weaving"
        $("#P .horizontal").css('transform', 'rotate(0deg)');
        $("#P .horizontal").css('width', '100%');
        $("#P .horizontal").css('height', '30%');
        $("#P .horizontal").css('borderRadius', '0px');
        $("#P .horizontal").css('top', '36%');
        changeP=false;
    }  
    else {
       $("#P .horizontal").css('transform', 'rotate(0deg)');
        $("#P .horizontal").css('width', '100%');
        $("#P .horizontal").css('height', '30%');
        $("#P .horizontal").css('borderRadius', '0px');
        $("#P .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#Q").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#Q .horizontal").css('transform', 'rotate(270deg)');
        $("#Q .vertical").css('transform', 'rotate(180deg)');
        $("#Q .horizontal").css('top', '0%');
        $("#Q .horizontal").css('borderRadius', '0px');
        $("#Q .vertical").css('borderRadius', '0px');
        $("#Q .horizontal").css('width', '100%');
        $("#Q .horizontal").css('height', '30%');
        $("#Q .vertical").css('width', '30%');
        $("#Q .vertical").css('height', '100%');
    });
    $("#Q").mouseout(function(){
//   on mouse out change back to the points
          $("#Q .horizontal").css('width', '45%');
          $("#Q .horizontal").css('height', '45%');
          $("#Q .vertical").css('width', '45%');
          $("#Q .vertical").css('height', '45%');
          $("#Q .horizontal").css('borderRadius', '100px');
          $("#Q .vertical").css('borderRadius', '100px');
          $("#Q .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeQ= true;
$("#Q").click(function(){
    if (changeQ==true) {
//       make it into the "weaving"
        $("#Q .horizontal").css('transform', 'rotate(0deg)');
        $("#Q .horizontal").css('width', '100%');
        $("#Q .horizontal").css('height', '30%');
        $("#Q .horizontal").css('borderRadius', '0px');
        $("#Q .horizontal").css('top', '36%');
        changeQ=false;
    }  
    else {
       $("#Q .horizontal").css('transform', 'rotate(0deg)');
        $("#Q .horizontal").css('width', '100%');
        $("#Q .horizontal").css('height', '30%');
        $("#Q .horizontal").css('borderRadius', '0px');
        $("#Q .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#R").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#R .horizontal").css('transform', 'rotate(270deg)');
        $("#R .vertical").css('transform', 'rotate(180deg)');
        $("#R .horizontal").css('top', '0%');
        $("#R .horizontal").css('borderRadius', '0px');
        $("#R .vertical").css('borderRadius', '0px');
        $("#R .horizontal").css('width', '100%');
        $("#R .horizontal").css('height', '30%');
        $("#R .vertical").css('width', '30%');
        $("#R .vertical").css('height', '100%');
    });
    $("#R").mouseout(function(){
//   on mouse out change back to the points
          $("#R .horizontal").css('width', '45%');
          $("#R .horizontal").css('height', '45%');
          $("#R .vertical").css('width', '45%');
          $("#R .vertical").css('height', '45%');
          $("#R .horizontal").css('borderRadius', '100px');
          $("#R .vertical").css('borderRadius', '100px');
          $("#R .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeR= true;
$("#R").click(function(){
    if (changeR==true) {
//       make it into the "weaving"
        $("#R .horizontal").css('transform', 'rotate(0deg)');
        $("#R .horizontal").css('width', '100%');
        $("#R .horizontal").css('height', '30%');
        $("#R .horizontal").css('borderRadius', '0px');
        $("#R .horizontal").css('top', '36%');
        changeR=false;
    }  
    else {
       $("#R .horizontal").css('transform', 'rotate(0deg)');
        $("#R .horizontal").css('width', '100%');
        $("#R .horizontal").css('height', '30%');
        $("#R .horizontal").css('borderRadius', '0px');
        $("#R .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#S").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#S .horizontal").css('transform', 'rotate(270deg)');
        $("#S .vertical").css('transform', 'rotate(180deg)');
        $("#S .horizontal").css('top', '0%');
        $("#S .horizontal").css('borderRadius', '0px');
        $("#S .vertical").css('borderRadius', '0px');
        $("#S .horizontal").css('width', '100%');
        $("#S .horizontal").css('height', '30%');
        $("#S .vertical").css('width', '30%');
        $("#S .vertical").css('height', '100%');
    });
    $("#S").mouseout(function(){
//   on mouse out change back to the points
          $("#S .horizontal").css('width', '45%');
          $("#S .horizontal").css('height', '45%');
          $("#S .vertical").css('width', '45%');
          $("#S .vertical").css('height', '45%');
          $("#S .horizontal").css('borderRadius', '100px');
          $("#S .vertical").css('borderRadius', '100px');
          $("#S .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeS= true;
$("#S").click(function(){
    if (changeM==true) {
//       make it into the "weaving"
        $("#S .horizontal").css('transform', 'rotate(0deg)');
        $("#S .horizontal").css('width', '100%');
        $("#S .horizontal").css('height', '30%');
        $("#S .horizontal").css('borderRadius', '0px');
        $("#S .horizontal").css('top', '36%');
        changeS=false;
    }  
    else {
        $("#S .horizontal").css('transform', 'rotate(0deg)');
        $("#S .horizontal").css('width', '100%');
        $("#S .horizontal").css('height', '30%');
        $("#S .horizontal").css('borderRadius', '0px');
        $("#S .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#T").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#T .horizontal").css('transform', 'rotate(270deg)');
        $("#T .vertical").css('transform', 'rotate(180deg)');
        $("#T .horizontal").css('top', '0%');
        $("#T .horizontal").css('borderRadius', '0px');
        $("#T .vertical").css('borderRadius', '0px');
        $("#T .horizontal").css('width', '100%');
        $("#T .horizontal").css('height', '30%');
        $("#T .vertical").css('width', '30%');
        $("#T .vertical").css('height', '100%');
    });
    $("#T").mouseout(function(){
//   on mouse out change back to the points
          $("#T .horizontal").css('width', '45%');
          $("#T .horizontal").css('height', '45%');
          $("#T .vertical").css('width', '45%');
          $("#T .vertical").css('height', '45%');
          $("#T .horizontal").css('borderRadius', '100px');
          $("#T .vertical").css('borderRadius', '100px');
          $("#T .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeT= true;
$("#T").click(function(){
    if (changeT==true) {
//       make it into the "weaving"
        $("#T .horizontal").css('transform', 'rotate(0deg)');
        $("#T .horizontal").css('width', '100%');
        $("#T .horizontal").css('height', '30%');
        $("#T .horizontal").css('borderRadius', '0px');
        $("#T .horizontal").css('top', '36%');
        changeT=false;
    }  
    else {
        $("#T .horizontal").css('transform', 'rotate(0deg)');
        $("#T .horizontal").css('width', '100%');
        $("#T .horizontal").css('height', '30%');
        $("#T .horizontal").css('borderRadius', '0px');
        $("#T .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#U").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#U .horizontal").css('transform', 'rotate(270deg)');
        $("#U .vertical").css('transform', 'rotate(180deg)');
        $("#U .horizontal").css('top', '0%');
        $("#U .horizontal").css('borderRadius', '0px');
        $("#U .vertical").css('borderRadius', '0px');
        $("#U .horizontal").css('width', '100%');
        $("#U .horizontal").css('height', '30%');
        $("#U .vertical").css('width', '30%');
        $("#U .vertical").css('height', '100%');
    });
    $("#U").mouseout(function(){
//   on mouse out change back to the points
          $("#U .horizontal").css('width', '45%');
          $("#U .horizontal").css('height', '45%');
          $("#U .vertical").css('width', '45%');
          $("#U .vertical").css('height', '45%');
          $("#U .horizontal").css('borderRadius', '100px');
          $("#U .vertical").css('borderRadius', '100px');
          $("#U .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeU= true;
$("#U").click(function(){
    if (changeU==true) {
//       make it into the "weaving"
        $("#U .horizontal").css('transform', 'rotate(0deg)');
        $("#U .horizontal").css('width', '100%');
        $("#U .horizontal").css('height', '30%');
        $("#U .horizontal").css('borderRadius', '0px');
        $("#U .horizontal").css('top', '36%');
        changeU=false;
    }  
    else {
        $("#U .horizontal").css('transform', 'rotate(0deg)');
        $("#U .horizontal").css('width', '100%');
        $("#U .horizontal").css('height', '30%');
        $("#U .horizontal").css('borderRadius', '0px');
        $("#U .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#P").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#P .horizontal").css('transform', 'rotate(270deg)');
        $("#P .vertical").css('transform', 'rotate(180deg)');
        $("#P .horizontal").css('top', '0%');
        $("#P .horizontal").css('borderRadius', '0px');
        $("#P .vertical").css('borderRadius', '0px');
        $("#P .horizontal").css('width', '100%');
        $("#P .horizontal").css('height', '30%');
        $("#P .vertical").css('width', '30%');
        $("#P .vertical").css('height', '100%');
    });
    $("#P").mouseout(function(){
//   on mouse out change back to the points
          $("#P .horizontal").css('width', '45%');
          $("#P .horizontal").css('height', '45%');
          $("#P .vertical").css('width', '45%');
          $("#P .vertical").css('height', '45%');
          $("#P .horizontal").css('borderRadius', '100px');
          $("#P .vertical").css('borderRadius', '100px');
          $("#P .horizontal").css('transform', 'rotate(90deg)');
      })
});

var changeP= true;
$("#P").click(function(){
    if (changeP==true) {
//       make it into the "weaving"
        $("#P .horizontal").css('transform', 'rotate(0deg)');
        $("#P .horizontal").css('width', '100%');
        $("#P .horizontal").css('height', '30%');
        $("#P .horizontal").css('borderRadius', '0px');
        $("#P .horizontal").css('top', '36%');
        changeP=false;
    }  
    else {
        $("#S .horizontal").css('transform', 'rotate(0deg)');
        $("#S .horizontal").css('width', '100%');
        $("#S .horizontal").css('height', '30%');
        $("#S .horizontal").css('borderRadius', '0px');
        $("#S .horizontal").css('top', '36%');
    }
});


$(document).ready(function(){
    $("#Q").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#Q .horizontal").css('transform', 'rotate(270deg)');
        $("#Q .vertical").css('transform', 'rotate(180deg)');
        $("#Q .horizontal").css('top', '0%');
        $("#Q .horizontal").css('borderRadius', '0px');
        $("#Q .vertical").css('borderRadius', '0px');
        $("#Q .horizontal").css('width', '100%');
        $("#Q .horizontal").css('height', '30%');
        $("#Q .vertical").css('width', '30%');
        $("#Q .vertical").css('height', '100%');
    });
    $("#Q").mouseout(function(){
//   on mouse out change back to the points
          $("#Q .horizontal").css('width', '45%');
          $("#Q .horizontal").css('height', '45%');
          $("#Q .vertical").css('width', '45%');
          $("#Q .vertical").css('height', '45%');
          $("#Q .horizontal").css('borderRadius', '100px');
          $("#Q .vertical").css('borderRadius', '100px');
          $("#Q .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeQ= true;
$("#Q").click(function(){
    if (changeQ==true) {
//       make it into the "weaving"
        $("#Q .horizontal").css('transform', 'rotate(0deg)');
        $("#Q .horizontal").css('width', '100%');
        $("#Q .horizontal").css('height', '30%');
        $("#Q .horizontal").css('borderRadius', '0px');
        $("#Q .horizontal").css('top', '36%');
        changeQ=false;
    }  
    else {
        $("#Q .horizontal").css('transform', 'rotate(0deg)');
        $("#Q .horizontal").css('width', '100%');
        $("#Q .horizontal").css('height', '30%');
        $("#Q .horizontal").css('borderRadius', '0px');
        $("#Q .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#R").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#R .horizontal").css('transform', 'rotate(270deg)');
        $("#R .vertical").css('transform', 'rotate(180deg)');
        $("#R .horizontal").css('top', '0%');
        $("#R .horizontal").css('borderRadius', '0px');
        $("#R .vertical").css('borderRadius', '0px');
        $("#R .horizontal").css('width', '100%');
        $("#R .horizontal").css('height', '30%');
        $("#R .vertical").css('width', '30%');
        $("#R .vertical").css('height', '100%');
    });
    $("#R").mouseout(function(){
//   on mouse out change back to the points
          $("#R .horizontal").css('width', '45%');
          $("#R .horizontal").css('height', '45%');
          $("#R .vertical").css('width', '45%');
          $("#R .vertical").css('height', '45%');
          $("#R .horizontal").css('borderRadius', '100px');
          $("#R .vertical").css('borderRadius', '100px');
          $("#R .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeR= true;
$("#R").click(function(){
    if (changeR==true) {
//       make it into the "weaving"
        $("#R .horizontal").css('transform', 'rotate(0deg)');
        $("#R .horizontal").css('width', '100%');
        $("#R .horizontal").css('height', '30%');
        $("#R .horizontal").css('borderRadius', '0px');
        $("#R .horizontal").css('top', '36%');
        changeR=false;
    }  
    else {
        $("#R .horizontal").css('transform', 'rotate(0deg)');
        $("#R .horizontal").css('width', '100%');
        $("#R .horizontal").css('height', '30%');
        $("#R .horizontal").css('borderRadius', '0px');
        $("#R .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#S").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#S .horizontal").css('transform', 'rotate(270deg)');
        $("#S .vertical").css('transform', 'rotate(180deg)');
        $("#S .horizontal").css('top', '0%');
        $("#S .horizontal").css('borderRadius', '0px');
        $("#S .vertical").css('borderRadius', '0px');
        $("#S .horizontal").css('width', '100%');
        $("#S .horizontal").css('height', '30%');
        $("#S .vertical").css('width', '30%');
        $("#S .vertical").css('height', '100%');
    });
    $("#S").mouseout(function(){
//   on mouse out change back to the points
          $("#S .horizontal").css('width', '45%');
          $("#S .horizontal").css('height', '45%');
          $("#S .vertical").css('width', '45%');
          $("#S .vertical").css('height', '45%');
          $("#S .horizontal").css('borderRadius', '100px');
          $("#S .vertical").css('borderRadius', '100px');
          $("#S .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeS= true;
$("#S").click(function(){
    if (changeS==true) {
//       make it into the "weaving"
        $("#S .horizontal").css('transform', 'rotate(0deg)');
        $("#S .horizontal").css('width', '100%');
        $("#S .horizontal").css('height', '30%');
        $("#S .horizontal").css('borderRadius', '0px');
        $("#S .horizontal").css('top', '36%');
        changeS=false;
    }  
    else {
        $("#S .horizontal").css('transform', 'rotate(0deg)');
        $("#S .horizontal").css('width', '100%');
        $("#S .horizontal").css('height', '30%');
        $("#S .horizontal").css('borderRadius', '0px');
        $("#S .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#T").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#T .horizontal").css('transform', 'rotate(270deg)');
        $("#T .vertical").css('transform', 'rotate(180deg)');
        $("#T .horizontal").css('top', '0%');
        $("#T .horizontal").css('borderRadius', '0px');
        $("#T .vertical").css('borderRadius', '0px');
        $("#T .horizontal").css('width', '100%');
        $("#T .horizontal").css('height', '30%');
        $("#T .vertical").css('width', '30%');
        $("#T .vertical").css('height', '100%');
    });
    $("#T").mouseout(function(){
//   on mouse out change back to the points
          $("#T .horizontal").css('width', '45%');
          $("#T .horizontal").css('height', '45%');
          $("#T .vertical").css('width', '45%');
          $("#T.vertical").css('height', '45%');
          $("#T.horizontal").css('borderRadius', '100px');
          $("#T.vertical").css('borderRadius', '100px');
          $("#T .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeT= true;
$("#T").click(function(){
    if (changeT==true) {
//       make it into the "weaving"
        $("#T .horizontal").css('transform', 'rotate(0deg)');
        $("#T .horizontal").css('width', '100%');
        $("#T .horizontal").css('height', '30%');
        $("#T .horizontal").css('borderRadius', '0px');
        $("#T .horizontal").css('top', '36%');
        changeT=false;
    }  
    else {
        $("#T .horizontal").css('transform', 'rotate(0deg)');
        $("#T .horizontal").css('width', '100%');
        $("#T .horizontal").css('height', '30%');
        $("#T .horizontal").css('borderRadius', '0px');
        $("#T .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#U").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#U .horizontal").css('transform', 'rotate(270deg)');
        $("#U .vertical").css('transform', 'rotate(180deg)');
        $("#U .horizontal").css('top', '0%');
        $("#U .horizontal").css('borderRadius', '0px');
        $("#U .vertical").css('borderRadius', '0px');
        $("#U .horizontal").css('width', '100%');
        $("#U .horizontal").css('height', '30%');
        $("#U .vertical").css('width', '30%');
        $("#U .vertical").css('height', '100%');
    });
    $("#U").mouseout(function(){
//   on mouse out change back to the points
          $("#U .horizontal").css('width', '45%');
          $("#U .horizontal").css('height', '45%');
          $("#U .vertical").css('width', '45%');
          $("#U .vertical").css('height', '45%');
          $("#U .horizontal").css('borderRadius', '100px');
          $("#U .vertical").css('borderRadius', '100px');
          $("#U .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeU= true;
$("#U").click(function(){
    if (changeU==true) {
//       make it into the "weaving"
        $("#U .horizontal").css('transform', 'rotate(0deg)');
        $("#U .horizontal").css('width', '100%');
        $("#U .horizontal").css('height', '30%');
        $("#U .horizontal").css('borderRadius', '0px');
        $("#U .horizontal").css('top', '36%');
        changeU=false;
    }  
    else {
        $("#U .horizontal").css('transform', 'rotate(0deg)');
        $("#U .horizontal").css('width', '100%');
        $("#U .horizontal").css('height', '30%');
        $("#U .horizontal").css('borderRadius', '0px');
        $("#U .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#V").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#V .horizontal").css('transform', 'rotate(270deg)');
        $("#V .vertical").css('transform', 'rotate(180deg)');
        $("#V .horizontal").css('top', '0%');
        $("#V .horizontal").css('borderRadius', '0px');
        $("#V .vertical").css('borderRadius', '0px');
        $("#V .horizontal").css('width', '100%');
        $("#V .horizontal").css('height', '30%');
        $("#V .vertical").css('width', '30%');
        $("#V .vertical").css('height', '100%');
    });
    $("#V").mouseout(function(){
//   on mouse out change back to the points
          $("#V .horizontal").css('width', '45%');
          $("#V .horizontal").css('height', '45%');
          $("#V .vertical").css('width', '45%');
          $("#V .vertical").css('height', '45%');
          $("#V .horizontal").css('borderRadius', '100px');
          $("#V .vertical").css('borderRadius', '100px');
          $("#V .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeV= true;
$("#V").click(function(){
    if (changeV==true) {
//       make it into the "weaving"
        $("#V .horizontal").css('transform', 'rotate(0deg)');
        $("#V .horizontal").css('width', '100%');
        $("#V .horizontal").css('height', '30%');
        $("#V .horizontal").css('borderRadius', '0px');
        $("#V .horizontal").css('top', '36%');
        changeV=false;
    }  
    else {
        $("#V .horizontal").css('transform', 'rotate(0deg)');
        $("#V .horizontal").css('width', '100%');
        $("#V .horizontal").css('height', '30%');
        $("#V .horizontal").css('borderRadius', '0px');
        $("#V .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#W").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#W .horizontal").css('transform', 'rotate(270deg)');
        $("#W .vertical").css('transform', 'rotate(180deg)');
        $("#W .horizontal").css('top', '0%');
        $("#W .horizontal").css('borderRadius', '0px');
        $("#W .vertical").css('borderRadius', '0px');
        $("#W .horizontal").css('width', '100%');
        $("#W .horizontal").css('height', '30%');
        $("#W .vertical").css('width', '30%');
        $("#W .vertical").css('height', '100%');
    });
    $("#W").mouseout(function(){
//   on mouse out change back to the points
          $("#W .horizontal").css('width', '45%');
          $("#W .horizontal").css('height', '45%');
          $("#W .vertical").css('width', '45%');
          $("#W .vertical").css('height', '45%');
          $("#W .horizontal").css('borderRadius', '100px');
          $("#W .vertical").css('borderRadius', '100px');
          $("#W .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeW= true;
$("#W").click(function(){
    if (changeW==true) {
//       make it into the "weaving"
        $("#W .horizontal").css('transform', 'rotate(0deg)');
        $("#W .horizontal").css('width', '100%');
        $("#W .horizontal").css('height', '30%');
        $("#W .horizontal").css('borderRadius', '0px');
        $("#W .horizontal").css('top', '36%');
        changeW=false;
    }  
    else {
        $("#W .horizontal").css('transform', 'rotate(0deg)');
        $("#W .horizontal").css('width', '100%');
        $("#W .horizontal").css('height', '30%');
        $("#W .horizontal").css('borderRadius', '0px');
        $("#W .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#X").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#X .horizontal").css('transform', 'rotate(270deg)');
        $("#X .vertical").css('transform', 'rotate(180deg)');
        $("#X .horizontal").css('top', '0%');
        $("#X .horizontal").css('borderRadius', '0px');
        $("#X .vertical").css('borderRadius', '0px');
        $("#X .horizontal").css('width', '100%');
        $("#X .horizontal").css('height', '30%');
        $("#X .vertical").css('width', '30%');
        $("#X .vertical").css('height', '100%');
    });
    $("#X").mouseout(function(){
//   on mouse out change back to the points
          $("#X .horizontal").css('width', '45%');
          $("#X .horizontal").css('height', '45%');
          $("#X .vertical").css('width', '45%');
          $("#X .vertical").css('height', '45%');
          $("#X .horizontal").css('borderRadius', '100px');
          $("#X .vertical").css('borderRadius', '100px');
          $("#X .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeX= true;
$("#X").click(function(){
    if (changeX==true) {
//       make it into the "weaving"
        $("#X .horizontal").css('transform', 'rotate(0deg)');
        $("#X .horizontal").css('width', '100%');
        $("#X .horizontal").css('height', '30%');
        $("#X .horizontal").css('borderRadius', '0px');
        $("#X .horizontal").css('top', '36%');
        changeX=false;
    }  
    else {
        $("#X .horizontal").css('transform', 'rotate(0deg)');
        $("#X .horizontal").css('width', '100%');
        $("#X .horizontal").css('height', '30%');
        $("#X .horizontal").css('borderRadius', '0px');
        $("#X .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#Y").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#Y .horizontal").css('transform', 'rotate(270deg)');
        $("#Y .vertical").css('transform', 'rotate(180deg)');
        $("#Y .horizontal").css('top', '0%');
        $("#Y .horizontal").css('borderRadius', '0px');
        $("#Y .vertical").css('borderRadius', '0px');
        $("#Y .horizontal").css('width', '100%');
        $("#Y .horizontal").css('height', '30%');
        $("#Y .vertical").css('width', '30%');
        $("#Y .vertical").css('height', '100%');
    });
    $("#Y").mouseout(function(){
//   on mouse out change back to the points
          $("#Y .horizontal").css('width', '45%');
          $("#Y .horizontal").css('height', '45%');
          $("#Y .vertical").css('width', '45%');
          $("#Y .vertical").css('height', '45%');
          $("#Y .horizontal").css('borderRadius', '100px');
          $("#Y .vertical").css('borderRadius', '100px');
          $("#Y .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeY= true;
$("#Y").click(function(){
    if (changeY==true) {
//       make it into the "weaving"
        $("#Y .horizontal").css('transform', 'rotate(0deg)');
        $("#Y .horizontal").css('width', '100%');
        $("#Y .horizontal").css('height', '30%');
        $("#Y .horizontal").css('borderRadius', '0px');
        $("#Y .horizontal").css('top', '36%');
        changeY=false;
    }  
    else {
        $("#Y .horizontal").css('transform', 'rotate(0deg)');
        $("#Y .horizontal").css('width', '100%');
        $("#Y .horizontal").css('height', '30%');
        $("#Y .horizontal").css('borderRadius', '0px');
        $("#Y .horizontal").css('top', '36%');
    }
});

$(document).ready(function(){
    $("#Z").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#Z .horizontal").css('transform', 'rotate(270deg)');
        $("#Z .vertical").css('transform', 'rotate(180deg)');
        $("#Z .horizontal").css('top', '0%');
        $("#Z .horizontal").css('borderRadius', '0px');
        $("#Z .vertical").css('borderRadius', '0px');
        $("#Z .horizontal").css('width', '100%');
        $("#Z .horizontal").css('height', '30%');
        $("#Z .vertical").css('width', '30%');
        $("#Z .vertical").css('height', '100%');
    });
    $("#Z").mouseout(function(){
//   on mouse out change back to the points
          $("#Z .horizontal").css('width', '45%');
          $("#Z .horizontal").css('height', '45%');
          $("#Z .vertical").css('width', '45%');
          $("#Z .vertical").css('height', '45%');
          $("#Z .horizontal").css('borderRadius', '100px');
          $("#Z .vertical").css('borderRadius', '100px');
          $("#Z .horizontal").css('transform', 'rotate(90deg)');
      })
});


var changeZ= true;
$("#Z").click(function(){
    if (changeZ==true) {
//       make it into the "weaving"
        $("#Z .horizontal").css('transform', 'rotate(0deg)');
        $("#Z .horizontal").css('width', '100%');
        $("#Z .horizontal").css('height', '30%');
        $("#Z .horizontal").css('borderRadius', '0px');
        $("#Z .horizontal").css('top', '36%');
        changeZ=false;
    }  
    else {
        $("#Z .horizontal").css('transform', 'rotate(0deg)');
        $("#Z .horizontal").css('width', '100%');
        $("#Z .horizontal").css('height', '30%');
        $("#Z .horizontal").css('borderRadius', '0px');
        $("#Z .horizontal").css('top', '36%');
    }
});


// MAINPAGE


$(document).ready(function(){
    $(".letter2").mouseover(function(){
//       making the points rotate and turn into needles
//       making horizontal 
        $("#N-1 .horizontal").css('transform', 'rotate(270deg)');
        $("#N-1 .vertical").css('transform', 'rotate(180deg)');
        $("#N-1 .horizontal").css('top', '0%');
        $("#N-1 .horizontal").css('borderRadius', '0px');
        $("#N-1 .vertical").css('borderRadius', '0px');
        $("#N-1 .horizontal").css('width', '100%');
        $("#N-1 .horizontal").css('height', '30%');
        $("#N-1 .vertical").css('width', '30%');
        $("#N-1 .vertical").css('height', '100%');
      
        $("#E-1 .horizontal").css('transform', 'rotate(270deg)');
        $("#E-1 .vertical").css('transform', 'rotate(180deg)');
        $("#E-1 .horizontal").css('top', '0%');
        $("#E-1 .horizontal").css('borderRadius', '0px');
        $("#E-1 .vertical").css('borderRadius', '0px');
        $("#E-1 .horizontal").css('width', '100%');
        $("#E-1 .horizontal").css('height', '30%');
        $("#E-1 .vertical").css('width', '30%');
        $("#E-1 .vertical").css('height', '100%');
      
        
        $("#E-2 .horizontal").css('transform', 'rotate(270deg)');
        $("#E-2 .vertical").css('transform', 'rotate(180deg)');
        $("#E-2 .horizontal").css('top', '0%');
        $("#E-2 .horizontal").css('borderRadius', '0px');
        $("#E-2 .vertical").css('borderRadius', '0px');
        $("#E-2 .horizontal").css('width', '100%');
        $("#E-2 .horizontal").css('height', '30%');
        $("#E-2 .vertical").css('width', '30%');
        $("#E-2 .vertical").css('height', '100%');
      
        
        $("#E-3 .horizontal").css('transform', 'rotate(270deg)');
        $("#E-3 .vertical").css('transform', 'rotate(180deg)');
        $("#E-3 .horizontal").css('top', '0%');
        $("#E-3 .horizontal").css('borderRadius', '0px');
        $("#E-3 .vertical").css('borderRadius', '0px');
        $("#E-3 .horizontal").css('width', '100%');
        $("#E-3 .horizontal").css('height', '30%');
        $("#E-3 .vertical").css('width', '30%');
        $("#E-3 .vertical").css('height', '100%');
      
        $("#D-1 .horizontal").css('transform', 'rotate(270deg)');
        $("#D-1 .vertical").css('transform', 'rotate(180deg)');
        $("#D-1 .horizontal").css('top', '0%');
        $("#D-1 .horizontal").css('borderRadius', '0px');
        $("#D-1 .vertical").css('borderRadius', '0px');
        $("#D-1 .horizontal").css('width', '100%');
        $("#D-1 .horizontal").css('height', '30%');
        $("#D-1 .vertical").css('width', '30%');
        $("#D-1 .vertical").css('height', '100%');
      
        $("#L-1 .horizontal").css('transform', 'rotate(270deg)');
        $("#L-1 .vertical").css('transform', 'rotate(180deg)');
        $("#L-1 .horizontal").css('top', '0%');
        $("#L-1 .horizontal").css('borderRadius', '0px');
        $("#L-1 .vertical").css('borderRadius', '0px');
        $("#L-1 .horizontal").css('width', '100%');
        $("#L-1 .horizontal").css('height', '30%');
        $("#L-1 .vertical").css('width', '30%');
        $("#L-1 .vertical").css('height', '100%');
      
        $("#P-1 .horizontal").css('transform', 'rotate(270deg)');
        $("#P-1 .vertical").css('transform', 'rotate(180deg)');
        $("#P-1 .horizontal").css('top', '0%');
        $("#P-1 .horizontal").css('borderRadius', '0px');
        $("#P-1 .vertical").css('borderRadius', '0px');
        $("#P-1 .horizontal").css('width', '100%');
        $("#P-1 .horizontal").css('height', '30%');
        $("#P-1 .vertical").css('width', '30%');
        $("#P-1 .vertical").css('height', '100%');
      
        $("#O-1 .horizontal").css('transform', 'rotate(270deg)');
        $("#O-1 .vertical").css('transform', 'rotate(180deg)');
        $("#O-1 .horizontal").css('top', '0%');
        $("#O-1 .horizontal").css('borderRadius', '0px');
        $("#O-1 .vertical").css('borderRadius', '0px');
        $("#O-1 .horizontal").css('width', '100%');
        $("#O-1 .horizontal").css('height', '30%');
        $("#O-1 .vertical").css('width', '30%');
        $("#O-1 .vertical").css('height', '100%');
      
        $("#I-1 .horizontal").css('transform', 'rotate(270deg)');
        $("#I-1 .vertical").css('transform', 'rotate(180deg)');
        $("#I-1 .horizontal").css('top', '0%');
        $("#I-1 .horizontal").css('borderRadius', '0px');
        $("#I-1 .vertical").css('borderRadius', '0px');
        $("#I-1 .horizontal").css('width', '100%');
        $("#I-1 .horizontal").css('height', '30%');
        $("#I-1 .vertical").css('width', '30%');
        $("#I-1 .vertical").css('height', '100%');
      
        $("#N-2 .horizontal").css('transform', 'rotate(270deg)');
        $("#N-2 .vertical").css('transform', 'rotate(180deg)');
        $("#N-2 .horizontal").css('top', '0%');
        $("#N-2 .horizontal").css('borderRadius', '0px');
        $("#N-2 .vertical").css('borderRadius', '0px');
        $("#N-2 .horizontal").css('width', '100%');
        $("#N-2 .horizontal").css('height', '30%');
        $("#N-2 .vertical").css('width', '30%');
        $("#N-2 .vertical").css('height', '100%');
      
        $("#T-1 .horizontal").css('transform', 'rotate(270deg)');
        $("#T-1 .vertical").css('transform', 'rotate(180deg)');
        $("#T-1 .horizontal").css('top', '0%');
        $("#T-1 .horizontal").css('borderRadius', '0px');
        $("#T-1 .vertical").css('borderRadius', '0px');
        $("#T-1 .horizontal").css('width', '100%');
        $("#T-1 .horizontal").css('height', '30%');
        $("#T-1 .vertical").css('width', '30%');
        $("#T-1 .vertical").css('height', '100%');
    });
  
    $(".letter2").mouseout(function(){
//   on mouse out change back to the points
          $("#N-1 .horizontal").css('width', '45%');
          $("#N-1 .horizontal").css('height', '45%');
          $("#N-1 .vertical").css('width', '45%');
          $("#N-1 .vertical").css('height', '45%');
          $("#N-1 .horizontal").css('borderRadius', '100px');
          $("#N-1 .vertical").css('borderRadius', '100px');
          $("#N-1 .horizontal").css('transform', 'rotate(90deg)');
      
          $("#E-1 .horizontal").css('width', '45%');
          $("#E-1 .horizontal").css('height', '45%');
          $("#E-1 .vertical").css('width', '45%');
          $("#E-1 .vertical").css('height', '45%');
          $("#E-1 .horizontal").css('borderRadius', '100px');
          $("#E-1 .vertical").css('borderRadius', '100px');
          $("#E-1 .horizontal").css('transform', 'rotate(90deg)');
            
          $("#E-2 .horizontal").css('width', '45%');
          $("#E-2 .horizontal").css('height', '45%');
          $("#E-2 .vertical").css('width', '45%');
          $("#E-2 .vertical").css('height', '45%');
          $("#E-2 .horizontal").css('borderRadius', '100px');
          $("#E-2 .vertical").css('borderRadius', '100px');
          $("#E-2 .horizontal").css('transform', 'rotate(90deg)');
            
          $("#E-3 .horizontal").css('width', '45%');
          $("#E-3 .horizontal").css('height', '45%');
          $("#E-3 .vertical").css('width', '45%');
          $("#E-3 .vertical").css('height', '45%');
          $("#E-3 .horizontal").css('borderRadius', '100px');
          $("#E-3 .vertical").css('borderRadius', '100px');
          $("#E-3 .horizontal").css('transform', 'rotate(90deg)');
      
          $("#D-1 .horizontal").css('width', '45%');
          $("#D-1 .horizontal").css('height', '45%');
          $("#D-1 .vertical").css('width', '45%');
          $("#D-1 .vertical").css('height', '45%');
          $("#D-1 .horizontal").css('borderRadius', '100px');
          $("#D-1 .vertical").css('borderRadius', '100px');
          $("#D-1 .horizontal").css('transform', 'rotate(90deg)');
      
          $("#L-1 .horizontal").css('width', '45%');
          $("#L-1 .horizontal").css('height', '45%');
          $("#L-1 .vertical").css('width', '45%');
          $("#L-1 .vertical").css('height', '45%');
          $("#L-1 .horizontal").css('borderRadius', '100px');
          $("#L-1 .vertical").css('borderRadius', '100px');
          $("#L-1 .horizontal").css('transform', 'rotate(90deg)');
      
          $("#P-1 .horizontal").css('width', '45%');
          $("#P-1 .horizontal").css('height', '45%');
          $("#P-1 .vertical").css('width', '45%');
          $("#P-1 .vertical").css('height', '45%');
          $("#P-1 .horizontal").css('borderRadius', '100px');
          $("#P-1 .vertical").css('borderRadius', '100px');
          $("#P-1 .horizontal").css('transform', 'rotate(90deg)');
      
          $("#O-1 .horizontal").css('width', '45%');
          $("#O-1 .horizontal").css('height', '45%');
          $("#O-1 .vertical").css('width', '45%');
          $("#O-1 .vertical").css('height', '45%');
          $("#O-1 .horizontal").css('borderRadius', '100px');
          $("#O-1 .vertical").css('borderRadius', '100px');
          $("#O-1 .horizontal").css('transform', 'rotate(90deg)');
      
          $("#I-1 .horizontal").css('width', '45%');
          $("#I-1 .horizontal").css('height', '45%');
          $("#I-1 .vertical").css('width', '45%');
          $("#I-1 .vertical").css('height', '45%');
          $("#I-1 .horizontal").css('borderRadius', '100px');
          $("#I-1 .vertical").css('borderRadius', '100px');
          $("#I-1 .horizontal").css('transform', 'rotate(90deg)');
      
          $("#N-2 .horizontal").css('width', '45%');
          $("#N-2 .horizontal").css('height', '45%');
          $("#N-2 .vertical").css('width', '45%');
          $("#N-2 .vertical").css('height', '45%');
          $("#N-2 .horizontal").css('borderRadius', '100px');
          $("#N-2 .vertical").css('borderRadius', '100px');
          $("#N-2 .horizontal").css('transform', 'rotate(90deg)');
    
          $("#T-1 .horizontal").css('width', '45%');
          $("#T-1 .horizontal").css('height', '45%');
          $("#T-1 .vertical").css('width', '45%');
          $("#T-1 .vertical").css('height', '45%');
          $("#T-1 .horizontal").css('borderRadius', '100px');
          $("#T-1 .vertical").css('borderRadius', '100px');
          $("#T-1 .horizontal").css('transform', 'rotate(90deg)');
      });
});

var changeLetters= true;
$(".letter2").click(function(){
    if (changeLetters==true) {
//       make it into the "weaving"
        $("#N-1 .horizontal").css('transform', 'rotate(0deg)');
        $("#N-1 .horizontal").css('width', '100%');
        $("#N-1 .horizontal").css('height', '30%');
        $("#N-1 .horizontal").css('borderRadius', '0px');
        $("#N-1 .horizontal").css('top', '36%');
      
        $("#E-1 .horizontal").css('transform', 'rotate(0deg)');
        $("#E-1 .horizontal").css('width', '100%');
        $("#E-1 .horizontal").css('height', '30%');
        $("#E-1 .horizontal").css('borderRadius', '0px');
        $("#E-1 .horizontal").css('top', '36%');
      
        $("#E-2 .horizontal").css('transform', 'rotate(0deg)');
        $("#E-2 .horizontal").css('width', '100%');
        $("#E-2 .horizontal").css('height', '30%');
        $("#E-2 .horizontal").css('borderRadius', '0px');
        $("#E-2 .horizontal").css('top', '36%');
      
        $("#E-3 .horizontal").css('transform', 'rotate(0deg)');
        $("#E-3 .horizontal").css('width', '100%');
        $("#E-3 .horizontal").css('height', '30%');
        $("#E-3 .horizontal").css('borderRadius', '0px');
        $("#E-3 .horizontal").css('top', '36%');
      
        $("#D-1 .horizontal").css('transform', 'rotate(0deg)');
        $("#D-1 .horizontal").css('width', '100%');
        $("#D-1 .horizontal").css('height', '30%');
        $("#D-1 .horizontal").css('borderRadius', '0px');
        $("#D-1 .horizontal").css('top', '36%');
      
        $("#L-1 .horizontal").css('transform', 'rotate(0deg)');
        $("#L-1 .horizontal").css('width', '100%');
        $("#L-1 .horizontal").css('height', '30%');
        $("#L-1 .horizontal").css('borderRadius', '0px');
        $("#L-1 .horizontal").css('top', '36%');
      
        $("#P-1 .horizontal").css('transform', 'rotate(0deg)');
        $("#P-1 .horizontal").css('width', '100%');
        $("#P-1 .horizontal").css('height', '30%');
        $("#P-1 .horizontal").css('borderRadius', '0px');
        $("#P-1 .horizontal").css('top', '36%');
      
        $("#O-1 .horizontal").css('transform', 'rotate(0deg)');
        $("#O-1 .horizontal").css('width', '100%');
        $("#O-1 .horizontal").css('height', '30%');
        $("#O-1 .horizontal").css('borderRadius', '0px');
        $("#O-1 .horizontal").css('top', '36%');
      
        $("#I-1 .horizontal").css('transform', 'rotate(0deg)');
        $("#I-1 .horizontal").css('width', '100%');
        $("#I-1 .horizontal").css('height', '30%');
        $("#I-1 .horizontal").css('borderRadius', '0px');
        $("#I-1 .horizontal").css('top', '36%');
      
        $("#N-2 .horizontal").css('transform', 'rotate(0deg)');
        $("#N-2 .horizontal").css('width', '100%');
        $("#N-2 .horizontal").css('height', '30%');
        $("#N-2 .horizontal").css('borderRadius', '0px');
        $("#N-2 .horizontal").css('top', '36%');
      
        $("#T-1 .horizontal").css('transform', 'rotate(0deg)');
        $("#T-1 .horizontal").css('width', '100%');
        $("#T-1 .horizontal").css('height', '30%');
        $("#T-1 .horizontal").css('borderRadius', '0px');
        $("#T-1 .horizontal").css('top', '36%');
      
        changeLetters=false;
    }  
    else {
        $("#N-1 .horizontal").css('transform', 'rotate(0deg)');
        $("#N-1 .horizontal").css('width', '100%');
        $("#N-1 .horizontal").css('height', '30%');
        $("#N-1 .horizontal").css('borderRadius', '0px');
        $("#N-1 .horizontal").css('top', '36%');
      
        $("#E-1 .horizontal").css('transform', 'rotate(0deg)');
        $("#E-1 .horizontal").css('width', '100%');
        $("#E-1 .horizontal").css('height', '30%');
        $("#E-1 .horizontal").css('borderRadius', '0px');
        $("#E-1 .horizontal").css('top', '36%');
      
        $("#E-2 .horizontal").css('transform', 'rotate(0deg)');
        $("#E-2 .horizontal").css('width', '100%');
        $("#E-2 .horizontal").css('height', '30%');
        $("#E-2 .horizontal").css('borderRadius', '0px');
        $("#E-2 .horizontal").css('top', '36%');
      
        $("#E-3 .horizontal").css('transform', 'rotate(0deg)');
        $("#E-3 .horizontal").css('width', '100%');
        $("#E-3 .horizontal").css('height', '30%');
        $("#E-3 .horizontal").css('borderRadius', '0px');
        $("#E-3 .horizontal").css('top', '36%');
      
        $("#D-1 .horizontal").css('transform', 'rotate(0deg)');
        $("#D-1 .horizontal").css('width', '100%');
        $("#D-1 .horizontal").css('height', '30%');
        $("#D-1 .horizontal").css('borderRadius', '0px');
        $("#D-1 .horizontal").css('top', '36%');
      
        $("#L-1 .horizontal").css('transform', 'rotate(0deg)');
        $("#L-1 .horizontal").css('width', '100%');
        $("#L-1 .horizontal").css('height', '30%');
        $("#L-1 .horizontal").css('borderRadius', '0px');
        $("#L-1 .horizontal").css('top', '36%');
      
        $("#P-1 .horizontal").css('transform', 'rotate(0deg)');
        $("#P-1 .horizontal").css('width', '100%');
        $("#P-1 .horizontal").css('height', '30%');
        $("#P-1 .horizontal").css('borderRadius', '0px');
        $("#P-1 .horizontal").css('top', '36%');
      
        $("#O-1 .horizontal").css('transform', 'rotate(0deg)');
        $("#O-1 .horizontal").css('width', '100%');
        $("#O-1 .horizontal").css('height', '30%');
        $("#O-1 .horizontal").css('borderRadius', '0px');
        $("#O-1 .horizontal").css('top', '36%');
      
        $("#I-1 .horizontal").css('transform', 'rotate(0deg)');
        $("#I-1 .horizontal").css('width', '100%');
        $("#I-1 .horizontal").css('height', '30%');
        $("#I-1 .horizontal").css('borderRadius', '0px');
        $("#I-1 .horizontal").css('top', '36%');
      
        $("#N-2 .horizontal").css('transform', 'rotate(0deg)');
        $("#N-2 .horizontal").css('width', '100%');
        $("#N-2 .horizontal").css('height', '30%');
        $("#N-2 .horizontal").css('borderRadius', '0px');
        $("#N-2 .horizontal").css('top', '36%');
      
        $("#T-1 .horizontal").css('transform', 'rotate(0deg)');
        $("#T-1 .horizontal").css('width', '100%');
        $("#T-1 .horizontal").css('height', '30%');
        $("#T-1 .horizontal").css('borderRadius', '0px');
        $("#T-1 .horizontal").css('top', '36%');
    }
});










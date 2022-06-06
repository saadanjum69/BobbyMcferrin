
let playlist = [];
let checkCurnnt = 0;
var size = 15;
var sizee = 15;
var sizee_mob = 12;
var px = 150;
var pxx = 30;
var sound,newsrc;
let playing=[],mutedlistid=[],listelements=[],mutedlist=[];
var playallflag = 0
var iiid;
var Toption,getSongId;
  var l;
  var t;
  var songId;
  var newdata = [];
  var getSongId;

var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var value = url.searchParams.get("value");
  var Soption=value;
function init()
{

  var sound;

  for(let m=0; m<newdata.length; m++){

    sound = new Howl({
     src: [newdata[m]['source']],
     loop: true,
   })

// sound.play();
// Howler.mute(true);

   var id = sound.play();
   mutedlistid[m] = id;
   mutedlist[m] = sound;

   sound.mute(true , id);
  }
  
    document.addEventListener('click', function(evt) { 
        if (evt.target.tagName.toLowerCase() == 'div') { 
        } }, true);
        
}




function mutedplaysongs(mutedLists){

  for(let m=0; m<mutedLists.length; m++){
           var eleme = mutedLists[m]
        var songID = eleme.getAttribute('id');
        // var id = mutedlist[songID].play(); 
                 mutedlist[songID].mute(false ,  mutedlistid[songID]);

  }


 }

function playOnHover(p){
  const myAnchor = document.getElementsByClassName("drag-drop"); 
  let text = myAnchor[p].getAttribute("id");
  mutedlist[text].mute(false ,  mutedlistid[text]);
  setTimeout(() => {
    mutedlist[text].mute(true ,  mutedlistid[text]);
   
  }, 3000);
  

   

}
function playOnOut(p){
  
  const myAnchor = document.getElementsByClassName("drag-drop"); 
  let text = myAnchor[p].getAttribute("id");
 
   mutedlist[text].mute(true ,  mutedlistid[text]);

}


 function nowplay(){
  if(playallflag == 1){
    playplayAll();
   }

  for(let m=0; m<listelements.length; m++){
       
    var eleme = listelements[m]
 var songID = eleme.getAttribute("id");
//  mutedlist[songID].mute(true ,  mutedlistid[songID]);
 mutedlist[songID].play();
var play_img = document.getElementById('play_img');
play_img.style.display = 'none';
var pause_img = document.getElementById('pause_img');
pause_img.style.display = 'inline';
}
 }
 function nowpause(){
   if(playallflag == 1){
    pauseAll();
   }
  for(let m=0; m<listelements.length; m++){
       
    var eleme = listelements[m]
 var songID = eleme.getAttribute("id");
 // var id = mutedlist[songID].play();
//  mutedlist[songID].mute(false ,  mutedlistid[songID]);
 mutedlist[songID].pause();

 var pause_img = document.getElementById('pause_img');
pause_img.style.display = 'none';
var play_img = document.getElementById('play_img');
play_img.style.display = 'inline';
}
for(let m=0; m<mutedlist.length; m++){
  sound = new Howl({
   src: [mutedlist[m]['src']]
 });

  mutedlist[m].pause();
 
}

 }

 function pauseAll(){
   
  for(let m=0; m<mutedlist.length; m++){
    sound = new Howl({
     src: [mutedlist[m]['src']]
   });
  
    mutedlist[m].pause();
   
 }
 var pause_img = document.getElementById('pause_img');
pause_img.style.display = 'none';
var play_img = document.getElementById('play_img');
play_img.style.display = 'inline';
 }

 function playplayAll(){
   
  for(let m=0; m<mutedlist.length; m++){
    sound = new Howl({
     src: [mutedlist[m]['src']]
   });
  
    mutedlist[m].play();
   
 }
 var play_img = document.getElementById('play_img');
 play_img.style.display = 'none';
 var pause_img = document.getElementById('pause_img');
 pause_img.style.display = 'inline';
 }

function playsongs(palylistarray,firstElem)
{
 
 
  for(let m=0; m<playlist.length; m++){
    element = playlist[m];
    if(playing.includes(element)) continue
   
    playing.push(element);

     newsrc = element.getAttribute("src");

     sound = new Howl({
     src: [newsrc],
     loop: true
     
   });
   playlist[m]['sound'] = sound;  
   playlist[m]['sound'].play();
  }
 
  }

let bg_image = [
  {src:"assets/base-bg.png"},
  {src:"assets/base-bg2.png"},
  {src:"assets/base-bg3.png"},
  {src:"assets/base-bg4.png"},
  {src:"assets/base-bg9.png"},
  {src:"assets/base-bg6.png"},
  {src:"assets/base-bg7.png"},
  {src:"assets/base-bg8.png"},
  {src:"assets/base-bg5.png"},
  {src:"assets/base-bg10.png"},
  {src:"assets/base-bg11.png"}
]


function dragMoveListener (event) {
  
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

interact('.dropzone').dropzone({
 
    // only accept elements matching this CSS selector
    accept: '.drag-drop',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,
  
    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
  
      // feedback the possibility of a drop
      dropzoneElement.classList.add('drop-target')
      draggableElement.classList.add('can-drop')
      // draggableElement.textContent = 'Dragged in'
      
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      event.target.classList.remove('drop-target')
      event.relatedTarget.classList.remove('can-drop')
      // event.relatedTarget.textContent = 'Dragged out'
      
      var audio = document.getElementById('audio');
      

      playing=playing.filter((element)=>{return element!==event.relatedTarget})

var flagcheck = 0;
      for(var j=0; j<listelements.length; j++){
flagcheck = 1
        if(event.relatedTarget == listelements[j]){

          // playlist[j]['sound'].stop();
          //  playlist[j]['src'] = '';

          var songID = event.relatedTarget.getAttribute("id");
          // var id = mutedlist[songID].play();
              mutedlist[songID].mute(true , mutedlistid[songID]);
            playlist.splice(j,1)
            listelements.splice(j,1)
          
            if(event.relatedTarget.getAttribute("src") == audio.getAttribute("src")){
             
              
            }
            const sty = document.querySelector('#inner-dropzone');
          if(flagcheck == 1){

            function myFunction(x) {
              if (x.matches) { // If media query matches
                size=size-2
                sizee_mob--
                px=px-13
                pxx=pxx-2
                      sty.style.width = sizee_mob+'rem';
                      sty.style.height = sizee_mob+'rem';
                      sty.style.borderImage = "url('assets/border-image.png') 200 40 / "+px+"px "+pxx+"px / "+size+"px";
                      sty.style.borderImageSlice="";
               
                 flagcheck=0;
              } else {
                size=size-5
                sizee--
                px=px-13
                pxx=pxx-2
                      sty.style.width = sizee+'rem';
                      sty.style.height = sizee+'rem';
                      sty.style.borderImage = "url('assets/border-image.png') 200 40 / "+px+"px "+pxx+"px / "+size+"px";
                      sty.style.borderImageSlice="";
                      
               
                 flagcheck=0;
              }
            }
            
            var x = window.matchMedia("(max-width: 767px)")
            myFunction(x) // Call listener function at run time
            x.addListener(myFunction) // Attach listener function on state changes
  

}  


if(playlist.length == 0){
 
  // playsongs(playlist);
   audio.src = '';
}
// play(playlist);
        }
      }
     
    },
    ondrop: function (event) {
      // event.relatedTarget.textContent = 'Dropped'
      const sty = document.querySelector('#inner-dropzone');
     var flagnew=1;
      if(!playlist.includes(event.relatedTarget)){

        function myFunction(x) {
         
          if (x.matches) { // If media query matches
            playlist.push(event.relatedTarget)
            listelements.push(event.relatedTarget)
            mutedplaysongs(listelements);
        // sound.play();
        sty.style.width = sizee_mob+'rem';
        sty.style.height = sizee_mob+'rem';
        sty.style.borderImage = "url('assets/border-image.png') 200 40 / "+px+"px "+pxx+"px / "+size+"px";
        sty.style.borderImageSlice="";

         size=size+2
         sizee_mob++
         px=px+13
         pxx=pxx+2
    
          } else {
            playlist.push(event.relatedTarget)
            listelements.push(event.relatedTarget)
            mutedplaysongs(listelements);

            // playsongs(playlist);
            // sound.play();
            sty.style.width = sizee+'rem';
            sty.style.height = sizee+'rem';
            sty.style.borderImage = "url('assets/border-image.png') 185 40 / "+px+"px "+pxx+"px / "+size+"px";
            sty.style.borderImageSlice="";
    
             size=size+5
             sizee++
             px=px+13
             pxx=pxx+2
        
          }
        }
        
        var x = window.matchMedia("(max-width: 767px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state changes

        
     }

        if(playlist.length == flagnew ){
          flagnew=0;
          }

       
    },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove('drop-active')
      event.target.classList.remove('drop-target')

     }
  })
  
  interact('.drag-drop')
    .draggable({
      inertia: true,
      
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: '.drag-items'
        })
      ],
      autoScroll: true,
      // dragMoveListener from the dragging demo above
      listeners: { move: dragMoveListener }
    })

    function reset(){
      location.reload();
    }

    function playAll(){
      for(let m=0; m<mutedlist.length; m++){

     let remTransform = document.getElementById(m);
     remTransform.style.transform="";
      }
    
      
      var play_img = document.getElementById('play_img');
      play_img.style.display = 'none';
      var pause_img = document.getElementById('pause_img');
      pause_img.style.display = 'inline';

      var sound;
      playallflag = 1
    
      let aaa = (document.getElementById("play_all"));
       aaa.removeAttribute('onclick');
 
     for(let i=0; i<newdata.length; i++){
     var ii= document.getElementById(i);
     listelements.push(ii);
     }
     mutedplaysongs(listelements);
                    
    
    

    
    var x = window.matchMedia("(max-width: 767px)")
    if(x.matches){
      var elem = document.getElementById("inner-dropzone");
      elem.style.width="22rem";
      elem.style.height="22rem";
      elem.style.borderImage="url('assets/border-image.png') 200 40 / 293px 52px / 37px stretch";
      elem.style.borderImageSlice="";

      size=size+24
      sizee_mob=sizee_mob+10
      px=px+156
      pxx=pxx+24

      if(Soption==1){
      for(let j=0; j<3; j++){
        document.getElementById(j).style.left="15";
        document.getElementById(j).style.top="215";
        document.getElementById(j).style.minWidth="80px";
        // document.getElementById(j).style.zIndex="-100";
      }
      for(let j=3; j<6; j++){
        document.getElementById(j).style.left="5";
        document.getElementById(j).style.top="230";
        document.getElementById(j).style.minWidth="80px";
        // document.getElementById(j).style.zIndex="-100";
      }
      for(let j=6; j<9; j++){
        document.getElementById(j).style.left="15";
        document.getElementById(j).style.top="-175";
        document.getElementById(j).style.minWidth="80px";
        // document.getElementById(j).style.zIndex="-100";
      }
      for(let j=9; j<12; j++){
        document.getElementById(j).style.left="15";
        document.getElementById(j).style.top="-185";
        document.getElementById(j).style.minWidth="80px";
        // document.getElementById(j).style.zIndex="-110";
      }
    }
    if(Soption==2){
      for(let j=0; j<4; j++){
        document.getElementById(j).style.left="5";
        document.getElementById(j).style.top="230";
        document.getElementById(j).style.minWidth="80px";
        // document.getElementById(j).style.zIndex="-100";
      }
      for(let j=4; j<9; j++){
        document.getElementById(j).style.left="15";
        document.getElementById(j).style.top="-225";
        document.getElementById(j).style.minWidth="80px";
        // document.getElementById(j).style.zIndex="-110";
      }
    }
    if(Soption==3){
      for(let j=0; j<3; j++){
        document.getElementById(j).style.left="15";
        document.getElementById(j).style.top="215";
        document.getElementById(j).style.minWidth="80px";
        // document.getElementById(j).style.zIndex="-100";
      }
      for(let j=3; j<6; j++){
        document.getElementById(j).style.left="5";
        document.getElementById(j).style.top="230";
        document.getElementById(j).style.minWidth="80px";
        // document.getElementById(j).style.zIndex="-100";
      }
      for(let j=6; j<9; j++){
        document.getElementById(j).style.left="15";
        document.getElementById(j).style.top="-175";
        document.getElementById(j).style.minWidth="80px";
        // document.getElementById(j).style.zIndex="-100";
      }
      for(let j=9; j<12; j++){
        document.getElementById(j).style.left="15";
        document.getElementById(j).style.top="-185";
        document.getElementById(j).style.minWidth="80px";
        // document.getElementById(j).style.zIndex="-110";
      }
    }
  }else{
   
    var elem = document.getElementById("inner-dropzone");
    elem.style.width="25rem";
    elem.style.height="25rem";
    elem.style.borderImage="url('assets/border-image.png') 200 40 / 293px 52px / 70px stretch";
    elem.style.borderImageSlice="";

    size=size+60
    sizee=sizee+12
    px=px+140
    pxx=pxx+24
    

    if(Soption==1){
    for(let j=0; j<3; j++){
      document.getElementById(j).style.left="345";
      document.getElementById(j).style.top="245";
      // document.getElementById(j).style.zIndex="-100";
    }
    for(let j=3; j<6; j++){
      document.getElementById(j).style.left="445";
      document.getElementById(j).style.top="-10";
      // document.getElementById(j).style.zIndex="-100";
    }
    for(let j=6; j<9; j++){
      document.getElementById(j).style.left="-190";
      document.getElementById(j).style.top="190";
      // document.getElementById(j).style.zIndex="-100";
    }
    for(let j=9; j<12; j++){
      document.getElementById(j).style.left="-120";
      document.getElementById(j).style.top="10";
      // document.getElementById(j).style.zIndex="-100";
    }
  }
  if(Soption==2){
    for(let j=0; j<4; j++){
      document.getElementById(j).style.left="395";
      document.getElementById(j).style.top="215";
      // document.getElementById(j).style.zIndex="-100";
    }
    for(let j=4; j<9; j++){
      document.getElementById(j).style.left="-190";
      document.getElementById(j).style.top="200";
      // document.getElementById(j).style.zIndex="-100";
    }
  }
  if(Soption==3){
    for(let j=0; j<3; j++){
      document.getElementById(j).style.left="345";
      document.getElementById(j).style.top="245";
      // document.getElementById(j).style.zIndex="-100";
    }
    for(let j=3; j<6; j++){
      document.getElementById(j).style.left="445";
      document.getElementById(j).style.top="-10";
      // document.getElementById(j).style.zIndex="-100";
    }
    for(let j=6; j<9; j++){
      document.getElementById(j).style.left="-190";
      document.getElementById(j).style.top="190";
      // document.getElementById(j).style.zIndex="-100";
    }
    for(let j=9; j<12; j++){
      document.getElementById(j).style.left="-120";
      document.getElementById(j).style.top="10";
      // document.getElementById(j).style.zIndex="-100";
    }
  }
}
    
      }

      
      
////////////////////////////////jquery code///////////////////////////
function preload(){



 

$( document ).ready(function() {
  
  var value = url.searchParams.get("value");
var Soption=value;
  const allParts= `http://3.72.28.47/api/part?songId=${Soption}`;
  const allSongs = `http://3.72.28.47/api/songs`;
  

  async function getSongs(url) {
    const response = await fetch(url);

// Storing data in form of JSON
var songData = await response.json();
songData?.data.map((song)=>{
  getSongId= song.id;
 
  $("#select-song ").append(new Option(song.title, song.id));
  var my_tag = document.getElementsByTagName("option");
var count = my_tag.length;
for(var i = 0; i < count; i++){
my_tag[i].value;
if(my_tag[i].value == Soption){
my_tag[i].setAttribute("selected", "selected")
} 


}
})

}


async function getParts(url) {
  const response = await fetch(url);

// Storing data in form of JSON
var partData = await response.json();
return partData;
// newdata = partData;
// partData?.data.map((part)=>{
//      newdata.push(part);
// })


}
// Calling that async function
getSongs(allSongs);
getParts(allParts);


////////////////////////////////////////////////////

getParts(allParts).then(data=>{
 
  newdata = data?.data

  init()

  var data_count = newdata.length;
      var value_1 = parseInt(data_count/2);   

      $.fn.myFunction = function() {
        var html_object="";

  if (window.matchMedia('(max-width: 767px)').matches) { // If media query matches
        var k=0;
     


           for(let j=0; j<value_1; j++){
            
             l = Math.floor(Math.random() * 2);
             t = Math.floor(Math.random() * 5);

             if(k == bg_image.length){
               k=0;
               }

               html_object+='<div class="drag-drop" style="position:relative;top:'+t+'px;left:'+l+'px;background-image: url('+bg_image[k]['src']+')" draggable="true" id="'+j+'" src="'+newdata[j]['source']+'">'+newdata[j]['title']+'</div>'
             k++;
         if(j != 0){
         if(j%3 == 2){
          html_object+='<br>'

             }
           } }
           $('#left-circles-id').html(html_object);
} else {
 
  
        var k=0;
        
           for(let j=0; j<value_1; j++){
             l = Math.floor(Math.random() * 200);
             t = Math.floor(Math.random() * 10);
          
             if(k == bg_image.length){
               k=0;
               }
             
             html_object+='<div class="drag-drop" style="position:relative;top:'+t+'px;left:'+l+'px;background-image: url('+bg_image[k]['src']+')" draggable="true" id="'+j+'" src="'+newdata[j]['source']+'">'+newdata[j]['title']+'</div>'
            
             k++;
               
           } 
           $('#left-circles-id').html(html_object);
}
}


$.fn.myFunction(); 



$.fn.myFunction = function(){
var html_object="";
  if (window.matchMedia('(max-width: 767px)').matches){
    var k=value_1;
     for(let i=value_1; i<data_count; i++){
       l = Math.floor(Math.random() * 2);
       t = Math.floor(Math.random() * 5);

       if(k == bg_image.length){
         k=0;
         }
         html_object+='<div class="drag-drop" style="position:relative;top:'+t+'px;left:'+l+'px;background-image: url('+bg_image[k]['src']+')" draggable="true" id="'+i+'" src="'+newdata[i]['source']+'">'+newdata[i]['title']+'</div>'
         
   k++;
   if(i != 0){
   if(i%4 == 0){
    html_object+='<br>'
       }
     }
         
     }  
     $('#right-circles-id').html(html_object);
  }else{
    var k=value_1;
     for(let i=value_1; i<data_count; i++){
        l = Math.floor(Math.random() * 200);
        t = Math.floor(Math.random() * 10);

       if(k == bg_image.length){
         k=0;
         }
         
         html_object+='<div class="drag-drop" style="position:relative;top:'+t+'px;left:'+l+'px;background-image: url('+bg_image[k]['src']+')" draggable="true" id="'+i+'" src="'+newdata[i]['source']+'">'+newdata[i]['title']+'</div>'
        
   k++;
         
     }  
     $('#right-circles-id').html(html_object);
  }
}
   
  

   $.fn.myFunction() 
  

});
});
}
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
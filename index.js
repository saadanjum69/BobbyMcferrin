
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


var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var value = url.searchParams.get("value");
  var Soption=value;
function init()
{

  var sound;
  for(let m=0; m<data.length; m++){

    if(Soption == 1){
    sound = new Howl({
     src: [data[m]['src']],
     loop: true,
   })
  }else if(Soption == 2){
    sound = new Howl({
      src: [data2[m]['src']],
      loop: true,
  })
}else if(Soption == 3){
  sound = new Howl({
    src: [data3[m]['src']],
    loop: true,
})
}
// sound.play();
// Howler.mute(true);

   var id = sound.play();
   mutedlistid[m] = id;
   mutedlist[m] = sound;

   sound.mute(true , id);
  //  console.log(id,data[m]['src'])
  }
  
    document.addEventListener('click', function(evt) { 
        if (evt.target.tagName.toLowerCase() == 'div') { 
        } }, true);
        
}




function mutedplaysongs(mutedLists){

  for(let m=0; m<mutedLists.length; m++){
       
           var eleme = mutedLists[m]
        var songID = eleme.getAttribute("id");
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

let data = [
{ name: "Base0", src: "assets/sound1.wav",parent:1,play: 1 },
{ name: "Base1", src: "assets/sound2.wav" ,parent:1, play: 1},
{ name: "Base2", src: "assets/sound3.wav" ,parent:1, play: 1},
{ name: "Base3", src: "assets/sound4.wav" ,parent:1, play: 1},
{ name: "Base4", src: "assets/sound5.wav" ,parent:1, play: 1},
{ name: "Base5", src: "assets/sound6.wav" ,parent:1, play: 1},
{ name: "Base6", src: "assets/sound7.wav" ,parent:1, play: 1},
{ name: "Base7", src: "assets/sound8.wav" ,parent:1, play: 1},
{ name: "Base8", src: "assets/sound9.wav" ,parent:1, play: 1},
{ name: "Base9", src: "assets/sound10.wav" ,parent:1, play: 1},
{ name: "Base10", src: "assets/sound11.wav" ,parent:1, play: 1},
{ name: "Base11", src: "assets/sound12.wav" ,parent:1, play: 1}
]

let data2 = [
  { name: "Base0", src: "assets/sound13.wav" ,parent:2, play: 1},
{ name: "Base1", src: "assets/sound14.wav" ,parent:2, play: 1},
{ name: "Base2", src: "assets/sound15.wav" ,parent:2, play: 1},
{ name: "Base3", src: "assets/sound16.wav" ,parent:2, play: 1},
{ name: "Base4", src: "assets/sound17.wav" ,parent:2, play: 1},
{ name: "Base5", src: "assets/sound18.wav" ,parent:2, play: 1},
{ name: "Base6", src: "assets/sound19.wav" ,parent:2, play: 1},
{ name: "Base7", src: "assets/sound20.wav" ,parent:2, play: 1}
]

let data3 = [
  { name: "bass", src: "assets/sound1.wav",parent:3,play: 1 },
  { name: "harmony", src: "assets/sound2.wav" ,parent:3, play: 1},
  { name: "melody", src: "assets/sound3.wav" ,parent:3, play: 1},
  { name: "percussion", src: "assets/sound4.wav" ,parent:3, play: 1},
  { name: "rhythm", src: "assets/sound5.wav" ,parent:3, play: 1},
  { name: "rhythm2", src: "assets/sound6.wav" ,parent:3, play: 1},
  { name: "rhythm3", src: "assets/sound7.wav" ,parent:3, play: 1},
  { name: "bass2", src: "assets/sound8.wav" ,parent:3, play: 1},
  { name: "percussion1", src: "assets/sound9.wav" ,parent:3, play: 1},
  { name: "riff1", src: "assets/sound10.wav" ,parent:3, play: 1},
  { name: "riff2", src: "assets/sound11.wav" ,parent:3, play: 1},
  { name: "riff3", src: "assets/sound12.wav" ,parent:3, play: 1}
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
      
      // console.log(event.relatedTarget)
      var audio = document.getElementById('audio');
      
          //  console.log(iiid);

      playing=playing.filter((element)=>{return element!==event.relatedTarget})

var flagcheck = 0;
      for(var j=0; j<playlist.length; j++){
flagcheck = 1
        if(event.relatedTarget == playlist[j]){
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

    function playAll(flag){
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
      // console.log(mutedlist)
    for(let m=0; m<mutedlist.length; m++){
      sound = new Howl({
       src: [mutedlist[m]['src']]
     });
     if(flag == 0){
      mutedlist[m].play();
      let aaa = (document.getElementById("play_all"));
                    aaa.removeAttribute('onclick');
     }
     else if(flag==1){
      location.reload();
      Howler.stop();
      }
    

    }

    // var valueM = parseInt(data_count);
    // if(valueM%4==1){
    //   valueN=Math.floor(valueM/4);
    // }
    // console.log(valueM)
    var x = window.matchMedia("(max-width: 767px)")
    if(x.matches){
      var elem = document.getElementById("inner-dropzone");
      elem.style.width="22rem";
      elem.style.height="22rem";
      elem.style.borderImage="url('assets/border-image.png') 200 40 / 293px 52px / 37px stretch";
      if(Soption==1){
      for(let j=0; j<3; j++){
        document.getElementById(j).style.left="15";
        document.getElementById(j).style.top="215";
        document.getElementById(j).style.minWidth="80px";
        document.getElementById(j).style.zIndex="-100";
      }
      for(let j=3; j<6; j++){
        document.getElementById(j).style.left="5";
        document.getElementById(j).style.top="230";
        document.getElementById(j).style.minWidth="80px";
        document.getElementById(j).style.zIndex="-100";
      }
      for(let j=6; j<9; j++){
        document.getElementById(j).style.left="15";
        document.getElementById(j).style.top="-175";
        document.getElementById(j).style.minWidth="80px";
        document.getElementById(j).style.zIndex="-100";
      }
      for(let j=9; j<12; j++){
        document.getElementById(j).style.left="15";
        document.getElementById(j).style.top="-185";
        document.getElementById(j).style.minWidth="80px";
        document.getElementById(j).style.zIndex="-110";
      }
    }
    if(Soption==2){
      for(let j=0; j<4; j++){
        document.getElementById(j).style.left="5";
        document.getElementById(j).style.top="230";
        document.getElementById(j).style.minWidth="80px";
        document.getElementById(j).style.zIndex="-100";
      }
      for(let j=4; j<9; j++){
        document.getElementById(j).style.left="15";
        document.getElementById(j).style.top="-225";
        document.getElementById(j).style.minWidth="80px";
        document.getElementById(j).style.zIndex="-110";
      }
    }
  }else{

    var elem = document.getElementById("inner-dropzone");
    elem.style.width="26rem";
    elem.style.height="26rem";
    elem.style.borderImage="url('assets/border-image.png') 200 40 / 293px 52px / 70px stretch";
    if(Soption==1){
    for(let j=0; j<3; j++){
      document.getElementById(j).style.left="345";
      document.getElementById(j).style.top="245";
      document.getElementById(j).style.zIndex="-100";
    }
    for(let j=3; j<6; j++){
      document.getElementById(j).style.left="445";
      document.getElementById(j).style.top="-10";
      document.getElementById(j).style.zIndex="-100";
    }
    for(let j=6; j<9; j++){
      document.getElementById(j).style.left="-190";
      document.getElementById(j).style.top="190";
      document.getElementById(j).style.zIndex="-100";
    }
    for(let j=9; j<12; j++){
      document.getElementById(j).style.left="-120";
      document.getElementById(j).style.top="10";
      document.getElementById(j).style.zIndex="-100";
    }
  }
  if(Soption==2){
    for(let j=0; j<4; j++){
      document.getElementById(j).style.left="395";
      document.getElementById(j).style.top="215";
      document.getElementById(j).style.zIndex="-100";
    }
    for(let j=4; j<9; j++){
      document.getElementById(j).style.left="-190";
      document.getElementById(j).style.top="200";
      document.getElementById(j).style.zIndex="-100";
    }
  }
}
    
      }
      

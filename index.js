
let playlist = [];
let checkCurnnt = 0;
var size = 15;
var sizee = 15;
var sizee_mob = 12;
var px = 150;
var pxx = 30;
var sound,newsrc;
let playing=[],mutedlistid=[],listelements=[],mutedlist=[];

var iiid;
function init()
{
  var sound;
  for(let m=0; m<data.length; m++){
    sound = new Howl({
     src: [data[m]['src']],
     loop: true,
   })
// sound.play();
// Howler.mute(true);

   var id = sound.play();
   mutedlistid[m] = id;
   mutedlist[m] = sound;

   sound.mute(true , id);
   console.log(id,data[m]['src'])
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

 function nowplay(){
  for(let m=0; m<listelements.length; m++){
       
    var eleme = listelements[m]
 var songID = eleme.getAttribute("id");
 mutedlist[songID].mute(true ,  mutedlistid[songID]);
 mutedlist[songID].pause(false, mutedlistid[songID]);

}
 }
 function nowpause(){
  for(let m=0; m<listelements.length; m++){
       
    var eleme = listelements[m]
 var songID = eleme.getAttribute("id");
 // var id = mutedlist[songID].play();
 mutedlist[songID].mute(false ,  mutedlistid[songID]);
 mutedlist[songID].pause();
}

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
  {src:"assets/base-bg5.png"},
  {src:"assets/base-bg6.png"},
  {src:"assets/base-bg7.png"}
]

let data = [
{ name: "Base0", src: "assets/sound1.mp3",sound: "",play: 1 },
{ name: "Base1", src: "assets/sound2.wav" ,sound: "", play: 1},
{ name: "Base2", src: "assets/sound3.wav" ,sound: "", play: 1},
{ name: "Base3", src: "assets/sound4.wav" ,sound: "", play: 1},
{ name: "Base4", src: "assets/sound5.wav" ,sound: "", play: 1},
{ name: "Base5", src: "assets/sound6.wav" ,sound: "", play: 1},
{ name: "Base6", src: "assets/sound7.wav" ,sound: "", play: 1},
{ name: "Base7", src: "assets/sound8.wav" ,sound: "", play: 1},
{ name: "Base8", src: "assets/sound9.wav" ,sound: "", play: 1},
{ name: "Base9", src: "assets/sound10.wav" ,sound: "", play: 1}

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
                      sty.style.borderImage = "url('assets/border-image.png') 200 40 / "+px+"px "+pxx+"px / "+size+"px"
               
                 flagcheck=0;
              } else {
                size=size-5
                sizee--
                px=px-13
                pxx=pxx-2
                      sty.style.width = sizee+'rem';
                      sty.style.height = sizee+'rem';
                      sty.style.borderImage = "url('assets/border-image.png') 200 40 / "+px+"px "+pxx+"px / "+size+"px"
               
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
        sty.style.borderImage = "url('assets/border-image.png') 200 40 / "+px+"px "+pxx+"px / "+size+"px"

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
            sty.style.borderImage = "url('assets/border-image.png') 200 40 / "+px+"px "+pxx+"px / "+size+"px"
    
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

    
    function playAll(flag){
      var sound;
    for(let m=0; m<data.length; m++){
      sound = new Howl({
       src: [data[m]['src']]
     });
     if(flag == 0){
      sound.play();
     }
     else if(flag==1){
      Howler.stop();
      }
    

    }   
      }

    
    
    
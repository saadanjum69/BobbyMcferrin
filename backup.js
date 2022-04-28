/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

// enable draggables to be dropped into this
let playlist = [];
let checkCurnnt = 0;
var size = 15;
var px = 150;
var pxx = 30;
function init()
{
 
  
    document.addEventListener('click', function(evt) { 
        if (evt.target.tagName.toLowerCase() == 'div') { 
          // console.log(evt.target);
                // play(evt.target); 
        
        } }, true);
}

function skip()
{
 }
//  function seq(){
// if(playlist.length !=0 ){
// for(var i=0; i<=playlist.length; i++){

//   play(playlist[i]);

// }
// }
// return true;
//  }
function play(palylistarray,firstElem)
{
  var k=0;
   
    for(var i=0; i<palylistarray.length; i++){
      var audioid;
      audioid = "audio"+i;
      console.log(audioid)

var audio = document.getElementById(audioid);
    elem = palylistarray[i];
//    elem.classList.remove('playing');

    // var text =elem? elem.getAttribute("src"):firstElem.getAttribute("src");
    if(!elem){
        elem=firstElem
    }
    // console.log(palylistarray)
    audio.src = elem.getAttribute("src");
    // console.log( elem.getAttribute("src"))
     audio.play();
    elem.classList.add('playing');

    skip = function(a)
    {
          
              if(palylistarray.length != 1){
      var firstelement = palylistarray[0]
              palylistarray.splice(0,1);        
              palylistarray.push(firstelement);                 
              }
              console.log(a)
           play(palylistarray)

               
         
    }
    k++;
  }
  checkCurnnt = k;
  }

let bg_image = [
  {src:"assets/base-bg.png"},
  {src:"assets/base-bg2.png"},
  {src:"assets/base-bg3.png"},
  {src:"assets/base-bg4.png"},
  {src:"assets/base-bg5.png"}
]

let data = [
{ name: "Base0", src: "assets/sound1.wav" },
{ name: "Base1", src: "assets/sound2.wav" },
{ name: "Base2", src: "assets/sound3.wav" },
{ name: "Base3", src: "assets/sound4.wav" },
{ name: "Base4", src: "assets/sound5.wav" },
{ name: "Base5", src: "assets/sound6.wav" },
{ name: "Base6", src: "assets/sound7.wav" },
{ name: "Base7", src: "assets/sound8.wav" },
{ name: "Base8", src: "assets/sound9.wav" },
{ name: "Base9", src: "assets/sound10.wav" }

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
      
           
var flagcheck = 0;
      for(var j=0; j<playlist.length; j++){

        if(event.relatedTarget == playlist[j]){
           playlist.splice(j,1)
flagcheck = 1
            if(event.relatedTarget.getAttribute("src") == audio.getAttribute("src")){
              audio.src = '';
              //  play(playlist);
               console.log(audio.src)
              
            }
            const sty = document.querySelector('#inner-dropzone');
          if(flagcheck == 1){
  
   size--
  px=px-10
  pxx=pxx-2
  sty.style.width = size+'rem';
        sty.style.height = size+'rem';
        sty.style.borderImage = "url('assets/border-image.png') 200 40 / "+px+"px "+pxx+"px / 1rem"
 
  console.log(size)
  flagcheck=0;
}  


if(playlist.length == 0){
 
  // play(playlist);
   audio.src = '';
}
// play(playlist);
        }

      }
    
  //  console.log(playlist)
     
    },
    ondrop: function (event) {
      console.log("wah g wah dropped")
      // event.relatedTarget.textContent = 'Dropped'
      const sty = document.querySelector('#inner-dropzone');
     var flagnew=1;
      if(!playlist.includes(event.relatedTarget)){
        playlist.push(event.relatedTarget)
        sty.style.width = size+'rem';
        sty.style.height = size+'rem';
        sty.style.borderImage = "url('assets/border-image.png') 200 40 / "+px+"px "+pxx+"px / 1rem"

         size++
         px=px+10
         pxx=pxx+2
    
     }

    //  playlist = [...new Set(playlist)];
        // seq();
        if(playlist.length == flagnew ){
          flagnew=0;
          play(playlist);
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
          restriction: 'parent',
          endOnly: true
        })
      ],
      autoScroll: true,
      // dragMoveListener from the dragging demo above
      listeners: { move: dragMoveListener }
    })

    
    // var flag = 0;
    function playAll(flag){
      var sound;
        // console.log(document.getElementById('pause_btn').onclick);
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

    
    
    
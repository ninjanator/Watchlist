var i;
var videos = document.querySelectorAll('video');

for (i = 1; i < videos.length + 1; i ++ ){

    videoid = 'vid'+i;

    document.getElementById(videoid).addEventListener('mouseenter',function(e){
        Play(e.target.videoid);
    }, false);

    document.getElementById(videoid).addEventListener('mouseleave',function(e){
      Pause(e.target.videoid);
    }, false);


    function Pause() {
      document.getElementById(videoid).pause()
      console.log('paused')
    }

    function Play() {
      document.getElementById(videoid).play()
      console.log('playing')
    }
};









// var myVideo = document.querySelector("video");
//
// function Pause() {
//   myVideo.pause();
// }
//
// function Play() {
//   if (myVideo.paused)
//     myVideo.play();
// }

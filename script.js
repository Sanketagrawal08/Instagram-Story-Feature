
const users = [
    {
      name: "Alice",
      dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      story: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Bob",
      dp: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      story: "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
    },
    {
      name: "Charlie",
      dp: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      story: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
    },
    {
      name: "Diana",
      dp: "https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=YBSe3jKmA6zZgE5U2ojmXjWf6h-Oo2ocdpfL9qMOLao=",
      story: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Eve",
      dp: "https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=YBSe3jKmA6zZgE5U2ojmXjWf6h-Oo2ocdpfL9qMOLao=",
      story: "https://media.istockphoto.com/id/938709362/photo/portrait-of-a-girl.webp?a=1&b=1&s=612x612&w=0&k=20&c=WNAd2QlsKBev4QdNoX7aumAZ--5uC7zJFAGKkSSOltQ="
    },
    {
      name: "Frank",
      dp: "https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=0ez7MLSYsOlKDghpVAUDMVf_gT5B_DfKmRNKqElOLUA=",
      story: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=OnzQRmrTWj779-DI4_aEykdTKuwL-Ubphs1cdQ3tyxE="
    }
  ];
  
  var clutter = " ";
var storiyan = document.querySelector("#storiyan")
var storydiv = document.querySelector(".storydiv")
var progress=  document.querySelector("#progress")
var growth=  document.querySelector("#growth")
var time = 0;

var profile = document.querySelector(".profile");
var username = document.querySelector(".username h4")
var dp = document.querySelector(".dp")
var close = document.querySelector(".close")


  users.forEach(function(elem,index){
    clutter += `<div class="story">
                <img id = "${index}" src="${elem.dp}" alt="">
                <h6>${elem.name}</h6>
                </div>`    
  });

  storiyan.innerHTML = clutter;
  
  storiyan.addEventListener("click",function(dets){
       var targetObject = users[dets.target.id];

       storydiv.style.display = "block"
       storydiv.style.backgroundImage = `url(${targetObject.story})`
       dp.style.backgroundImage = `url(${targetObject.dp})`
       username.innerHTML = targetObject.name;
    
     var timeInterval =  setInterval(function(){
        time++;
        growth.style.width = time +"%";
        
      },50)
        
      setTimeout(() => { 
        storydiv.style.display = "none"
        clearInterval(timeInterval)
        time=0;
      }, 5000);
        
   close.addEventListener("click",function(){
    clearInterval(timeInterval)
    time=0;
    storydiv.style.display = "none"
    
   })

  });  



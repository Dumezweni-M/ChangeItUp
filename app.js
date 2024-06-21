 const cards = document.querySelectorAll(".one")

 const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
         entry.target.classList.toggle("show", entry.isIntersecting)
             if(entry.isIntersecting) observer.unobserve(entry.target)
     })
 })

 cards.forEach(one => {
 observer.observe(one)
 })










//cursor code here

 const cursor = document.querySelector(".cursor");
 var timeout;

//follow cursor on mouse move
 document.addEventListener("mousemove", (e) => {
     let y = e.pageX;
     let x = e.pageY;


     cursor.style.top = x + "px";
     cursor.style.left = y + "px";
     cursor.style.display = "block";

     //effects on mouse stop
     // function mouseStopped(){
     //     cursor.style.display = "none";
     // }
     // clearTimeout(timeout);
     // timeout = setTimeout(mouseStopped, 1000);
 })

// //mouseout 
 document.addEventListener("mouseout",() => {
     cursor.style.display = "none";
 })






 

let text = "Web Developer | Software Intern | Tech Enthusiast";
let i = 0;
function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,80);
  }
}
typing();
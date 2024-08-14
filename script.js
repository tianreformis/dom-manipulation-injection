document.querySelector('body').style.fontFamily="Poppins";

let navbar = document.getElementById("navbar");

navbar.innerHTML = '<a href="/aboutme">About Me</a> | <a href="/aboutme">Contact Me</a> | <a href="/aboutme">Portofolio</a> |';

navbar.style.border="1px solid black"
navbar.style.display="flex";
navbar.style.justifyContent="end";

document.querySelector('a').style.textDecoration="none";
document.querySelector('a').style.color="black";


let content=document.getElementById('content');
content.style.gap='2em';
content.style.margin='2em';
content.style.display='flex';
content.style.justifyContent='space-between';

let title=document.getElementById("title");
title.innerHTML=" Collaborating With Me";
title.style.fontWeight="Bold"
title.style.fontSize="3rem"

let subtitle=document.getElementById("subtitle");
subtitle.innerHTML=" Iam a student passionated with UI <br> and UX Design folow and hire me for more info";
subtitle.style.fontWeight="normal"
subtitle.style.fontSize="1rem"


let image=document.getElementById('image');
image.style.minWidth='10em';
image.style.minHeight='10em';
image.style.width='20em';
image.style.height='20em';

image.style.backgroundImage="url('https://picsum.photos/seed/picsum/500/500')";
image.style.borderRadius='50%';

let button = document.querySelector('button');
button.style.fontFamily="Poppins";
button.style.width=('7em');
button.style.height=('3em');
button.innerHTML="Hire Me";
button.style.marginTop="5em";
button.style.backgroundColor="greenyellow";
button.style.padding="0.5em";
button.style.border="none";
button.style.borderRadius="5px";
button.style.cursor="pointer";

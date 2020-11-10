function onError(error) {
  console.log(`Error: ${error}`);
}
// use activeTab permission to put buttons on pages
// which onclick add tab.url to storage.local
function onGot(item) {
  let result = [];
  console.log(item);
  const header = (document.querySelector('.HeaderNav')) ? document.querySelector('.HeaderNav') : document.querySelector('.UnauthorizedHeader');
  console.log(header);
//  for (let i = 0; i > item.vk.length; i++) {
//  div.appendChild(<li><a href="item.vk[i]">item.vk[i]</a></li>);
//}
  let div = document.createElement("div");
  div.style.width = "48px";
  div.style.height = "48px";
//div.style.backgroundImage = url(`${icon}`);
  console.log(icon);
  header.appendChild(div);
}

let getting = browser.storage.local.get("vk");
getting.then(onGot, onError);
/*
.border-menu {
width: 48px;
height: 48px;
background-color: gray;
border-radius: 100%;
position: relative;
}

.border-menu::before {
content: "";
position: absolute;
top: 6px;
left: 14px;
width: 20px;
height: 6px;
border-top: 20px double #000;
border-bottom: 8px solid #000;
}

*/

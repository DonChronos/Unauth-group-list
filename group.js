function onError(error) {
  console.log(`Error: ${error}`);
}
console.log('extension code start')
// use activeTab permission to put buttons on pages
// which onclick add tab.url to storage.local
function onGot(item) {
  let result = [];
  console.log(item);
  console.log(header);
  console.log(window.location.hostname);
  let hostname = window.location.hostname;
  let menu = document.createElement("div");
  console.log(menu);
  menu.classList.add("dropdown-menu");
  // refactor next 2 lines - put document.querySelector inside if-block;
  const header = (document.querySelector('.HeaderNav')) ? document.querySelector('.HeaderNav')
  : document.body;
  if (document.querySelector('HeaderNav')) {
    header.appendChild(menu);
  } else {
    header.prepend(menu);
  }
  let btn = document.createElement("button");
  btn.classList.add("dropdown-btn");
  menu.appendChild(btn);
  let content = document.createElement("div");
  content.classList.add("dropdown-content");
  menu.appendChild(content);
  for (let i = 0; i < item.vk.length; i++) {
    console.log('loop')
    let href = item.vk[i];
    let link = document.createElement("a");
    link.appendChild(document.createTextNode(item.vk[i]));
    link.href = href;
    content.appendChild(link);
  }
}

let getting = browser.storage.local.get("vk");
getting.then(onGot, onError);

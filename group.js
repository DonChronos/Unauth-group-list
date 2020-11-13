function onError(error) {
  console.log(`Error: ${error}`);
}
console.log('extension code start')
// use activeTab permission to put buttons on pages
// which onclick add tab.url to storage.local
function onGot(item) {
  let result = [];
  console.log(item);
  const header = (document.querySelector('.HeaderNav')) ? document.querySelector('.HeaderNav') : document.querySelector('.UnauthorizedHeader');
  console.log(header);
  console.log(window.location.hostname);
  let hostname = window.location.hostname;
  let div = document.createElement("div");
  console.log(div);
  div.classList.add("dropdown-menu");
  header.appendChild(div);
  for (let i = 0; i < item.vk.length; i++) {
    console.log('loop')
    let href = item.vk[i];
    let link = document.createElement("a");
    link.appendChild(document.createTextNode(item.vk[i]));
    link.href = href;
    div.appendChild(link);
  }
}

let getting = browser.storage.local.get("vk");
getting.then(onGot, onError);


let styleURL = browser.runtime.getURL("dropdown.css");
let inserting = browser.tabs.insertCSS({file: styleURL});
inserting.then(null, onError);

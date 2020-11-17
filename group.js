function onError(error) {
  console.log(`Error: ${error}`);
}
console.log('extension code start')
let urlMiddleWord = window.location.hostname.split('.').reverse()[1];

function onGot(item) {
  let result = [];
  console.log(item);
  console.log(urlMiddleWord);
  let menu = document.createElement("div");
  console.log(menu);
  menu.classList.add("dropdown-menu");
  if (document.querySelector('.HeaderNav')) {
    console.log('1');
    document.querySelector('.HeaderNav').appendChild(menu);
  } else {
    document.body.prepend(menu);
  }
  let btn = document.createElement("button");
  btn.classList.add("dropdown-btn");
  menu.appendChild(btn);
  let content = document.createElement("div");
  content.classList.add("dropdown-content");
  menu.appendChild(content);
  for (let i = 0; i < item[urlMiddleWord].length; i++) {
    console.log('loop')
    let href = item[urlMiddleWord][i];
    let link = document.createElement("a");
    link.appendChild(document.createTextNode(item[urlMiddleWord][i]));
    link.href = href;
    content.appendChild(link);
  }
}

let getting = browser.storage.local.get(urlMiddleWord);
getting.then(onGot, onError);

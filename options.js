function saveOptions(e) {
  e.preventDefault();
  let list = document.querySelector("#ul");
  let item = document.createElement("li");
  item.classList.add("list_item");
  item.appendChild(document.createTextNode(document.querySelector("#page").value));
  list.appendChild(item);
  let listItems = document.querySelectorAll('.list_item');
  let options = [];
  for (let i = 0; i < listItems.length; i++) {
    options.push(listItems[i].innerHTML);
  }
  browser.storage.local.set({
    vk: [...options],
  });
}
function restoreOptions() {
  function setCurrentChoice(result) {
    let list = document.querySelector("#ul");
    console.log(result);
    for (let i = 0; i < result.vk.length; i++) {
      let item = document.createElement('li');
      item.classList.add("list_item");
      item.appendChild(document.createTextNode(result.vk[i]));
      list.appendChild(item);
    }
  }
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.local.get("vk");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

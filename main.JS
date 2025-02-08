function addtask() {
  let thetaskD = document.querySelector(".tasks");
  let thetaskT = document.createTextNode(
    document.querySelector(".input").value
  );
  let thetask = document.createElement("div");
  let p = document.createElement("p");
  let delet = document.createElement("button");
  let deletT = document.createTextNode("delet");

  delet.append(deletT);
  delet.className = "delet";

  p.append(thetaskT);
  p.style.display = "inline";
  thetask.append(p);
  thetask.append(delet);

  thetaskD.append(thetask);

  console.log(" xfbbxfs");
  console.log(thetaskT.parentElement.innerText);

  window.localStorage.setItem(
    thetaskT.parentElement.innerText,
    thetaskT.parentElement.innerText
  );
}

for (let i = 0; i < window.localStorage.length; i++) {
  let thetaskD = document.querySelector(".tasks");
  let thetask = document.createElement("div");
  let delet = document.createElement("button");
  let deletT = document.createTextNode("delet");
  let p = document.createElement("p");

  delet.className = "delet";
  delet.append(deletT);

  p.append(window.localStorage.key(i));
  p.style.display = "inline";

  thetask.append(p);
  thetask.append(delet);

  thetaskD.append(thetask);
}

let deletB = document.querySelector(".delet");

document.addEventListener("click", function (e) {
  if (e.target.className === "delet") {
    e.target.parentElement.remove();
    window.localStorage.removeItem(e.target.parentElement.firstChild.innerText);
    console.log(e.target.parentElement.firstChild.innerText);
  }
});

let thebutton = document.querySelector(".add");
console.log(thebutton);

thebutton.onclick = function () {
  addtask();
};

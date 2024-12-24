

let optionsbutton = document.querySelectorAll(".options-button");
let advoptionsbutton = document.querySelectorAll(".adv-options-button");
let fontname = document.querySelector("#fontname");
let fontsize = document.querySelector("#fontsize");
let writingarea = document.querySelector("#text-input");
let linkbutton = document.querySelector("#createlink");
let alignbutton = document.querySelectorAll(".align");
let spacingbutton = document.querySelectorAll(".spacing");
let formatbutton = document.querySelectorAll(".format");
let scriptbutton = document.querySelectorAll(".script");

let fontlist = ["Arial", "Times New Roman", "Georgia", "Cursive", "Verdana"];

const initializer = () => {
  highlighter(alignbutton, true);
  highlighter(spacingbutton, true);
  highlighter(formatbutton, false);
  highlighter(scriptbutton, true);

  fontlist.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontname.append(option);
  });

  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontsize.append(option);
  }

  fontsize.value = 3;
};

const modfytext = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value);
};

optionsbutton.forEach((button) => {
  button.addEventListener("click", () => {
    modfytext(button.id, false, null);
  });
});

advoptionsbutton.forEach((button) => {
  button.addEventListener("change", () => {
    modfytext(button.id, false, button.value);
  });
});

linkbutton.addEventListener("click", () => {
  let userlink = prompt("Enter a URL:");
  if (/http/i.test(userlink)) {
    modfytext("createLink", false, userlink);
  } else {
    userlink = "http://" + userlink;
    modfytext("createLink", false, userlink);
  }
});

const highlighter = (classname, needRemoval) => {
  classname.forEach((button) => {
    button.addEventListener("click", () => {
      if (needRemoval) {
        let alreadyActive = false;
        if (button.classList.contains("active")) {
          alreadyActive = true;
        }
        highlighterRemover(classname);
        if (!alreadyActive) {
          button.classList.add("active");
        }
      } else {
        button.classList.toggle("active");
      }
    });
  });
};

const highlighterRemover = (classname) => {
  classname.forEach((button) => {
    button.classList.remove("active");
  });
};

window.onload = initializer;

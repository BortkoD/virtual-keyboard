const body = document.querySelector("body");

var wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

const textField = document.createElement("textarea");

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");

var keyboardRow = document.createElement("div");
keyboardRow.classList.add("keyboard-row");

keyboard.appendChild(keyboardRow);

body.appendChild(wrapper);

wrapper.appendChild(textField);
wrapper.appendChild(keyboard);

const footer = document.createElement("div");
footer.classList.add("footer");

const footerText = document.createElement("p");
footerText.innerHTML = "Based on WinOS. Press Shift+Alt to change the language";
const footerLinkGh = document.createElement("a");
footerLinkGh.classList.add("gh-link");
footerLinkGh.href = "https://rolling-scopes-school.github.io/bortkod-JSFE2022Q1/VirtualKeyboard/";
const footerLinkTask = document.createElement("a");
footerLinkTask.classList.add("task-link");
footerLinkTask.href = "https://github.com/rolling-scopes-school/bortkod-JSFE2022Q1/pull/22";

footer.appendChild(footerText);
footer.appendChild(footerLinkGh);
footer.appendChild(footerLinkTask);

body.appendChild(footer);

var textarea = document.querySelector("textarea").focus();
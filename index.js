const keys = [
    {
        layout: "`",
        layout_caps: "~",
        layout_ru: "ё",
        layout_caps_ru: "Ё",
        code: 'Backquote'
    }, {
        layout: "1",
        layout_caps: "!",
        layout_ru: "1",
        layout_caps_ru: "!",
        code: 'Digit1'
    }, {
        layout: "2",
        layout_caps: "@",
        layout_ru: "2",
        layout_caps_ru: "\"",
        code: 'Digit2'
    }, {
        layout: "3",
        layout_caps: "#",
        layout_ru: "3",
        layout_caps_ru: "№",
        code: 'Digit3'
    }, {
        layout: "4",
        layout_caps: "$",
        layout_ru: "4",
        layout_caps_ru: ";",
        code: 'Digit4'
    }, {
        layout: "5",
        layout_caps: "%",
        layout_ru: "5",
        layout_caps_ru: "%",
        code: 'Digit5'
    }, {
        layout: "6",
        layout_caps: "^",
        layout_ru: "6",
        layout_caps_ru: ":",
        code: 'Digit6'
    }, {
        layout: "7",
        layout_caps: "&",
        layout_ru: "7",
        layout_caps_ru: "?",
        code: 'Digit7'
    }, {
        layout: "8",
        layout_caps: "*",
        layout_ru: "8",
        layout_caps_ru: "*",
        code: 'Digit8'
    }, {
        layout: "9",
        layout_caps: "(",
        layout_ru: "9",
        layout_caps_ru: "(",
        code: 'Digit9'
    }, {
        layout: "0",
        layout_caps: ")",
        layout_ru: "0",
        layout_caps_ru: ")",
        code: 'Digit0'
    }, {
        layout: "-",
        layout_caps: "_",
        layout_ru: "-",
        layout_caps_ru: "_",
        code: 'Minus'
    }, {
        layout: "=",
        layout_caps: "+",
        layout_ru: "=",
        layout_caps_ru: "+",
        code: 'Equal'
    }, {
        layout: "",
        layout_caps: "",
        layout_ru: "",
        layout_caps_ru: "",
        img: "url('./assets/svg/backspace.svg')",
        code: 'Backspace'
    },
    {
        layout: "Tab",
        layout_caps: "Tab",
        layout_ru: "Tab",
        layout_caps_ru: "Tab",
        code: 'Tab'
    }, {
        layout: "q",
        layout_caps: "Q",
        layout_ru: "й",
        layout_caps_ru: "Й",
        code: 'KeyQ'
    }, {
        layout: "w",
        layout_caps: "W",
        layout_ru: "ц",
        layout_caps_ru: "Ц",
        code: 'KeyW'
    }, {
        layout: "e",
        layout_caps: "E",
        layout_ru: "у",
        layout_caps_ru: "У",
        code: 'KeyE'
    }, {
        layout: "r",
        layout_caps: "R",
        layout_ru: "к",
        layout_caps_ru: "К",
        code: 'KeyR'
    }, {
        layout: "t",
        layout_caps: "T",
        layout_ru: "е",
        layout_caps_ru: "Е",
        code: 'KeyT'
    }, {
        layout: "y",
        layout_caps: "Y",
        layout_ru: "н",
        layout_caps_ru: "Н",
        code: 'KeyY'
    }, {
        layout: "u",
        layout_caps: "U",
        layout_ru: "г",
        layout_caps_ru: "Г",
        code: 'KeyU'
    }, {
        layout: "i",
        layout_caps: "I",
        layout_ru: "ш",
        layout_caps_ru: "Ш",
        code: 'KeyI'
    }, {
        layout: "o",
        layout_caps: "O",
        layout_ru: "щ",
        layout_caps_ru: "Щ",
        code: 'KeyO'
    }, {
        layout: "p",
        layout_caps: "P",
        layout_ru: "з",
        layout_caps_ru: "З",
        code: 'KeyP'
    }, {
        layout: "[",
        layout_caps: "{",
        layout_ru: "х",
        layout_caps_ru: "Х",
        code: 'BracketLeft'
    }, {
        layout: "]",
        layout_caps: "}",
        layout_ru: "ъ",
        layout_caps_ru: "Ъ",
        code: 'BracketRight'
    }, {
        layout: "\\",
        layout_caps: "|",
        layout_ru: "\\",
        layout_caps_ru: "|",
        code: 'Backslash'
    }, {
        layout: "Del",
        layout_caps: "Del",
        layout_ru: "Del",
        layout_caps_ru: "Del",
        code: 'Delete'
    },
    {
        layout: "Caps",
        layout_caps: "Caps",
        layout_ru: "Caps",
        layout_caps_ru: "Caps",
        code: 'CapsLock'
    }, {
        layout: "a",
        layout_caps: "A",
        layout_ru: "ф",
        layout_caps_ru: "Ф",
        code: 'KeyA'
    }, {
        layout: "s",
        layout_caps: "S",
        layout_ru: "ы",
        layout_caps_ru: "Ы",
        code: 'KeyS'
    }, {
        layout: "d",
        layout_caps: "D",
        layout_ru: "в",
        layout_caps_ru: "В",
        code: 'KeyD'
    }, {
        layout: "f",
        layout_caps: "F",
        layout_ru: "а",
        layout_caps_ru: "А",
        code: 'KeyF'
    }, {
        layout: "g",
        layout_caps: "G",
        layout_ru: "п",
        layout_caps_ru: "П",
        code: 'KeyG'
    }, {
        layout: "h",
        layout_caps: "H",
        layout_ru: "р",
        layout_caps_ru: "Р",
        code: 'KeyH'
    }, {
        layout: "j",
        layout_caps: "J",
        layout_ru: "о",
        layout_caps_ru: "О",
        code: 'KeyJ'
    }, {
        layout: "k",
        layout_caps: "K",
        layout_ru: "л",
        layout_caps_ru: "Л",
        code: 'KeyK'
    }, {
        layout: "l",
        layout_caps: "L",
        layout_ru: "д",
        layout_caps_ru: "Д",
        code: 'KeyL'
    }, {
        layout: ";",
        layout_caps: ":",
        layout_ru: "ж",
        layout_caps_ru: "Ж",
        code: 'Semicolon'
    }, {
        layout: "'",
        layout_caps: "\"",
        layout_ru: "э",
        layout_caps_ru: "Э",
        code: 'Quote'
    }, {
        layout: "  ",
        layout_caps: "  ",
        layout_ru: "  ",
        layout_caps_ru: "  ",
        img: "url('./assets/svg/enter.svg')",
        code: 'Enter'
    },
    {
        layout: "Shift",
        layout_caps: "Shift",
        layout_ru: "Shift",
        layout_caps_ru: "Shift",
        code: 'ShiftLeft'
    }, {
        layout: "z",
        layout_caps: "Z",
        layout_ru: "я",
        layout_caps_ru: "Я",
        code: 'KeyZ'
    }, {
        layout: "x",
        layout_caps: "X",
        layout_ru: "ч",
        layout_caps_ru: "Ч",
        code: 'KeyX'
    }, {
        layout: "c",
        layout_caps: "C",
        layout_ru: "с",
        layout_caps_ru: "С",
        code: 'KeyC'
    }, {
        layout: "v",
        layout_caps: "V",
        layout_ru: "м",
        layout_caps_ru: "М",
        code: 'KeyV'
    }, {
        layout: "b",
        layout_caps: "B",
        layout_ru: "и",
        layout_caps_ru: "И",
        code: 'KeyB'
    }, {
        layout: "n",
        layout_caps: "N",
        layout_ru: "т",
        layout_caps_ru: "Т",
        code: 'KeyN'
    }, {
        layout: "m",
        layout_caps: "M",
        layout_ru: "ь",
        layout_caps_ru: "Ь",
        code: 'KeyM'
    }, {
        layout: ",",
        layout_caps: "<",
        layout_ru: "б",
        layout_caps_ru: "Б",
        code: 'Comma'
    }, {
        layout: ".",
        layout_caps: ">",
        layout_ru: "ю",
        layout_caps_ru: "Ю",
        code: 'Period'
    }, {
        layout: "/",
        layout_caps: "?",
        layout_ru: ".",
        layout_caps_ru: ",",
        code: 'Slash'
    }, {
        layout: "Shift",
        layout_caps: "Shift",
        layout_ru: "Shift",
        layout_caps_ru: "Shift",
        code: 'ShiftRight'
    },
    {
        layout: "Ctrl",
        layout_caps: "Ctrl",
        layout_ru: "Ctrl",
        layout_caps_ru: "Ctrl",
        code: 'ControlLeft'
    }, {
        layout: "Win",
        layout_caps: "Win",
        layout_ru: "Win",
        layout_caps_ru: "Win",
        code: 'MetaLeft'
    }, {
        layout: "Alt",
        layout_caps: "Alt",
        layout_ru: "Alt",
        layout_caps_ru: "Alt",
        code: 'AltLeft'
    }, {
        layout: " ",
        layout_caps: " ",
        layout_ru: " ",
        layout_caps_ru: " ",
        code: 'Space'
    }, {
        layout: "Alt",
        layout_caps: "Alt",
        layout_ru: "Alt",
        layout_caps_ru: "Alt",
        code: 'AltRight'
    }, {
        layout: "Ctrl",
        layout_caps: "Ctrl",
        layout_ru: "Ctrl",
        layout_caps_ru: "Ctrl",
        code: 'ControlRight'
    }, {
        layout: "   ",
        layout_caps: "   ",
        layout_ru: "   ",
        layout_caps_ru: "   ",
        img: "url('./assets/svg/left-arrow.svg')",
        code: 'ArrowLeft'
    }, {
        layout: "    ",
        layout_caps: "    ",
        layout_ru: "    ",
        layout_caps_ru: "    ",
        img: "url('./assets/svg/up-arrow.svg')",
        code: 'ArrowUp'
    }, {
        layout: "     ",
        layout_caps: "     ",
        layout_ru: "     ",
        layout_caps_ru: "     ",
        img: "url('./assets/svg/right-arrow.svg')",
        code: 'ArrowRight'
    }
];

var caps = false;
var shift = false;
var alt = false;

const manageBtns = ["", "Backspace", "Tab", "CapsLock", "Caps", "  ", "Enter", "Shift", "ShiftLeft", "ShiftRight", " ", "Space",
    "Alt", "AltLeft", "AltRight", "Ctrl", "ControlLeft", "ControlRight", "Win", "MetaLeft", "Del", "Delete", "   ", "ArrowLeft", "    ", "ArrowUp", "ArrowDown", "     ", "ArrowRight"];
const imageBtns = ["Backspace", "ArrowLeft", "ArrowUp", "ArrowRight", "Enter"];

const body = document.querySelector("body");

let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

const textField = document.createElement("textarea");

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");

let keyboardRow = document.createElement("div");
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

const textarea = document.querySelector("textarea").focus();


for (let i = 0; i < keys.length; i++) {
    if (i == 14 || i == 29 || i == 42 || i == 54) {
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");
        keyboard.appendChild(keyboardRow);
    }

    const button = document.createElement("div");

    if (keys[i].code == "ArrowUp") {
        var upButton = document.createElement("div");
        var downButton = document.createElement("div");
        button.classList.add("up-down-container");

        upButton.classList.add("keyboard-button", "ArrowUp", "image-button");
        upButton.style.height = "20px";
        upButton.style.backgroundImage = "url('./assets/svg/up-arrow.svg')";
        upButton.addEventListener("mousedown", (event) => {
            btnDown(upButton);
        });
        upButton.addEventListener("mouseup", (event) => {
            btnUp(upButton);
        });

        downButton.classList.add("keyboard-button", "ArrowDown", "image-button");
        downButton.style.height = "20px";
        downButton.style.backgroundImage = "url('./assets/svg/down-arrow.svg')";
        downButton.addEventListener("mousedown", (event) => {
            btnDown(downButton);
        });
        downButton.addEventListener("mouseup", (event) => {
            btnUp(downButton);
        });

        button.appendChild(upButton);
        button.appendChild(downButton);
    }
    else {
        button.classList.add("keyboard-button");
        button.classList.add(keys[i].code);

        if (keys[i].code == "Backslash" || keys[i].code == "Tab") button.classList.add("keyboard-button-long");
        if (keys[i].code == "CapsLock" || keys[i].code == "Enter" || keys[i].code == "Backspace") button.classList.add("keyboard-button-longer");
        if (keys[i].code == "ShiftLeft" || keys[i].code == "ShiftRight") button.classList.add("keyboard-button-longest");
        if (keys[i].code == "Space") button.classList.add("whitespace");

        if (imageBtns.indexOf(keys[i].code) != -1) {
            button.style.backgroundImage = keys[i].img;
            button.classList.add("image-button");
        }

        button.addEventListener("mousedown", (event) => {
            console.log(event.target);
            if (manageBtns.indexOf(event.target.innerHTML) == -1) {
                if (localStorage.getItem('lang') == "en" && !caps) textField.value = textField.value + keys[i].layout;
                else if (localStorage.getItem('lang') == "en" && caps) textField.value = textField.value + keys[i].layout_caps;
                else if (localStorage.getItem('lang') == "ru" && !caps) textField.value = textField.value + keys[i].layout_ru;
                else textField.value = textField.value + keys[i].layout_caps_ru;
            }
            else if (event.target.innerHTML === "  ") textField.value = textField.value + "\n";
            else if (event.target.innerHTML === "Tab") textField.value = textField.value + "    ";
            else if (event.target.innerHTML === "") textField.value = textField.value.slice(0, -1);
            else if (event.target.innerHTML === " ") textField.value = textField.value + " ";
            btnDown(button);
        });

        button.addEventListener("mouseup", (event) => {
            btnUp(button);
        });
    }

    keyboardRow.appendChild(button);
}

generateLayouts();

function btnDown(btn) {
    btn.style.marginTop = "6px";
    btn.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, .2)";
    btn.style.backgroundColor = "#a7cfff";
}

function btnUp(btn) {
        btn.style.marginTop = "0px";
        btn.style.boxShadow = "6px 6px 2px 1px rgba(0, 0, 0, .2)";
        btn.style.backgroundColor = "#9cbbf4";
}

function generateLayouts() {
    for (let i = 0; i < keys.length; i++) {
        let button = document.querySelector(`.${keys[i].code}`);
        button.innerHTML = keys[i].layout;
    }
}
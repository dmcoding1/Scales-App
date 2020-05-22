import {
  guitarNotesUrls,
  sounds,
  majorScales,
  minorScales,
  pianoNotesUrlIndexes,
  pianoKeyCodes,
} from "./data/data";
import registerSW from "./scripts/SWregistration";

import "./styles.scss";

window.ondragstart = function () {
  return false;
};

window.onload = () => {

  const keyboard = document.querySelector(".keyboard");
  const guitar = document.querySelector(".guitar");

  Promise.all(
    sounds.map((sound) => {
      return new Promise((resolve, reject) => {
        const audio = new Audio();
        audio.addEventListener("canplaythrough", resolve);
        audio.src = sound;
      });
    })
  )
    .then(() => {      
      keyboard.classList.remove("loading");
      guitar.classList.remove("loading");
    })
    .catch((err) => {
      keyboard.classList.remove("loading");
      guitar.classList.remove("loading");
      keyboard.classList.add("error");
      guitar.classList.add("error");
      console.error(err);
    });

  const notes = document.querySelectorAll(".circle-item");
  const circle = document.getElementById("circle");
  const scaleOutput = document.querySelector(".text-output");
  const pickedStrings = Array.from(
    document.getElementsByClassName("picked-string")
  );
  let circleAngle = 0;
  const anglesArr = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  let notesArr = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  const keysArr = Array.from(document.getElementsByClassName("key"));
  const guitarNotesArr = Array.from(document.getElementsByClassName("note"));
  const pianoBtn = document.querySelector("#btn-piano");
  const guitarBtn = document.querySelector("#btn-guitar");
  

  let keyNames = Object.keys(majorScales[notesArr[0]]);

  let scaleNotes = [
    majorScales[notesArr[0]][keyNames[0]],
    majorScales[notesArr[0]][keyNames[1]],
  ];

  const minBtn = document.querySelector(".btn-min");

  const majBtn = document.querySelector(".btn-maj");

  majBtn.classList.contains("btn-pressed")
    ? (scaleNotes = [
        majorScales[notesArr[0]][keyNames[0]],
        majorScales[notesArr[0]][keyNames[1]],
      ])
    : (scaleNotes = [
        minorScales[notesArr[0]][keyNames[0]],
        minorScales[notesArr[0]][keyNames[1]],
      ]);

  Array.from(notes).forEach((element) => {
    element.addEventListener("click", rotateCircle);
  });

  circle.addEventListener("transitionend", handleScaleChange);

  minBtn.addEventListener("click", makeMinScales);
  majBtn.addEventListener("click", makeMajScales);

  keysArr.forEach((element) => {
    element.addEventListener("mousedown", playKeyNote);
    element.addEventListener("mouseup", onMouseOut);
    element.addEventListener("mouseover", playKeyNote);
    element.addEventListener("mouseover", onMouseOver);
    element.addEventListener("mouseout", onMouseOut);
  });
  pickedStrings.forEach((element) => {
    element.addEventListener("mousedown", playGuitarNote);
    element.addEventListener("mouseup", onMouseOut);
    element.addEventListener("mouseover", playGuitarNote);
    element.addEventListener("mouseover", onMouseOver);
    element.addEventListener("mouseout", onMouseOut);
  });

  window.addEventListener("keydown", playKeyNoteWithKey);
  window.addEventListener("keyup", onKeyUp);

  pianoBtn.addEventListener("click", releaseKeys);
  guitarBtn.addEventListener("click", releaseStrings);

  handleScaleChange();

  animateString();

  displayCurrentYear();

  document.body.classList.remove("loading");

  function rotateCircle(e) {
    const target = e.target;
    const targetValue = target.textContent;
    const noteIndex = notesArr.indexOf(targetValue);
    let rotateAngle = anglesArr[noteIndex];
    if (rotateAngle > 180) rotateAngle = rotateAngle - 360;

    circleAngle += -rotateAngle;

    circle.style.transform = `rotate(${circleAngle}deg)`;
    notesArr = [...notesArr.slice(noteIndex), ...notesArr.slice(0, noteIndex)];
    keyNames = Object.keys(majorScales[notesArr[0]]);
  }

  function makeMinScales() {
    Array.from(notes).forEach((element) => element.classList.add("small"));
    minBtn.classList.add("btn-pressed");
    majBtn.classList.remove("btn-pressed");

    handleScaleChange();
  }

  function makeMajScales() {
    Array.from(notes).forEach((element) => element.classList.remove("small"));
    majBtn.classList.add("btn-pressed");
    minBtn.classList.remove("btn-pressed");

    handleScaleChange();
  }

  function changeScale() {
    majBtn.classList.contains("btn-pressed")
      ? (scaleNotes = [
          majorScales[notesArr[0]][keyNames[0]],
          majorScales[notesArr[0]][keyNames[1]],
        ])
      : (scaleNotes = [
          minorScales[notesArr[0]][keyNames[0]],
          minorScales[notesArr[0]][keyNames[1]],
        ]);

    if (scaleNotes[1]) {
      scaleOutput.innerHTML = `<span class="heading">${
        keyNames[0]
      } scale: </span>${scaleNotes[0].join(", ")} <br>
        enharmonic equivalent of ${keyNames[1]} scale: <br> 
        ${scaleNotes[1].join(", ")}`;
    } else {
      scaleOutput.innerHTML = `<span class="heading">${
        keyNames[0]
      } scale:</span>${scaleNotes[0].join(", ")}`;
    }
  }

  function generateChords() {
    let chords = [
      notesArr[0],
      notesArr[2],
      notesArr[4],
      notesArr[5],
      notesArr[7],
      notesArr[9],
      notesArr[11],
    ];
    let chordProgressions = [];

    if (majBtn.classList.contains("btn-pressed")) {
      chords[1] = chords[1].toLowerCase();
      chords[2] = chords[2].toLowerCase();
      chords[5] = chords[5].toLowerCase();
      chords[6] = chords[6].toLowerCase() + "dim";
      chordProgressions.push(
        [chords[0], chords[3], chords[4]],
        [chords[0], chords[5], chords[3], chords[4]],
        [chords[1], chords[4], chords[0]],
        [chords[0], chords[4], chords[5], chords[3]],
        [
          chords[0],
          chords[4],
          chords[5],
          chords[2],
          chords[3],
          chords[0],
          chords[3],
          chords[4]
        ]
      );
    } else {
      chords[0] = chords[0].toLowerCase();
      chords[1] = chords[1].toLowerCase() + "dim";
      chords[3] = chords[3].toLowerCase();
      chords[4] = chords[4].toLowerCase();
      chordProgressions.push(
        [chords[0], chords[5], chords[6]],
        [chords[0], chords[3], chords[6]],
        [chords[0], chords[3], chords[4]],
        [chords[0], chords[5], chords[2], chords[6]],
        [chords[1], chords[4], chords[0]]
      );
    }

    let output = document.querySelector(".chords-output");

    let listItems = [];
    for (let i = 0; i < chordProgressions.length; i++) {
      listItems.push(
        `<li class="chord-progression">${chordProgressions[i].join(" - ")}</li>`
      );
    }

    output.innerHTML = `<span class="heading">Chords in this scale:</span> ${chords.join(
      ", "
    )} <span class="heading">Common chord progressions:</span>
      <ul>
        ${listItems.join("")}
      </ul>`;
  }

  function pressKeys() {
    let pressKeys = [];
    let majorScaleKeys = [
      notesArr[0],
      notesArr[2],
      notesArr[4],
      notesArr[5],
      notesArr[7],
      notesArr[9],
      notesArr[11],
    ];
    let minorScaleKeys = [
      notesArr[0],
      notesArr[2],
      notesArr[3],
      notesArr[5],
      notesArr[7],
      notesArr[8],
      notesArr[10],
    ];

    if (majBtn.classList.contains("btn-pressed")) {
      keysArr.forEach((element) => {
        if (majorScaleKeys.includes(element.getAttribute("id"))) {
          pressKeys.push(element);
        }
      });
    } else {
      keysArr.forEach((element) => {
        if (minorScaleKeys.includes(element.getAttribute("id"))) {
          pressKeys.push(element);
        }
      });
    }

    pressKeys.forEach((element) => element.classList.add("key-pressed"));
  }

  function releaseKeys() {
    keysArr.forEach((element) => element.classList.remove("key-pressed"));
  }

  function displayKeyboard() {
    const keyboard = document.querySelector(".keyboard");
    const pianoText = document.querySelector(".piano-text");
    const btnPiano = document.querySelector(".clear-btn");
    keyboard.classList.remove("is-hidden");
    pianoText.classList.remove("is-hidden");
    btnPiano.classList.remove("is-hidden");
  }

  function playKeyNote(e) {
    let noteCode = pianoNotesUrlIndexes[e.target.getAttribute("id")];
    let audio = new Audio(`/sounds/piano/0${noteCode}.wav`);
    if (detectLeftButton(e)) {
      audio.play();
      e.target.classList.add("on-left-button");
    }
  }

  function playKeyNoteWithKey(e) {
    if (e.repeat) return; // preventing multiple sounds on held key
    let soundName = pianoKeyCodes[e.key.toString()];
    if (Object.keys(pianoKeyCodes).includes(e.key.toString())) {
      let audio = new Audio(
        `/sounds/piano/0${pianoNotesUrlIndexes[soundName]}.wav`
      );
      audio.play();
      keysArr.forEach((element) => {
        if (element.id == soundName) {
          element.classList.add("on-left-button");
        }
      });
    }
  }

  function onKeyUp(e) {
    keysArr.forEach((element) => element.classList.remove("on-left-button"));
  }

  function displayGuitar() {
    const guitar = document.querySelector(".guitar");
    const guitarText = document.querySelector(".guitar-text");
    guitar.classList.remove("is-hidden");
    guitarText.classList.remove("is-hidden");
  }

  function pressStrings() {
    let pressedStrings = [];
    let majorScaleKeys = [
      notesArr[0],
      notesArr[2],
      notesArr[4],
      notesArr[5],
      notesArr[7],
      notesArr[9],
      notesArr[11],
    ];
    let minorScaleKeys = [
      notesArr[0],
      notesArr[2],
      notesArr[3],
      notesArr[5],
      notesArr[7],
      notesArr[8],
      notesArr[10],
    ];

    if (majBtn.classList.contains("btn-pressed")) {
      guitarNotesArr.forEach((element) => {
        if (majorScaleKeys.includes(element.classList[1].toUpperCase())) {
          pressedStrings.push(element);
        }
      });
    } else {
      guitarNotesArr.forEach((element) => {
        if (minorScaleKeys.includes(element.classList[1].toUpperCase())) {
          pressedStrings.push(element);
        }
      });
    }

    pressedStrings.forEach((element) => element.classList.add("picked-note"));
  }

  function releaseStrings() {
    guitarNotesArr.forEach((element) =>
      element.classList.remove("picked-note")
    );
  }

  function playGuitarNote(e) {
    let noteName = e.target.getAttribute("id");
    let audio = new Audio(guitarNotesUrls[noteName]);
    if (detectLeftButton(e)) {
      audio.play();
      e.target.classList.add("on-left-button");
    }
  }

  function detectLeftButton(e) {
    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
      return false;
    } else if ("buttons" in e) {
      return event.buttons === 1;
    } else if ("which" in e) {
      return e.which === 1;
    } else {
      return e.button == 1 || e.type == "click";
    }
  }

  function onMouseOver(e) {
    if (detectLeftButton(e)) {
      e.target.classList.add("on-left-button");
    }
  }

  function onMouseOut(e) {
    e.target.classList.remove("on-left-button");
  }

  function animateString() {
    const strings = Array.from(document.querySelectorAll(".guitar-string"));
    const pickedStrings = Array.from(
      document.querySelectorAll(".picked-string")
    );

    pickedStrings.forEach((string) =>
      string.addEventListener("mousedown", (e) => {
        let stringIndex = pickedStrings.indexOf(e.target.parentNode);
        strings[stringIndex].classList.remove("string-animation");

        void string.offsetWidth;

        strings[stringIndex].classList.add("string-animation");
      })
    );

    pickedStrings.forEach((string) =>
      string.addEventListener("mouseover", (e) => {
        if (detectLeftButton(event)) {
          let stringIndex = pickedStrings.indexOf(e.target.parentNode);
          strings[stringIndex].classList.remove("string-animation");

          void string.offsetWidth;

          strings[stringIndex].classList.add("string-animation");
        }
      })
    );
  }

  function handleScaleChange() {
    releaseKeys();
    changeScale();
    pressKeys();
    displayKeyboard();
    releaseStrings();
    pressStrings();
    displayGuitar();
    generateChords();
  }

  function displayCurrentYear() {
    const dateNode = document.querySelector(".footer-date");
    const currentYear = new Date().getFullYear();
    dateNode.textContent = currentYear;
  }
};

registerSW();

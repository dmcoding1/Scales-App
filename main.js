window.ondragstart = function() {
  return false;
};

window.onload = () => {
  
  const notes = document.querySelectorAll('.circle-item');
  const circle = document.getElementById('jCircle');
  const scaleOutput = document.querySelector('.text-output');
  const pickedStrings = Array.from(document.getElementsByClassName('picked-string'));
  let circleAngle = 0;
  const anglesArr = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  let notesArr = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const keysArr = Array.from(document.getElementsByClassName('key'));
  const guitarNotesArr = Array.from(document.getElementsByClassName('note'));
  const pianoBtn = document.querySelector('#btn-piano');
  const guitarBtn = document.querySelector('#btn-guitar');


  const majorScales = {
    'C': {
      'C': ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      'B#': ['B#', 'C##', 'D##', 'E#', 'F##', 'G##', 'A##']
    },
    'C#': {
      'C#': ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'],
      'Db': ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C']
    },
    'D': {
      'D': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#']
    },
    'D#': {
      'D#': ['D#', 'E#', 'F##',' G#', 'A#', 'B#', 'C##'],
      'Eb': ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D']
    },
    'E': {
      'E': ['E',' F#', 'G#', 'A', 'B', 'C#', 'D#'],
      'Fb': ['Fb', 'Gb', 'Ab', 'Bbb', 'Cb', 'Db', 'Eb']
    },
    'F': {
      'F': ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
      'E#': ['E#', 'F##', 'G##', 'A#', 'B#', 'C##', 'D##']
    },
    'F#': {
      'F#': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
      'Gb': ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F']
    },
    'G': {
      'G': ['G', 'A', 'B', 'C', 'D', 'E', 'F#']
    },
    'G#': {
      'G#': ['G#', 'A#', 'B#', 'C#', 'D#', 'E#', 'F##'],
      'Ab': ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G']
    },
    'A': {
      'A': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    },
    'A#': {
      'A#': ['A#', 'B#', 'C##', 'D#', 'E#', 'F##', 'G##'],
      'Bb': ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A']
    },
    'B': {
      'B': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
      'Cb': ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb']
    }  
  };

  const minorScales = {
    'C': {
      'C': ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
      'B#': ['B#', 'C##', 'D#', 'E#', 'F##', 'G#', 'A#']
    },
    'C#': {
      'C#': ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'],
      'Db': ['Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bbb', 'Cb']
    },
    'D': {
      'D': ['D', 'E', 'F#', 'G', 'A', 'Bb', 'C']
    },
    'D#': {
      'D#': ['D#', 'E#', 'F#', 'G#', 'A#', 'B', 'C#'],
      'Eb': ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'Db']
    },
    'E': {
      'E': ['E',' F#', 'G', 'A', 'B', 'C', 'D'],
      'Fb': ['Fb', 'Gb', 'Abb', 'Bbb', 'Cb', 'Dbb', 'Ebb']
    },
    'F': {
      'F': ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'],
      'E#': ['E#', 'F##', 'G#', 'A#', 'B#', 'C#', 'D#']
    },
    'F#': {
      'F#': ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E'],
      'Gb': ['Gb', 'Ab', 'Bbb', 'Cb', 'Db', 'Ebb', 'Fb']
    },
    'G': {
      'G': ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F']
    },
    'G#': {
      'G#': ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#'],
      'Ab': ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb']
    },
    'A': {
      'A': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    },
    'A#': {
      'A#': ['A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#'],
      'Bb': ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab']
    },
    'B': {
      'B': ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'],
      'Cb': ['Cb', 'Db', 'Ebb', 'Fb', 'Gb', 'Abb', 'Bbb']
    }  
  };

  let keyNames = Object.keys(majorScales[notesArr[0]]);;

  let scaleNotes = [majorScales[notesArr[0]][keyNames[0]], majorScales[notesArr[0]][keyNames[1]]]; 

  const urlForNotes = {
    'C': 40,
    'C#': 41,
    'D': 42,
    'D#': 43,
    'E': 44,
    'F': 45,
    'F#': 46,
    'G': 47,
    'G#': 48,
    'A': 49,
    'A#': 50,
    'B': 51  
  };

  const pianoKeyCodes = {
    'a': 'C',
    'w': 'C#',
    's': 'D',
    'e': 'D#',
    'd': 'E',
    'f': 'F',
    't': 'F#',
    'g': 'G',
    'y': 'G#',
    'h': 'A',
    'u': 'A#',
    'j': 'B'  
  };

  const guitarNotes = {
    'e1': '/sounds/guitar/e1.wav',
    'a#2': '/sounds/guitar/a_2.wav',
    'a#1': '/sounds/guitar/a_1.wav',
    'a1': '/sounds/guitar/a1.wav',
    'a2': '/sounds/guitar/a2.wav',
    'b1': '/sounds/guitar/b1.wav',
    'b2': '/sounds/guitar/b1.wav',
    'b3': '/sounds/guitar/b3.wav',
    'c#1': '/sounds/guitar/c_1.wav',
    'c#2': '/sounds/guitar/c_2.wav',
    'c1': '/sounds/guitar/c1.wav',
    'c2': '/sounds/guitar/c2.wav',
    'd#1': '/sounds/guitar/d_1.wav',
    'd#2': '/sounds/guitar/d_2.wav',
    'd1': '/sounds/guitar/d1.wav',
    'd2': '/sounds/guitar/d2.wav',
    'e2': '/sounds/guitar/e2.wav',
    'e3': '/sounds/guitar/e3.wav',
    'f#1': '/sounds/guitar/f_1.wav',
    'f#2': '/sounds/guitar/f_2.wav',
    'f#3': '/sounds/guitar/f_3.wav',
    'f1': '/sounds/guitar/f1.wav',
    'f2': '/sounds/guitar/f2.wav',
    'f3': '/sounds/guitar/f3.wav',
    'g#1': '/sounds/guitar/g_1.wav',
    'g#2': '/sounds/guitar/g_2.wav',
    'g#3': '/sounds/guitar/g_3.wav',
    'g1': '/sounds/guitar/g1.wav',
    'g2': '/sounds/guitar/g2.wav',
    'g3': '/sounds/guitar/g3.wav'
  };

  const sounds = [
    ...Object.values(guitarNotes),
    '/sounds/piano/040.wav',
    '/sounds/piano/041.wav',
    '/sounds/piano/042.wav',
    '/sounds/piano/043.wav',
    '/sounds/piano/044.wav',
    '/sounds/piano/045.wav',
    '/sounds/piano/046.wav',
    '/sounds/piano/047.wav',
    '/sounds/piano/048.wav',
    '/sounds/piano/049.wav',
    '/sounds/piano/050.wav',
    '/sounds/piano/051.wav'  
  ];

  const minBtn = document.querySelector('.btn-min');

  const majBtn = document.querySelector('.btn-maj');

  majBtn.classList.contains('btn-pressed') ? 
      scaleNotes = [majorScales[notesArr[0]][keyNames[0]], majorScales[notesArr[0]][keyNames[1]]] :
      scaleNotes = [minorScales[notesArr[0]][keyNames[0]], minorScales[notesArr[0]][keyNames[1]]]; 

  // preload all sounds
  Promise.all(
    sounds.map(sound => {
      return new Promise((resolve, reject) => {
        const audio = new Audio();
        // once this file loads, it will call loadedAudio()
        // the file will be kept by the browser as cache
        audio.addEventListener('canplaythrough', resolve);
        audio.src = sound;
      })
    })
  ).then(() => {
    document.body.classList.remove("loading");
    console.log("Success.");
  }).catch(err => console.error(err));
  
  Array.from(notes).forEach(element => {
     element.addEventListener('click', rotateCircle);
   });
  
  minBtn.addEventListener('click', makeMinScales);
  majBtn.addEventListener('click', makeMajScales);
  
  keysArr.forEach(element => {
    element.addEventListener('mousedown', playKeyNote);
    element.addEventListener('mouseup', onMouseOut);
    element.addEventListener('mouseover', playKeyNote);
    element.addEventListener('mouseover', onMouseOver);
    element.addEventListener('mouseout', onMouseOut);
  });
  pickedStrings.forEach(element => {
    element.addEventListener('mousedown', playGuitarNote);
    element.addEventListener('mouseup', onMouseOut);
    element.addEventListener('mouseover', playGuitarNote);
    element.addEventListener('mouseover', onMouseOver);
    element.addEventListener('mouseout', onMouseOut);
  });
  window.addEventListener('keydown', playKeyNoteWithKey);
  window.addEventListener('keyup', onKeyUp);
  pianoBtn.addEventListener('click', releaseKeys);
  guitarBtn.addEventListener('click', releaseStrings);

  handleScaleChange();

  // document.body.classList.remove("loading");

  animateString();
  
  function rotateCircle(event) {
    const target = event.target;
    const targetValue = target.textContent;
    const noteIndex = notesArr.indexOf(targetValue);
    let rotateAngle = anglesArr[noteIndex];
    if (rotateAngle > 180) rotateAngle = rotateAngle - 360;

    currVal = targetValue;
    circleAngle += -rotateAngle;

    circle.style.transform = `rotate(${circleAngle}deg)`;
    notesArr = [...notesArr.slice(noteIndex), ...notesArr.slice(0, noteIndex)];
    keyNames = Object.keys(majorScales[notesArr[0]]);  

    handleScaleChange();
  }

  function makeMinScales() {
    Array.from(notes).forEach(element => element.classList.add('small'));
    minBtn.classList.add('btn-pressed');
    majBtn.classList.remove('btn-pressed');

    handleScaleChange();
  }

  function makeMajScales() {
    Array.from(notes).forEach(element => element.classList.remove('small'));
    majBtn.classList.add('btn-pressed');
    minBtn.classList.remove('btn-pressed');

    handleScaleChange();
  }

  function changeScale() { 
    majBtn.classList.contains('btn-pressed') ? 
      scaleNotes = [majorScales[notesArr[0]][keyNames[0]], majorScales[notesArr[0]][keyNames[1]]] :
      scaleNotes = [minorScales[notesArr[0]][keyNames[0]], minorScales[notesArr[0]][keyNames[1]]];  

    if (scaleNotes[1]) {
       scaleOutput.innerHTML = `<span class="heading">${keyNames[0]} scale: </span>${scaleNotes[0].join(', ')} <br>
                             enharmonic equivalent of ${keyNames[1]} scale: <br> ${scaleNotes[1].join(', ')}`; 
    } else {
      scaleOutput.innerHTML = `<span class="heading">${keyNames[0]} scale:</span>${scaleNotes[0].join(', ')}`;
    }

  };

  function generateChords() {
    let chords = [notesArr[0], notesArr[2], notesArr[4], notesArr[5], notesArr[7], notesArr[9], notesArr[11]];
    let chordProgressions = [];

    if (majBtn.classList.contains('btn-pressed')) {
      chords[1] = chords[1].toLowerCase();
      chords[2] = chords[2].toLowerCase();
      chords[5] = chords[5].toLowerCase();
      chords[6] = chords[6].toLowerCase() + 'dim';
      chordProgressions.push([chords[0], chords[3], chords[4]], [chords[0], chords[5], chords[3], chords[4]], [chords[1], chords[4], chords[0]], [chords[0], chords[4], chords[5], chords[3]], [chords[0], chords[4], chords[5], chords[2], chords[3], chords[0], chords[3], chords[4]]);
    } else {
      chords[0] = chords[0].toLowerCase();
      chords[1] = chords[1].toLowerCase() + 'dim';
      chords[3] = chords[3].toLowerCase();
      chords[4] = chords[4].toLowerCase();
      chordProgressions.push([chords[0], chords[5], chords[6]], [chords[0], chords[3], chords[6]], [chords[0], chords[3], chords[4]], [chords[0], chords[5], chords[2], chords[6]], [chords[1], chords[4], chords[0]]);
    }


    let output = document.querySelector('.chords-output');

    let listItems = [];
    for (let i = 0; i < chordProgressions.length; i++) {
      listItems.push(`<li class="chord-progression">${chordProgressions[i].join(' - ')}</li>`);
    };


    output.innerHTML = `<span class="heading">Chords in this scale:</span> ${chords.join(', ')} <span class="heading">Common chord progressions:</span>
      <ul>
        ${listItems.join('')}
      </ul>`;

  }

  function pressKeys() {
    let pressKeys = [];
    let majorScaleKeys = [notesArr[0], notesArr[2], notesArr[4], notesArr[5], notesArr[7], notesArr[9], notesArr[11]];
    let minorScaleKeys = [notesArr[0], notesArr[2], notesArr[3], notesArr[5], notesArr[7], notesArr[8], notesArr[10]];

    if (majBtn.classList.contains('btn-pressed')) {
      keysArr.forEach(element => {
        if (majorScaleKeys.includes(element.getAttribute('id'))) {
          pressKeys.push(element)
        }
      });
    } else {
       keysArr.forEach(element => {
        if (minorScaleKeys.includes(element.getAttribute('id'))) {
          pressKeys.push(element)
        }
      });
    }

    pressKeys.forEach(element => element.classList.add('key-pressed'));
  };

  function releaseKeys() {
    keysArr.forEach(element => element.classList.remove('key-pressed'))
  }

  function displayKeyboard() {
    const keyboard = document.querySelector('.keyboard');
    const pianoText = document.querySelector('.piano-text');
    const btnPiano = document.querySelector('.clear-btn');
    keyboard.classList.remove('is-hidden');  
    pianoText.classList.remove('is-hidden');
    btnPiano.classList.remove('is-hidden');  
  }

  function playKeyNote(e) {
     let noteCode = urlForNotes[e.target.getAttribute('id')];
     let audio = new Audio(`/sounds/piano/0${noteCode}.wav`);
      if (detectLeftButton(e)) {
        audio.play();
        e.target.classList.add('on-left-button');
      };  
  }

  function playKeyNoteWithKey(e) {
    if (e.repeat) { return }; // preventing multiple sounds on held key
    let soundName = pianoKeyCodes[e.key.toString()];
    if (Object.keys(pianoKeyCodes).includes(e.key.toString())) {
      let audio = new Audio(`/sounds/piano/0${urlForNotes[soundName]}.wav`);
      audio.play();
      keysArr.forEach(element => {
        if (element.getAttribute('id') == soundName) {
          element.classList.add('on-left-button');
        }
      })
    }
  }

  function onKeyUp(e) {
    keysArr.forEach(element => element.classList.remove('on-left-button'));
  }

  function displayGuitar() {
    const guitar = document.querySelector('.guitar');
    const guitarText = document.querySelector('.guitar-text');
    guitar.classList.remove('is-hidden');
    guitarText.classList.remove('is-hidden');
  }

  function pressStrings() {   
    let pressedStrings = [];
    let majorScaleKeys = [notesArr[0], notesArr[2], notesArr[4], notesArr[5], notesArr[7], notesArr[9], notesArr[11]];
    let minorScaleKeys = [notesArr[0], notesArr[2], notesArr[3], notesArr[5], notesArr[7], notesArr[8], notesArr[10]];

    if (majBtn.classList.contains('btn-pressed')) {
      guitarNotesArr.forEach(element => {
        if (majorScaleKeys.includes(element.classList[1].toUpperCase())) {
          pressedStrings.push(element)
        }
      });
    } else {
       guitarNotesArr.forEach(element => {
        if (minorScaleKeys.includes(element.classList[1].toUpperCase())) {
          pressedStrings.push(element)
        }
      });
    }

    pressedStrings.forEach(element => element.classList.add('picked-note'));

  }

  function releaseStrings() {
    guitarNotesArr.forEach(element => element.classList.remove('picked-note'));
  }

  function playGuitarNote(e) {
    let noteName = e.target.getAttribute('id');
    let audio = new Audio(guitarNotes[noteName]);
    if (detectLeftButton(e)) {
      audio.play();
      e.target.classList.add('on-left-button');
    }

  }

  function detectLeftButton(event) {
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
          return false;        
      } else if ('buttons' in event) {
          return event.buttons === 1;    
      } else if ('which' in event) {
          return event.which === 1; 
      } else {   
        return (event.button == 1 || event.type == 'click');      
      }
  }

  function onMouseOver(e) {
    if (detectLeftButton(e)) {    
      e.target.classList.add('on-left-button');
    }
  }

  function onMouseOut(e) {      
      e.target.classList.remove('on-left-button');
  }

  function animateString() {
    const strings = Array.from(document.querySelectorAll('.guitar-string'));
    const pickedStrings = Array.from(document.querySelectorAll('.picked-string'));

    pickedStrings.forEach(string => string.addEventListener('mousedown', (e) => {
      let stringIndex = pickedStrings.indexOf(e.target.parentNode);
      strings[stringIndex].classList.remove('string-animation');    

      void string.offsetWidth;

      strings[stringIndex].classList.add('string-animation');
    }));

    pickedStrings.forEach(string => string.addEventListener('mouseover', (e) => {
      if (detectLeftButton(event)) {
        let stringIndex = pickedStrings.indexOf(e.target.parentNode);
        strings[stringIndex].classList.remove('string-animation');    

        // triggers animation restart
        void string.offsetWidth;

        strings[stringIndex].classList.add('string-animation');
      }
     }                                                  
    )
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
  
  
}





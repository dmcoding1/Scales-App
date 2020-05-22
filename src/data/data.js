export const guitarNotesUrls = {
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

export const sounds = [
  ...Object.values(guitarNotesUrls),
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

export const majorScales = {
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

export const minorScales = {
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

export const pianoNotesUrlIndexes = {
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

export const pianoKeyCodes = {
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
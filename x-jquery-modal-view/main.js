/* eslint-env jquery */
var songList = [
  {
    artist: 'Wolf Tech',
    name: 'Nina Simone - Feeling Good - Wolf Tech Remix',
    plays: 23123
  },
  {
    artist: 'Desert Dwellers',
    name: 'Pranafestation ( Eccodek Remix ): Electronic World Beats [Edit]',
    plays: 2576
  },
  {
    artist: 'Liquid Bloom',
    name: 'Liquid Bloom - Roots Of The Earth (Headflux Remix)',
    plays: 22222
  },
  {
    artist: 'Builder',
    name: 'The Maya [528hz Solfeggio]',
    plays: 2938
  },
  {
    artist: 'Merkaba Music',
    name: 'Master Minded - The Pineal Gland Exposure 936hz',
    plays: 6999
  },
  {
    artist: 'Mindspring Music',
    name: 'Lumino - Searching For My Self',
    plays: 691
  },
  {
    artist: 'Sofa Beats',
    name: 'Zen Baboon',
    plays: 2897
  },
  {
    artist: 'Desert Trax',
    name: 'KEY - G - Half Of Nothing',
    plays: 2423
  },
  {
    artist: 'Chronos Music',
    name: 'Chronos - We R 1',
    plays: 1347
  },
  {
    artist: 'Kunayala Records',
    name: 'Sigil - Strictly Transpersonal',
    plays: 4737
  },
  {
    artist: 'TheUntz.com',
    name: 'Martins Carden - Ava',
    plays: 2946
  },
  {
    artist: 'Mindspring Music',
    name: 'Advanced Suite - A Step Away',
    plays: 617
  }
];

/**
 * Challenge: Create a document ready with JQuery which will call into
 * the "initializeApp" function.
 */

/**
 * Challenge: Create a named function called "initializeApp" function which
 * will call into a function called "displaySongs", pass into the function
 * the array of songs (above).
 */

/**
 * Challenge: Create a named function call "displaySongs" which accepts
 * a parameter representing the array of songs. For each song in the
 * array transform it into a "Song" class and save it into an array. Then,
 * loop through the newly created "Song" array, and for each instance of
 * "Song" class, call the "renderSong" function and save the result to a variable.
 * Finally, append the returned DOM elements to the div with the class "song-area".
 */

/**
 * Challenge: Create a ES6 class called "Song", in the constructor accept a
 * parameter representing the song data, save this to a "data" * property in the
 * object. Create a new property called "domElements" which will be an empty object.
 *
 * Create a function called "renderSong" which will build the DOM elements using
 * the data saved in the "data" property and return the DOM elements back to the
 * caller. Remember to save each DOM element to a new property of the "domElements"
 * property.
 */

$(document).ready(initializeApp);

function initializeApp() {
  displaySongs(songList);
}

function displaySongs(xxx) {
  var chicken = [];
  for (var i = 0; i < xxx.length; i++) {
    var gg = xxx[i];
    var pp = new Song(gg);
    chicken.push(pp);
  }
  //   chicken.forEach(element => $(".song-area").append(element.renderSong()));
  var rowElements = chicken.map(poop => {
    return poop.renderSong();
  });

  $('.song-area').empty().append(rowElements);
}

class Song {
  constructor(xxx) {
    this.data = xxx;
    this.domElements = {
    };
  }

  renderSong() {
    var $row = $('<div>', {
      class: 'row'
    });
    this.domElements.row = $row;

    var $col11 = $('<div>', {
      class: 'col-11'
    });
    this.domElements.col11 = $col11;

    $row.append($col11);

    var $span1 = $('<span>', {
      class: 'artist',
      text: `${this.data.artist} -   `
    });
    this.domElements.span1 = $span1;

    $col11.append($span1);

    var $span2 = $('<span>', {
      class: 'song',
      text: this.data.name
    });
    this.domElements.span2 = $span2;

    $col11.append($span2);

    var $col01 = $('<div>', {
      class: 'col-1'
    });
    this.domElements.col01 = $col01;

    $row.append($col01);

    var $span3 = $('<span>', {
      class: 'plays',
      text: this.data.plays
    });
    this.domElements.span3 = $span3;

    $col01.append($span3);

    return $row;
  }

  getData() {
    return this.data;
  }
}

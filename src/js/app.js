/**
 * Created by Stan Smith on 5/28/16.
 */

(function ($) {
  'use strict';

  var mockData = {
    'images': [
      {
        'imageName': 'ImageName1',
        'imageUrl': 'ImageUrl1',
        'imageAlt': 'ImageAlt1',
        'imageAuthor': 'ImageAuthor1'
      },
      {
        'imageName': 'ImageName2',
        'imageUrl': 'ImageUrl2',
        'imageAlt': 'ImageAlt2',
        'imageAuthor': 'ImageAuthor2'
      },
      {
        'imageName': 'ImageName3',
        'imageUrl': 'ImageUrl3',
        'imageAlt': 'ImageAlt3',
        'imageAuthor': 'ImageAuthor3'
      },
      {
        'imageName': 'ImageName4',
        'imageUrl': 'ImageUrl4',
        'imageAlt': 'ImageAlt4',
        'imageAuthor': 'ImageAuthor4'
      },
      {
        'imageName': 'ImageName5',
        'imageUrl': 'ImageUrl5',
        'imageAlt': 'ImageAlt5',
        'imageAuthor': 'ImageAuthor5'
      }
    ],
    'sounds': [
      {
        'soundName': 'SoundName1',
        'soundUrl': 'SoundUrl1',
        'soundAuthor': 'SoundAuthor1'
      },
      {
        'soundName': 'SoundName2',
        'soundUrl': 'SoundUrl2',
        'soundAuthor': 'SoundAuthor2'
      },
      {
        'soundName': 'SoundName3',
        'soundUrl': 'SoundUrl3',
        'soundAuthor': 'SoundAuthor3'
      },
      {
        'soundName': 'SoundName4',
        'soundUrl': 'SoundUrl4',
        'soundAuthor': 'SoundAuthor4'
      },
      {
        'soundName': 'SoundName5',
        'soundUrl': 'SoundUrl5',
        'soundAuthor': 'SoundAuthor5'
      }
    ],
    'texts': [
      {
        'textContent': 'TextContent1',
        'textAuthor': 'TextAuthor1'
      },
      {
        'textContent': 'TextContent2',
        'textAuthor': 'TextAuthor2'
      },
      {
        'textContent': 'TextContent3',
        'textAuthor': 'TextAuthor3'
      },
      {
        'textContent': 'TextContent4',
        'textAuthor': 'TextAuthor4'
      },
      {
        'textContent': 'TextContent5',
        'textAuthor': 'TextAuthor5'
      }
    ]
  };
  
  // UI Hello world
  $('#helloWorld').html('Oh, it&rsquo;s on now!');

  init();

  function init() {
    console.log('Hello world!');

    var images, sounds, texts = [];

    // TODO: Create a randomized array of each item
    images = shuffle(mockData.images);
    sounds = shuffle(mockData.sounds);
    texts = shuffle(mockData.texts);

    console.log(images);
    console.log(sounds);
    console.log(texts);
  }


  /**
   * Fisher–Yates Shuffle
   * Via: https://bost.ocks.org/mike/shuffle/
   *
   * @param array
   * @returns {*}
   */
  function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[ m ];
      array[ m ] = array[ i ];
      array[ i ] = t;
    }

    return array;
  }

})(Zepto);

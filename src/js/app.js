/**
 * Created by Stan Smith on 5/28/16.
 */

(function ($) {
  'use strict';

  var mockData = {
    'images': [
      {
        'imageName': 'ImageName',
        'imageUrl': 'ImageUrl',
        'imageAlt': 'ImageAlt',
        'imageAuthor': 'ImageAuthor'
      },
      {
        'imageName': 'ImageName',
        'imageUrl': 'ImageUrl',
        'imageAlt': 'ImageAlt',
        'imageAuthor': 'ImageAuthor'
      },
      {
        'imageName': 'ImageName',
        'imageUrl': 'ImageUrl',
        'imageAlt': 'ImageAlt',
        'imageAuthor': 'ImageAuthor'
      }
    ],
    'sounds': [
      {
        'soundName': 'SoundName',
        'soundUrl': 'SoundUrl',
        'soundAuthor': 'SoundAuthor'
      },
      {
        'soundName': 'SoundName',
        'soundUrl': 'SoundUrl',
        'soundAuthor': 'SoundAuthor'
      },
      {
        'soundName': 'SoundName',
        'soundUrl': 'SoundUrl',
        'soundAuthor': 'SoundAuthor'
      }
    ],
    'texts': [
      {
        'textContent': 'TextContent',
        'textAuthor': 'TextAuthor'
      },
      {
        'textContent': 'TextContent',
        'textAuthor': 'TextAuthor'
      },
      {
        'textContent': 'TextContent',
        'textAuthor': 'TextAuthor'
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
    images = randomizeData(mockData.images);
    sounds = randomizeData(mockData.sounds);
    texts = randomizeData(mockData.texts);

    console.log(images);
    console.log(sounds);
    console.log(texts);
  }

  function randomizeData(data) {
    var randomizedData = [];

    $.each(data, function (index, item) {
      console.log(item);
      randomizedData[index] = item;
    })

    return randomizedData;
  }

})(Zepto);

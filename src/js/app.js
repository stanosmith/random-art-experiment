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
        'soundAlt': 'SoundAlt',
        'soundAuthor': 'SoundAuthor'
      },
      {
        'soundName': 'SoundName',
        'soundUrl': 'SoundUrl',
        'soundAlt': 'SoundAlt',
        'soundAuthor': 'SoundAuthor'
      },
      {
        'soundName': 'SoundName',
        'soundUrl': 'SoundUrl',
        'soundAlt': 'SoundAlt',
        'soundAuthor': 'SoundAuthor'
      }
    ],
    'texts': [
      {
        'textName': 'TextName',
        'textUrl': 'TextUrl',
        'textAlt': 'TextAlt',
        'textAuthor': 'TextAuthor'
      },
      {
        'textName': 'TextName',
        'textUrl': 'TextUrl',
        'textAlt': 'TextAlt',
        'textAuthor': 'TextAuthor'
      },
      {
        'textName': 'TextName',
        'textUrl': 'TextUrl',
        'textAlt': 'TextAlt',
        'textAuthor': 'TextAuthor'
      }
    ]
  };
  
  // UI Hello world
  $('#helloWorld').html('Oh, it&rsquo;s on now!');

  init();

  function init() {
    console.log('Hello world!');

    var images, sounds, text = [];

    // TODO: Create a randomized array of each item
    randomizeImages(mockData.images);
    randomizeSounds(mockData.sounds);
    randomizeTexts(mockData.texts);
  }

  function randomizeImages(imagesData) {
    console.log('randomizeImages()...');

    $.each(imagesData, function (obj) {
      console.log('obj: ' + obj);

    })
  }

  function randomizeSounds(soundsData) {
    console.log('randomizeSounds()...');

    $.each(soundsData, function (obj) {
      console.log('obj: ' + obj);

    })
  }

  function randomizeTexts(textsData) {
    console.log('randomizeTexts()...');

    $.each(textsData, function (obj) {
      console.log('obj: ' + obj);

    })
  }

})(Zepto);

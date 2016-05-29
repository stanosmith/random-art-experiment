/**
 * Created by Stan Smith on 5/28/16.
 */

(function ($) {
  'use strict';

  var mockData = [
    {
      'imageUrl': 'imageUrl1',
      'imageAuthor': 'imageAuthor1',
      'imageAlt': 'imageAlt1',
      'soundName': 'soundName1',
      'soundUrl': 'soundUrl1',
      'soundAuthor': 'soundAuthor1',
      'textContent': 'textContent1',
      'textAuthor': 'textAuthor1'
    },
    {
      'imageUrl': 'imageUrl2',
      'imageAuthor': 'imageAuthor2',
      'imageAlt': 'imageAlt2',
      'soundName': 'soundName2',
      'soundUrl': 'soundUrl2',
      'soundAuthor': 'soundAuthor2',
      'textContent': 'textContent2',
      'textAuthor': 'textAuthor2'
    },
    {
      'imageUrl': 'imageUrl3',
      'imageAuthor': 'imageAuthor3',
      'imageAlt': 'imageAlt3',
      'soundName': 'soundName3',
      'soundUrl': 'soundUrl3',
      'soundAuthor': 'soundAuthor3',
      'textContent': 'textContent3',
      'textAuthor': 'textAuthor3'
    },
    {
      'imageUrl': 'imageUrl4',
      'imageAuthor': 'imageAuthor4',
      'imageAlt': 'imageAlt4',
      'soundName': 'soundName4',
      'soundUrl': 'soundUrl4',
      'soundAuthor': 'soundAuthor4',
      'textContent': 'textContent4',
      'textAuthor': 'textAuthor4'
    },
    {
      'imageUrl': 'imageUrl5',
      'imageAuthor': 'imageAuthor5',
      'imageAlt': 'imageAlt5',
      'soundName': 'soundName5',
      'soundUrl': 'soundUrl5',
      'soundAuthor': 'soundAuthor5',
      'textContent': 'textContent5',
      'textAuthor': 'textAuthor5'
    },
    {
      'imageUrl': 'imageUrl6',
      'imageAuthor': 'imageAuthor6',
      'imageAlt': 'imageAlt6',
      'soundName': 'soundName6',
      'soundUrl': 'soundUrl6',
      'soundAuthor': 'soundAuthor6',
      'textContent': 'textContent6',
      'textAuthor': 'textAuthor6'
    },
    {
      'imageUrl': 'imageUrl7',
      'imageAuthor': 'imageAuthor7',
      'imageAlt': 'imageAlt7',
      'soundName': 'soundName7',
      'soundUrl': 'soundUrl7',
      'soundAuthor': 'soundAuthor7',
      'textContent': 'textContent7',
      'textAuthor': 'textAuthor7'
    },
    {
      'imageUrl': 'imageUrl8',
      'imageAuthor': 'imageAuthor8',
      'imageAlt': 'imageAlt8',
      'soundName': 'soundName8',
      'soundUrl': 'soundUrl8',
      'soundAuthor': 'soundAuthor8',
      'textContent': 'textContent8',
      'textAuthor': 'textAuthor8'
    },
    {
      'imageUrl': 'imageUrl9',
      'imageAuthor': 'imageAuthor9',
      'imageAlt': 'imageAlt9',
      'soundName': 'soundName9',
      'soundUrl': 'soundUrl9',
      'soundAuthor': 'soundAuthor9',
      'textContent': 'textContent9',
      'textAuthor': 'textAuthor9'
    },
    {
      'imageUrl': 'imageUrl10',
      'imageAuthor': 'imageAuthor10',
      'imageAlt': 'imageAlt10',
      'soundName': 'soundName10',
      'soundUrl': 'soundUrl10',
      'soundAuthor': 'soundAuthor10',
      'textContent': 'textContent10',
      'textAuthor': 'textAuthor10'
    },
    {
      'imageUrl': 'imageUrl11',
      'imageAuthor': 'imageAuthor11',
      'imageAlt': 'imageAlt11',
      'soundName': 'soundName11',
      'soundUrl': 'soundUrl11',
      'soundAuthor': 'soundAuthor11',
      'textContent': 'textContent11',
      'textAuthor': 'textAuthor11'
    },
    {
      'imageUrl': 'imageUrl12',
      'imageAuthor': 'imageAuthor12',
      'imageAlt': 'imageAlt12',
      'soundName': 'soundName12',
      'soundUrl': 'soundUrl12',
      'soundAuthor': 'soundAuthor12',
      'textContent': 'textContent12',
      'textAuthor': 'textAuthor12'
    },
    {
      'imageUrl': 'imageUrl13',
      'imageAuthor': 'imageAuthor13',
      'imageAlt': 'imageAlt13',
      'soundName': 'soundName13',
      'soundUrl': 'soundUrl13',
      'soundAuthor': 'soundAuthor13',
      'textContent': 'textContent13',
      'textAuthor': 'textAuthor13'
    },
    {
      'imageUrl': 'imageUrl14',
      'imageAuthor': 'imageAuthor14',
      'imageAlt': 'imageAlt14',
      'soundName': 'soundName14',
      'soundUrl': 'soundUrl14',
      'soundAuthor': 'soundAuthor14',
      'textContent': 'textContent14',
      'textAuthor': 'textAuthor14'
    },
    {
      'imageUrl': 'imageUrl15',
      'imageAuthor': 'imageAuthor15',
      'imageAlt': 'imageAlt15',
      'soundName': 'soundName15',
      'soundUrl': 'soundUrl15',
      'soundAuthor': 'soundAuthor15',
      'textContent': 'textContent15',
      'textAuthor': 'textAuthor15'
    },
    {
      'imageUrl': 'imageUrl16',
      'imageAuthor': 'imageAuthor16',
      'imageAlt': 'imageAlt16',
      'soundName': 'soundName16',
      'soundUrl': 'soundUrl16',
      'soundAuthor': 'soundAuthor16',
      'textContent': 'textContent16',
      'textAuthor': 'textAuthor16'
    },
    {
      'imageUrl': 'imageUrl17',
      'imageAuthor': 'imageAuthor17',
      'imageAlt': 'imageAlt17',
      'soundName': 'soundName17',
      'soundUrl': 'soundUrl17',
      'soundAuthor': 'soundAuthor17',
      'textContent': 'textContent17',
      'textAuthor': 'textAuthor17'
    },
    {
      'imageUrl': 'imageUrl18',
      'imageAuthor': 'imageAuthor18',
      'imageAlt': 'imageAlt18',
      'soundName': 'soundName18',
      'soundUrl': 'soundUrl18',
      'soundAuthor': 'soundAuthor18',
      'textContent': 'textContent18',
      'textAuthor': 'textAuthor18'
    },
    {
      'imageUrl': 'imageUrl19',
      'imageAuthor': 'imageAuthor19',
      'imageAlt': 'imageAlt19',
      'soundName': 'soundName19',
      'soundUrl': 'soundUrl19',
      'soundAuthor': 'soundAuthor19',
      'textContent': 'textContent19',
      'textAuthor': 'textAuthor19'
    },
    {
      'imageUrl': 'imageUrl20',
      'imageAuthor': 'imageAuthor20',
      'imageAlt': 'imageAlt20',
      'soundName': 'soundName20',
      'soundUrl': 'soundUrl20',
      'soundAuthor': 'soundAuthor20',
      'textContent': 'textContent20',
      'textAuthor': 'textAuthor20'
    },
    {
      'imageUrl': 'imageUrl21',
      'imageAuthor': 'imageAuthor21',
      'imageAlt': 'imageAlt21',
      'soundName': 'soundName21',
      'soundUrl': 'soundUrl21',
      'soundAuthor': 'soundAuthor21',
      'textContent': 'textContent21',
      'textAuthor': 'textAuthor21'
    }
  ];

  init();

  function init() {
    var randomizedData = shuffle(mockData);
    var separator = ' - ';

    $.each(randomizedData, function (index, item) {
      console.log(index);
      console.log(item);

      // TODO: Add list items
      $('#playlist').append('<li class="playlistItem"><a href="#">' + item.imageUrl + separator + item.soundUrl + separator + item.textContent + '</a></li>');
    });
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-superwars';
  PLAYERS = [
    'Spiderman',
    'Captain America',
    'Wonderwoman',
    'Popcorn',
    'Gemwoman',
    'Bolt',
    'Antwoman',
    'Mask',
    'Tiger',
    'Captain',
    'Catwoman',
    'Fish',
    'Hulk',
    'Ninja',
    'Black Cat',
    'Volverine',
    'Thor',
    'Slayer',
    'Vader',
    'Slingo'
  ];

  ngOnInit() {
    this.viewPlayers(this.initPlayers(this.PLAYERS));
  }

  i: number = 0;

  // initialize players with image and strength
  initPlayers = players => {
    let detailedPlayers = '';

    // Instead of forloop use Map method

    detailedPlayers = players.map((player, i) => {
      return {
        name: player,
        image: './assets/super-' + (i + 1) + '.png',
        strength: this.getRandomStrength(),
        type: i % 2 == 0 ? 'hero' : 'villain'
      };
    });

    return detailedPlayers;
  };

  // getting random strength
  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };

  // Build player template
   buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join

    fragment = players
      .filter(player => player.type == type)
      .map(
        player =>
          `<div class="player">
    <img src="${player.image}" alt=" ">
    <div class="name">${player.name}</div>
    <div class="strength">${player.strength}</div>
</div>`
      )
      .join('');
    return fragment;
  };

  // Display players in HTML
  viewPlayers = players => {
    document.getElementById('heroes').innerHTML = this.buildPlayers(players,'hero');
    document.getElementById('villains').innerHTML = this.buildPlayers(players,'villain');
  };
}

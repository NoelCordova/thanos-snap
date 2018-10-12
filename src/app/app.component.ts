import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from './services/marvel-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  characters:any[] = [];
  thanosImg:string = 'https://i.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e2cd/standard_medium.jpg';
  audioElement = new Audio('../assets/sounds/intro.mp3');
  snapImageState:string = '0';
  theUniverseHasBeenBalanced:boolean = false;
  
  constructor(private marvel: MarvelApiService) { }

  ngOnInit() {
    // this.audioElement.play();
    this.setup();
  }

  setup():any {
    if (localStorage.data) {
      return this.characters = JSON.parse(localStorage.data);
    }

    this.marvel.getCharacters()
      .subscribe((characters:any) => {
        console.log('API');
        localStorage.data = JSON.stringify(characters);
        return this.characters = characters;
      });
  }

  charactersInfo(characters:any[]):any {
    console.log(characters);
    characters.forEach((character:any) => {
      console.log(character);
    });
  }

  
  consequencesOfTheSnap():any {
    console.log('start the balance...');
    
    const theyAreDead = Math.floor(this.characters.length / 2);

    this.kill(this.characters, theyAreDead);
    

    // const characters = document.querySelectorAll('.heroes');
    // const theyAreDead = Math.floor(characters.length / 2);
    // console.log(theyAreDead);
    
    // this.kill(characters, theyAreDead);
  }
  
  kill(characters, theyAreDead):any {
    if (theyAreDead > 0) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const characterChosen = characters.splice(randomIndex, 1);

      setTimeout(() => {
        this.kill(characters, theyAreDead-1);
      }, 1000);
    }
    // const array = Array.from(characters);

    // if (theyAreDead > 0) {
    //   const randomIndex = Math.floor(Math.random() * characters.length);
    //   const characterChosen = array.splice(randomIndex, 1);
      
    //   console.log(characterChosen);

    //   console.log('values', characterChosen.keys)


    //   setTimeout(() => {
    //     this.kill(characters, theyAreDead-1);
    //   }, 1000)
    // }
  }

  balanceUniverse():any {
    if (!this.theUniverseHasBeenBalanced) {
      this.snapImageState = '1';
  
      setTimeout(() => {
        this.audioElement.pause();
        this.audioElement.currentTime = 0;
        this.audioElement.src = '../assets/sounds/snap.mp3'
        this.audioElement.play();
        this.snapImageState = '0';
  
        setTimeout(() => {
          this.audioElement.pause();
          this.audioElement.src = '../assets/sounds/funeral.mp3';
          this.audioElement.play();

          this.consequencesOfTheSnap();
        }, 1998);
  
      }, 2500);

      return this.theUniverseHasBeenBalanced = true;
    }

    return console.log('The universe has benn balanced already! :(');
  }

}
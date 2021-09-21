import { Component, OnInit, ViewChild } from '@angular/core';
import { KeyboardComponent } from '../keyboard/keyboard.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @ViewChild(KeyboardComponent) keyboardComponent!: KeyboardComponent;

  word!: string;
  category!: string;
  wordLetters!: string[];
  letters!: string[];

  errors!: string[];
  errorCount!: number;

  win!: boolean;
  lose!: boolean;

  categoriesList: string[] = ['animaux', 'pays', 'métiers'];

  animals: string[] = ['elephant', 'lion', 'loutre', 'girafe', 'ouitstiti', 'rhinoceros'];
  countries: string[] = ['algerie', 'pologne', 'turkmenistan', 'turquie', 'finlande', 'macedoine'];
  jobs: string[] = ['developpeur', 'musicien', 'fermier', 'pompier', 'docteur', 'pilote' ]
  categories = [this.animals, this.countries, this.jobs];

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  ngAfterViewInit(): void {
    this.newGame();
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  dictionnary() {
    const categoriesRandom = this.getRandomInt(3);

    this.category = this.categoriesList[categoriesRandom];
    this.word = this.categories[categoriesRandom][this.getRandomInt(6)];
    this.wordLetters = this.word.split('');
  }

  newGame() {
    this.dictionnary();
    this.letters = Array(this.wordLetters.length).fill(null);
    this.errors = Array(6).fill(null);
    this.keyboardComponent.clearKeys();
    this.errorCount = 0;
    this.win = false;
    this.lose = false;
  }

  move(letter: string) {
    let indexLetters = [];

    if(this.wordLetters.includes(letter)) {
      let idx = this.wordLetters.indexOf(letter);

      while (idx != -1) {
        indexLetters.push(idx);
        idx = this.wordLetters.indexOf(letter, idx + 1);
      }

      for(let i = 0; i < indexLetters.length; i++) {
        this.letters.splice(indexLetters[i], 1, letter);
      }
    }

    else {
      this.errors.splice(this.errorCount, 1, 'X');
      this.errorCount++;
    }

    this.calculateGame();
  }

  calculateGame() {
    if (JSON.stringify(this.letters) == JSON.stringify(this.wordLetters)) {
      this.win = true;
    }
    else if (this.errorCount == 6) {
      this.lose = true;
    }
  }

}

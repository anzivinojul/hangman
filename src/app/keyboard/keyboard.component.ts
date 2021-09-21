import { Component, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { KeyboardLetterComponent } from '../keyboard-letter/keyboard-letter.component';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @ViewChildren(KeyboardLetterComponent) keyboardLetterComponent!: QueryList<KeyboardLetterComponent>;

  @Output() inputKey = new EventEmitter();

  keyboardLettersFirstLine = ['a','b','c','d','e','f','g','h','i'];
  keyboardLettersSecondLine = ['j','k','l','m','n','o','p','q','r'];
  keyboardLettersThirdLine = ['s','t','u','v','w','x','y','z'];

  ngOnInit() {

  }

  keyPress(letter: string) {
    this.inputKey.emit(letter);
  }

  clearKeys() {
    this.keyboardLetterComponent.forEach(KeyboardLetterComponent => {
      KeyboardLetterComponent.clearKey();
    });
  }

}

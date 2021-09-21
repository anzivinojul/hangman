import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard-letter',
  templateUrl: './keyboard-letter.component.html',
  styleUrls: ['./keyboard-letter.component.scss']
})
export class KeyboardLetterComponent implements OnInit {

  @Input() value!: string;

  @Output() inputKey = new EventEmitter();

  keyUsed!: boolean

  constructor() { }

  ngOnInit(): void {
    this.keyUsed = false;
  }

  key(letter: string) {
    this.inputKey.emit(letter);
    this.keyUsed = true;
  }

  clearKey() {
    this.keyUsed = false;
  }

}

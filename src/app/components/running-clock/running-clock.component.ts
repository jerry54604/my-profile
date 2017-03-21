import { Component } from '@angular/core';

@Component({
  selector: 'my-running-clock',
  templateUrl: './running-clock.html',
  styleUrls: ['./running-clock.css']
})

export class RunningClockComponent {
  private date;
  private hourTen;
  private hourOne;
  private minuteTen;
  private minuteOne;
  private secondTen;
  private secondOne;
  private colon = "";
  private numString = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  title = 'Clock!';

  constructor() {
    this.setDate();

    setInterval(() => this.setDate(), 1000);
  }

  setDate(): void {
    this.date =  new Date();
    let hour = this.date.getHours();
    let minute = this.date.getMinutes();
    let second = this.date.getSeconds();

    this.hourTen = this.numString[(hour < 10) ? 0 : hour.toString()[0]];
    this.minuteTen = this.numString[(minute < 10) ? 0 : minute.toString()[0]];
    this.secondTen = this.numString[(second < 10) ? 0 : second.toString()[0]];

    this.hourOne = this.numString[(hour < 10) ? hour : hour.toString()[1]];
    this.minuteOne = this.numString[(minute < 10) ? minute : minute.toString()[1]];
    this.secondOne = this.numString[(hour < 10) ? second : second.toString()[1]];

    this.colon = (this.colon == "") ? "blink" : "";
  }
}

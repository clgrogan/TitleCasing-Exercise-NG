import { Component, OnInit } from "@angular/core";

@Component({
  selector: "title-casing",
  templateUrl: "./title-casing.component.html",
  styleUrls: ["./title-casing.component.scss"],
})
export class TitleCasingComponent implements OnInit {
  userInput;
  minorWords;
  constructor() {
    this.userInput = "";
    this.minorWords = ["a", "an", "the", "of"];
  }

  ngOnInit(): void {}
  userInputChange = () => {
    console.log("userInputChange executed. userInput: " + this.userInput);
  };
}
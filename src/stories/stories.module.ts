import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import ButtonComponent from "./button.component";
import InputComponent from "./input.component";
import TitleComponent from "./title.component";

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ]
})

export class StoriesModule {}

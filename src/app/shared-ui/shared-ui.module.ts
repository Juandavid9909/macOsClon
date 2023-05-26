import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockModule } from "primeng/dock";
import { InputTextModule } from "primeng/inputtext";
import { ProgressBarModule } from "primeng/progressbar";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ProgressBarModule,
    InputTextModule,
    DockModule
  ]
})
export class SharedUiModule { }

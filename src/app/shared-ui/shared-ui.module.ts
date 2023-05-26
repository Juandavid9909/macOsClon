import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockModule } from "primeng/dock";
import { InputTextModule } from "primeng/inputtext";
import { MenubarModule } from "primeng/menubar";
import { ProgressBarModule } from "primeng/progressbar";
import { SidebarModule } from "primeng/sidebar";
import { TerminalModule } from "primeng/terminal";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ProgressBarModule,
    InputTextModule,
    DockModule,
    MenubarModule,
    SidebarModule,
    TerminalModule
  ]
})
export class SharedUiModule { }

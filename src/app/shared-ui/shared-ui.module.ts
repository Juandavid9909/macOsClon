import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockModule } from "primeng/dock";
import { InputTextModule } from "primeng/inputtext";
import { MenubarModule } from "primeng/menubar";
import { ProgressBarModule } from "primeng/progressbar";
import { SidebarModule } from "primeng/sidebar";
import { TerminalModule } from "primeng/terminal";
import { ContextMenuModule } from "primeng/contextmenu";

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
    TerminalModule,
    ContextMenuModule
  ]
})
export class SharedUiModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { DesktopComponent } from './containers';
import { DockComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { LaunchpadComponent } from './containers/launchpad/launchpad.component';
import { TerminalComponent } from './containers/terminal/terminal.component';
import { DialogControlsComponent } from './components/dialog-controls/dialog-controls.component';
import { FoldersComponent } from './containers/folders/folders.component';
import { FolderIconComponent } from './components/folder-icon/folder-icon.component';

const components = [
  DesktopComponent,
  DockComponent,
  MenuComponent,
  LaunchpadComponent,
  TerminalComponent,
  DialogControlsComponent,
  FoldersComponent,
  FolderIconComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    SharedModule
  ]
})
export class ApplicationsModule { }

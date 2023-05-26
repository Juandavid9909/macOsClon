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
import { FinderComponent } from './containers/finder/finder.component';
import { TrashComponent } from './containers/trash/trash.component';
import { FinderSidebarComponent } from './components/finder-sidebar/finder-sidebar.component';
import { SidebarGroupComponent } from './components/sidebar-group/sidebar-group.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';

const components = [
  DesktopComponent,
  DockComponent,
  MenuComponent,
  LaunchpadComponent,
  TerminalComponent,
  DialogControlsComponent,
  FoldersComponent,
  FolderIconComponent,
  FinderComponent,
  TrashComponent,
  FinderSidebarComponent,
  SidebarGroupComponent,
  SidebarItemComponent
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

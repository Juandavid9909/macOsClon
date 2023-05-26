import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  @Output() openSpotlightOpened = new EventEmitter();

  menuItems = [
    {
      label: "Finder",
      className: "menu"
    },
    {
      label: "File"
    },
    {
      label: "Edit"
    },
    {
      label: "View"
    },
    {
      label: "Go"
    },
    {
      label: "Window"
    },
    {
      label: "Help"
    }
  ];

  openSpotlight() {
    this.openSpotlightOpened.emit();
  }
}

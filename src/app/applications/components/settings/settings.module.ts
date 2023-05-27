import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AirdropControlComponent,
  BluetoothControlComponent,
  FocusControlComponent,
  KeyboardBrightnessControlComponent,
  MusicControlComponent,
  ScreenMirroringControlComponent,
  WifiControlComponent,
  SettingsComponent
} from '.';

const components = [
  AirdropControlComponent,
  BluetoothControlComponent,
  FocusControlComponent,
  KeyboardBrightnessControlComponent,
  MusicControlComponent,
  ScreenMirroringControlComponent,
  WifiControlComponent,
  SettingsComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class SettingsModule { }

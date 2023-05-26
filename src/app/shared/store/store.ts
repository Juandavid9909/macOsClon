import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseStore } from './base-store';
import { State } from './state';
import { DESKTOP } from '../config/applications';

const initialState: State = {
  activeApplications: DESKTOP,
  selectedFolderIds: [],
  deletedFolterIds: [],
  folders: []
}

@Injectable({
  providedIn: 'root'
})
export class Store extends BaseStore {
  activeApplication$: Observable<string> = this.select((state) => {
    return state.activeApplications;
  });

  constructor() {
    super(initialState);
  }

  setActiveApplication(activeAppId = DESKTOP) {
    this.setState({
      activeApplications: activeAppId
    });
  }
}

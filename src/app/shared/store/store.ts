import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseStore } from './base-store';
import { State } from './state';
import { DESKTOP } from '../config/applications';
import { FolderSelection } from '../models/folder-selection';
import { Folder } from '../models/folder';

const initialState: State = {
  activeApplications: DESKTOP,
  selectedFolderIds: [],
  deletedFolterIds: [],
  folders: [
    {
      id: 0,
      title: "desktop"
    },
    {
      id: 1,
      title: "untitled",
      parentFolderId: 0
    },
    {
      id: 2,
      title: "test",
      parentFolderId: 0
    },
    {
      id: 3,
      title: "assets",
      parentFolderId: 2
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class Store extends BaseStore {

  trashItemsCount$: Observable<number> = this.select((state) => {
    return state.deletedFolterIds.length;
  })

  desktopFolders$: Observable<Folder[]> = this.select((state) => {
    return state.folders
      .filter(f => f.parentFolderId === 0 && !state.deletedFolterIds.includes(f.id))
      .map(f => {
        return {
          ...f,
          selected: state.selectedFolderIds.includes(f.id)
        }
      });
  });

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

  toggleFolder(folderSelection: FolderSelection) {
    if(folderSelection.selectedMultiple) {
      this.setState({
        selectedFolderIds: [
          ...this.state.selectedFolderIds,
          folderSelection.id
        ]
      });
    }
    else {
      this.setState({
        selectedFolderIds: [
          folderSelection.id
        ]
      });
    }
  }

  unselectAllFolders() {
    this.setState({
      selectedFolderIds: []
    });
  }

  deleteSelectedFolders() {
    this.setState({
      deletedFolterIds: [
        ...this.state.deletedFolterIds,
        ...this.state.selectedFolderIds
      ]
    });
  }

  addNewFolder() {
    const miliseconds = new Date().getTime();
    const newFolder: Folder = {
      id: miliseconds,
      title: `${ miliseconds }`,
      parentFolderId: 0
    }

    this.setState({
      folders: [
        ...this.state.folders,
        newFolder
      ]
    });
  }
}

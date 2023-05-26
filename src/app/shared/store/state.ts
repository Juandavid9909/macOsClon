import { Folder } from "../models/folder";

export interface State {
  folders: Folder[],
  selectedFolderIds: number[],
  deletedFolterIds: number[],
  activeApplications: string
}

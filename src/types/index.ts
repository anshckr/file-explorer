export enum FileTypes {
  FILE = "file",
  FOLDER = "folder"
}

export interface FileEntity {
  type: FileTypes;
  name: string;
  meta?: string;
  data?: FileEntity[];
}

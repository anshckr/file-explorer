import { FileEntity } from "../types";

export const getFilteredFiles = (
  files: FileEntity,
  searchedText: string
): FileEntity | null => {
  if (files.type === "file") {
    if (files.name.match(searchedText)) {
      // include that file
      return {
        type: files.type,
        name: files.name
      };
    }
  }

  if (files.type === "folder") {
    // check in the folder now
    const children = files
      .data!.map((child) => {
        const childObj = getFilteredFiles(child, searchedText);

        if (childObj) {
          return childObj;
        }

        return null;
      })
      .filter((child) => {
        // remove null childs
        return child !== null;
      });

    if (children.length) {
      return {
        type: files.type,
        name: files.name,
        data: children
      } as FileEntity;
    } else if (files.name.match(searchedText)) {
      // include that folder with data
      return {
        type: files.type,
        name: files.name
      };
    }

    return null;
  }

  return null;
};

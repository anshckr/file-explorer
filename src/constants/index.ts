import { FileEntity, FileTypes } from "../types";

export const Files: FileEntity = {
  type: FileTypes.FOLDER,
  name: "parent",
  data: [
    {
      type: FileTypes.FOLDER,
      name: "root",
      data: [
        {
          type: FileTypes.FOLDER,
          name: "src",
          data: [
            {
              type: FileTypes.FILE,
              meta: "js",
              name: "index.js"
            }
          ]
        },
        {
          type: FileTypes.FOLDER,
          name: "public",
          data: [
            {
              type: FileTypes.FILE,
              meta: "ts",
              name: "index.ts"
            }
          ]
        },
        {
          type: FileTypes.FILE,
          meta: "html",
          name: "index.html"
        },
        {
          type: FileTypes.FOLDER,
          name: "data",
          data: [
            {
              type: FileTypes.FOLDER,
              name: "images",
              data: [
                {
                  type: FileTypes.FILE,
                  meta: "img",
                  name: "image.png"
                },
                {
                  type: FileTypes.FILE,
                  meta: "img",
                  name: "image2.webp"
                }
              ]
            },
            {
              type: FileTypes.FILE,
              meta: "svg",
              name: "logo.svg"
            }
          ]
        },
        {
          type: FileTypes.FILE,
          meta: "css",
          name: "style.css"
        }
      ]
    }
  ]
};

import { useCallback, useState } from "react";

import { FileEntity } from "../types";

interface Props {
  entity: FileEntity;
  elementIndex: number;
}

const File: React.FC<Props> = ({ entity, elementIndex }) => {
  const [isActive, setIsActive] = useState(false);

  const handleFileClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      setIsActive(!isActive);
    },
    [isActive]
  );

  const handleFileUpdates = useCallback(
    (event: any) => {
      event.preventDefault();

      // just console logging context menu
      console.log({
        event,
        fileName: entity.name
      });
    },
    [entity.name]
  );

  const handleKeyDown = useCallback(
    (event: any) => {
      event.stopPropagation();
      event.preventDefault();

      if (event.key === "Enter") {
        setIsActive(!isActive);
      }

      if (event.key === "c") {
        console.log({
          event,
          fileName: entity.name
        });
      }

      const currIndex = parseInt(event.target.dataset.index, 10);

      if (event.key === "ArrowUp") {
        const prevEle = event.target.parentElement.querySelector(
          `[data-index="${currIndex - 1}"]`
        );

        if (prevEle) {
          // prev elem
          prevEle.focus();
        }
      }

      if (event.key === "ArrowDown") {
        const nextEle = event.target.parentElement.querySelector(
          `[data-index="${currIndex + 1}"]`
        );

        if (nextEle) {
          // prev elem
          nextEle.focus();
        }
      }

      if (event.key === "ArrowLeft") {
        // move up to parent
        event.target.parentElement.focus();
      }
    },
    [entity.name, isActive]
  );

  return (
    <ul
      className={`file ${isActive ? "file--active" : ""}`}
      onClick={handleFileClick}
      onKeyDown={handleKeyDown}
      onContextMenu={handleFileUpdates}
      tabIndex={0}
      data-index={elementIndex}
    >
      <li>
        <span className="file__name">File: {entity.name}</span>
      </li>
    </ul>
  );
};

export default File;

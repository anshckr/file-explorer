import { useCallback, useState } from "react";
import Node from "./Node";
import { FileEntity } from "../types";

interface Props {
  entity: FileEntity;
  elementIndex: number;
}

const Folder: React.FC<Props> = ({ entity, elementIndex }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFolderClick = useCallback(
    (event: any) => {
      event.stopPropagation();
      event.preventDefault();

      setIsExpanded(!isExpanded);
    },
    [isExpanded]
  );

  const handleKeyDown = useCallback(
    (event: any) => {
      event.stopPropagation();
      event.preventDefault();

      if (event.key === "Enter") {
        setIsExpanded(!isExpanded);
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
          // next elem
          nextEle.focus();
        }
      }

      if (event.key === "ArrowRight") {
        if (!isExpanded) {
          // expand
          setIsExpanded(true);
        }

        setTimeout(() => {
          // then focus on first child
          event.target.querySelector("ul").focus();
        });
      }

      if (event.key === "ArrowLeft") {
        // focus on parent
        event.target.parentElement.focus();
      }
    },
    [isExpanded]
  );

  return (
    <ul
      className="folder"
      onClick={handleFolderClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      data-index={elementIndex}
    >
      <li>
        <span className="folder__name">Folder: {entity.name}</span>
      </li>
      {isExpanded &&
        entity.data &&
        entity.data.map((child: FileEntity, index: number) => {
          return <Node key={child.name} entity={child} elementIndex={index} />;
        })}
    </ul>
  );
};

export default Folder;

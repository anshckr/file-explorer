import Folder from "./Folder";
import File from "./File";
import { FileEntity } from "../types";

interface Props {
  entity: FileEntity | null;
  elementIndex: number;
}

const Node: React.FC<Props> = ({ entity, elementIndex }) => {
  if (!entity) return null;

  return entity.type === "folder" ? (
    <Folder entity={entity} elementIndex={elementIndex} />
  ) : (
    <File entity={entity} elementIndex={elementIndex} />
  );
};

export default Node;

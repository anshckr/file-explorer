import "./styles.css";
import { Files } from "./constants";
import Node from "./components/Node";
import ErrorBoundary from "./components/ErrorBoundary";
import { debounceFn } from "./utils/debounce";
import { getFilteredFiles } from "./utils/getFilteredFiles";

import React, { useCallback, useMemo, useState } from "react";
import { FileEntity } from "./types";

export default function App() {
  const [searchedText, setSearchedText] = useState("");

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newVal = event.target.value;

      setSearchedText(newVal);
    },
    []
  );

  const debouncedInputChange = debounceFn(handleInputChange);

  const filteredFiles: FileEntity | null = useMemo(() => {
    return getFilteredFiles(Files, searchedText);
  }, [searchedText]);

  return (
    <div className="App">
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <input
          type="text"
          className="search-bar"
          onChange={debouncedInputChange}
        />
        <Node entity={filteredFiles} elementIndex={0} />
      </ErrorBoundary>
    </div>
  );
}

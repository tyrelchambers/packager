import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = (props) => {
  return (
    <Editor
      height="90vh"
      width="100%"
      defaultLanguage="json"
      defaultValue={props.initial}
      value={props.value}
      theme="vs-dark"
      wrapperClassName="rounded-lg overflow-hidden "
      options={{
        lineNumbers: false,
        minimap: false,
      }}
    />
  );
};

export default CodeEditor;

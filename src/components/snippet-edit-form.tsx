"use client";

import Editor from "@monaco-editor/react";
import { useState } from "react";
import type { Snippet } from "@prisma/client";

import { editSnippet } from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}
export const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code);
  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = editSnippet.bind(null, snippet.id, code);

  return (
    <div className="space-y-4">
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="primary-btn block mx-auto w-[120px]">
          Save
        </button>
      </form>
    </div>
  );
};

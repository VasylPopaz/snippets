"use client";

import { createSnippet } from "@/actions";
import { useFormState } from "react-dom";

const SnippetCreatePage = () => {
  const [formState, action] = useFormState(createSnippet, { message: "" });

  return (
    <form action={action}>
      <h3 className="font-bold py-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="border-2 rounded p-2 w-full outline-none focus-visible:border-purple-500"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            id="code"
            className="border-2 rounded p-2 w-full outline-none focus-visible:border-purple-500"
          />
        </div>

        {formState.message ? (
          <div className="mt-2 p-2 bg-red-200 border border-red-400 rounded ">
            {formState.message}
          </div>
        ) : null}

        <button
          type="submit"
          className="rounded p-2 bg-purple-500 text-white hover:bg-purple-800 focus-visible:bg-purple-800"
        >
          Create
        </button>
      </div>
    </form>
  );
};
export default SnippetCreatePage;

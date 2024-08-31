import { db } from "@/db";
import { redirect } from "next/navigation";

const SnippetCreatePage = () => {
  const createSnippet = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    redirect("/");
  };

  return (
    <form action={createSnippet}>
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
            required
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

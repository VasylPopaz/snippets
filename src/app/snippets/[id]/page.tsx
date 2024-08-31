import { db } from "@/db";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

const SnippetShowPage = async ({ params }: SnippetShowPageProps) => {
  const snippet = await db.snippet.findFirst({
    where: { id: Number(params.id) },
  });

  if (!snippet) {
    return (
      <h1 className="text-xl font-bold">
        Sorry, but we cant find that snippet
      </h1>
    );
  }
  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">{snippet.title}</h2>
        <div className="flex gap-4">
          <button type="button" className="primary-btn w-[100px]">
            Edit
          </button>
          <button type="button" className="primary-btn [100px]">
            Delete
          </button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetShowPage;

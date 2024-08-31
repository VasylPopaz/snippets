import { SnippetEditForm } from "@/components";
import { db } from "@/db";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

const SnippetEditPage = async ({ params }: SnippetEditPageProps) => {
  const id = Number(params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) {
    return (
      <h1 className="text-xl font-bold">
        Sorry, but we cant find that snippet
      </h1>
    );
  }
  return <div></div>;
};

export default SnippetEditPage;

import { db } from "@/db";

const Home = async () => {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <li key={snippet.id}>{snippet.title}</li>
  ));
  return (
    <div>
      <ul>{renderedSnippets}</ul>
    </div>
  );
};
export default Home;

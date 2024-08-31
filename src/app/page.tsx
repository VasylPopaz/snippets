import { db } from "@/db";
import Link from "next/link";

const Home = async () => {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <li
      key={snippet.id}
      className="flex justify-between items-center py-2 px-4 border-2 border-purple-500 rounded"
    >
      {snippet.title}
      <Link href={`/snippets/${snippet.id}`} className="hover:text-purple-500 ">
        View
      </Link>
    </li>
  ));
  return (
    <div>
      Home{" "}
      <div className="flex py-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>{" "}
        <Link href="/snippets/new" className="primary-btn">
          New
        </Link>
      </div>
      <ul className="space-y-2">{renderedSnippets}</ul>
    </div>
  );
};
export default Home;

const SnippetCreatePage = () => {
  return (
    <form>
      <h3 className="font-bold m-3">Create a Snippet</h3>
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
        <button
          type="submit"
          className="rounded p-2 bg-purple-500 text-white hover:bg-purple-800 focus-visible:bg-purple-800 transition duration-300"
        >
          Create
        </button>
      </div>
    </form>
  );
};
export default SnippetCreatePage;

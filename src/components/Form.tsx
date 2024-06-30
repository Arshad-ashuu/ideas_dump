import React from "react";
import Link from "next/link";

interface Post {
  idea: string;
  tag: string;
}

interface FormProps {
  type: string;
  post: Post;
  setPost: React.Dispatch<React.SetStateAction<Post>>;
  submitting: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const Form: React.FC<FormProps> = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}) => {
  return (
    <section className="w-full flex mt-12 px-4 flex-col justify-center items-center">
      <h1 className="text-5xl font-semibold">
        <span className="bg-gradient-to-r from-blue-600 via-green-400 to-pink-400 inline-block text-transparent bg-clip-text">
          {type} Post
        </span>
      </h1>
      <p className="mt-2 dark:text-white text-black">
        {type} and share amazing ideas with the world, and let imagination run
        wild
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7"
      >
        <label htmlFor="idea">
          <span className="font-sans font-semibold text-xl dark:text-white text-black flex flex-col">
            Your Idea
          </span>
          <textarea
            id="idea"
            value={post.idea}
            onChange={(e) =>
              setPost({
                ...post,
                idea: e.target.value,
              })
            }
            placeholder="write your ideas here..."
            required
            className="mt-3 h-32 w-full dark:text-white text-black border rounded-xl p-2 border-black dark:border-[#f2d376] shadow-xl"
          />
        </label>

        <label htmlFor="tag">
          <span className="font-sans font-semibold text-xl dark:text-white text-black">
            Tag {` `}
            <span className="font-normal text-lg">
              (#product, #webdevelopment, #ideas, #appdevelopment, #tech, #ai)
            </span>
          </span>
          <input
            id="tag"
            value={post.tag}
            onChange={(e) =>
              setPost({
                ...post,
                tag: e.target.value,
              })
            }
            placeholder="#Tag ..."
            required
            className="mt-3 w-full dark:text-white text-black border rounded-xl p-2 border-black dark:border-[#f2d376] shadow-xl"
          />
        </label>

        <div className="flex mx-3 mb-5 gap-4">
          <Link
            href="/"
            className="dark:text-white text-black text-sm border dark:border-[#f2d376] rounded-xl dark:bg-gray-600 shadow shadow-gray-500 px-5 py-1.5"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm dark:bg-white dark:text-black bg-black text-white shadow-md dark:border-[#f2d376] shadow-black rounded-full"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

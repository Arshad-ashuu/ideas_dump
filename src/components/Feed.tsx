"use client";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
const Feed: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [ideas, setIdeas] = useState([]);

  const handleSearchChange = (e: any) => {};

  useEffect(() => {
    const fetchIdeas = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/idea");
        const data = await response.json();
        setIdeas(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching ideas:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchIdeas();
  }, []);

  return (
    <section className="flex w-full justify-center items-center flex-col">
      <form className="relative w-full flex justify-center items-center mb-12">
        <input
          type="text"
          placeholder="Search for tag or username"
          required
          value={searchText}
          onChange={handleSearchChange}
          className=" lg:w-1/2 mt-12 pl-4 rounded-xl h-14 w-full focus:border-[#f0c14b] border-[#f0c14b] border shadow-lg "
        />
      </form>
      {loading ? (
        <div className="text-center mt-16">Loading...</div>
      ) : ideas.length === 0 ? (
        <div className="text-center mt-16 text-lg">
          No ideas found..☹️
          <br /> Be the first to share your ideas 😸
        </div>
      ) : (
        <>
          {ideas.map((idea) => (
            <Cards key={idea._id} data={idea} />
          ))}
        </>
      )}
    </section>
  );
};

export default Feed;

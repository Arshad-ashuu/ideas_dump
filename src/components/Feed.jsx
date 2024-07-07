"use client"
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [ideas, setIdeas] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchIdeas = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/idea");
        const data = await response.json();
        setIdeas(data);

      } catch (error) {
        console.error("Error fetching ideas:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchIdeas();
  }, []);

  const filteredIdeas = ideas.filter((idea) => {
    const tag = idea.tag ? idea.tag.toLowerCase() : ""; // Check if idea.tag is defined
    const username =
      idea.creator && idea.creator.username
        ? idea.creator.username.toLowerCase()
        : ""; // Check if idea.creator and idea.creator.username are defined

    return (
      tag.includes(searchText.toLowerCase()) ||
      username.includes(searchText.toLowerCase())
    );
  });

  return (
    <section className="flex w-full justify-center items-center flex-col">
      <form className="relative w-full flex justify-center items-center mb-12">
        <input
          type="text"
          placeholder="Search for tag or username"
          required
          value={searchText}
          onChange={handleSearchChange}
          className="lg:w-1/2 mt-12 pl-4 rounded-xl h-14 w-full focus:border-[#f0c14b] border-[#f0c14b] border shadow-lg"
        />
      </form>
      {loading ? (
        <div className="text-center mt-16">Loading...</div>
      ) : filteredIdeas.length === 0 ? (
        <div className="text-center mt-16 text-lg">
          No ideas found..☹️
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center items-center mt-12 ">
          {filteredIdeas.map((idea) => (
            <Cards key={idea._id} data={idea} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Feed;

import { connectToDb } from "../../../../utils/database";
import Idea from "../../../../models/idea";

export const POST = async (req) => {
  try {
    const { userId, idea, tag } = await req.json();
    await connectToDb();

    const newIdea = new Idea({
      creator: userId,
      tag,
      idea,
    });

    await newIdea.save();

    return new Response(JSON.stringify(newIdea), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating new idea:", error);
    return new Response("Failed to create a new post", { status: 500 });
  }
};

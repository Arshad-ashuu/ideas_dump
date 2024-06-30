import { connectToDb } from "../../../utils/database";
import idea from "../../../models/idea";

export const GET = async (request) => {
  try {
    await connectToDb();
    const ideas = await idea.find({}).populate("creator");
    console.log("ideas", ideas);
    return new Response(JSON.stringify(ideas), {
      status: 200,
    });
  } catch (error) {
    return new Response("failed to fetch all ideas", {
      status: 500,
    });
  }
};

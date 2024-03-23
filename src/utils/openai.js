import { AzureKeyCredential, OpenAIClient } from "@azure/openai";
import { MESSAGE_REFERENCE } from "../utils/constants";

const endpoint = process.env.REACT_APP_AZURE_OPENAI_ENDPOINT;
const azureApiKey = process.env.REACT_APP_AZURE_OPENAI_API_KEY;
const deploymentId = "deploy1";

const getMovieRecommendations = async (inputText) => {
  const client = new OpenAIClient(
    endpoint,
    new AzureKeyCredential(azureApiKey)
  );
  const messages = MESSAGE_REFERENCE;
  messages.push({ role: "user", content: inputText });
  const result = await client.getChatCompletions(deploymentId, messages);

  let movieResults = [];
  for (const choice of result.choices) {
    const listOfMovies = choice.message.content;
    if (listOfMovies.trim() === "NA" || listOfMovies.startsWith("Sorry"))
      continue;
    movieResults = listOfMovies.split(",");
  }
  console.log("GPTmovieResults >>> ", movieResults);
  return movieResults.map((movie) => movie.trim());
};

export default getMovieRecommendations;

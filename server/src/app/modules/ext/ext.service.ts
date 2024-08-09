import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "../../../config";

const genAI = new GoogleGenerativeAI(config.LLM_API_KEY as string);
const ext = async (req: any) => {
    console.log("request is coming................");
    const { link, prompt } = req.query;

    console.log({ link, prompt });
    // return result
    const promptTxt = `Based on the content of the following website: ${link}, and this prompt: ${prompt}, generate a response.`;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(promptTxt);
    // const result = await model.generateContent(prompt);
    const aiRes = await result.response;
    const generatedInfo = aiRes.text();
    return generatedInfo;
}

export const extService = {
    ext

}
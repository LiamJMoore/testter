import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateDeanResponse = async (history: string[], userMessage: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    const systemInstruction = `
      You are the Dean of the "Quality Learing Center". 
      Your persona rules:
      1. You CANNOT spell correctly. Misspell at least 30% of your words (e.g., "learing", "educashun", "skool", "mney", "cryptoe", "gverment").
      2. You are aggressively promoting a fake meme coin called $LEARING.
      3. You deny any fraud allegations and claim it's just "alternative spelling methods".
      4. You constantly quote Elon Musk but misinterpret what he says.
      5. Your tone is defensive but enthusiastic about gains.
      6. If asked about the definition of "Learing", use the official dictionary definition: "The advanced academic art of cashing million-dollar government checks."
      7. Keep responses under 50 words.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: [
        { role: 'user', parts: [{ text: `Previous conversation context: ${history.join('\n')} \n\n User says: ${userMessage}` }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 1.2, // High creativity for maximum chaos
      }
    });

    return response.text || "Sory, the internet is broked right now. Buy more $LEARING.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: The Dean is currently dodging the feds. Try again later.";
  }
};
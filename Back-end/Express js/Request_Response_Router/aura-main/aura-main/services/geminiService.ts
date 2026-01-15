
import { GoogleGenAI, Chat, Type } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let chatInstance: Chat | null = null;

export const getChat = (): Chat => {
    if (!chatInstance) {
        chatInstance = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: AI_SYSTEM_INSTRUCTION,
            },
        });
    }
    return chatInstance;
};

export const sendMessageToAI = async (message: string): Promise<string> => {
    try {
        const chat = getChat();
        const response = await chat.sendMessage({ message });
        return response.text;
    } catch (error) {
        console.error("Error sending message to AI:", error);
        return "I'm having a little trouble connecting right now. Please try again in a moment.";
    }
};

export const generateResources = async (topic: string) => {
    try {
        const prompt = `Generate a list of 3 helpful and reliable mental wellness resources for a young person interested in "${topic}". For each resource, provide a title, a short, easy-to-understand description, and a valid URL.`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            title: {
                                type: Type.STRING,
                                description: "The name of the resource."
                            },
                            description: {
                                type: Type.STRING,
                                description: "A brief, encouraging summary of the resource."
                            },
                            url: {
                                type: Type.STRING,
                                description: "The direct URL to the resource."
                            }
                        },
                        required: ["title", "description", "url"]
                    }
                }
            }
        });
        
        const jsonText = response.text.trim();
        return JSON.parse(jsonText);

    } catch (error) {
        console.error("Error generating resources:", error);
        return null;
    }
};

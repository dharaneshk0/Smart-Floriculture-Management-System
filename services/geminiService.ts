
import { GoogleGenAI, Chat } from "@google/genai";
import type { Language } from '../types';

let ai: GoogleGenAI | null = null;
let chat: Chat | null = null;

const getAiInstance = () => {
    if (!ai) {
        if (!process.env.API_KEY) {
            throw new Error("API_KEY environment variable not set.");
        }
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return ai;
};

const getSystemInstruction = (language: Language): string => {
    switch (language) {
        case 'hi':
            return "आप एक सहायक कृषि विशेषज्ञ हैं जो फूलों की खेती में माहिर हैं। हिंदी में संक्षिप्त और सहायक उत्तर दें।";
        case 'te':
            return "మీరు పూల పెంపకంలో నైపుణ్యం కలిగిన సహాయక వ్యవసాయ నిపుణుడు. తెలుగులో క్లుప్తంగా మరియు సహాయకరంగా సమాధానాలు ఇవ్వండి.";
        case 'en':
        default:
            return "You are a helpful agricultural expert specializing in floriculture. Provide concise and helpful answers in English.";
    }
}

const initializeChat = (language: Language) => {
    const aiInstance = getAiInstance();
    chat = aiInstance.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: getSystemInstruction(language),
        },
    });
};

export const runChat = async (prompt: string, language: Language): Promise<string> => {
    try {
        if (!chat) {
            initializeChat(language);
        }
        
        // This is a simple way to reset/re-initialize if the language changes.
        // A more robust solution might manage separate chat instances per language.
        // We cannot access private config directly; instead reinitialize if language changed.
        // For simplicity, if current chat exists and language differs from last initialized language, recreate it.
        // Track last language via a static variable.
        if ((runChat as any).lastLanguage !== language) {
            initializeChat(language);
            (runChat as any).lastLanguage = language;
        }

        if (!chat) {
            throw new Error("Chat not initialized");
        }
        
        const response = await chat.sendMessage({ message: prompt });
        return response.text;
    } catch (error) {
        console.error("Gemini API call failed:", error);
        // Reset chat on failure to allow for re-initialization on next attempt
        chat = null; 
        throw error;
    }
};

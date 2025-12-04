
import { GoogleGenAI } from "@google/genai";
import { EXPERIENCE, CERTIFICATIONS, SKILLS, HERO_DATA, EDUCATION, CONTACT_INFO, EXTRACURRICULARS, PROJECTS, OPEN_SOURCE } from "../constants";

// Construct the system context from the portfolio data
const PORTFOLIO_CONTEXT = `
You are an AI assistant for ${HERO_DATA.name}'s portfolio website. 
Your goal is to answer questions about ${HERO_DATA.name}'s skills, experience, and certifications based strictly on the following data.
Keep answers concise, professional, and friendly.

About ${HERO_DATA.name}:
${HERO_DATA.bio}
Role: ${HERO_DATA.role}
Location: ${CONTACT_INFO.address}
Email: ${CONTACT_INFO.email}

Skills:
${SKILLS.map(s => `- ${s.title}: ${s.description}`).join("\n")}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.date}). Key work: ${e.description.join("; ")}`).join("\n")}

Education:
${EDUCATION.map(e => `- ${e.degree} at ${e.institution} (${e.date}). Grade: ${e.grade}. Details: ${e.description}`).join("\n")}

Achievements/Certifications:
${CERTIFICATIONS.map(c => `- ${c.name} issued by ${c.issuer} (${c.date}). ${c.description}`).join("\n")}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.techStack.join(', ')})`).join("\n")}

Open Source Contributions:
${OPEN_SOURCE.map(o => `- ${o.role} at ${o.repo}: ${o.description}`).join("\n")}

Extracurricular Activities:
${EXTRACURRICULARS.map(e => `- ${e.role} at ${e.organization} (${e.date}). ${e.description}`).join("\n")}

If asked about contact info, refer to the contact section or provide the email ${CONTACT_INFO.email}.
If asked about something not in this data, say you don't have that information but suggest contacting ${HERO_DATA.name} directly.
`;

let aiClient: GoogleGenAI | null = null;

export const initializeGemini = () => {
  if (process.env.API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  } else {
    console.warn("Gemini API Key is missing. Chat functionality will be limited.");
  }
};

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  if (!aiClient) {
    initializeGemini();
    if (!aiClient) {
      return "I'm sorry, I can't connect to my brain right now (API Key missing). Please try again later.";
    }
  }

  try {
    const model = aiClient.models;
    
    // We use generateContent for a single turn Q&A feel, effectively stateless for simplicity in this demo,
    // or we could use chat. But providing the full context in systemInstruction each time is robust for this use case.
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: PORTFOLIO_CONTEXT,
      }
    });

    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I seem to be having trouble processing that request right now.";
  }
};

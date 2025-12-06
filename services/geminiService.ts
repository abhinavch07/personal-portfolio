
export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase configuration missing");
      return "Configuration error. Please try again later.";
    }

    const response = await fetch(
      `${supabaseUrl}/functions/v1/gemini-chat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify({ message: userMessage }),
      }
    );

    if (!response.ok) {
      console.error("API error:", response.statusText);
      return "I seem to be having trouble processing that request right now.";
    }

    const data = await response.json();
    return data.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Error calling Gemini service:", error);
    return "I seem to be having trouble processing that request right now.";
  }
};

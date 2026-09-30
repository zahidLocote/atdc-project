import { supabase } from "./supabaseClient";

export const saveMediaUrl = async (url: string): Promise<boolean> => {
    const { error } = await supabase
        .from("media")
        .insert({ URL: url });

    if (error) {
        console.error("Error guardando URL en Supabase:", {
            table: "media",
            column: "URL",
            code: error.code,
            message: error.message,
            details: error.details,
            hint: error.hint,
            originalError: error,
        });
        return false;
    }

    return true;
};

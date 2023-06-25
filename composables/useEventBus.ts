import mitt from "mitt";
import { useSupabaseUser } from "@nuxtjs/supabase/dist/runtime/composables/useSupabaseUser";
type AppEvents = {
	"user:registered": "";
};

const emitter = mitt<AppEvents>();

export const useEvent = emitter.emit;
export const useListen = emitter.on;

/*
useEvent("user:registered", { name: "Israel" });
// capture
useListen("user:registered", (user) => console.log(user));
*/

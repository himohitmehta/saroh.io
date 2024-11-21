import { nextAuthInstance } from "@saroh/auth/auth.ts";
const { handlers } = nextAuthInstance;
export const { GET, POST } = handlers;

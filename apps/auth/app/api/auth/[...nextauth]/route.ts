// import { handlers } from '@/lib/auth';
import { nextAuthInstance } from "@saroh/auth/auth";
const { handlers } = nextAuthInstance;
export const { GET, POST } = handlers;

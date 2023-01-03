import { setupWorker } from "msw";
import { handlers } from "./routes/handlers";

export const worker = setupWorker(...handlers);

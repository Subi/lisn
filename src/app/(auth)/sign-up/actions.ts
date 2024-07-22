'use server'

import { schema } from "./schema";

export type FormState = {
    message: string;
    fields?: Record<string, string>
    issues?: string[]
}

export async function signupAction(prevState:FormState , data: FormData): Promise<FormState> {
    const formData =  Object.fromEntries(data)
    const parsed =  schema.safeParse(formData)
    if(!parsed.success) {
        return {
            message: "Invalid form data",
            fields: parsed.data,
            issues: parsed.error.issues.map((issue) => issue.message)
        };
    }
    return {
        message: "User registered"
    }
 }
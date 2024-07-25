'use server'

import { createClient } from "@/lib/supabase/server";
import { schema } from "./schema";
import { SignUpWithPasswordCredentials } from "@supabase/supabase-js";
import  { redirect } from 'next/navigation';
import { revalidatePath } from "next/cache";

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
    const supabase =  createClient()
    const {error} = await supabase.auth.signUp(parsed.data)
    if(error) {
        return {
            message: error.code as string
        }
    }
    revalidatePath('/signup')
    return {
        message: "Success"
    }
 }
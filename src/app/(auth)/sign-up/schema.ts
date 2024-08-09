import z from 'zod'


export const schema =  z.object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }).includes("@"),
    password: z.string().min(3 , {
      message: "Password must be at least 3 charachters"
    })
  })
  
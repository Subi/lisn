"use client"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import {SubmitHandler, useForm} from 'react-hook-form'
import PlatformOption from "@/components/PlatformOptions";import { appleLogo, spotifyLogo } from "@/images";
import { Option } from "./page";
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import {  linkAccountAction, signupAction } from "./actions";
import { useFormState } from "react-dom";
import {schema} from './schema'
import { toast } from "sonner"


type FormProps = {
  streamingOptions: Option[]
}


export default function Form({streamingOptions}:FormProps) {
    const [credentials , setCredentials] = useState<boolean>(false)
    const [email , setEmail] = useState<string>("")
    const [options , setOptions] = useState<Option[]>(streamingOptions)
    const [state , formAction]  = useFormState(signupAction , {
      message: "",
    })
    
    
    useEffect(() => {
      if(state.message === "Success") {
        toast("Account successfully created!")
        setCredentials(true)
      } 
    } , [state.message])


    const {register  , handleSubmit , formState : {errors}} =  useForm<z.output<typeof schema>>({
      resolver:zodResolver(schema),
      defaultValues: {
        ...(state?.fields ?? {})
      }
    })

    const updateSelectedOption = (value:number) => {
      const newOptions:Option[] = options.map((option , index) => {
        if(value  === index) {
          return {...option , isSelected: true}
        }
        return {...option , isSelected: false}
      })
      setOptions(newOptions)
    }

    const linkAccount = async () => {
      const selectedOption:Option | undefined = options.find(option => option.isSelected);
      await linkAccountAction(selectedOption , email)
    }


    const formRef = useRef<HTMLFormElement>(null)


    return (
      <div className="w-full pt-20 justify-center flex">
      <div className="w-[400px] flex flex-col p-10">
          <div className="flex-col">
          {/* {state?.message != "" && (<div className="text-red-500">{state.message}</div>)} */}
              <div className="text-2xl font-bold">
                {!credentials ? "Get Started Now." : "Link Your Account "}
              </div>
              <div className="text-xs text-gray-400 tracking-wide py-3">
                {!credentials ? "Enter your credentials to access your account" : "Pick one to finish creating your lisn account" }
              </div>
              <hr/>
          </div>
          <form ref={formRef} action={formAction}>
        {!credentials ? 
       <div className="py-4 flex flex-col">
          <div className="flex-col pb-3">
            <div>
            <label className="text-xs tracking-wide font-medium">Email Address</label>
            </div>
            <input {...register("email")} onChange={(e) => {setEmail(e.target.value)}}  className="tracking-wide  pl-2 w-full text-xs border rounded-lg p-[7px]" type="text" placeholder="example@domain.com"/>
              {errors.email && <div className="text-xs p-1 tracking-wide text-red-500">{errors.email.message}</div>}
          </div>
          <div className="flex-col pb-3">
            <div>
            <label className="text-xs tracking-wide font-medium">Password</label>
            </div>
            <input {...register("password")} className="pl-2 w-full text-xs border rounded-lg p-[7px]" type="password" placeholder="password"/>
            {errors.password && <div className="text-xs tracking-wide p-1 text-red-500">{errors.password.message}</div>}
          </div>
          <div className="pt-5">
           <Button type="submit" className="w-full">Create Account</Button>
          </div>
        </div>
        :
        <div className="w-full flex-col">
        <div className="w-full py-7  justify-between flex">
        {options.map((option:Option , index:number ) =>  {
          return (
            <PlatformOption  key={index} option={option} index={index} updateSelectedOptions={updateSelectedOption} />
          )
        })}
        </div>
        <div className="pt-3">

            <Button onClick={async () => await linkAccount()} className="w-full">Connect</Button>
        </div>
        </div>
       }
    </form>
      </div>
  </div>
    )
}
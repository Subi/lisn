"use client"
import { Button } from "@/components/ui/button"
import { useActionState, useEffect, useState } from "react"
import {SubmitHandler, useForm} from 'react-hook-form'
import Image from "next/image";
import { StaticImageData } from "next/image";
import PlatformOption from "@/components/PlatformOptions";
import { appleLogo, spotifyLogo } from "@/images";
import { Option } from "./page";

type FormFields = {
    email:string; 
    password: string;
};

type FormProps = {
  streamingOptions: Option[]
}

export default function Form({streamingOptions}:FormProps) {
    const {register  , handleSubmit} =  useForm<FormFields>()
    const [isPopulated , setIsPopulated] = useState<boolean>(false)
    const [options , setOptions] = useState<Option[]>(streamingOptions)


    const onSubmit: SubmitHandler<FormFields> = (data) => {
      if(!isPopulated) {
        setIsPopulated(validateFields(data))
        return
      }
    }

    const handleOptions = (value:number) => {
      const newOptions:Option[] = options.map((option , index) => {
        if(value  === index) {
          return {...option , isSelected: true}
        }
        return {...option , isSelected: false}
      })
      setOptions(newOptions)
    }
    
  
    useEffect(() =>   {
    } ,[isPopulated])


    const validateFields = (data:FormFields):boolean => {
         // zod validation will be here but for now getting form flow working
         if(data.email.length > 0 && data.password.length > 0) {
            return true
         } 
         return false
    }  
    
    return (
      <div className="w-full pt-20 justify-center flex">
      <div className="w-[400px] flex flex-col p-10">
          <div className="flex-col">
              <div className="text-2xl font-bold">
                {!isPopulated ? "Get Started Now." : "Select a Platform"}
              </div>
              <div className="text-xs text-gray-400 tracking-wide py-3">
                {!isPopulated ? "Enter your credentials to access your account" : "Pick one to finish creating your lisn account" }
              </div>
              <hr/>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
        {!isPopulated ? 
       <div className="py-4 flex flex-col">
          <div className="flex-col pb-3">
            <div>
            <label className="text-xs tracking-wide font-medium">Email Address</label>
            </div>
            <input {...register("email")} className="tracking-wide  pl-2 w-full text-xs border rounded-lg p-[7px]" type="text" placeholder="example@domain.com"/>
          </div>
          <div className="flex-col pb-3">
            <div>
            <label className="text-xs tracking-wide font-medium">Password</label>
            </div>
            <input {...register("password")} className="pl-2 w-full text-xs border rounded-lg p-[7px]" type="password" placeholder="password"/>
          </div>
        </div>
        :
        <div className="w-full py-7  justify-between flex">
        {options.map((option:Option , index:number ) =>  {
          return (
            <PlatformOption  key={index} option={option} index={index} handleOptions={handleOptions} />
          )
        })}
      </div>}
        <div>
          <Button type="submit" className="w-full">{isPopulated && options.filter(option => option.isSelected).length > 0 ? "Create Account" : "Continue"}</Button>
        </div>
    </form>
      </div>
  </div>

    )
}
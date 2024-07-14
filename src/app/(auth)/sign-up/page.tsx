"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { concertImage } from "@/images"
import Form from "./form"

export default function Page() {
  return (
  <div className="w-full flex h-screen">
      <div className="w-6/12 flex-col rounded-lg shadow-2xl">
          <div className="w-1/5 text-center py-10">
            <Link href={"/"} className="text-2xl  font-bold">
            Lisn .
            </Link>
          </div>
          <div className="w-full pt-20 justify-center flex">
              <div className="w-[400px] flex flex-col p-10">
                  <div className="flex-col">
                      <div className="text-2xl font-bold">
                        Get Started Now.
                      </div>
                      <div className="text-xs text-gray-400 tracking-wide py-3">
                        Enter your credentials to access your account
                      </div>
                      <hr/>
                  </div>
                  <Form/>
              </div>
          </div>
      </div>
      <div className="w-6/12 relative ">
        <Image 
        alt="concert crowd"
        src={concertImage}
        fill
        priority
        quality={100}
        unoptimized={false}
        style={{objectFit:'cover'}}
        />
      </div>
  </div>
  )
}
"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { concertImage } from "@/images"

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
                      <div className="text-2xl font-semibold">
                        Get Started Now .
                      </div>
                      <div className="text-xs text-gray-400 tracking-wide py-3">
                        Enter your credentials to access your account
                      </div>
                      <hr/>
                  </div>
                  <form>
                    <div className="py-4 flex flex-col">
                      <div className="flex-col pb-3">
                        <div>
                        <label className="text-xs tracking-wide font-medium">Email Address</label>
                        </div>
                        <input className=" tracking-wide  pl-2 w-full text-xs border rounded-lg p-[7px]" type="text" placeholder="example@domain.com"/>
                      </div>
                      <div className="flex-col pb-3">
                        <div>
                        <label className="text-xs tracking-wide font-medium">Password</label>
                        </div>
                        <input className="pl-2 w-full text-xs border rounded-lg p-[7px]" type="password" placeholder="password"/>
                      </div>
                    </div>
                    <div>
                      <Button className="w-full">Continue</Button>
                    </div>
                  </form>
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
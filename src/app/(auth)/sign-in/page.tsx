import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"
export default function Page(){
    return (
        
        // design option 1
        <>
         <Header/>
         <div className="w-full flex pt-24  justify-center">
            <div className="w-1/2 flex text-center items-center justify-center">
                <div className=" mx-auto w-[375px] text-white h-[375px] rounded-2xl bg-cover bg"  style={{backgroundImage: `url(https://i.scdn.co/image/ab67616d0000b273c67636f3021f5869095c0fc5)`}}/>
                <Card className="w-4/12 mx-auto">
                     <CardHeader>
                         <CardTitle>Create an account</CardTitle>
                     </CardHeader>
                     <CardContent>
                         <Label htmlFor="username">username</Label>
                         <Input type="username" placeholder="username"/>
                     </CardContent>
                     <CardContent>
                         <Label htmlFor="password">password</Label>
                         <Input type="password" placeholder="password"/>
                     </CardContent>
                 </Card>
            </div>
        </div>
        </>



        // <div className="w-full h-screen flex">
        //     <div className="w-11/12 h-screen bg-no-repeat bg-cover  " style={{backgroundImage: `url(https://i.scdn.co/image/ab67616d0000b273c67636f3021f5869095c0fc5)`}}/>
        //     <div className="w-full flex-col justify-center">
        //         <div className=" flex justify-center items-center h-screen">
        //         <Card className="w-1/2">
        //             <CardHeader>
        //                 <CardTitle>Lisn</CardTitle>
        //                 <CardDescription className="text-sm font-semibold">Create a new account</CardDescription>
        //             </CardHeader>
        //             <CardContent>
        //                 <Label htmlFor="username">username</Label>
        //                 <Input type="username" placeholder="username"/>
        //             </CardContent>
        //             <CardContent>
        //                 <Label htmlFor="password">password</Label>
        //                 <Input type="password" placeholder="password"/>
        //             </CardContent>
        //         </Card>
        //         </div>
                    
        //     </div>
        // </div>
    )
}
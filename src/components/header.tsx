import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <div className=" w-10/12 justify-between flex mx-auto pt-10">
            <div>
                <Link href="/" className="text-3xl  font-semibold">
                    Lisn.
                </Link>
            </div>
            <div className=" w-1/6  flex justify-evenly">
                <div className="flex items-center text-md font-medium tracking-wide">
                    Login
                </div>
            <Button className="tracking-wider font-bold bg-black">Sign In</Button>
            </div>
        </div>
    )
}
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <div className=" w-9/12 justify-between flex mx-auto py-7">
            <div>
                <Link href="/" className="text-4xl  font-bold">
                    Lisn.
                </Link>
            </div>
            <div className=" w-2/12  flex justify-evenly items-center tracking-wide text-sm font-bold text-stone-600">
                <div className="flex items-center ">
                    <Link href="/sign-in">Sign in</Link>
                </div>
            <Button  className="text-sm font-semibold bg-black">
                <Link href="/sign-up">Sign up</Link>
            </Button>
            </div>
        </div>
    )
}
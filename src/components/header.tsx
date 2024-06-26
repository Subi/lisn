import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <div className=" w-11/12 justify-between flex mx-auto pt-5">
            <div>
                <Link href="/" className="text-3xl font-medium tracking-wide">
                    Lisn.
                </Link>
            </div>
            <Button className="tracking-wider font-bold bg-black">Sign In</Button>
        </div>
    )
}
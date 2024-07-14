import { Button } from "@/components/ui/button"




export default function Form() {
    return (
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
    )
}
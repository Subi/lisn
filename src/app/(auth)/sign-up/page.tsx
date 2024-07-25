import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image, { StaticImageData } from "next/image"
import { appleLogo, concertImage, spotifyLogo } from "@/images"
import Form from "./form"

export type Option = {
  name: string;
  image: StaticImageData | string
  isSelected: boolean
}
 
const streamingPlatforms:Option[] = [
  {
      name: "Spotify",
      image: spotifyLogo,
      isSelected: false,
  },
  {
      name: "Apple Music",
      image: appleLogo,
      isSelected: false,
  },
]

export default function Page() {
  
  return (
  <div className="w-full flex h-screen">
      <div className="w-6/12 flex-col rounded-lg shadow-2xl">
          <div className="w-1/5 text-center py-10">
            <Link href={"/"} className="text-2xl  font-bold">
            Lisn .
            </Link>
          </div>
          <Form streamingOptions={streamingPlatforms}/>
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
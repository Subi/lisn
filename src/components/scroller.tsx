"use client"

import Image from "next/image";
import { useEffect } from "react";

const albumImages = [
    "https://i.scdn.co/image/ab67616d0000b2731ea0c62b2339cbf493a999ad",
    "https://i.scdn.co/image/ab67616d0000b2737b588bf0555bde606f8b27c7",
    "https://i.scdn.co/image/ab67616d0000b2738252e4588976ca1c194bc364",
    "https://i.scdn.co/image/ab67616d0000b273f2b1c2ed52674e40d14cd6c4",
    "https://i.scdn.co/image/ab67616d0000b27326f7f19c7f0381e56156c94a",
    "https://i.scdn.co/image/ab67616d0000b2738efe5b8d9a3544b98aa6a85e",
    "https://i.scdn.co/image/ab67616d0000b273aa27708d07f49c82ff0d0dae"
  ]
  

export default function Scroller() {
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation()
        }

        function addAnimation() {
            scrollers.forEach(scroller => {
                scroller.setAttribute("data-animated" , "true")
                
                const scrollerInner =  scroller.querySelector("#scroller__inner");
                const scrollerContent = Array.from(scrollerInner?.children as HTMLCollection)

                scrollerContent.forEach(item => {
                    const duplicatedItem =  item.cloneNode(true) as Element
                    duplicatedItem.setAttribute("aria-hidden" , "true")
                    scrollerInner?.appendChild(duplicatedItem)
                })
            })
        }
    }, [])

    

    return (
    <div id="scroller"  className="scroller [mask-image:linear-gradient(90deg,transparent,#000_20%,#000_80%,transparent)]  overflow-hidden max-w-[1000px]  mx-auto">
        <ul id="scroller__inner" className="flex gap-4 flex-nowrap w-max animate-scroll">
            {albumImages.map((image , index) => {
              return (
                <li key={index}>
                    <Image alt="album" src={image} height={150} width={150}/>
                </li>
              )
            })}
        </ul>
      </div>
    )
}
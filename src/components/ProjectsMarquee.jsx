"use client";
import { ThreeDMarquee } from "./ui/3d-marquee";

export function ProjectsMarquee() {
  const images = [
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123603/ko7x7bxfzjoeybpm1s5v.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123604/xeajacjabyjxeqlpiqwp.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123602/bznvazx5gjf0gtvb6ar5.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",

  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123603/ko7x7bxfzjoeybpm1s5v.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123602/bznvazx5gjf0gtvb6ar5.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123604/xeajacjabyjxeqlpiqwp.png",

  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123602/bznvazx5gjf0gtvb6ar5.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123604/xeajacjabyjxeqlpiqwp.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123603/ko7x7bxfzjoeybpm1s5v.png",

  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123604/xeajacjabyjxeqlpiqwp.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123602/bznvazx5gjf0gtvb6ar5.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123603/ko7x7bxfzjoeybpm1s5v.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",

  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123602/bznvazx5gjf0gtvb6ar5.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123603/ko7x7bxfzjoeybpm1s5v.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123604/xeajacjabyjxeqlpiqwp.png",

  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123603/ko7x7bxfzjoeybpm1s5v.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123604/xeajacjabyjxeqlpiqwp.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123602/bznvazx5gjf0gtvb6ar5.png",

  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123602/bznvazx5gjf0gtvb6ar5.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123603/ko7x7bxfzjoeybpm1s5v.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123604/xeajacjabyjxeqlpiqwp.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",

  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123604/xeajacjabyjxeqlpiqwp.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123602/bznvazx5gjf0gtvb6ar5.png",
  "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123603/ko7x7bxfzjoeybpm1s5v.png"
];

  return (
    <div className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
        <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
            Crafting digital experiences that{" "}
            <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
                inspire
            </span>{" "}
            and connect.
         </h2>

        <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        Welcome to my portfolio. Here you'll find a selection of projects that showcase creativity, technology, and passion for building engaging web experiences.
        </p>

        

 
      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}

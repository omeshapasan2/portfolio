"use client";
import { ThreeDMarquee } from "./ui/3d-marquee";

export function ProjectsMarquee() {
  const images = [
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123603/ko7x7bxfzjoeybpm1s5v.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123602/bznvazx5gjf0gtvb6ar5.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",

    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123603/ko7x7bxfzjoeybpm1s5v.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123602/bznvazx5gjf0gtvb6ar5.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",

    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123603/ko7x7bxfzjoeybpm1s5v.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123602/bznvazx5gjf0gtvb6ar5.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",

    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123603/ko7x7bxfzjoeybpm1s5v.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123602/bznvazx5gjf0gtvb6ar5.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",

    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123603/ko7x7bxfzjoeybpm1s5v.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123602/bznvazx5gjf0gtvb6ar5.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",

    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123603/ko7x7bxfzjoeybpm1s5v.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123602/bznvazx5gjf0gtvb6ar5.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",

    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123603/ko7x7bxfzjoeybpm1s5v.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123602/bznvazx5gjf0gtvb6ar5.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",

    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123603/ko7x7bxfzjoeybpm1s5v.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123602/bznvazx5gjf0gtvb6ar5.png",
    "https://res.cloudinary.com/dldgeyki5/image/upload/v1749123601/qmppymco3uiroaidipr4.png",
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

        <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
            <button className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
                View Projects
            </button>
            <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
                Get in Touch
            </button>
        </div>

 
      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}

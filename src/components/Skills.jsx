import React from 'react'
import cn from 'clsx';
import { AnimatedTooltip } from './ui/animated-tooltip'
const people = [
  {
    id: 1,
    designation: "HTML",
    image:
      "https://img.icons8.com/color/144/html-5--v1.png",
  },

  {
    id: 2,
    designation: "CSS",
    image:
      "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
  },

  {
    id: 3,
    designation: "JavaScript",
    image:
      "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  },

  {
    id: 4,
    designation: "Tailwind CSS",
    image:
      "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
  },

  {
    id: 5,
    designation: "React",
    image:
      "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
  },

  {
    id: 6,
    designation: "Java",
    image:
      "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
  },

  {
    id: 7,
    designation: "Node.js",
    image:
      "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
  },

  {
    id: 8,
    designation: "Express",
    image:
      "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000",
  },

  {
    id: 9,
    designation: "MongoDB",
    image:
      "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
  },
  {
    id: 10,
    designation: "Python",
    image:
      "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
  
  {
    id: 12,
    designation: "Flask",
    image:
      "https://img.icons8.com/?size=100&id=TtXEs5SeYLG8&format=png&color=000000",
  },
  {
    id: 13,
    designation: "MySQL",
    image:
      "https://img.icons8.com/?size=100&id=qGUfLiYi1bRN&format=png&color=000000",
  },
  {
    id: 14,
    designation: "Git",
    image:
      "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
  },
  {
    id: 15,
    designation: "Docker",
    image:
      "https://img.icons8.com/?size=100&id=22813&format=png&color=000000",
  },

  {
    id: 16,
    designation: "Angular",
    image:
      "https://img.icons8.com/?size=100&id=71257&format=png&color=000000",
  },
];

export default function Skills() {
  return (

    <div>

      <section className="">

        {/* Background grid pattern */}
        <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        <div className="">
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <p className="text-gray-600 mb-8">Here are some technologies I'm familiar with:</p>
              <div className=" ">
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                  <AnimatedTooltip items={people} />
                </div>
              </div>
          </div>

        </div>

      </section>
        
    </div>
  )
}

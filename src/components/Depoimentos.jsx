"use client";

import useEmblaCarousel from "embla-carousel-react";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";
import React from "react";
import { MdDescription } from "react-icons/md";

const Depoimentos = () => {
  const depoimentos = [
    {
      title: "fewfewfw",
      description: "fghjklç",
      duration: "1h",
      linkText: "dfghjkl",
    },
    {
      title: "fewfewfw",
      description: "fghjklç",
      duration: "1h",
      linkText: "dfghjkl",
    },
    {
      title: "fewfewfwn",
      description: "fghjklç",
      duration: "1h",
      linkText: "dfghjkl",
    },
    {
      title: "fewfewfwn",
      description: "fghjklç",
      duration: "1h",
      linkText: "dfghjkl",
    },
    {
      title: "fewfewfwn",
      description: "fghjklç",
      duration: "1h",
      linkText: "dfghjkl",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <div>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-4xl font-bold mb-12">Depoimentos</h1>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {depoimentos.map((item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                  >
                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                      <div className="flex-1 flex items-start justify-between">
                        <div className="flex gap-3">
                          <h3 className="font-bold text-xl my-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="bg-white  flex items-center  rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 "
              onClick={scrollPrev}
            >
              <FaCircleChevronLeft className="w-6 h-6 text-gray-600  " />
            </button>

            <button
              className="bg-white  flex items-center  rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 "
              onClick={scrollNext}
            >
              <FaChevronCircleRight className="w-6 h-6 text-gray-600  " />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Depoimentos;

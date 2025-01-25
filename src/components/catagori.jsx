import React from "react";
import Image from "next/image";
import Link from "next/link";

const MonarchsMuse = ({ products }) => {
  return (
    <section className="w-full flex justify-center flex-col items-center px-4 py-10">
      <div className="text-center mb-8">
        <h4 className="text-sm uppercase tracking-wide text-gray-500">
          Vol - III
        </h4>
        <h2 className="text-5xl font-bold">THE ZALMAR ARRIVALS</h2>
        <p className="mt-2 text-gray-700">
          Celebrating timeless style and comfort, crafted for those who value
          quality in every stitch
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.map((item, index) => (
          <Link
            href={`/product_view/${item?.id}`}
            key={index}
            className="group relative overflow-hidden border "
          >
            <Image
              src={item.image}
              alt={item?.name}
              width={300}
              height={400}
              className="w-full h-full  transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-4">
              <h3 className="text-lg font-bold uppercase">{item.name}</h3>
              <div className="text-right text-sm font-medium mt-2">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MonarchsMuse;

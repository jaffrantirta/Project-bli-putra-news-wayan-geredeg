import React from "react";
import { Link } from "react-router-dom";
import convertText from "../utils/ConvertText";

export default function NewsListComponent({
  category,
  className,
  id,
  title,
  date,
  img,
  withImage = true,
  classNameTitle,
  withCategory = true,
}) {
  return (
    <Link
      to={`/read?id=${id}&news=${convertText(title)}`}
      className={`grid grid-cols-2 gap-3 cursor-pointer ${className}`}
    >
      {withImage ? (
        <img
          src={img}
          alt={title}
          className="bg-primary border object-cover object-center aspect-square md:aspect-video"
        />
      ) : (
        <></>
      )}
      <div className="">
        <p
          className={`hover:text-primary text-sm md:text-md font-bold ${classNameTitle}`}
        >
          {title}
        </p>
        <div className="grid md:flex md:flex-col justify-between">
          {withCategory ? (
            <p
              className={`bg-primary p-1 px-2 w-fit rounded-full text-white line-clamp-1`}
            >
              {category}
            </p>
          ) : (
            <></>
          )}
          <p className="text-sm">{date}</p>
        </div>
      </div>
    </Link>
  );
}

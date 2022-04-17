/* eslint-disable @next/next/no-img-element */
import { BiChevronRight } from "react-icons/bi";

export default function CardUser({
  name,
  image,
  email,
  className,
  onClickDetail,
}) {
  return (
    <div className={`flex text-sm p-2 m-1 rounded-md border ${className}`}>
      <img src={image} alt="" className="h-20" />
      <div className="pl-3">
        <p className="py-1 font-bold text-green-600">{name}</p>
        <p className="py-1">{email}</p>
        <div className="flex space-x-3">
          <span
            className="cursor-pointer flex items-center text-xs pt-2 text-blue-500 hover:underline"
            onClick={onClickDetail}
          >
            Detail <BiChevronRight className="text-base"/>
          </span>
        </div>
      </div>
    </div>
  );
}

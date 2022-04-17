import Link from "next/link";

export default function Header({ withSearch }) {
  return (
    <div className="w-full mb-8 px-[4%] sm:border-b">
      <div className="flex justify-between items-center border-b h-20 w-full px-[2%] md:text-sm sm:border-0">
        <Link href="/">
          <a className="text-base font-bold text-green-600 link">
            React User App
          </a>
        </Link>
      </div>
    </div>
  );
}

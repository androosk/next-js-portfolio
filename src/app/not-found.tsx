import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Page not found - Health History App",
  description: "Page not found on Health History App",
};

export default function Home() {
  return (
    <div className="flex justify-center items-center text-center flex-grow bg-black">
      <div className="flex flex-col w-3/5 sm:w-auto">
        <h1 className="text-3xl font-bold uppercase mt-4 text-white">
          Sorry! Page not found
        </h1>
        <p className="text-xl mx-auto max-w-md text-white">
          Use the navigation above to find what you&apos;re looking for
        </p>
      </div>
    </div>
  );
}

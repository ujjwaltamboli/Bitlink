import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[60vh] bg-purple-100 p-8 gap-4">
        <div className="flex flex-col justify-center items-start space-y-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-purple-800">The Ultimate URL Shortener</h1>
          <p className="text-base lg:text-lg text-purple-600">Transform long URLs into easy-to-share links in seconds.</p>
          <div className="flex gap-4">
            <Link href="/shorten">
              <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white py-2 px-4 rounded-lg shadow-lg transition">Try Now</button>
            </Link>
            <Link href="http://www.github.com">
              <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg shadow-lg transition">GitHub</button>
            </Link>
          </div>
        </div>
        <div className="relative h-60 lg:h-full">
          <Image className="rounded-lg shadow-lg object-cover" alt="URL Shortener" src="/whoooa.jpg" fill={true} />
        </div>
      </section>
    </main>
  );
}

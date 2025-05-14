import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 p-10 font-sans">
      <section className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-extrabold text-purple-800">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to the <span className="font-semibold text-purple-600">ultimate URL shortener platform</span>, where we simplify the web by converting lengthy links into compact, shareable URLs.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to provide a <span className="font-semibold text-purple-600">reliable, easy-to-use, and secure</span> platform for managing and sharing links. With our tool, you can track your link analytics, manage custom short URLs, and make sharing content hassle-free.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you are a marketer, developer, or everyday user, our URL shortener offers essential features to streamline your digital presence.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Join us and be part of a community that believes in making the internet a more organized and accessible place for everyone.
        </p>
        <div className="flex gap-6 mt-8">
          <Link href="/shorten">
            <button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white py-2 px-6 rounded-lg shadow-lg transition font-semibold">Start Shortening</button>
          </Link>
          <Link href="/">
            <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded-lg shadow-lg transition font-semibold">Go Back Home</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

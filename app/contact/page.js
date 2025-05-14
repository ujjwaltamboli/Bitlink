import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 p-10 font-sans">
      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-extrabold text-purple-800">Contact Us</h1>
        <p className="text-lg text-gray-700">If you have any questions, feel free to reach out to us:</p>
        <div className="text-lg text-gray-700 space-y-2">
          <p><span className="font-semibold">Phone:</span> +91 9876543210</p>
          <p><span className="font-semibold">Email:</span> example@gmail.com</p>
        </div>
        <div className="flex gap-4 mt-6">
          <Link href="/">
            <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded-lg shadow-lg transition font-semibold">Go Back Home</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

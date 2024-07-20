import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div>
        <Head>
          <title>LinkHub - Centralize Your Links</title>
          <meta name="description" content="Centralize and share your favorite links with LinkHub"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <header className="w-full py-6 bg-white shadow-md">
            <nav className="container mx-auto flex justify-between items-center px-6">
              <div className="text-2xl font-bold">LinkHub</div>
              <div>
                <a href="#features" className="px-4 text-gray-700">Features</a>
                <a href="#about" className="px-4 text-gray-700">About</a>
                <Link href='/login' className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Login</Link>
              </div>
            </nav>
          </header>

          <section className="container mx-auto text-center py-20">
            <h1 className="text-5xl font-bold mb-6">Centralize Your Links</h1>
            <p className="text-xl mb-12">Save, organize, and share your favorite links with ease.</p>
            <a href="/signup" className="px-8 py-4 bg-blue-500 text-white rounded-lg">Get Started</a>
          </section>

          <section id="features" className="container mx-auto py-20">
            <h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Organize Links</h3>
                <p>Keep your links organized in collections and easily find them when needed.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Share Collections</h3>
                <p>Share your collections with friends, family, or colleagues effortlessly.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Access Anywhere</h3>
                <p>Access your links from any device, anytime, anywhere.</p>
              </div>
            </div>
          </section>

          <section id="about" className="container mx-auto py-20 bg-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
            <p className="text-center max-w-2xl mx-auto">LinkHub is a platform designed to help you centralize and
              manage your favorite links. Whether you are a student, professional, or just someone who loves to browse
              the web, LinkHub makes it easy to keep track of all your important resources.</p>
          </section>

          <footer className="w-full py-6 bg-gray-800 text-white text-center">
            &copy; {new Date().getFullYear()} LinkHub. All rights reserved.
          </footer>
        </main>
      </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-center min-h-screen">

            {/* Left side - Content */}
            <div className="py-20 space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light leading-[1.1] text-gray-900 tracking-tight">
                Maruf Hasan Rumi
              </h1>

              <div className="space-y-6 text-gray-700 max-w-xl">
                <div className="space-y-2">
                  <p className="text-xl font-light leading-relaxed">
                    Assistant Professor of Public Administration and
                  </p>
                  <p className="text-xl font-light leading-relaxed">
                    PhD Student in Political Science
                  </p>
                </div>

                <p className="text-lg font-light text-gray-600">
                  University of Dhaka • Texas Tech University
                </p>

                <div className="pt-2">
                  <p className="text-lg font-light leading-relaxed">
                    Specializing in Digital Governance, Social Policy, Technology, and Behavioral Science
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-base font-medium text-gray-800">
                    J.T. and Margaret Talkington Graduate Fellow
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Rotated and blended photo */}
                <div className="relative transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/Rumi, Maruf Hasan (Headshot 5).jpg"
                    alt="Maruf Hasan Rumi"
                    width={450}
                    height={550}
                    className="w-full h-auto object-cover rounded-3xl shadow-2xl ring-8 ring-white/50 backdrop-blur-sm"
                    priority
                  />
                  {/* Blending overlay that matches background */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 mix-blend-multiply"></div>
                </div>

                {/* Background decoration matching website theme */}
                <div className="absolute -inset-8 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200/40 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-purple-200/40 rounded-full"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Books</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Explore my latest publications and scholarly work.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Placeholder for featured books - will be populated from data */}
            {[1, 2, 3].map((i) => (
              <article key={i} className="flex max-w-xl flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src="/placeholder-book.jpg"
                    alt="Book cover"
                    className="aspect-[16/20] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/3]"
                    width={300}
                    height={400}
                  />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500">2024</time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href="/books">
                        <span className="absolute inset-0" />
                        Book Title {i}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      A compelling description of your book and its main arguments or findings.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Subscribe to my newsletter for updates on new publications, speaking engagements, and academic insights.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4 mx-auto">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

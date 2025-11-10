import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-20 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-5xl font-light tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
              Maruf Hasan Rumi
              <span className="block text-3xl sm:text-4xl text-gray-600 font-light mt-2">PhD</span>
            </h1>
            <div className="mt-8 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-xl leading-8 text-gray-700 font-light">
                Academic researcher, author, and public intellectual specializing in [your field].
                Professor of [Department] at [University Name].
              </p>
              <div className="mt-12 flex items-center gap-x-6">
                <Link
                  href="/books"
                  className="rounded-none bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-gray-800 transition-all duration-200 hover:shadow-xl"
                >
                  View Books
                </Link>
                <Link href="/cv" className="text-sm font-medium leading-6 text-gray-900 hover:text-gray-700 transition-colors group">
                  Download CV <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder-photo.jpg"
              alt="Maruf Hasan Rumi"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              width={600}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="bg-white py-20 sm:py-32">
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
      <section className="bg-gray-50 py-20 sm:py-32">
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

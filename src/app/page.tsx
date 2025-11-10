"use client";

import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 items-center min-h-screen">

            {/* Left side - Content */}
            <div className="py-20 space-y-8 pr-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-light leading-[0.9] text-gray-900 tracking-tight">
                Maruf Hasan Rumi
              </h1>

              <div className="space-y-6 text-gray-800">
                <div className="space-y-3">
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

                <div className="pt-3">
                  <p className="text-lg font-light leading-relaxed">
                    Specializing in Digital Governance, Social Policy, Technology, and Behavioral Science
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-300">
                  <p className="text-base font-medium text-gray-700">
                    J.T. and Margaret Talkington Graduate Fellow
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Photo */}
            <div className="relative h-full min-h-screen flex items-center justify-center">
              <div className="relative">
                {/* Premium photo container */}
                <div className="relative overflow-hidden">
                  <Image
                    src="/Rumi, Maruf Hasan (Headshot 5).jpg"
                    alt="Maruf Hasan Rumi"
                    width={500}
                    height={700}
                    className="object-cover object-center rounded-3xl shadow-2xl"
                    priority
                  />
                  {/* Subtle gradient overlay for premium effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
                </div>

                {/* Premium decorative elements */}
                <div className="absolute -inset-4 bg-purple-200/30 rounded-3xl blur-xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200/40 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-indigo-200/40 rounded-full blur-2xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-stone-50 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wider uppercase text-stone-500 mb-4">about</p>
            <h2 className="text-5xl sm:text-6xl font-playfair font-light tracking-tight text-stone-800 leading-tight">
              Dr. Rumi
            </h2>
            <div className="mt-6 w-24 h-0.5 bg-gradient-to-r from-stone-300 via-stone-600 to-stone-300 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Main bio content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="text-xl leading-relaxed text-stone-700 font-light">
                <p>
                  Maruf Hasan Rumi is a Distinguished Scholar bridging the worlds of <span className="font-medium text-stone-800">digital governance</span> and <span className="font-medium text-stone-800">public policy</span>. As an Assistant Professor at the University of Dhaka and PhD Student in Political Science at Texas Tech University, he stands at the forefront of understanding how technology reshapes democratic institutions and citizen engagement.
                </p>
              </div>

              <div className="text-base leading-relaxed text-stone-600 space-y-6">
                <p>
                  His groundbreaking research examines the interconnected histories of governance, technology, and behavioral science. An award-winning scholar and dedicated educator, he has contributed influential work to leading academic journals including <em>Frontiers in Sociology</em>, <em>PLOS Digital Health</em>, and the <em>Journal of Police and Criminal Psychology</em>, establishing him as a prominent voice in contemporary political science discourse.
                </p>

                <div className={`${isExpanded ? 'block' : 'hidden'} space-y-6`}>
                  <p>
                    Dr. Rumi's scholarly excellence has been recognized through prestigious fellowships and grants, including the J.T. and Margaret Talkington Graduate Fellowship, American Red Cross Research Grant (2024), and the Bangladesh Bureau of Educational Information and Statistics Fellowship (2024). His work has been supported by leading institutions and has gained international recognition for its innovative approach to understanding governance in the digital age.
                  </p>

                  <p>
                    As an active member of the academic community, Dr. Rumi serves on the Editorial Board of the Journal of Public Policy and Service Analysis and maintains memberships in professional organizations including the American Political Science Association and the Bangladesh Tobacco Control Research Network. His commitment to advancing knowledge extends beyond research to mentoring the next generation of scholars and practitioners.
                  </p>

                  <p>
                    Currently leading pioneering research in digital governance and social policy, Dr. Rumi's work bridges theoretical frameworks with practical applications in public administration reform. His scholarship addresses contemporary challenges at the intersection of technology, governance, and citizen empowerment, contributing to policy discussions that shape our digital democratic future.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar with highlights */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
                <h3 className="text-lg font-semibold text-stone-800 mb-6">Research Focus</h3>
                <div className="space-y-4 text-sm text-stone-600">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                    <span>Digital Governance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                    <span>Social Policy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                    <span>Technology & Governance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                    <span>Behavioral Science</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200">
                  <h4 className="text-sm font-semibold text-stone-800 mb-3">Current Fellowship</h4>
                  <p className="text-sm text-stone-600 italic">
                    J.T. and Margaret Talkington Graduate Fellow
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center text-stone-600 hover:text-stone-800 font-medium text-sm tracking-wide transition-colors duration-200 group"
            >
              {isExpanded ? 'Read less' : 'Read more'}
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Accolades Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 sm:py-32 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-slate-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-16 mx-auto mb-6"></div>
              <h2 className="text-4xl sm:text-5xl font-playfair font-light tracking-tight text-slate-800 mb-4">
                Accolades
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-16 mx-auto"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Award 1 - Texas Tech Fellowship */}
            <div className="flex flex-col items-center group">
              <div className="w-32 h-32 rounded-full bg-white shadow-xl border-4 border-slate-200 flex items-center justify-center mb-6 group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <img
                  src="/1.svg"
                  alt="Texas Tech University Logo"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-center text-sm font-bold text-slate-800 mb-2 leading-tight max-w-32">
                2025 J.T. and Margaret Talkington Graduate Fellowship
              </h3>
              <p className="text-xs text-center text-slate-600 font-medium">
                Texas Tech University Distinguished Fellowship
              </p>
            </div>

            {/* Award 2 - American Red Cross */}
            <div className="flex flex-col items-center group">
              <div className="w-32 h-32 rounded-full bg-white shadow-xl border-4 border-slate-200 flex items-center justify-center mb-6 group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <img
                  src="/red-cross-grant.png"
                  alt="American Red Cross Logo"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-center text-sm font-bold text-slate-800 mb-2 leading-tight max-w-32">
                2024 American Red Cross Research Grant
              </h3>
              <p className="text-xs text-center text-slate-600 font-medium">
                Research Excellence Award
              </p>
            </div>

            {/* Award 3 - University of Dhaka */}
            <div className="flex flex-col items-center group">
              <div className="w-32 h-32 rounded-full bg-white shadow-xl border-4 border-slate-200 flex items-center justify-center mb-6 group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/b/b9/University_of_Dhaka_logo.svg"
                  alt="University of Dhaka Logo"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-center text-sm font-bold text-slate-800 mb-2 leading-tight max-w-32">
                2023 UGC-Dhaka University Research Fellowship
              </h3>
              <p className="text-xs text-center text-slate-600 font-medium">
                University Grants Commission Fellowship
              </p>
            </div>

            {/* Award 4 - Dean's Award */}
            <div className="flex flex-col items-center group">
              <div className="w-32 h-32 rounded-full bg-white shadow-xl border-4 border-slate-200 flex items-center justify-center mb-6 group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="w-28 h-28 rounded-full border-2 border-slate-300 flex items-center justify-center bg-gradient-to-br from-amber-50 to-yellow-100">
                  <div className="text-center">
                    <div className="text-xs font-bold text-amber-800 mb-1">DEAN'S</div>
                    <div className="text-2xl font-bold text-slate-800">★</div>
                    <div className="text-xs font-bold text-amber-800 mb-1">AWARD</div>
                    <div className="text-xs font-semibold text-amber-600">2023</div>
                  </div>
                </div>
              </div>
              <h3 className="text-center text-sm font-bold text-slate-800 mb-2 leading-tight max-w-32">
                2023 Dean's Award
              </h3>
              <p className="text-xs text-center text-slate-600 font-medium">
                University of Dhaka Excellence Recognition
              </p>
            </div>

            {/* Award 5 - APSA */}
            <div className="flex flex-col items-center group">
              <div className="w-32 h-32 rounded-full bg-white shadow-xl border-4 border-slate-200 flex items-center justify-center mb-6 group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="w-28 h-28 rounded-full border-2 border-slate-300 flex items-center justify-center bg-gradient-to-br from-purple-50 to-violet-100">
                  <div className="text-center">
                    <div className="text-xs font-bold text-purple-800 mb-1">AMERICAN</div>
                    <div className="text-lg font-bold text-slate-800">APSA</div>
                    <div className="text-xs font-bold text-purple-800">MEMBER</div>
                  </div>
                </div>
              </div>
              <h3 className="text-center text-sm font-bold text-slate-800 mb-2 leading-tight max-w-32">
                American Political Science Association
              </h3>
              <p className="text-xs text-center text-slate-600 font-medium">
                Professional Member
              </p>
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

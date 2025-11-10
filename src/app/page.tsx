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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light leading-[0.9] text-gray-900 tracking-tight">
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
            <h2 className="text-5xl sm:text-6xl font-serif font-light tracking-tight text-stone-800 leading-tight">
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
              <h2 className="text-4xl sm:text-5xl font-serif font-light tracking-tight text-slate-800 mb-4">
                Accolades
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-16 mx-auto"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Award 1 - J.T. and Margaret Talkington Graduate Fellowship */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200/50 backdrop-blur-sm">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-center text-sm font-semibold text-slate-800 mb-2 leading-tight">
                  2025 J.T. and Margaret Talkington Graduate Fellowship
                </h3>
                <p className="text-xs text-center text-slate-600">
                  Texas Tech University Distinguished Fellowship
                </p>
              </div>
            </div>

            {/* Award 2 - American Red Cross Research Grant */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200/50 backdrop-blur-sm">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-center text-sm font-semibold text-slate-800 mb-2 leading-tight">
                  2024 American Red Cross Research Grant
                </h3>
                <p className="text-xs text-center text-slate-600">
                  Research Excellence Award
                </p>
              </div>
            </div>

            {/* Award 3 - UGC-Dhaka University Research Fellowship */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200/50 backdrop-blur-sm">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <h3 className="text-center text-sm font-semibold text-slate-800 mb-2 leading-tight">
                  2023 UGC-Dhaka University Research Fellowship
                </h3>
                <p className="text-xs text-center text-slate-600">
                  University Grants Commission Fellowship
                </p>
              </div>
            </div>

            {/* Award 4 - Dean's Award */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200/50 backdrop-blur-sm">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-center text-sm font-semibold text-slate-800 mb-2 leading-tight">
                  2023 Dean's Award
                </h3>
                <p className="text-xs text-center text-slate-600">
                  University of Dhaka Excellence Recognition
                </p>
              </div>
            </div>
          </div>

          {/* Additional achievements row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            {/* Professional Membership */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200/50 backdrop-blur-sm">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-center text-sm font-semibold text-slate-800 mb-2 leading-tight">
                  American Political Science Association
                </h3>
                <p className="text-xs text-center text-slate-600">
                  Professional Member
                </p>
              </div>
            </div>

            {/* Editorial Board */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200/50 backdrop-blur-sm">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-center text-sm font-semibold text-slate-800 mb-2 leading-tight">
                  Editorial Board Member
                </h3>
                <p className="text-xs text-center text-slate-600">
                  Journal of Public Policy and Service Analysis
                </p>
              </div>
            </div>

            {/* Research Publications */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200/50 backdrop-blur-sm">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-center text-sm font-semibold text-slate-800 mb-2 leading-tight">
                  Scopus & Web of Science Publications
                </h3>
                <p className="text-xs text-center text-slate-600">
                  High-Impact Journal Articles
                </p>
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

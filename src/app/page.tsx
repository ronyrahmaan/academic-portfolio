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
              <div className="bg-white/80 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 backdrop-blur-md hover:bg-white/90">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:shadow-blue-500/25 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <svg className="w-12 h-12 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9Z" opacity="0.8"/>
                    <path d="M7 8H17V10H7V8ZM7 12H17V14H7V12ZM7 16H14V18H7V16Z"/>
                  </svg>
                </div>
                <h3 className="text-center text-sm font-bold text-slate-800 mb-3 leading-tight">
                  2025 J.T. and Margaret Talkington Graduate Fellowship
                </h3>
                <p className="text-xs text-center text-slate-600 font-medium">
                  Texas Tech University Distinguished Fellowship
                </p>
              </div>
            </div>

            {/* Award 2 - American Red Cross Research Grant */}
            <div className="group">
              <div className="bg-white/80 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 backdrop-blur-md hover:bg-white/90">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-red-600 via-red-700 to-rose-800 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:shadow-red-500/25 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <svg className="w-12 h-12 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                  </svg>
                </div>
                <h3 className="text-center text-sm font-bold text-slate-800 mb-3 leading-tight">
                  2024 American Red Cross Research Grant
                </h3>
                <p className="text-xs text-center text-slate-600 font-medium">
                  Research Excellence Award
                </p>
              </div>
            </div>

            {/* Award 3 - UGC-Dhaka University Research Fellowship */}
            <div className="group">
              <div className="bg-white/80 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 backdrop-blur-md hover:bg-white/90">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-600 via-green-700 to-teal-800 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:shadow-emerald-500/25 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <svg className="w-12 h-12 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H11V19H5V5H11V7H19V5C19,3.89 18.11,3 17,3H5M12,2L17,7V9H12V2M20.54,15.88L19.43,14.77L16,18.2L14,16.2L12.89,17.31L16,20.42L20.54,15.88Z"/>
                  </svg>
                </div>
                <h3 className="text-center text-sm font-bold text-slate-800 mb-3 leading-tight">
                  2023 UGC-Dhaka University Research Fellowship
                </h3>
                <p className="text-xs text-center text-slate-600 font-medium">
                  University Grants Commission Fellowship
                </p>
              </div>
            </div>

            {/* Award 4 - Dean's Award */}
            <div className="group">
              <div className="bg-white/80 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 backdrop-blur-md hover:bg-white/90">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-amber-600 via-orange-700 to-yellow-800 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:shadow-amber-500/25 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <svg className="w-12 h-12 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"/>
                  </svg>
                </div>
                <h3 className="text-center text-sm font-bold text-slate-800 mb-3 leading-tight">
                  2023 Dean's Award
                </h3>
                <p className="text-xs text-center text-slate-600 font-medium">
                  University of Dhaka Excellence Recognition
                </p>
              </div>
            </div>
          </div>

          {/* Additional achievements row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            {/* Professional Membership */}
            <div className="group">
              <div className="bg-white/80 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 backdrop-blur-md hover:bg-white/90">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-800 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:shadow-purple-500/25 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <svg className="w-12 h-12 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16,4C16.88,4 17.67,4.38 18.18,5C18.69,4.38 19.48,4 20.36,4C21.8,4 22.96,5.16 22.96,6.6C22.96,7.68 22.36,8.63 21.44,9L22,20H20L19.67,14H16.33L16,20H14L14.56,9C13.64,8.63 13.04,7.68 13.04,6.6C13.04,5.16 14.2,4 15.64,4H16M2,6H12V8H2V6M2,10H8V12H2V10M2,14H10V16H2V14Z"/>
                  </svg>
                </div>
                <h3 className="text-center text-sm font-bold text-slate-800 mb-3 leading-tight">
                  American Political Science Association
                </h3>
                <p className="text-xs text-center text-slate-600 font-medium">
                  Professional Member
                </p>
              </div>
            </div>

            {/* Editorial Board */}
            <div className="group">
              <div className="bg-white/80 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 backdrop-blur-md hover:bg-white/90">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:shadow-teal-500/25 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <svg className="w-12 h-12 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </div>
                <h3 className="text-center text-sm font-bold text-slate-800 mb-3 leading-tight">
                  Editorial Board Member
                </h3>
                <p className="text-xs text-center text-slate-600 font-medium">
                  Journal of Public Policy and Service Analysis
                </p>
              </div>
            </div>

            {/* Research Publications */}
            <div className="group">
              <div className="bg-white/80 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 backdrop-blur-md hover:bg-white/90">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-rose-600 via-pink-700 to-red-800 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:shadow-rose-500/25 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <svg className="w-12 h-12 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z"/>
                    <path d="M17,17H7V15H17M17,13H7V11H17M17,9H7V7H17"/>
                  </svg>
                </div>
                <h3 className="text-center text-sm font-bold text-slate-800 mb-3 leading-tight">
                  Scopus & Web of Science Publications
                </h3>
                <p className="text-xs text-center text-slate-600 font-medium">
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

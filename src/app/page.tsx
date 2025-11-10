"use client";

import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useState } from "react";
import { books } from "@/data/books";
import { publications } from "@/data/publications";
import { cvSections } from "@/data/cv";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 items-center min-h-screen">

            {/* Left side - Content */}
            <div className="py-20 space-y-10 pr-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-cinzel font-bold leading-[0.9] text-gray-900 tracking-tight">
                Maruf Hasan Rumi
              </h1>

              <div className="space-y-8 text-gray-800">
                <div className="space-y-4">
                  <h2 className="text-2xl font-space-grotesk font-light leading-relaxed text-gray-700">
                    Visionary Scholar & Distinguished Academic Leader
                  </h2>
                  <div className="space-y-2">
                    <p className="text-lg font-space-grotesk font-light leading-relaxed">
                      Assistant Professor of Public Administration
                    </p>
                    <p className="text-lg font-space-grotesk font-light leading-relaxed">
                      Doctoral Candidate in Political Science
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="h-px bg-gradient-to-r from-gray-400 to-transparent w-12"></div>
                  <p className="text-lg font-space-grotesk font-medium text-gray-600 whitespace-nowrap">
                    University of Dhaka • Texas Tech University
                  </p>
                  <div className="h-px bg-gradient-to-l from-gray-400 to-transparent w-12"></div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-400">
                  <p className="text-lg font-space-grotesk font-light leading-relaxed text-gray-700">
                    <span className="font-medium">Pioneering research</span> at the intersection of
                    <span className="text-gray-900 font-medium">Digital Governance</span>,
                    <span className="text-gray-900 font-medium">Social Policy Innovation</span>,
                    <span className="text-gray-900 font-medium">Technology Integration</span>, and
                    <span className="text-gray-900 font-medium">Behavioral Science</span> —
                    shaping the future of democratic institutions and public administration.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <p className="text-base font-space-grotesk font-semibold text-gray-800">
                        J.T. and Margaret Talkington Graduate Fellow
                      </p>
                    </div>
                    <p className="text-sm font-space-grotesk font-light text-gray-600 mt-2 ml-6">
                      Distinguished Fellowship • Texas Tech University
                    </p>
                  </div>
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
            <h2 className="text-5xl sm:text-6xl font-cinzel font-bold tracking-tight text-stone-800 leading-tight">
              Dr. Rumi
            </h2>
            <div className="mt-6 w-24 h-0.5 bg-gradient-to-r from-stone-300 via-stone-600 to-stone-300 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Main bio content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="text-xl leading-relaxed text-stone-700 font-light">
                <p className="font-space-grotesk">
                  Maruf Hasan Rumi is a Distinguished Scholar bridging the worlds of <span className="font-medium text-stone-800">digital governance</span> and <span className="font-medium text-stone-800">public policy</span>. As an Assistant Professor at the University of Dhaka and PhD Student in Political Science at Texas Tech University, he stands at the forefront of understanding how technology reshapes democratic institutions and citizen engagement.
                </p>
              </div>

              <div className="text-base leading-relaxed text-stone-600 space-y-6">
                <p className="font-space-grotesk">
                  His groundbreaking research examines the interconnected histories of governance, technology, and behavioral science. An award-winning scholar and dedicated educator, he has contributed influential work to leading academic journals including <em>Frontiers in Sociology</em>, <em>PLOS Digital Health</em>, and the <em>Journal of Police and Criminal Psychology</em>, establishing him as a prominent voice in contemporary political science discourse.
                </p>

                <div className={`${isExpanded ? 'block' : 'hidden'} space-y-6`}>
                  <p className="font-space-grotesk">
                    Dr. Rumi's scholarly excellence has been recognized through prestigious fellowships and grants, including the J.T. and Margaret Talkington Graduate Fellowship, American Red Cross Research Grant (2024), and the Bangladesh Bureau of Educational Information and Statistics Fellowship (2024). His work has been supported by leading institutions and has gained international recognition for its innovative approach to understanding governance in the digital age.
                  </p>

                  <p className="font-space-grotesk">
                    As an active member of the academic community, Dr. Rumi serves on the Editorial Board of the Journal of Public Policy and Service Analysis and maintains memberships in professional organizations including the American Political Science Association and the Bangladesh Tobacco Control Research Network. His commitment to advancing knowledge extends beyond research to mentoring the next generation of scholars and practitioners.
                  </p>

                  <p className="font-space-grotesk">
                    Currently leading pioneering research in digital governance and social policy, Dr. Rumi's work bridges theoretical frameworks with practical applications in public administration reform. His scholarship addresses contemporary challenges at the intersection of technology, governance, and citizen empowerment, contributing to policy discussions that shape our digital democratic future.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar with highlights */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
                <h3 className="text-lg font-cinzel font-semibold text-stone-800 mb-6">Research Focus</h3>
                <div className="space-y-4 text-sm text-stone-600 font-space-grotesk">
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
                  <h4 className="text-sm font-cinzel font-semibold text-stone-800 mb-3">Current Fellowship</h4>
                  <p className="text-sm text-stone-600 italic font-space-grotesk">
                    J.T. and Margaret Talkington Graduate Fellow
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center text-stone-600 hover:text-stone-800 font-space-grotesk font-medium text-sm tracking-wide transition-colors duration-200 group"
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

        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-16 mx-auto mb-6"></div>
              <h2 className="text-4xl sm:text-5xl font-cinzel font-bold tracking-tight text-slate-800 mb-4">
                Accolades
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-16 mx-auto"></div>
            </div>
          </div>

          {/* Full-width auto-scrolling carousel */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll-left">
              {/* First set of accolades */}
              <div className="flex space-x-56 pl-8">
                  {/* Award 1 - Texas Tech Fellowship */}
                  <div className="flex flex-col items-center group min-w-[480px] max-w-[480px]">
                    <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/1.svg"
                        alt="Texas Tech University Logo"
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-[5rem] flex items-center">
                      2025 Talkington Fellowship
                    </h3>
                    <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                      Texas Tech University
                    </p>
                  </div>

                  {/* Award 2 - American Red Cross */}
                  <div className="flex flex-col items-center group min-w-[480px] max-w-[480px]">
                    <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/red-cross-grant.png"
                        alt="American Red Cross Logo"
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-[5rem] flex items-center">
                      2024 American Red Cross Grant
                    </h3>
                    <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                      Research Excellence Award
                    </p>
                  </div>

                  {/* Award 3 - Bangladesh Bureau Fellowship */}
                  <div className="flex flex-col items-center group min-w-[480px] max-w-[480px]">
                    <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/bangladesh-ministry.png"
                        alt="Bangladesh Ministry of Education Logo"
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-[5rem] flex items-center">
                      2024 Bangladesh Bureau Fellowship
                    </h3>
                    <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                      Ministry of Education, Bangladesh
                    </p>
                  </div>

                  {/* Award 4 - University of Dhaka Research */}
                  <div className="flex flex-col items-center group min-w-[480px] max-w-[480px]">
                    <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/dhaka university.png"
                        alt="University of Dhaka Logo"
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-[5rem] flex items-center">
                      2023 UGC Research Fellowship
                    </h3>
                    <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                      University of Dhaka
                    </p>
                  </div>

                  {/* Award 5 - Dean's Award */}
                  <div className="flex flex-col items-center group min-w-[480px] max-w-[480px]">
                    <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/dean.jpg"
                        alt="University of Dhaka Dean's Award Logo"
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-[5rem] flex items-center">
                      2023 Dean's Award
                    </h3>
                    <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                      University of Dhaka in Social Science Faculty
                    </p>
                  </div>

                  {/* Award 6 - UGC Scholarships */}
                  <div className="flex flex-col items-center group min-w-[480px] max-w-[480px]">
                    <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/ugc-bangladesh.png"
                        alt="University Grants Commission Bangladesh Logo"
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-[5rem] flex items-center">
                      2022 UGC Scholarships
                    </h3>
                    <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                      Government of Bangladesh
                    </p>
                  </div>

                  {/* Award 7 - Provost Award */}
                  <div className="flex flex-col items-center group min-w-[480px] max-w-[480px]">
                    <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/provost-award.png"
                        alt="University Provost Award Logo"
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-[5rem] flex items-center">
                      2020 Provost Award
                    </h3>
                    <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                      Highest CGPA in BSS (Hons) Examination
                    </p>
                  </div>

                  {/* Award 8 - Johns Hopkins Fellowship */}
                  <div className="flex flex-col items-center group min-w-[480px] max-w-[480px]">
                    <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/johns-hopkins.png"
                        alt="Johns Hopkins University Logo"
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-[5rem] flex items-center">
                      2020 Johns Hopkins Fellowship
                    </h3>
                    <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                      Johns Hopkins University
                    </p>
                  </div>
                </div>

                {/* Second set of accolades (duplicate for seamless loop) */}
                <div className="flex space-x-56 ml-56">
                  {/* Award 1 - Texas Tech Fellowship */}
                  <div className="flex flex-col items-center group min-w-[480px] max-w-[480px]">
                    <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/1.svg"
                        alt="Texas Tech University Logo"
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-[5rem] flex items-center">
                      2025 Talkington Fellowship
                    </h3>
                    <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                      Texas Tech University
                    </p>
                  </div>

                  {/* Award 2 - American Red Cross */}
                  <div className="flex flex-col items-center group min-w-[480px] max-w-[480px]">
                    <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/red-cross-grant.png"
                        alt="American Red Cross Logo"
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-[5rem] flex items-center">
                      2024 American Red Cross Grant
                    </h3>
                    <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                      Research Excellence Award
                    </p>
                  </div>

                  {/* Award 3 - Bangladesh Bureau Fellowship */}
                  <div className="flex flex-col items-center group min-w-[480px] max-w-[480px]">
                    <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/bangladesh-ministry.png"
                        alt="Bangladesh Ministry of Education Logo"
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-[5rem] flex items-center">
                      2024 Bangladesh Bureau Fellowship
                    </h3>
                    <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                      Ministry of Education, Bangladesh
                    </p>
                  </div>

                  {/* Award 4 - University of Dhaka Research */}
                  <div className="flex flex-col items-center group min-w-[480px] max-w-[480px]">
                    <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/dhaka university.png"
                        alt="University of Dhaka Logo"
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-[5rem] flex items-center">
                      2023 UGC Research Fellowship
                    </h3>
                    <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                      University of Dhaka
                    </p>
                  </div>

                  {/* Award 5 - Dean's Award */}
                  <div className="flex flex-col items-center group min-w-[480px] max-w-[480px]">
                    <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/dean.jpg"
                        alt="University of Dhaka Dean's Award Logo"
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-[5rem] flex items-center">
                      2023 Dean's Award
                    </h3>
                    <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                      University of Dhaka in Social Science Faculty
                    </p>
                  </div>

                  {/* Award 6 - UGC Scholarships */}
                  <div className="flex flex-col items-center group min-w-[480px] max-w-[480px]">
                    <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/ugc-bangladesh.png"
                        alt="University Grants Commission Bangladesh Logo"
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-[5rem] flex items-center">
                      2022 UGC Scholarships
                    </h3>
                    <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                      Government of Bangladesh
                    </p>
                  </div>

                  {/* Award 7 - Provost Award */}
                  <div className="flex flex-col items-center group min-w-[480px] max-w-[480px]">
                    <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/provost-award.png"
                        alt="University Provost Award Logo"
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-[5rem] flex items-center">
                      2020 Provost Award
                    </h3>
                    <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                      Highest CGPA in BSS (Hons) Examination
                    </p>
                  </div>

                  {/* Award 8 - Johns Hopkins Fellowship */}
                  <div className="flex flex-col items-center group min-w-[480px] max-w-[480px]">
                    <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/johns-hopkins.png"
                        alt="Johns Hopkins University Logo"
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-[5rem] flex items-center">
                      2020 Johns Hopkins Fellowship
                    </h3>
                    <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                      Johns Hopkins University
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Featured Books Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-cinzel font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Book Chapters</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 font-space-grotesk">
              Contributions to edited volumes on governance, policy, and social issues.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {books.slice(0, 3).map((book) => (
              <article key={book.id} className="flex max-w-xl flex-col items-start group hover:shadow-lg transition-all duration-300 rounded-2xl p-6">
                <div className="relative w-full group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    className="aspect-[16/20] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/3] shadow-lg"
                    width={300}
                    height={400}
                  />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500 font-space-grotesk">{book.publishDate}</time>
                    <span className="text-gray-500 font-space-grotesk">{book.publisher}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-cinzel font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href="/books">
                        <span className="absolute inset-0" />
                        {book.title}
                      </Link>
                    </h3>
                    {book.subtitle && (
                      <h4 className="mt-2 text-sm font-space-grotesk text-gray-600">
                        {book.subtitle}
                      </h4>
                    )}
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 font-space-grotesk">
                      {book.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/books"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-cinzel font-medium rounded-lg text-white bg-gradient-to-r from-green-600 to-green-500 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View All Book Chapters
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Publications Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-cinzel font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Publications</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 font-space-grotesk">
              Latest research contributions to academic journals and scholarly publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.slice(0, 4).map((publication) => (
              <article key={publication.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-space-grotesk font-semibold ${
                    publication.type === 'journal' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {publication.type === 'journal' ? 'Journal Article' : 'Book Chapter'}
                  </span>
                  <span className="text-sm font-space-grotesk text-gray-500">{publication.year}</span>
                </div>

                <h3 className="text-lg font-cinzel font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {publication.title}
                </h3>

                {publication.journal && (
                  <p className="text-sm font-space-grotesk text-gray-600 mb-3 italic">
                    Published in {publication.journal}
                  </p>
                )}

                <p className="text-sm font-space-grotesk text-gray-700 line-clamp-3 leading-relaxed">
                  {publication.abstract}
                </p>

                {publication.category && (
                  <div className="mt-4">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-space-grotesk">
                      {publication.category}
                    </span>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/publications"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-cinzel font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View All Publications
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Complete CV Section */}
      <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-24 mx-auto mb-6"></div>
              <h2 className="text-4xl sm:text-5xl font-cinzel font-bold tracking-tight text-slate-800 mb-4">
                Curriculum Vitae
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600 font-space-grotesk max-w-2xl mx-auto">
                A comprehensive overview of academic achievements, research contributions, and professional experience.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-24 mx-auto mt-6"></div>
            </div>
          </div>

          {/* CV Download Button */}
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-cinzel font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Full CV (PDF)
              </a>
              <Link
                href="/cv"
                className="inline-flex items-center text-slate-600 hover:text-slate-800 font-space-grotesk font-medium text-sm tracking-wide transition-colors duration-200 group"
              >
                View Detailed CV Page
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* CV Sections Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {cvSections.slice(0, 6).map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-slate-600 to-slate-400 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-cinzel font-bold text-slate-800">
                    {section.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {section.items.slice(0, section.title === 'Publications' ? 1 : 3).map((item, itemIndex) => (
                    <div key={itemIndex} className="relative">
                      <div className="flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                          <h4 className="text-base font-space-grotesk font-semibold text-gray-900 leading-tight">
                            {item.title}
                          </h4>
                          {item.date && (
                            <span className="text-sm font-space-grotesk text-slate-500 mt-1 sm:mt-0 sm:ml-4 flex-shrink-0">
                              {item.date}
                            </span>
                          )}
                        </div>

                        {item.organization && (
                          <p className="text-sm font-space-grotesk text-gray-600 mb-2">
                            {item.organization}
                            {item.location && <span className="text-gray-500"> • {item.location}</span>}
                          </p>
                        )}

                        {item.description && (
                          <div className="text-sm font-space-grotesk text-gray-600 leading-relaxed">
                            {section.title === 'Publications' ? (
                              <div className="space-y-1">
                                {item.description.split('•').filter(line => line.trim()).slice(0, 3).map((line, lineIndex) => (
                                  <p key={lineIndex} className="flex items-start">
                                    <span className="text-slate-400 mr-2 mt-1 text-xs">•</span>
                                    <span className="flex-1">{line.trim()}</span>
                                  </p>
                                ))}
                                {item.description.split('•').filter(line => line.trim()).length > 3 && (
                                  <p className="text-xs text-slate-500 italic">...and more</p>
                                )}
                              </div>
                            ) : (
                              <p>{item.description}</p>
                            )}
                          </div>
                        )}
                      </div>

                      {itemIndex < section.items.slice(0, section.title === 'Publications' ? 1 : 3).length - 1 && (
                        <div className="mt-4 border-b border-gray-100"></div>
                      )}
                    </div>
                  ))}

                  {section.items.length > (section.title === 'Publications' ? 1 : 3) && (
                    <div className="pt-4 border-t border-gray-200">
                      <Link
                        href="/cv"
                        className="text-sm font-space-grotesk text-slate-600 hover:text-slate-800 transition-colors duration-200 group inline-flex items-center"
                      >
                        View all {section.items.length} entries
                        <svg className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Key Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-cinzel font-bold text-slate-800">20+</div>
              <div className="text-sm font-space-grotesk text-gray-600 mt-1">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-cinzel font-bold text-slate-800">5+</div>
              <div className="text-sm font-space-grotesk text-gray-600 mt-1">Book Chapters</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-cinzel font-bold text-slate-800">8+</div>
              <div className="text-sm font-space-grotesk text-gray-600 mt-1">Awards & Honors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-cinzel font-bold text-slate-800">6+</div>
              <div className="text-sm font-space-grotesk text-gray-600 mt-1">Years Teaching</div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-gradient-to-br from-slate-100 to-gray-100 rounded-3xl p-8 border border-slate-200">
            <h3 className="text-xl font-cinzel font-bold text-slate-800 mb-6 text-center">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <h4 className="text-sm font-space-grotesk font-semibold text-gray-800 mb-3">Academic Address (Bangladesh)</h4>
                <div className="text-sm font-space-grotesk text-gray-600 space-y-1">
                  <p>Department of Public Administration</p>
                  <p>University of Dhaka</p>
                  <p>Dhaka 1000, Bangladesh</p>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-sm font-space-grotesk font-semibold text-gray-800 mb-3">Graduate Address (USA)</h4>
                <div className="text-sm font-space-grotesk text-gray-600 space-y-1">
                  <p>Department of Political Science</p>
                  <p>Texas Tech University</p>
                  <p>Lubbock, TX 79409, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-cinzel font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 font-space-grotesk">
              Subscribe to my newsletter for updates on new publications, speaking engagements, and academic insights.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4 mx-auto">
              <label htmlFor="email-address" className="sr-only font-space-grotesk">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6 font-space-grotesk"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-cinzel font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
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

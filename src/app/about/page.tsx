import Image from "next/image";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <p className="text-base font-space-grotesk font-medium leading-7 text-gray-600">About</p>
            <h1 className="mt-4 text-4xl font-cinzel font-light tracking-tight text-gray-900 sm:text-5xl">
              Maruf Hasan Rumi
            </h1>
            <div className="mt-6 w-24 h-0.5 bg-gradient-to-r from-stone-300 via-stone-600 to-stone-300 mx-auto"></div>
            <p className="mt-8 text-xl leading-8 font-space-grotesk text-gray-700 max-w-3xl mx-auto">
              Assistant Professor of Public Administration at University of Dhaka and PhD Student in Political Science at Texas Tech University, specializing in digital governance, social policy, technology, and behavioral science.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

            {/* Left Column - Bio */}
            <div className="lg:col-span-2 space-y-8 text-base leading-7 text-gray-700">
            <p className="font-space-grotesk">
              Dr. Maruf Hasan Rumi stands at the intersection of traditional governance and digital innovation,
              bridging the worlds of public administration and political science with pioneering research that
              shapes our understanding of democratic institutions in the digital age. As an Assistant Professor
              at the University of Dhaka's Department of Public Administration and a doctoral candidate at
              Texas Tech University, he represents a new generation of scholars who seamlessly navigate between
              theory and practice.
            </p>

            <p className="mt-8 font-space-grotesk">
              His research methodology combines quantitative analysis with qualitative insights, employing
              cross-sectional surveys, in-depth interviews, and comparative policy analysis to examine the
              complex relationships between technology, governance, and citizen engagement. With over 20
              peer-reviewed publications and contributions to leading academic journals including Frontiers
              in Sociology, PLOS Digital Health, and Policing: A Journal of Policy and Practice, Dr. Rumi's
              work has garnered international recognition and significant scholarly impact.
            </p>

            <p className="mt-8 font-space-grotesk">
              His scholarly excellence has been recognized through prestigious fellowships including the J.T.
              and Margaret Talkington Graduate Fellowship at Texas Tech University, the American Red Cross
              Research Grant (2024), and multiple research fellowships from the University Grants Commission
              of Bangladesh. Dr. Rumi's work extends beyond academia through active engagement in policy
              consultation, media commentary, and public discourse on governance and social policy issues.
            </p>
            </div>

            {/* Right Column - Photo */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <div className="relative">
                <Image
                  className="rounded-2xl bg-gray-50 object-cover shadow-xl w-80 h-96"
                  src="/Rumi, Maruf Hasan (Headshot 1).jpg"
                  alt="Dr. Maruf Hasan Rumi"
                  width={320}
                  height={384}
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-3xl blur-xl -z-10"></div>
              </div>
            </div>
          </div>

          {/* Research Interests Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-cinzel font-bold tracking-tight text-gray-900">Research Interests</h2>
              <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-cinzel font-semibold text-blue-900">Digital Governance</h3>
                </div>
                <p className="text-sm font-space-grotesk text-blue-800">Exploring how technology transforms public service delivery, citizen engagement, and democratic participation in developing countries</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-cinzel font-semibold text-green-900">Gender & Social Policy</h3>
                </div>
                <p className="text-sm font-space-grotesk text-green-800">Investigating women's representation in politics and administration, digital health equity, and empowerment through civic engagement</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-cinzel font-semibold text-purple-900">Trust in Institutions</h3>
                </div>
                <p className="text-sm font-space-grotesk text-purple-800">Analyzing citizen trust in police, local governance, and the effectiveness of alternative dispute resolution mechanisms</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-cinzel font-semibold text-orange-900">Technology & Change</h3>
                </div>
                <p className="text-sm font-space-grotesk text-orange-800">Examining the impact of fourth industrial revolution, digital health technologies, and migration-security nexus in Southeast Asia</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-cinzel font-semibold text-red-900">Crisis Response</h3>
                </div>
                <p className="text-sm font-space-grotesk text-red-800">Evaluating emergency social protection measures, cash transfer programs, and labor market interventions during crises</p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-cinzel font-bold tracking-tight text-gray-900">Education</h2>
              <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-cinzel font-semibold text-gray-900">Ph.D. in Political Science</h3>
                    <p className="text-gray-600 font-space-grotesk font-medium mt-1">Texas Tech University, Lubbock, Texas, USA</p>
                    <p className="mt-3 text-sm text-gray-600 font-space-grotesk">Dissertation: "Digital Governance and Citizen Engagement in Contemporary Democracies"</p>
                    <div className="flex items-center mt-3">
                      <svg className="w-4 h-4 text-blue-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      <span className="text-sm text-blue-700 font-space-grotesk font-medium">J.T. and Margaret Talkington Graduate Fellow</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-space-grotesk font-medium px-3 py-1 rounded-full">2023-present</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-cinzel font-semibold text-gray-900">M.S.S. in Public Administration</h3>
                    <p className="text-gray-600 font-space-grotesk font-medium mt-1">University of Dhaka, Bangladesh</p>
                    <div className="flex items-center mt-3">
                      <svg className="w-4 h-4 text-green-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                      <span className="text-sm text-green-700 font-space-grotesk font-medium">First Class, Department of Public Administration</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-space-grotesk font-medium px-3 py-1 rounded-full">2018</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-cinzel font-semibold text-gray-900">B.S.S. in Public Administration</h3>
                    <p className="text-gray-600 font-space-grotesk font-medium mt-1">University of Dhaka, Bangladesh</p>
                    <div className="flex items-center mt-3">
                      <svg className="w-4 h-4 text-purple-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                      <span className="text-sm text-purple-700 font-space-grotesk font-medium">First Class, Department of Public Administration</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-purple-100 text-purple-800 text-sm font-space-grotesk font-medium px-3 py-1 rounded-full">2016</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Positions Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-cinzel font-bold tracking-tight text-gray-900">Current Positions</h2>
              <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2M8 6H6a2 2 0 00-2 2v6a2 2 0 002 2h2m8 0V8a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-cinzel font-semibold text-amber-900">Assistant Professor</h3>
                </div>
                <p className="text-amber-800 font-space-grotesk font-medium">University of Dhaka</p>
                <p className="text-sm text-amber-700 font-space-grotesk mt-2">Teaching digital governance, public administration, and research methodology</p>
                <span className="inline-block mt-3 bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">2019-present</span>
              </div>

              <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-cinzel font-semibold text-slate-900">Editorial Board Member</h3>
                </div>
                <p className="text-slate-800 font-space-grotesk font-medium">Journal of Public Policy and Service Analysis</p>
                <p className="text-sm text-slate-700 font-space-grotesk mt-2">Peer review and editorial oversight</p>
                <span className="inline-block mt-3 bg-slate-100 text-slate-800 text-xs font-medium px-2 py-1 rounded-full">2023-present</span>
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-cinzel font-bold tracking-tight text-gray-900">Awards & Recognition</h2>
              <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto"></div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <h3 className="text-lg font-cinzel font-semibold text-blue-900">Talkington Fellowship</h3>
                </div>
                <p className="text-sm text-blue-800 font-space-grotesk">Texas Tech University (2025)</p>
                <p className="text-xs text-blue-700 font-space-grotesk mt-1">Distinguished graduate fellowship</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <h3 className="text-lg font-cinzel font-semibold text-red-900">Red Cross Grant</h3>
                </div>
                <p className="text-sm text-red-800 font-space-grotesk">American Red Cross (2024)</p>
                <p className="text-xs text-red-700 font-space-grotesk mt-1">Research excellence award</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <h3 className="text-lg font-cinzel font-semibold text-green-900">UGC Fellowship</h3>
                </div>
                <p className="text-sm text-green-800 font-space-grotesk">University Grants Commission (2023)</p>
                <p className="text-xs text-green-700 font-space-grotesk mt-1">Research fellowship</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <h3 className="text-lg font-cinzel font-semibold text-purple-900">Dean's Award</h3>
                </div>
                <p className="text-sm text-purple-800 font-space-grotesk">University of Dhaka (2023)</p>
                <p className="text-xs text-purple-700 font-space-grotesk mt-1">Academic excellence</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m7-2a2 2 0 002-2V7a2 2 0 00-2-2h-7m2 9v3m0 0v3m0-3h3m-3 0h-3" />
                  </svg>
                  <h3 className="text-lg font-cinzel font-semibold text-orange-900">BEIS Fellowship</h3>
                </div>
                <p className="text-sm text-orange-800 font-space-grotesk">Ministry of Education (2024)</p>
                <p className="text-xs text-orange-700 font-space-grotesk mt-1">Educational research support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
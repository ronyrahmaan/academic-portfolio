import Image from "next/image";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-gray-50 to-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl text-base leading-7 text-gray-700">
          {/* Header Section */}
          <div className="text-center mb-16">
            <p className="text-base font-space-grotesk font-medium leading-7 text-gray-600">About</p>
            <h1 className="mt-4 text-4xl font-cinzel font-light tracking-tight text-gray-900 sm:text-5xl">
              Maruf Hasan Rumi
            </h1>
            <p className="mt-6 text-xl leading-8 font-space-grotesk max-w-4xl mx-auto">
              Assistant Professor of Public Administration at University of Dhaka and PhD Student in Political Science at Texas Tech University, specializing in digital governance, social policy, technology, and behavioral science.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-2 space-y-8">
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

              {/* Research Philosophy & Methodology */}
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-8 border border-slate-100">
                <h2 className="text-2xl font-cinzel font-bold tracking-tight text-gray-900 mb-6">Research Philosophy & Methodology</h2>
                <div className="space-y-6">
                  <p className="font-space-grotesk text-gray-700 leading-relaxed">
                    Dr. Rumi's research philosophy centers on the transformative potential of technology-enabled governance
                    to strengthen democratic institutions and enhance citizen participation. He advocates for a
                    <strong className="text-slate-800"> mixed-methods approach</strong> that bridges quantitative rigor
                    with qualitative depth, ensuring research findings are both statistically robust and contextually meaningful.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="text-lg font-cinzel font-semibold text-gray-900">Methodological Approach</h3>
                      <ul className="space-y-2 text-sm font-space-grotesk text-gray-700">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Cross-sectional and longitudinal survey designs</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>In-depth interviews with policy stakeholders</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Comparative policy analysis across jurisdictions</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Digital ethnography of citizen engagement platforms</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-cinzel font-semibold text-gray-900">Theoretical Framework</h3>
                      <ul className="space-y-2 text-sm font-space-grotesk text-gray-700">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>New Public Management and Digital Era Governance</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Behavioral insights in public policy design</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Institutional theory and democratic innovation</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Gender-responsive governance frameworks</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

                <div>
                <h2 className="text-2xl font-cinzel font-bold tracking-tight text-gray-900">Research Interests</h2>
              <ul role="list" className="mt-8 max-w-xl space-y-6 text-gray-600 font-space-grotesk">
                <li className="flex items-start gap-x-4">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Digital Governance and E-Administration:</strong> Exploring how technology transforms public service delivery, citizen engagement, and democratic participation in developing countries</span>
                </li>
                <li className="flex items-start gap-x-4">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <span><strong>Gender and Social Policy:</strong> Investigating women's representation in politics and administration, digital health equity, and empowerment through civic engagement</span>
                </li>
                <li className="flex items-start gap-x-4">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Trust in Public Institutions:</strong> Analyzing citizen trust in police, local governance, and the effectiveness of alternative dispute resolution mechanisms</span>
                </li>
                <li className="flex items-start gap-x-4">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Technology and Social Change:</strong> Examining the impact of fourth industrial revolution, digital health technologies, and migration-security nexus in Southeast Asia</span>
                </li>
                <li className="flex items-start gap-x-4">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01.293.707v6.586l-2-2V9a1 1 0 10-2 0v3.586l-2 2V8.414L5.414 6H4a1 1 0 01-1-1V4zm9 1h4a1 1 0 110 2h-1.586l2.293 2.293a1 1 0 01.293.707v2.586l-2-2V9a1 1 0 10-2 0v1.586l-2 2V8.414L12.586 6H12a1 1 0 010-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Crisis Response and Social Protection:</strong> Evaluating emergency social protection measures, cash transfer programs, and labor market interventions during crises</span>
                </li>
              </ul>
              </div>

              <div>
                <h2 className="text-2xl font-cinzel font-bold tracking-tight text-gray-900">Education</h2>
              <div className="mt-8 space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-lg font-cinzel font-semibold text-gray-900">Ph.D. in Political Science</h3>
                  <p className="text-gray-600 font-space-grotesk font-medium">Texas Tech University, Lubbock, Texas, USA • 2023-present</p>
                  <p className="mt-2 text-sm text-gray-600 font-space-grotesk">Dissertation: "Digital Governance and Citizen Engagement in Contemporary Democracies"</p>
                  <p className="mt-2 text-sm text-blue-700 font-space-grotesk font-medium">🏆 J.T. and Margaret Talkington Graduate Fellow</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-cinzel font-semibold text-gray-900">M.S.S. in Public Administration</h3>
                  <p className="text-gray-600 font-space-grotesk font-medium">University of Dhaka, Bangladesh • 2018</p>
                  <p className="mt-2 text-sm text-green-700 font-space-grotesk font-medium">🎓 First Class, Department of Public Administration</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-cinzel font-semibold text-gray-900">B.S.S. in Public Administration</h3>
                  <p className="text-gray-600 font-space-grotesk font-medium">University of Dhaka, Bangladesh • 2016</p>
                  <p className="mt-2 text-sm text-purple-700 font-space-grotesk font-medium">🎓 First Class, Department of Public Administration</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-cinzel font-bold tracking-tight text-gray-900">Current Positions & Responsibilities</h2>
              <div className="mt-8 space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
                  <h3 className="text-lg font-cinzel font-semibold text-gray-900">Assistant Professor</h3>
                  <p className="text-gray-600 font-space-grotesk font-medium">Department of Public Administration, University of Dhaka • 2019-present</p>
                  <p className="mt-3 text-sm text-gray-700 font-space-grotesk">
                    Teaching undergraduate and graduate courses in public administration, digital governance,
                    and research methodology. Supervising thesis research and mentoring emerging scholars in
                    public policy and governance studies. Active member of departmental committees for
                    academic affairs and faculty development.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="text-lg font-cinzel font-semibold text-gray-900">Editorial Board Member</h3>
                  <p className="text-gray-600 font-space-grotesk font-medium">Journal of Public Policy and Service Analysis • 2023-present</p>
                  <p className="mt-3 text-sm text-gray-700 font-space-grotesk">
                    Contributing to peer review processes, editorial decision-making, and strategic direction
                    of scholarly publications in public administration and policy analysis.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-cinzel font-semibold text-gray-900">Professional Memberships</h3>
                  <p className="text-gray-600 font-space-grotesk font-medium">Active member of leading academic organizations</p>
                  <ul className="mt-3 text-sm text-gray-700 font-space-grotesk space-y-1">
                    <li>• American Political Science Association (APSA)</li>
                    <li>• Bangladesh Tobacco Control Research Network</li>
                    <li>• International Association of Schools and Institutes of Administration</li>
                  </ul>
                </div>
              </div>

              {/* Policy Impact & Real-World Applications */}
              <div>
                <h2 className="text-2xl font-cinzel font-bold tracking-tight text-gray-900">Policy Impact & Real-World Applications</h2>
                <div className="mt-8 space-y-6">
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-100">
                    <h3 className="text-lg font-cinzel font-semibold text-gray-900 mb-4">Government Consultation & Advisory</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 font-space-grotesk">Digital Bangladesh Initiative</h4>
                          <p className="text-sm text-gray-700 font-space-grotesk">Policy advisor for e-governance implementation across rural districts, contributing to national digital transformation strategy</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 font-space-grotesk">COVID-19 Social Protection Response</h4>
                          <p className="text-sm text-gray-700 font-space-grotesk">Research findings informed emergency cash transfer program design, reaching over 2 million vulnerable households</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <h3 className="text-lg font-cinzel font-semibold text-gray-900 mb-4">International Organizations</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 font-space-grotesk">World Bank Technical Assistance</h4>
                          <p className="text-sm text-gray-700 font-space-grotesk">Contributed to governance assessment frameworks for digital public service delivery in South Asia</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 font-space-grotesk">UNDP Policy Research</h4>
                          <p className="text-sm text-gray-700 font-space-grotesk">Research on gender-responsive governance fed into regional sustainable development goal implementation strategies</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                    <h3 className="text-lg font-cinzel font-semibold text-gray-900 mb-4">Media & Expert Commentary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-space-grotesk">
                      <div>
                        <h4 className="font-semibold text-gray-900">Print Media</h4>
                        <ul className="mt-2 space-y-1 text-gray-700">
                          <li>• The Daily Star (Op-Ed contributor)</li>
                          <li>• Dhaka Tribune (Policy analysis)</li>
                          <li>• New Age Bangladesh (Expert interviews)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Broadcasting</h4>
                        <ul className="mt-2 space-y-1 text-gray-700">
                          <li>• BTV Talk Show (Governance expert)</li>
                          <li>• Channel i (Digital policy commentary)</li>
                          <li>• Radio Today (Public administration)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teaching & Mentorship */}
              <div>
                <h2 className="text-2xl font-cinzel font-bold tracking-tight text-gray-900">Teaching & Mentorship</h2>
                <div className="mt-8 space-y-6">
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
                    <h3 className="text-lg font-cinzel font-semibold text-gray-900 mb-4">Educational Philosophy</h3>
                    <p className="font-space-grotesk text-gray-700 leading-relaxed">
                      Dr. Rumi believes in <strong>experiential learning</strong> that bridges theoretical knowledge with practical application.
                      His pedagogical approach emphasizes critical thinking, collaborative problem-solving, and real-world policy analysis.
                      Students are encouraged to engage with contemporary governance challenges through case studies, simulations, and
                      direct interaction with policy practitioners.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                      <h3 className="text-lg font-cinzel font-semibold text-gray-900 mb-4">Courses Taught</h3>
                      <ul className="space-y-2 text-sm font-space-grotesk text-gray-700">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span>Digital Governance & E-Administration</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span>Public Policy Analysis</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span>Research Methods in Public Administration</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span>Comparative Government & Politics</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                      <h3 className="text-lg font-cinzel font-semibold text-gray-900 mb-4">Student Mentorship</h3>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-2xl font-cinzel font-bold text-indigo-600">15+</div>
                          <div className="text-sm text-gray-600 font-space-grotesk">Master's thesis supervised</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-cinzel font-bold text-indigo-600">40+</div>
                          <div className="text-sm text-gray-600 font-space-grotesk">Undergraduate researchers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-cinzel font-bold text-indigo-600">5</div>
                          <div className="text-sm text-gray-600 font-space-grotesk">Students in PhD programs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              {/* Profile Image */}
              <div className="sticky top-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8">
                  <Image
                    className="rounded-lg object-cover w-full"
                    src="/Rumi, Maruf Hasan (Headshot 1).jpg"
                    alt="Dr. Maruf Hasan Rumi"
                    width={400}
                    height={480}
                  />
                  <figcaption className="mt-4 text-center text-sm leading-6 text-gray-600 font-space-grotesk italic">
                    Dr. Rumi's commitment to bridging academic research with real-world policy impact,
                    exemplifying the intersection of digital innovation and traditional governance.
                  </figcaption>
                </div>

                {/* Current Research Focus */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8">
                  <h3 className="text-lg font-cinzel font-bold text-gray-900 mb-4">Current Research Focus</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 font-space-grotesk">Digital Governance in Democratic Contexts</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 font-space-grotesk">Citizen Engagement Technologies</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 font-space-grotesk">Public Trust & Institutional Effectiveness</span>
                    </div>
                  </div>
                </div>

                {/* Active Research Projects */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-cinzel font-bold text-gray-900 mb-4">Active Projects</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="text-sm font-semibold text-gray-900 font-space-grotesk">PhD Dissertation</h4>
                      <p className="text-xs text-gray-600 font-space-grotesk">"Digital Governance and Citizen Engagement in Contemporary Democracies"</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="text-sm font-semibold text-gray-900 font-space-grotesk">Policy Research</h4>
                      <p className="text-xs text-gray-600 font-space-grotesk">Emergency social protection measures in crisis response</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="text-sm font-semibold text-gray-900 font-space-grotesk">Cross-national Study</h4>
                      <p className="text-xs text-gray-600 font-space-grotesk">Digital health technologies and gender equity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-cinzel font-bold tracking-tight text-gray-900 text-center">Awards and Recognition</h2>
            <div className="mt-8">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
                  <strong className="text-blue-800 font-cinzel">J.T. and Margaret Talkington Graduate Fellowship</strong>
                  <p className="text-sm text-blue-700 font-space-grotesk mt-1">(2025) - Texas Tech University</p>
                  <p className="text-xs text-gray-600 font-space-grotesk mt-1">Distinguished fellowship for doctoral excellence</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-100">
                  <strong className="text-red-800 font-cinzel">American Red Cross Research Grant</strong>
                  <p className="text-sm text-red-700 font-space-grotesk mt-1">(2024) - Research Excellence Award</p>
                  <p className="text-xs text-gray-600 font-space-grotesk mt-1">For innovative social policy research</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">
                  <strong className="text-green-800 font-cinzel">UGC-Dhaka University Research Fellowship</strong>
                  <p className="text-sm text-green-700 font-space-grotesk mt-1">(2023) - University Grants Commission</p>
                  <p className="text-xs text-gray-600 font-space-grotesk mt-1">Supporting digital governance research</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-4 border border-purple-100">
                  <strong className="text-purple-800 font-cinzel">Dean's Award for Academic Excellence</strong>
                  <p className="text-sm text-purple-700 font-space-grotesk mt-1">(2023) - University of Dhaka</p>
                  <p className="text-xs text-gray-600 font-space-grotesk mt-1">Recognition of scholarly achievements</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-100 md:col-span-2">
                  <strong className="text-orange-800 font-cinzel">Bangladesh Bureau of Educational Information and Statistics Fellowship</strong>
                  <p className="text-sm text-orange-700 font-space-grotesk mt-1">(2024) - Ministry of Education, Bangladesh</p>
                  <p className="text-xs text-gray-600 font-space-grotesk mt-1">Supporting research in educational policy and administration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}
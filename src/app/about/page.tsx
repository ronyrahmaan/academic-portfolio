import Image from "next/image";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-base leading-7 text-gray-700">
          <p className="text-base font-space-grotesk font-medium leading-7 text-gray-600">About</p>
          <h1 className="mt-4 text-4xl font-cinzel font-light tracking-tight text-gray-900 sm:text-5xl">
            Maruf Hasan Rumi
          </h1>
          <p className="mt-6 text-xl leading-8 font-space-grotesk">
            Assistant Professor of Public Administration at University of Dhaka and PhD Student in Political Science at Texas Tech University, specializing in digital governance, social policy, technology, and behavioral science.
          </p>

          <div className="mt-10 max-w-2xl">
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

            <div className="mt-16">
              <h2 className="text-2xl font-cinzel font-bold tracking-tight text-gray-900">Research Interests</h2>
              <ul role="list" className="mt-8 max-w-xl space-y-6 text-gray-600 font-space-grotesk">
                <li className="flex items-start gap-x-4">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span><strong>Digital Governance and E-Administration:</strong> Exploring how technology transforms public service delivery, citizen engagement, and democratic participation in developing countries</span>
                </li>
                <li className="flex items-start gap-x-4">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 bg-green-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span><strong>Gender and Social Policy:</strong> Investigating women's representation in politics and administration, digital health equity, and empowerment through civic engagement</span>
                </li>
                <li className="flex items-start gap-x-4">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 bg-purple-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span><strong>Trust in Public Institutions:</strong> Analyzing citizen trust in police, local governance, and the effectiveness of alternative dispute resolution mechanisms</span>
                </li>
                <li className="flex items-start gap-x-4">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 bg-orange-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span><strong>Technology and Social Change:</strong> Examining the impact of fourth industrial revolution, digital health technologies, and migration-security nexus in Southeast Asia</span>
                </li>
                <li className="flex items-start gap-x-4">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 bg-red-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span><strong>Crisis Response and Social Protection:</strong> Evaluating emergency social protection measures, cash transfer programs, and labor market interventions during crises</span>
                </li>
              </ul>
            </div>

            <div className="mt-16">
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
            </div>
          </div>

          <figure className="mt-16">
            <div className="flex justify-center">
              <Image
                className="rounded-xl bg-gray-50 object-cover shadow-xl w-full max-w-lg"
                src="/Rumi, Maruf Hasan (Headshot 1).jpg"
                alt="Dr. Maruf Hasan Rumi in academic setting"
                width={500}
                height={600}
              />
            </div>
            <figcaption className="mt-4 text-center text-sm leading-6 text-gray-500 font-space-grotesk">
              <span>Dr. Rumi's commitment to bridging academic research with real-world policy impact,
              exemplifying the intersection of digital innovation and traditional governance.</span>
            </figcaption>
          </figure>

          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-cinzel font-bold tracking-tight text-gray-900">Awards and Recognition</h2>
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
    </Layout>
  );
}
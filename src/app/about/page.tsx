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
              Write your academic biography here. This section should cover your educational background,
              current position, research interests, and major accomplishments. Keep it engaging yet professional.
            </p>

            <p className="mt-8 font-space-grotesk">
              Discuss your research methodology, key findings, and the broader impact of your work.
              Mention any significant awards, grants, or recognition you've received.
            </p>

            <div className="mt-16">
              <h2 className="text-2xl font-cinzel font-bold tracking-tight text-gray-900">Research Interests</h2>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600 font-space-grotesk">
                <li className="flex gap-x-3">
                  <span className="mt-1 h-5 w-5 flex-none text-gray-900">•</span>
                  <span>Research area 1</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1 h-5 w-5 flex-none text-gray-900">•</span>
                  <span>Research area 2</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1 h-5 w-5 flex-none text-gray-900">•</span>
                  <span>Research area 3</span>
                </li>
              </ul>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-cinzel font-bold tracking-tight text-gray-900">Education</h2>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-cinzel font-semibold text-gray-900">PhD in [Field]</h3>
                  <p className="text-gray-600 font-space-grotesk">University Name, Year</p>
                  <p className="mt-2 text-sm text-gray-600 font-space-grotesk">Dissertation: "Title of your dissertation"</p>
                </div>
                <div>
                  <h3 className="text-lg font-cinzel font-semibold text-gray-900">Master's Degree</h3>
                  <p className="text-gray-600 font-space-grotesk">University Name, Year</p>
                </div>
                <div>
                  <h3 className="text-lg font-cinzel font-semibold text-gray-900">Bachelor's Degree</h3>
                  <p className="text-gray-600 font-space-grotesk">University Name, Year</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-cinzel font-bold tracking-tight text-gray-900">Current Position</h2>
              <div className="mt-8">
                <p className="font-space-grotesk">
                  Detail your current role, responsibilities, and the courses you teach.
                  Mention any administrative positions or committee memberships.
                </p>
              </div>
            </div>
          </div>

          <figure className="mt-16">
            <Image
              className="aspect-video rounded-xl bg-gray-50 object-cover"
              src="/placeholder-research.jpg"
              alt="Research or academic setting"
              width={800}
              height={450}
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500 font-space-grotesk">
              <span>Your research environment or a significant moment in your academic career.</span>
            </figcaption>
          </figure>

          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-cinzel font-bold tracking-tight text-gray-900">Awards and Recognition</h2>
            <div className="mt-8">
              <ul className="space-y-4 font-space-grotesk">
                <li>
                  <strong>Award Name</strong> (Year) - Brief description
                </li>
                <li>
                  <strong>Grant or Fellowship</strong> (Year) - Brief description
                </li>
                <li>
                  <strong>Recognition</strong> (Year) - Brief description
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
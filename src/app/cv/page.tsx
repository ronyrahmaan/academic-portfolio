import Layout from "@/components/Layout";
import { cvSections } from "@/data/cv";

export default function CV() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Curriculum Vitae
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Maruf Hasan Rumi
            </p>
            <p className="text-sm text-gray-500">
              Assistant Professor, Department of Public Administration | University of Dhaka<br />
              PhD Student in Political Science | Texas Tech University
            </p>
          </div>

          {/* Download CV Button */}
          <div className="mt-8 flex items-center gap-x-6">
            <a
              href="/cv.pdf"
              download
              className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Download PDF
            </a>
            <a
              href="mailto:your.email@university.edu"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Request Full CV <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* CV Sections */}
          <div className="mt-16 space-y-16">
            {cvSections.map((section, sectionIndex) => (
              <section key={sectionIndex}>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 border-b border-gray-200 pb-2">
                  {section.title}
                </h2>
                <div className="mt-8 space-y-8">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="relative">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          {item.organization && (
                            <p className="text-gray-700 mt-1">
                              {item.organization}
                              {item.location && <span className="text-gray-500"> • {item.location}</span>}
                            </p>
                          )}
                          {item.description && (
                            <div className="mt-2 text-gray-600 whitespace-pre-line">
                              {item.description}
                            </div>
                          )}
                        </div>
                        {item.date && (
                          <div className="mt-2 sm:mt-0 sm:ml-6 flex-shrink-0">
                            <span className="text-sm font-medium text-gray-500">
                              {item.date}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Contact Information</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Academic Address</h3>
                <div className="mt-2 text-sm text-gray-600">
                  <p>Department of [Your Department]</p>
                  <p>University Name</p>
                  <p>Address Line</p>
                  <p>City, State ZIP</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
                <div className="mt-2 text-sm text-gray-600">
                  <p>Email: your.email@university.edu</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Office: Building Name, Room 123</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs text-gray-500 text-center">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
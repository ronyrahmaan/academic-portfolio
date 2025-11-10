import Image from "next/image";
import Layout from "@/components/Layout";
import { mediaAppearances } from "@/data/media";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getMediaTypeIcon(type: string) {
  switch (type) {
    case 'podcast':
      return '🎙️';
    case 'tv':
      return '📺';
    case 'radio':
      return '📻';
    case 'interview':
      return '🎤';
    default:
      return '🎯';
  }
}

function getMediaTypeColor(type: string) {
  switch (type) {
    case 'podcast':
      return 'bg-purple-100 text-purple-800';
    case 'tv':
      return 'bg-blue-100 text-blue-800';
    case 'radio':
      return 'bg-green-100 text-green-800';
    case 'interview':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export default function Media() {
  return (
    <Layout>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Media Appearances
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Recent interviews, podcasts, and television appearances discussing my research and expertise.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {mediaAppearances.map((appearance) => (
              <article key={appearance.id} className="flex max-w-xl flex-col items-start">
                {appearance.thumbnail && (
                  <div className="relative w-full">
                    <Image
                      src={appearance.thumbnail}
                      alt={`${appearance.outlet} appearance`}
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
                      width={400}
                      height={225}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gray-900/10" />
                  </div>
                )}

                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={appearance.date} className="text-gray-500">
                      {formatDate(appearance.date)}
                    </time>
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${getMediaTypeColor(appearance.type)}`}
                    >
                      <span className="mr-1">{getMediaTypeIcon(appearance.type)}</span>
                      {appearance.type}
                    </span>
                  </div>

                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      {appearance.url ? (
                        <a href={appearance.url} target="_blank" rel="noopener noreferrer">
                          <span className="absolute inset-0" />
                          {appearance.title}
                        </a>
                      ) : (
                        appearance.title
                      )}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {appearance.description}
                    </p>
                  </div>

                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        {appearance.outlet}
                      </p>
                    </div>
                  </div>

                  {appearance.url && (
                    <div className="mt-4">
                      <a
                        href={appearance.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
                      >
                        Listen/Watch <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Media Kit Section */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Media Kit
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Resources for journalists, podcast hosts, and media professionals.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                  <h4 className="text-base font-semibold text-gray-900">High-Resolution Photos</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Professional headshots and research photos available for download.
                  </p>
                  <a href="#" className="mt-4 text-sm font-semibold text-gray-900">
                    Download Photos <span aria-hidden="true">→</span>
                  </a>
                </div>

                <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                  <h4 className="text-base font-semibold text-gray-900">Bio & CV</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Short and long-form biographies plus complete curriculum vitae.
                  </p>
                  <a href="/cv" className="mt-4 text-sm font-semibold text-gray-900">
                    View CV <span aria-hidden="true">→</span>
                  </a>
                </div>

                <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                  <h4 className="text-base font-semibold text-gray-900">Contact Information</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Direct contact for interview requests and media inquiries.
                  </p>
                  <a href="/contact" className="mt-4 text-sm font-semibold text-gray-900">
                    Contact <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
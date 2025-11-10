import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { books } from "@/data/books";

export default function Books() {
  return (
    <Layout>
      <div className="bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="text-center mb-16">
              <p className="text-sm font-space-grotesk font-semibold tracking-wider uppercase text-stone-500 mb-4">Publications</p>
              <h2 className="text-5xl sm:text-6xl font-cinzel font-bold tracking-tight text-stone-800 leading-tight">Book Chapters</h2>
              <div className="mt-6 w-24 h-0.5 bg-gradient-to-r from-stone-300 via-stone-600 to-stone-300 mx-auto"></div>
            </div>
            <p className="mt-8 text-xl font-space-grotesk font-light leading-8 text-gray-700 text-center max-w-3xl mx-auto">
              Contributions to edited volumes on public policy, governance, migration, and social protection in South Asia and beyond.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-x-12 gap-y-20 pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            {books.map((book) => (
              <article key={book.id} className="bg-gradient-to-br from-white to-stone-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 lg:p-12 border border-stone-100">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                  <div className="relative w-full lg:w-80 lg:flex-shrink-0 group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <Image
                      src={book.coverImage}
                      alt={`Cover of ${book.title}`}
                      className="relative aspect-[3/4] w-full rounded-2xl bg-stone-100 object-cover shadow-2xl lg:w-80 group-hover:scale-[1.02] transition-transform duration-500"
                      width={320}
                      height={427}
                    />
                  </div>

                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-x-4 text-sm">
                      <div className="bg-stone-200 px-3 py-1 rounded-full">
                        <time className="text-stone-700 font-space-grotesk font-medium">{book.publishDate}</time>
                      </div>
                      <div className="bg-blue-100 px-3 py-1 rounded-full">
                        <span className="text-blue-800 font-space-grotesk font-medium">{book.publisher}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl font-cinzel font-bold leading-tight text-gray-900 hover:text-stone-700 transition-colors duration-300">
                        {book.title}
                      </h3>
                      {book.subtitle && (
                        <h4 className="text-xl font-space-grotesk font-light text-stone-600 leading-relaxed">
                          {book.subtitle}
                        </h4>
                      )}
                      <div className="w-16 h-0.5 bg-gradient-to-r from-stone-400 to-transparent"></div>
                      <p className="text-base font-space-grotesk font-light leading-relaxed text-gray-700">
                        {book.description}
                      </p>
                    </div>

                    {/* Buy Links */}
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-3">
                        {book.buyLinks.amazon && (
                          <a
                            href={book.buyLinks.amazon}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-3 text-sm font-cinzel font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M.439,11.257A.5.5,0,0,0,0,11.7a.5.5,0,0,0,.439.444l4.214.616L6.839,17.1a.5.5,0,0,0,.895.05l2.013-4.027,4.027,2.013a.5.5,0,0,0,.05-.895L9.486,12.028l.616-4.214A.5.5,0,0,0,9.658,7.4L5.321,9.413,1.294,7.4a.5.5,0,0,0-.444.414Z"/>
                            </svg>
                            Buy on Amazon
                          </a>
                        )}
                        {book.buyLinks.bookshop && (
                          <a
                            href={book.buyLinks.bookshop}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-cinzel font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/>
                              <path d="M12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"/>
                            </svg>
                            Buy on Bookshop
                          </a>
                        )}
                        {book.buyLinks.barnes && (
                          <a
                            href={book.buyLinks.barnes}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-lg bg-gradient-to-r from-green-600 to-green-500 px-6 py-3 text-sm font-cinzel font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/>
                            </svg>
                            Buy at Barnes & Noble
                          </a>
                        )}
                      </div>
                      {book.isbn && (
                        <p className="text-sm text-stone-500 font-space-grotesk">ISBN: {book.isbn}</p>
                      )}
                    </div>

                    {/* Reviews */}
                    {book.reviews && book.reviews.length > 0 && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-cinzel font-semibold text-gray-900">Critical Acclaim</h4>
                        <div className="space-y-6">
                          {book.reviews.map((review, index) => (
                            <blockquote key={index} className="bg-gradient-to-br from-stone-50 to-gray-50 border-l-4 border-stone-400 rounded-r-lg p-6 shadow-sm">
                              <p className="text-base font-space-grotesk font-light italic text-gray-700 leading-relaxed">
                                "{review.quote}"
                              </p>
                              <cite className="mt-4 block text-sm text-stone-600 font-space-grotesk font-medium">
                                — {review.reviewer && `${review.reviewer}, `}<span className="text-stone-500">{review.source}</span>
                              </cite>
                            </blockquote>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
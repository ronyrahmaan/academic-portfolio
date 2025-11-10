import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { books } from "@/data/books";

export default function Books() {
  return (
    <Layout>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Books</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              My published works exploring key themes in [your field] and their broader implications.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            {books.map((book) => (
              <article key={book.id} className="flex max-w-xl flex-col items-start lg:max-w-none lg:flex-row lg:items-center">
                <div className="relative w-full lg:w-64 lg:flex-shrink-0">
                  <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    className="aspect-[3/4] w-full rounded-2xl bg-gray-100 object-cover lg:w-64"
                    width={256}
                    height={341}
                  />
                </div>
                <div className="w-full lg:ml-8">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500">{book.publishDate}</time>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500">{book.publisher}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <h4 className="mt-1 text-base text-gray-600">
                        {book.subtitle}
                      </h4>
                    )}
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {book.description}
                    </p>
                  </div>

                  {/* Buy Links */}
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-3">
                      {book.buyLinks.amazon && (
                        <a
                          href={book.buyLinks.amazon}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
                        >
                          Buy on Amazon
                        </a>
                      )}
                      {book.buyLinks.bookshop && (
                        <a
                          href={book.buyLinks.bookshop}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                        >
                          Buy on Bookshop
                        </a>
                      )}
                      {book.buyLinks.barnes && (
                        <a
                          href={book.buyLinks.barnes}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
                        >
                          Buy at Barnes & Noble
                        </a>
                      )}
                    </div>
                    {book.isbn && (
                      <p className="mt-3 text-xs text-gray-500">ISBN: {book.isbn}</p>
                    )}
                  </div>

                  {/* Reviews */}
                  {book.reviews && book.reviews.length > 0 && (
                    <div className="mt-8">
                      <h4 className="text-sm font-semibold text-gray-900">Reviews</h4>
                      <div className="mt-4 space-y-4">
                        {book.reviews.map((review, index) => (
                          <blockquote key={index} className="border-l-4 border-gray-300 pl-4">
                            <p className="text-sm italic text-gray-600">"{review.quote}"</p>
                            <cite className="mt-2 block text-xs text-gray-500">
                              — {review.reviewer && `${review.reviewer}, `}{review.source}
                            </cite>
                          </blockquote>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
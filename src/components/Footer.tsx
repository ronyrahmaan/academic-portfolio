import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Contact</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>your.email@university.edu</p>
              <p>University Name</p>
              <p>Department</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/cv" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Curriculum Vitae
              </Link>
              <Link href="/books" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Publications
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Speaking Requests
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Connect</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Twitter
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Academic Profile
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
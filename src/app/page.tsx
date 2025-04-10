import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-900">
        Convert WordPress to React Like a Pro
      </h1>
      <p className="mt-4 text-xl text-gray-600">
        Free tools and tutorials for WP devs transitioning to React 🚀
        Open-source tools for WordPress/React interoperability: - Gutenberg
        block converter - Headless WP starters - Performance benchmarks
        Contribute →
        <a
          href="http://github.com/webkamal/wptoreact/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          [GitHub]
        </a>
      </p>

      <div className="mt-8 space-y-4">
        <Link
          href="/request"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Try Gutenberg → JSX Converter (Beta)
        </Link>
        <p className="text-sm text-gray-500">
          Coming next: Headless WP Starter Kit
        </p>
      </div>
    </main>
  );
}

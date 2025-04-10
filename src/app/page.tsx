export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-900">
        Convert WordPress to React Like a Pro
      </h1>
      <p className="mt-4 text-xl text-gray-600">
        Free tools and tutorials for WP devs transitioning to Next.js
      </p>

      <div className="mt-8 space-y-4">
        <a
          href="/converter"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Try Gutenberg → JSX Converter (Beta)
        </a>
        <p className="text-sm text-gray-500">
          Coming next: Headless WP Starter Kit
        </p>
      </div>
    </main>
  );
}

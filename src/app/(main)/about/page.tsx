"use client"; // Required since you're using form interactivity

export default function Request() {
  return (
    <form className="space-y-4">
      <input
        type="email"
        placeholder="Your email"
        className="block w-full p-2 border rounded"
      />
      <textarea
        placeholder="What tool do you need?"
        className="block w-full p-2 border rounded h-32"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit Request
      </button>
    </form>
  );
}

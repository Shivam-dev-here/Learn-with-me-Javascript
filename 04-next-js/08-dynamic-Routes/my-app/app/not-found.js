import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h2 className="mb-4 text-4xl font-bold text-red-600">
        Page is Unavailable
      </h2>

      <p className="mb-6 text-lg text-gray-600">
        Please Contact Developer
      </p>

      <Link
        href="/"
        className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}
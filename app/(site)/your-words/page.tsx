'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <div className="glass-card p-8 max-w-3xl mx-auto text-center my-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Words ✍️</h1>
      <button
        onClick={() => router.back()}
        className="glass-card px-6 py-2 text-gray-800 mt-8"
      >
        Back
      </button>
    </div>
  );
}

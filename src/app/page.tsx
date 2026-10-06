import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-12">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-sm md:p-10">
        <h1 className="text-3xl font-bold text-neutral-900">
          UPPSALA FORMULA STUDENT TOOLS
        </h1>
        <div className="grid grid-cols-2 gap-6 pt-6 sm:grid-cols-2">
            <a href="signature" className="flex flex-col items-center gap-2 rounded-lg bg-[#b22538] p-4 text-center text-white transition hover:bg-[#a11c2e]">
                <h1 className="text-lg font-semibold">✍️</h1>
                <h1 className="text-lg font-semibold">Signatur Generator</h1>
            </a>
            <a href="vote" className="flex flex-col items-center gap-2 rounded-lg bg-[#b22538] p-4 text-center text-white transition hover:bg-[#a11c2e]">
                <h1 className="text-lg font-semibold"> 🗳️</h1>
                <h1 className="text-lg font-semibold"> Röst Verktyg</h1>
            </a>
        </div>
        </div>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-semibold">Lang Trainer</h1>
      <p className="text-gray-600">用 DeepSeek 来生成你的英语 / 日语练习。</p>
      <Link href="/practice/cloze" className="px-4 py-2 rounded bg-black text-white">
        开始 Cloze 练习
      </Link>
    </main>
  );
}

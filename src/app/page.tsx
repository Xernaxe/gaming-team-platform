
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 ">
      <p className="font-oxanium text-wGrey">Test font Oxanium</p>
      <p className="font-inter">Test font Inter</p>
      <p className="">Test default</p>
      <p className="font-oxaaaaanium">Test fallback</p>
    </main>
  )
}

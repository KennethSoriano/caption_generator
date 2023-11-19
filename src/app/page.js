import SparklesIcon from "@/components/SparklesIcon";


export default function Home() {
  return (
    <main className="p-4 max-w-2xl mx-auto">
      <header className="flex justify-between my-8">
        <a href="" className="flex gap-1 ">
          EpicCaptions
        <span>EpicCaptions</span>
        </a>
        <nav className="flex gap-6 text-white/80">
          <a href="">Home</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
        </nav>
      </header>
      <div className="text-center mt-24">
        <h1 className="text-3xl" style={{textShadow: '1px 1px 0 rgba(0,0,0,.3'}}>
          Add captions to your videos
        </h1>
        <h2 className="text-white/75">
          Just upload your video and we will do the rest.
        </h2>
      </div>
      <div className="text-center">
        <button className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50">
          Choose File
        </button>
      </div>
      <div className="flex justify-around mt-12 items-center">
        <div className="bg-gray-800/50 w-[240px] h-[480px] rounded-xl"></div>
        <div>
          <SparklesIcon />
        </div>
        <div className="bg-gray-800/50 w-[240px] h-[480px] rounded-xl"></div>
      </div>
    </main>
  )
}

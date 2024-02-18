import Image from 'next/image'

function Landing() {
  return (
  <main className="flex flex-col items-center">
    <h1 className="my-4 italic text-white text-6xl text-center">Pro League Predictions</h1>
         <Image
         className="rounded-xl shadow-slate"
      src="/Algs.png"
      width={950}
      height={750}
      alt="Picture of the author"
      objectFit="cover"

    />
    
   <div className="max-w-3xl">
    <h2 className="mt-8 text-2xl text-white text-center">Welcome Apex Legends to the first ALGS Prediction Game. Play along with the community by picking your Top Six Placements for a Tournament. Earn points for correct Predictions and Win the Prize Pool!</h2>
    </div>
    </main>
  )
}

export default Landing

import Dashbord from "@/components/Dashbord"
import Image from "next/image"

const HomePage = () => {
  return (
    <>
      <div className="hero bg-white min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <Image src="/3.jpg" alt="" width={900} height={600} className="max-w-sm rounded-lg" />
          <div>
            <h1 className="text-4xl font-bold">Welcome to wonder why wonder wash</h1>
            <hr className="mt-3"/>
            <p className="py-6 text-xl">
              The sky is the limit
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <Dashbord/>
  
      
    </>
  )
}

export default HomePage

import Image from "next/image";
import { PEOPLE_URL } from "@/constants";
import { Http2ServerRequest } from "http2";

interface camprops  {
  backgroundImage:string;
 title : string;
 subtittle:string;
 peopleJoined:string;
}



const Campsite = ({backgroundImage,title,subtittle,peopleJoined}: camprops) => {

return(
  <div className={`h-full w-full min-w-[110px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
    <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 ">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-blue-700 p-4 ">
          <Image
          src="/folded-map.svg"
          alt="map"
          width={28}
          height={24}/>
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtittle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
           <Image
           className="inline-block h-10 w-10 rounded-full"
           src={url}
           key={url}
           alt="person"
           width={52}
           height={52}/>
          ))}
        </span>
     <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
    </div>
  </div>
  )
  }


const Camp = () => {
  return (
    <section className=' 2xl:max-container relative  flex flex-col py-10 
    lg:mb-50 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[380px] w-[1100px]  items-start justify-start gap-10
       overflow-x-auto  lg:w-[1500px]
       '>
        <Campsite 
        backgroundImage ="bg-bg-img-1"
        title="Travel if u dare"
        subtittle='Accra,Ghana'
        peopleJoined="50+ joined"
        />
        < Campsite
         backgroundImage ="bg-bg-img-1"
         title="Believe you can fly"
         subtittle='Somewhere in Africa'
         peopleJoined="50+ joined"/>
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-blue-700 p-8 lg:max-w-[400px] xl:max-w-[900px] xl:rounded-5xl xl:px-16 xl:py-20 
        relative  overflow-hidden rounded-3xl
        ">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Willing to</strong> travel across the world on holidays?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Starting from the anxiety of the climbers when visiting a new climbing location,
           the possibility of getting lost is very large. 
           That's why we are here for those of you who want to start an adventure
          </p>
          <Image
          src="/quote.svg"
          alt="camp-2"
          width={186}
          height={100}/>
        </div>

      </div>
    </section>
  )
}

export default Camp
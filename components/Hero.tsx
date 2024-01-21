import Image from "next/image"
import Button from "./Button"


const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      
    <div className="hero-map"/>
     
  {/*left*/}
  <div className="relative cursor-pointer z-20 flex flex-1 flex-col xl:w-1/2">
    <Image 
    src="/paper-p.svg"
    alt="plane papper"
    width={20}
    height={20}
    className="absolute rounded-xl left-[-5px] top-[-30px] w-10 lg:w-[50px]"/>

    <h1 className="bold-52 lg:bold-88">Travel If <br/>You Dare</h1>
    <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
       We wish to be on each journeys seeking the satisfaction of<br/>seeing 
       the incorruptible beauty of nature.
       we can help you on an <br/>adventure around the world in just one app
    </p>
    <div>
    <Image
             src="/paper-p.svg"
             alt="/bag.png"
              width={20}
              height={20}
              className='lg:absolute lg:bg-white lg:rounded-xl lg:w-10 h-10 lg:right-[215px]  lg:top-[170px] relative '
              />
</div>
      <div className="my-11 flex flex-wrap gap-5">
        <div className="flex items-center gap-2">
          {Array(5).fill(1).map((_, index) => (
           <Image
            src="/star.svg"
            alt="star"
            key={index}
            width={24}
            height={24}
           />
          ))}
        </div>
      
       
        <p className="bold-16 lg:bold-20 text-blue-70">198K
          <span className="regular-16 lg:regular-20 ml-1 ">Excellent Reviews </span>
          
        </p>
      </div>

      <div className="flex  flex-col w-full gap-3 sm:flex-row">
        <Button type="button" title="Download App" variant="btn_blue"/>
        <Button type="button" 
        title="How we work?" 
        icon="/play1.svg" 
         variant="btn_white_text"/>
      </div>
  </div>

  <div className="lg:absolute flex flex-1 items-start lg:right-[215px]  lg:top-[15px]">
    <div className="relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8" >


<div className=" flex flex-col">
      <div className="flexBetween">
        <p className="regular-16 text-gray-20">Location</p>
        <Image src="/close.svg"
         alt="close"
         width={24}
         height={24}
        />
      </div>
      <p className="bold-20 text-white">Greater Acraa</p>
      </div>
      
      <div className="flexBetween">
        <div className="flex flex-col">
          <p className="regular-16 block text-gray-20">Distance
          </p>
          <p className="bold-20 text-white">173.28 mi</p>
        </div>
        <div className="flex flex-col">
          <p className="regular-16 block text-gray-20">Elevation
          </p>
          <p className="bold-20 text-white">2 km</p>
        </div>
      </div>
    </div>

  </div>
    </section>
  )
}

export default Hero
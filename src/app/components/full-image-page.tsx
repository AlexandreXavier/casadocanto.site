
import { getImage } from "~/server/queries";
import Image from 'next/image'

export default async function FullPageImageView(props:{id:number}){
 
  const image =await getImage(props:id);

  return (
    <div className="flex h-full w-full bg-green-200">
      <Image alt=''
      src={image.url}
      height={500}
      width={500}
      className='aspect-square w-full rounded-xl object-cover'
      />
    </div>
  );
}
 
 
  
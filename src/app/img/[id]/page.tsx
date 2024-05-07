
import { getImage } from "~/server/queries";
import Image from 'next/image'

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {

  const idAsNumber =Number(photoId);
  if(Number.isNaN(idAsNumber))throw new Error("Foto Invalida");

  const image =await getImage(idAsNumber);

  return (
    <div>
      <Image alt={image.name}
      src={image.url}
      height={500}
      width={500}
      className='aspect-square w-full rounded-xl object-cover'
      />
    </div>
  );
}
 
 
  
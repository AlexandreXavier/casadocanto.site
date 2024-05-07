import Image from "next/image";
import { getMyImages } from "~/server/queries";
import Link from "next/link";


export const dynamic ="force-dynamic"

export default async function HomePage() {  
  const images = await getMyImages();
  return (
    <main className=" flex flex-wrap justify-center gap-4">
      {images.map((image)=>(
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
          <Image src={image.url}
          style={{objectFit:"contain"}}
          width={480}
          height={480}
          alt={image.name}
          />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}

    </main>
  );
}

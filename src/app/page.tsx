import { getMyImages } from "~/server/queries";


export const dynamic ="force-dynamic"

export default async function HomePage() {  
  const images = await getMyImages();
  return (
    <main className=" flex flex-wrap gap-4">
      {images.map((image)=>(
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url}/>
          <div>{image.name}</div>
        </div>
      ))}

    </main>
  );
}

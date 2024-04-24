import { db } from "~/server/db";

export const dynamic ="force-dynamic"

const moskUrl = [
  "https://utfs.io/f/46c12ca2-9739-4821-9e65-36648a2f59f6-dbjphc.jpg",
  "https://utfs.io/f/bcb7e426-d357-4b52-a206-7617850eb35a-35kigo.jpeg",
  "https://utfs.io/f/c8016421-fc2f-4bf1-b272-ad11406b5495-ge19g9.jpeg",
  "https://utfs.io/f/ada024b3-a843-483b-8294-9f0862983389-ecb4b8.jpeg",
  "https://utfs.io/f/7e45db59-d779-40ee-8af5-7e65762af383-2e512i.jpeg",
];

const mockImages = moskUrl.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts= await db.query.posts.findMany();
  console.log(posts)

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post)=>(
        <div key={post.id}>{post.name}</div>
      ))}
        {[...mockImages,...mockImages, ...mockImages, ...mockImages].map((image,index) => (
          <div key={image.id+"-"+index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}

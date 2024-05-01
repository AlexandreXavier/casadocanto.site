import Image from 'next/image'
import photos from "~/lib/photos";

export default async  function Photos() {

  return (
    <section className='mt-12'>
      <div className='container'>
        <ul className='mt-10 grid auto-rows-max grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {photos.map(({ id, url }) => (
            <li key={id}>
                <Image
                  alt=''
                  src={url}
                  height={500}
                  width={500}
                  className='aspect-square w-full rounded-xl object-cover'
                />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

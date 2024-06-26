import FormAutoMobil from '@/components/FormAutoMobil'
import type { Metadata } from 'next'
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Automobil Create',
  description: 'Automobil Create',
}

export default async function Home() {
  return (
    <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <div className="flex items-center flex-col gap-3 p-5">
        <figure className="max-w-lg">
          <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Create Automobil</h1>
          <Image className="h-auto max-w-full rounded-lg" src="/images/list-car.png" alt="image description" width={500} height={500} />
        </figure>
        <FormAutoMobil />
      </div>
    </section>
  );
}

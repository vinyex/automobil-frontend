import FormAutoMobil from '@/components/FormAutoMobil'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automobil Edit',
  description: 'Automobil Edit',
}

async function getData(id: number) {
  const res = await fetch(`${process.env.API_HOST}/product/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Edit({ params }: { params: { id: number } }) {
  if (!params.id) {
    return (
      <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="flex items-center flex-col gap-3 p-5">
          <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Automobil not found</h1>
        </div>
      </section>
    );
  }

  const { data } = await getData(+params.id!);

  return (
    <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <div className="flex items-center flex-col gap-3 p-5">
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Edit Automobil</h1>
        <FormAutoMobil
          form={data}
          id={+params.id!}
          isEdit={true}
        />
      </div>
    </section>
  );
}

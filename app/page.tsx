import Dashboard from "@/components/Dashboard";
import TableMobil from "@/components/TableMobil";
import type { Metadata } from 'next'
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Automobil Dashboard',
  description: 'Automobil Dashboard',
}

export default async function Home() {

  return (
    <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <Dashboard />
      <div className="flex flex-col items-center justify-center my-6 pb-8">
        <figure className="max-w-lg">
          <Image className="h-auto max-w-full rounded-lg" src="/images/empty.png" alt="image description" width={500} height={500} />
          <div className="flex justify-center p-5">
            <Link
              href={'/create'}
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >Create</Link>
          </div>
        </figure>
        <TableMobil />
      </div>
    </section >
  );
}

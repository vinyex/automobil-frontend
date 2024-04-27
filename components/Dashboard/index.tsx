import { LayoutProps } from "@/.next/types/app/layout";

export default function Dashboard(props: LayoutProps) {
  return (
    <>
      <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 z-10 relative">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Automobil Showroom Cars</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Here at Automobil we focus on markets where cars, innovation, and long-term value.</p>
      </div>
      {/* <div className="dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div> */}
    </>
  );
}
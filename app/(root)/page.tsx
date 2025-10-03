import { Collection } from "@/components/shared/Collection"
import { navLinks } from "@/constants"
import { getAllImages } from "@/lib/actions/image.actions"
import Image from "next/image"
import Link from "next/link"

// Updated type for Next.js 15
type SearchParamProps = {
  searchParams?: Promise<{
    page?: string
    query?: string
  }>
}

const Home = async ({ searchParams }: SearchParamProps) => {
  // Await the searchParams promise
  const resolvedSearchParams = await searchParams
  const page = Number(resolvedSearchParams?.page) || 1
  const searchQuery = resolvedSearchParams?.query || ""

  const images = await getAllImages({ page, searchQuery })

  return (
    <>
      <section className="bg-bannerImg bg-contain bg-repeat bg-bottom w-full h-full object-contain">
        <div className=" bg-blackOverlay ">
          <section className="home">
            <h1 className="home-heading">
              Unleash <b><i>Your</i></b> Creative Vision with <b> <i>Visiora</i></b>
            </h1>
            <ul className="flex-center w-full gap-20">
              {navLinks.slice(1, 5).map((link) => (
                <Link
                  key={link.route}
                  href={link.route}
                  className="flex-center flex-col gap-2"
                >
                  <li className="flex-center w-fit rounded-full bg-white p-4">
                    <Image src={link.icon} alt="image" width={24} height={24} />
                  </li>
                  <p className="p-14-medium text-center text-white">{link.label}</p>
                </Link>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="sm:mt-12">
        <Collection 
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  )
}

export default Home


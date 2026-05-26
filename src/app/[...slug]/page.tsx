import { notFound, redirect } from "next/navigation"

const redirectMap: Record<string, string> = {
  home: "/",
  about: "/#about",
  portfolio: "/#portfolio",
  projects: "/#projects",
  services: "/#services",
  testimonials: "/#testimonials",
  contact: "/#contact",
  blog: "/#blog",
}

type CatchAllPageProps = {
  params: Promise<{
    slug?: string[]
  }>
}

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const { slug = [] } = await params
  const path = slug.join("/")

  const target = redirectMap[path]

  if (target) {
    redirect(target)
  }

  notFound()
}
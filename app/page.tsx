import Hero from '@/components/Hero/Hero'
import Categories from '@/components/Categories/Categories'
import WhyUs from '@/components/WhyUs/WhyUs'
import CTABanner from '@/components/CTABanner/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      {/* <FeaturedProducts /> */}
      {/* TODO: Activate when catalog is ready */}
      <WhyUs />
      <CTABanner />
    </>
  )
}

import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Categories from '@/components/Categories/Categories'
import WhyUs from '@/components/WhyUs/WhyUs'
import CTABanner from '@/components/CTABanner/CTABanner'
import Footer from '@/components/Footer/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        {/* <FeaturedProducts /> */}
        {/* TODO: Activate when catalog is ready */}
        <WhyUs />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}

import ScrollProgressBar from '@/components/common/ScrollProgressBar'
import ScrollToTop from '@/components/common/ScrollToTop'
import HeroSection from '@/components/sections/HeroSection'
import EducationSection from '@/components/sections/EducationSection'
import TechStackSection from '@/components/sections/TechStackSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import DesignProjectsSection from '@/components/sections/DesignProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <HeroSection />
      <EducationSection />
      <TechStackSection />
      <ProjectsSection />
      <DesignProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </>
  )
}

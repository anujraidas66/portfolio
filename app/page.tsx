
import ContactPage from './contact/page'
import EducationPage from './education/page'
import Experience from './experience/page'
import Hero from './hero/page'
import Project from './project/page'
import Skill from './skill/page'

export default function page() {
  return (
    <main className="pt-20">

  <Hero/>
  <Skill/>
  <Project/>
  <Experience/>
  <EducationPage/>
  <ContactPage/>
</main>
  )
}

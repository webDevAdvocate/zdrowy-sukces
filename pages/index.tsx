import type { NextPage } from 'next'
import { About } from '../src/components/about/about'
import { Certificates } from '../src/components/certificates/certificates'
import { Concerns } from '../src/components/concerns/concerns'
import { ContactSection } from '../src/components/contactSection/contactSection'
import { Cooperation } from '../src/components/cooperation/cooperation'
import { Footer } from '../src/components/footer/footer'
import { Hello } from '../src/components/hello/hello'
import { Prices } from '../src/components/prices/prices'
import { Header } from '../src/components/header/header';
import { EffectiveDietSection } from '../src/components/effectiveDietSection/effectiveDietSection'

import styles from '../styles/Home.module.css'
import { Cookies } from '../src/components/cookies/cookies'
import { NewsletterFooter } from '../src/components/newsletterFooter/newsletterFooter'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hello />
      <EffectiveDietSection />
      <ContactSection />
      <Cooperation />
      <About />
      <Concerns />
      <Prices />
      <Certificates />
      <NewsletterFooter />
      <Footer />
      <Cookies />
    </div>
  )
}

export default Home
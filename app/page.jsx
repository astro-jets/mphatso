'use client'
import("preline");
import { useEffect } from 'react';
import AboutMe from './components/about';
import Projects from './components/projects';
import Services from './components/services';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import Contacts from './components/contacts';

export default function Home() {
  useEffect(() => {import('preline')}, []);

  return (
    <>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Services/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </>
  )
}

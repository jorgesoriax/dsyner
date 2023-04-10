import Head from "next/head";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

import navbarData from "@/data/pages/home/navbar";
import heroData from "@/data/pages/home/sections/hero";
import featuresData from "@/data/pages/home/sections/features";
import processData from "@/data/pages/home/sections/process";
import pricingData from "@/data/pages/home/sections/pricing";
import faqData from "@/data/pages/home/sections/faq";
import ctaData from "@/data/pages/home/sections/cta";
import footerData from "@/data/footer";
import meta from "@/data/meta"

export default function Home() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta
          name="description"
          content={meta.description}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#6828DF" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <Navbar data={navbarData} />
      <Hero data={heroData} />
      <Features data={featuresData} />
      <Process data={processData} />
      <Pricing data={pricingData} />
      <CTA data={ctaData} />
      <FAQ data={faqData} />
      <Footer data={footerData} />
    </>
  );
}

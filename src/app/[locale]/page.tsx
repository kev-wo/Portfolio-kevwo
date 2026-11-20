import { notFound } from "next/navigation";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Footer } from "@/components/site/footer";
import { Nav } from "@/components/site/nav";
import { getPortfolioData } from "@/lib/data";
import { getDict, isLocale } from "@/lib/i18n";

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const data = await getPortfolioData();
  const dict = getDict(locale);

  return (
    <>
      <Nav locale={locale} dict={dict} name={data.settings.fullName} />
      <main>
        <Hero settings={data.settings} dict={dict} locale={locale} />
        <Skills skills={data.skills} dict={dict} locale={locale} />
        <Experience
          experiences={data.experiences}
          dict={dict}
          locale={locale}
        />
        <Projects projects={data.projects} dict={dict} locale={locale} />
        <Education
          education={data.education}
          awards={data.awards}
          dict={dict}
          locale={locale}
        />
        <Contact settings={data.settings} dict={dict} locale={locale} />
      </main>
      <Footer settings={data.settings} dict={dict} locale={locale} />
    </>
  );
}

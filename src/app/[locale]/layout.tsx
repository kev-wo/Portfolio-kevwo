import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LangSetter } from "@/components/site/lang-setter";
import { getPortfolioData } from "@/lib/data";
import { loc, isLocale } from "@/lib/i18n";
import { LOCALES } from "@/lib/types";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { settings } = await getPortfolioData();
  const title =
    loc(settings.seoTitle, locale) ||
    `${settings.fullName} — ${loc(settings.role, locale)}`;
  const description = loc(settings.seoDescription, locale);
  return {
    title,
    description,
    openGraph: { title, description, locale },
    alternates: { languages: { en: "/en", fr: "/fr" } },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <>
      <LangSetter locale={locale} />
      {children}
    </>
  );
}

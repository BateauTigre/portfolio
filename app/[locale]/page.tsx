import { notFound } from "next/navigation";
import { Portfolio } from "@/components/Portfolio";
import { isLocale } from "@/content/site";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Portfolio locale={locale} />;
}

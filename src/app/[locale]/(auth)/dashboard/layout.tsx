// import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { setRequestLocale } from 'next-intl/server';
// import Link from 'next/link';

export default async function DashboardLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'DashboardLayout',
  // });

  return (
    <div>Layout</div>
  );
}

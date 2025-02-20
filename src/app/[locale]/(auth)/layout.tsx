import { routing } from '@/libs/i18nNavigation';
import { setRequestLocale } from 'next-intl/server';

export default async function AuthLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  // const signInUrl = '/sign-in';
  // const signUpUrl = '/sign-up';
  // const dashboardUrl = '/dashboard';
  // const afterSignOutUrl = '/';

  if (locale !== routing.defaultLocale) {
    // signInUrl = `/${locale}${signInUrl}`;
    // signUpUrl = `/${locale}${signUpUrl}`;
    // dashboardUrl = `/${locale}${dashboardUrl}`;
    // afterSignOutUrl = `/${locale}${afterSignOutUrl}`;
  }

  return (
    <div>Layout big</div>
  );
}

import { CookieConsent } from "../components/cookie-consent";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CookieConsent />
    </>
  );
}

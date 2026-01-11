// src/app/page.tsx
import ClientHome from "./ClientHome";

// Paksa halaman jadi dinamis → tidak di-SSG
export const dynamic = "force-dynamic";

export default function Page() {
  return <ClientHome />;
}
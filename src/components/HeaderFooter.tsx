"use client"; // Mark this as a client component
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Announcement from "./Announcement";

export default function HeaderAndFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define routes where Header and Footer should not appear
  const noHeaderFooterRoutes = ["/admin"];
  const shouldHideHeaderFooter = noHeaderFooterRoutes.includes(pathname);

  return (
    <>
      {/* Render Navbar and Announcement if not hidden */}
      {!shouldHideHeaderFooter && (
        <>
          <Announcement />
          <div className="container mx-auto">
            <Navbar />
          </div>
        </>
      )}

      {/* Main Content */}
      <main>{children}</main>

      {/* Render Footer if not hidden */}
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

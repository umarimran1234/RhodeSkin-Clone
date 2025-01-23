"use client"; // Mark this as a client component
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import { UserProvider } from "@/authContaxt/authContxt";

export default function HeaderAndFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define routes where Header and Footer should not appear
  const noHeaderFooterRoutes = ["/admin", "/admin/product_list"];
  const shouldHideHeaderFooter = noHeaderFooterRoutes.includes(pathname);

  return (
    <>
      <UserProvider>
        {!shouldHideHeaderFooter && (
          <>
            <Announcement />

            <Navbar />
          </>
        )}

        {/* Main Content */}
        <main>{children}</main>

        {/* Render Footer if not hidden */}
        {!shouldHideHeaderFooter && <Footer />}
      </UserProvider>
    </>
  );
}

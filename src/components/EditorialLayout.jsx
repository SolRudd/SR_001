import Footer from "./Footer";
import Header from "./Header";

export default function EditorialLayout({ children, mainClassName = "" }) {
  return (
    <>
      <div className="noise" />
      <div className="bg-grid" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <Header />

      <main className={mainClassName}>{children}</main>

      <Footer />
    </>
  );
}

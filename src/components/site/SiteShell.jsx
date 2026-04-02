import Footer from "../Footer";
import Header from "../Header";
import SiteBackdrop from "./SiteBackdrop";

export default function SiteShell({
  children,
  className = "",
  mainClassName,
  rootRef,
  renderBackdrop = true,
  renderHeader = true,
  renderFooter = true,
}) {
  const content = mainClassName ? <main className={mainClassName}>{children}</main> : children;

  return (
    <div ref={rootRef} className={className || undefined}>
      {renderBackdrop ? <SiteBackdrop /> : null}
      {renderHeader ? <Header /> : null}
      {content}
      {renderFooter ? <Footer /> : null}
    </div>
  );
}

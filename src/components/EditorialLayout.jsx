import SiteShell from "./site/SiteShell";

export default function EditorialLayout({ children, mainClassName = "" }) {
  return (
    <SiteShell mainClassName={mainClassName}>{children}</SiteShell>
  );
}

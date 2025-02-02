import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event List",
  description: "This platform is all about Event Management System",
  metadataBase: new URL("https://www.google.com"), //Localhost in development
  openGraph: {
    url: "/",
  },
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="-mt-12">{children}</main>
    </>
  );
};

export default layout;

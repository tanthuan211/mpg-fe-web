import Head from "next/head";
import Container from "./Container";
import { Footer } from "./Footer";
import Header from "./Header";

export default function Layout({
    children
  }: {
    
    children: React.ReactNode;
  }) {
    return (
      <>
        <Head>
          <title>Mypetgo - Rhinoventures Asia</title>
          <link rel="icon" type="image/svg" href="/favicon.svg" />
        </Head>
        <div className="min-h-full">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </>
    );
  }
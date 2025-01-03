import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/themeProvider";
import Container from "@/components/container";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FooterTail from "@/components/footerTail";

const montserrat = Montserrat({
  subsets:["latin"]
});

export const metadata: Metadata ={
  title:"DEVLAB:Discover the Latest in web Development and AI",
  description:"Welcome to our web development and AI blog, where we share our insights, opinions, and best practices on web development and AI. Here you will find articles on various topics, such as web design, web development, web security, web performance, AI, machine learning, deep learning, and more. Whether you are a web designer, or a web enthusiast, you will find something interesting and valuable on our blog.Check out our latest posts and subscribe to our newsletter to stay updated.  "
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-light dark:bg-dark `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem = {false}
          disableTransitionOnChange
        >
          <Container>
          <Navbar />
          <Hero/>
          {children}
          </Container>
          <FooterTail/>
        </ThemeProvider>
      </body>
    </html>
  );
}

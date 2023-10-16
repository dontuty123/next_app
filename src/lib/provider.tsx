/** @format */

"use client";

/* Core */
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

/* Instruments */

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {props.children}
          <Footer />
        </body>
      </html>
    </Provider>
  );
};

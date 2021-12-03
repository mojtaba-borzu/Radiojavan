import type { NextPage } from "next";
import Head from "next/head";
import DesktopLayout from "../component/layout/DesktopLayout";
import MobileLayout from "../component/layout/MobileLayout";
import HeaderDesktop from "../component/music/desktop/Header";
import LandingDesktop from "../component/music/desktop/Landing";
import HeaderMobile from "../component/music/mobile/Header";
import LandingMobile from "../component/music/mobile/Landing";

import Counter from "../features/counter/Counter";
import music from "./music";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Radio javan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sm:block hidden">
        <DesktopLayout>
          <main className="w-full container mx-auto flex flex-col gap-[40px] mt-[80px]">
            <HeaderDesktop />
            <LandingDesktop />
          </main>
        </DesktopLayout>
      </div>
      <div className="sm:hidden block">
        <MobileLayout>
          <main className="w-full container mx-auto flex flex-col gap-[40px] mt-[80px]">
            <HeaderMobile />
            <LandingMobile />
          </main>
        </MobileLayout>
      </div>
    </div>
  );
};

export default IndexPage;

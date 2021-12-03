import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HotTracks from "./hotTracks/HotTracks";
import MoreToExplorer from "./MoreToExplorer";
import Playlists from "./Playlists";
import PopularArtists from "./PopularArtists";

function Landing() {
  return (
    <div className="w-full flex flex-col gap-[30px] overflow-auto">
      <Playlists />
      <HotTracks />
      <MoreToExplorer />
      <PopularArtists />
      <Footer />
    </div>
  );
}

export default Landing;

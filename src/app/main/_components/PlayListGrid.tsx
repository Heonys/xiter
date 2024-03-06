import React from "react";
import PlayList from "./PlayList";
import BiBi from "@/assets/bibi.jpg";
import BIGNaughty from "@/assets/BIGNaughty.jpg";
import Deepsea from "@/assets/deepsea.jpg";
import Misfits from "@/assets/misfits.jpg";
import Run from "@/assets/run.jpg";
import Toil from "@/assets/toil.jpg";
import Younha from "@/assets/younha.jpg";

const PlayListGrid = () => {
  return (
    <div>
      <PlayList image={BiBi} title="밤양갱" author="비비(BIBI)" time="2:26" current />
      <PlayList image={Younha} title="오르트구름" author="윤하(Younha)" time="3:27" />
      <PlayList image={BIGNaughty} title="정이라고 하자" author="BIG Naughty(서동현)" time="3:09" />
      <PlayList image={Misfits} title="Misfits" author="Skinny Brown" time="3:31" />
      <PlayList image={Deepsea} title="Deep Sea" author="김승민" time="3:20" />
      <PlayList image={Run} title="RUN" author="Leellamarz" time="3:51" />
      <PlayList image={Toil} title="눌러줘요 " author="TOIL" time="3:22" />
    </div>
  );
};

export default PlayListGrid;

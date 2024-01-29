"use client";
// Musicplayer.js
import React from "react";
import Script from "next/script";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Musicplayer() {
  return (
    <div className="flex items-center space-x-4">
      <Script
        src="https://unpkg.com/react-h5-audio-player/dist/styles.css"
        strategy="beforeInteractive"
      />

      <div className="flex-grow">
        <AudioPlayer
          src="music/1.mp3"
          onPlay={(e) => console.log("onPlay")}
          customControls={[
            "play",
            "volume",
            "progress",
            "time",
            "spacer",
          ]}
          layout="stacked"
          classNames={{
            container: 'rhap_container',
            progressBar: 'rhap_progress-bar',
            controls: 'rhap_controls',
            playPause: 'rhap_play-pause',
            volume: 'rhap_volume',
            progressTime: 'rhap_progress-time',
            progressBarFilled: 'rhap_progress-bar-filled',
            time: 'rhap_time',
            spacer: 'rhap_spacer',
          }}
        />
      </div>
    </div>
  );
}

export default Musicplayer;



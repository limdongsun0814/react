import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "../range-slider.css";

function VideoPlayer(props) {
  const playerRef = useRef(null);
  const { src, title, setClose } = props;
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const [volumeToggle, setVolumeToggle] = useState(true);
  const [menu, setMenu] = useState(false);
  const [played, setPlayed] = useState({ played: 0, totalPlayed: 0 });

  const fullscreen = () => {
    console.log(playerRef.current, "fullscreen");
    if (playerRef.current) {
      const playerElement = playerRef.current.getInternalPlayer();
      if (playerElement.requestFullscreen) {
        playerElement.requestFullscreen();
      } else if (playerElement.mozRequestFullScreen) {
        // Firefox
        playerElement.mozRequestFullScreen();
      } else if (playerElement.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        playerElement.webkitRequestFullscreen();
      } else if (playerElement.msRequestFullscreen) {
        // IE/Edge
        playerElement.msRequestFullscreen();
      }
    }
  };
  return (
    <div className="relative w-full h-full">
      <ReactPlayer
        ref={playerRef}
        url={src}
        playing={playing}
        onPause={() => {
          console.log("onPause");
          setPlaying(false);
        }}
        onPlay={() => {
          console.log("onPlay");
          setPlaying(true);
        }}
        onDuration={(value) => {
          setPlayed({ ...played, totalPlayed: value });
        }}
        onProgress={(value) => {
          console.log(value, "played");
          setPlayed({ ...played, played: value.playedSeconds });
        }}
        onClick={() => {
          setMenu(true);
        }}
        width={"100%"}
        height={"100%"}
        volume={volume / 100}
      ></ReactPlayer>
      {menu && (
        <div className="absolute top-0 flex w-full h-full bg-opacity-50 bg-gray">
          <div className="absolute top-0 flex w-full bg-black bg-opacity-50 h-[10%] items-center justify-center">
            <h2 className="font-bold text-center">{title}</h2>
          </div>
          <div
            className="absolute top-[10%] flex w-full h-[80%]"
            onClick={() => {
              setMenu(false);
            }}
          ></div>
          <div className="absolute top-0 right-0 flex w-[5%] h-[10%] items-center justify-end bg-purple-500 bg-opacity-30">
            <h2
              className="m-auto font-bold cursor-pointer text-end"
              onClick={() => {
                setClose(false);
              }}
            >
              X
            </h2>
          </div>
          <div className="absolute bottom-0 flex w-full h-[10%] bg-opacity-50 bg-gray">
            {/* 시작 정지 */}
            <div className="w-[5%] h-full ">
              {playing ? (
                <img
                  src="./images/icons/video/pause.svg"
                  alt="link to live website"
                  className="cursor-pointer"
                  onClick={() => {
                    setPlaying(false);
                  }}
                />
              ) : (
                <img
                  src="./images/icons/video/start.svg"
                  alt="link to live website"
                  className="cursor-pointer"
                  onClick={() => {
                    setPlaying(true);
                  }}
                />
              )}
            </div>
            {/* 소리 */}
            <div className="w-[15%] h-full flex items-center justify-center">
              {!volumeToggle || !volume ? (
                <img
                  src="./images/icons/video/soundOff.svg"
                  alt="link to live website"
                  className="inline-block w-[25%] mx-1 cursor-pointer"
                  onClick={() => {
                    setVolumeToggle(true);
                  }}
                />
              ) : (
                <img
                  src="./images/icons/video/soundOn.svg"
                  alt="link to live website"
                  className="inline-block w-[25%] mx-1 cursor-pointer"
                  onClick={() => {
                    setVolumeToggle(false);
                  }}
                />
              )}
              <div className="w-[70%] p-2">
                <RangeSlider
                  id="range-slider-gradient"
                  className="single-thumb"
                  defaultValue={[0, volume]}
                  thumbsDisabled={[true, false]}
                  rangeSlideDisabled={true}
                  onInput={(e) => {
                    console.log("soundVolume", e);
                    setVolume(e[1]);
                  }}
                  disabled={!volumeToggle}
                />
              </div>
            </div>
            {/* 진행 */}
            <div className="w-[70%] h-full flex items-center justify-start">
              <div>
                <h2 className="font-bold text-center">
                  {parseInt(Math.ceil(played.played) / 60) +
                    ":" +
                    String(Math.ceil(played.played % 60)).padStart(2, "0")}
                </h2>
              </div>
              <div className="p-2 w-[85%]">
                <RangeSlider
                  id="range-slider-gradient2"
                  className="z-100 single-thumb"
                  max={Math.ceil(played.totalPlayed)}
                  defaultValue={[0, 0]}
                  thumbsDisabled={[true, false]}
                  rangeSlideDisabled={true}
                  value={[0, played.played]}
                  onInput={(e) => {
                    console.log(e);
                    playerRef.current.seekTo(e[1]);
                  }}
                />
              </div>
              <div>
                <h2 className="font-bold text-center">
                  {parseInt(Math.ceil(played.totalPlayed) / 60) +
                    ":" +
                    String(Math.ceil(played.totalPlayed % 60)).padStart(2, "0")}
                </h2>
              </div>
            </div>
            {/* 설정 */}
            <div className="w-[5%] h-full">
              <img
                src="./images/icons/video/setting.svg"
                alt="link to live website"
                className="cursor-pointer"
                onClick={() => {}}
              />
            </div>
            {/* 전체 */}
            <div className="w-[5%] h-full" onClick={fullscreen}>
              <img
                src="./images/icons/video/fullScreen.svg"
                alt="link to live website"
                className="cursor-pointer"
                onClick={() => {
                  setPlaying(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;

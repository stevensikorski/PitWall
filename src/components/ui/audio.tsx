import { useState, useRef, useEffect, useCallback } from "react";
import { convertTime } from "@/utils/utils";
import { FaPlay, FaPause } from "react-icons/fa6";

type AudioProperties = {
  date: string;
  timezone: string;
  url: string;
};

export const AudioPlayer = ({ date, timezone, url }: AudioProperties) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const updateProgress = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
    if (isPlaying) {
      requestAnimationFrame(updateProgress);
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("ended", handleEnded);
    }

    if (isPlaying) {
      requestAnimationFrame(updateProgress);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("ended", handleEnded);
      }
    };
  }, [isPlaying, updateProgress]);

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="h-auto pb-2">
      <p className="text-xs text-neutral-700">
        {convertTime(date)} ({timezone})
      </p>
      <div className="h-auto tablet:w-1/2 flex py-1">
        <audio ref={audioRef} src={url}></audio>
        <button className="size-8 mx-2 flex justify-center items-center relative outline-none" onClick={handlePlayPause}>
          <FaPlay className={`absolute text-neutral-400 transition-opacity duration-200 ${isPlaying ? "opacity-0" : "opacity-100"}`} />
          <FaPause className={`absolute text-neutral-400 transition-opacity duration-200 ${isPlaying ? "opacity-100" : "opacity-0"}`} />
        </button>
        <div className="w-full flex items-center">
          <div className="h-1.5 w-full rounded-full bg-neutral-950 border border-neutral-800">
            <div className="h-full bg-neutral-400 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <p className="w-16 mx-2 text-center text-xs font-medium text-neutral-700">{currentTime === 0 ? new Date(duration * 1000).toISOString().substring(14, 19) : new Date(currentTime * 1000).toISOString().substring(14, 19)}</p>
        </div>
      </div>
    </div>
  );
};

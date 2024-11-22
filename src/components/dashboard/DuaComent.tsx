"use client";
import {
  Bookmark,
  Copy,
  Lightbulb,
  OctagonAlert,
  Play,
  Share2,
} from "lucide-react";
import React from "react";
import { toast } from "sonner";

const DuaComent = () => {
  const handleCopy = () => {
    toast.success("Copied");
  };

  const handleBookmark = () => {
    toast.success("Coming Soon Inshallah");
  };

  const handleMemorize = () => {
    toast.success("Coming Soon Inshallah");
  };

  const handleShare = () => {
    toast.success("Coming Soon Inshallah");
  };

  const handleReport = () => {
    toast.success("Coming Soon Inshallah");
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <Play className="bg-custom-green text-white w-11 h-11 p-2 rounded-full cursor-pointer" />
        <div className="flex items-center gap-2">
          <Copy onClick={handleCopy} className="cursor-pointer" />
          <Bookmark onClick={handleBookmark} className="cursor-pointer" />
          <Lightbulb onClick={handleMemorize} className="cursor-pointer" />
          <Share2 onClick={handleShare} className="cursor-pointer" />
          <OctagonAlert onClick={handleReport} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default DuaComent;

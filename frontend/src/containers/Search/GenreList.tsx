import * as React from "react";

export interface IGenreListProps {}

export default function GenreList(props: IGenreListProps) {
  return (
    <div className="m-5">
      <div className="text-5xl text-white pt-20 font-bold">Genres</div>
      <div className="flex gap-6 flex-wrap">
        <div className="w-48 h-48 bg-orange-600 rounded-lg mt-5 cursor-pointer">
            <div className="text-white font-bold text-2xl p-3">Music</div>
        </div>
        <div className="w-48 h-48 bg-orange-600 rounded-lg mt-5 cursor-pointer">
            <div className="text-white font-bold text-2xl p-3">Music</div>
        </div>
        <div className="w-48 h-48 bg-orange-600 rounded-lg mt-5 cursor-pointer">
            <div className="text-white font-bold text-2xl p-3">Music</div>
        </div>
        <div className="w-48 h-48 bg-orange-600 rounded-lg mt-5 cursor-pointer">
            <div className="text-white font-bold text-2xl p-3">Music</div>
        </div>
        <div className="w-48 h-48 bg-orange-600 rounded-lg mt-5 cursor-pointer">
            <div className="text-white font-bold text-2xl p-3">Music</div>
        </div>
      </div>
    </div>
  );
}

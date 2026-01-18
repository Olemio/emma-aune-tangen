import { Link, useParams, useNavigate } from "react-router-dom";
import {artworks} from "../data/artworks";
import {formatNOK} from "../utils/helpers"
import type {ReactNode} from "react"

import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Artwork() {
  const {id} = useParams<{id: string}>();
  const art = artworks.find((a) => a.id === id);
  const navigate = useNavigate()

  function next() {
    navigate(`/art/${+id + 1}`)
  }

  if (!art) {
    return (
      <div className="max-w-[1400px] mx-auto p-6">
      <h1 className="text-2xl font-bold">Artwork not found</h1>
      <Link to="/" className="underline">Back to gallery</Link>
      </div>
    )
  }

  return (
    <div className="max-w-[1400px] px-4 mx-auto">
<button className="bg-red-200" onClick={next}>next button</button>
    <div className="lg:hidden p-6 flex flex-col justify-center gap-8">
      <div className="flex items-center justify-between gap-8">

        <h1 className="text-center text-3xl font-title italic font-bold">{art.title}</h1>
        <Link to="/" className="text-2xl underline">

                        <XMarkIcon className="h-8 cursor-pointer" />
          </Link>
      </div>

      <img
        className="w-full  rounded max-h-[80vh] object-contain"
        src={art.src}
        alt={art.title}
      />

      <div className="flex flex-col items-center gap-4">
        <p>{art.description}</p>

        {(art.price || art.sold || art.year || art.size) && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
          {art.price ? <MetaData>{formatNOK(art.price)}</MetaData> : null}
          {art.sold ? <MetaData>Sold</MetaData> : null}
          {art.year ? <MetaData>{art.year}</MetaData> : null}
          {art.size ? <MetaData>{art.size}</MetaData> : null}
          </div>
        )}
      </div>
    </div>

    <div className="hidden lg:grid grid-cols-[4fr_5fr] max-w-[1400px] gap-8">
        <img
          className="rounded max-h-[80vh] object-contain"
          src={art.src}
          alt={art.title}
        />

      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-8 mb-32">
          <h1 className="text-center text-4xl font-title italic font-bold">{art.title}</h1>

          <Link to="/" className="text-2xl underline">
            <XMarkIcon className="h-8 cursor-pointer" />
          </Link>
        </div>

        <p className="mb-4 max-w-4/5 text-xl">{art.description}</p>

        {(art.price || art.sold || art.year || art.size) && (
          <div className="flex flex-wrap gap-2">
            {art.price ? <MetaData>{formatNOK(art.price)}</MetaData> : null}
            {art.sold ? <MetaData>Sold</MetaData> : null}
            {art.year ? <MetaData>{art.year}</MetaData> : null}
            {art.size ? <MetaData>{art.size}</MetaData> : null}
          </div>
        )}
      </div>
        
    </div>
    </div>
  )
}


function MetaData({children}: {children: ReactNode}) {
  return (
    <div className="bg-slate-200 rounded px-4 py-2">
      {children}
    </div>
  )
}

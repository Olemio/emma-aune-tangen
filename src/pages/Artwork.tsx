import { Link, useParams } from "react-router-dom";
import {artworks} from "../data/artworks";
import {formatNOK} from "../utils/helpers"
import {ReactNode} from "react"

export default function Artwork() {
  const {id} = useParams<{id: string}>();
  const art = artworks.find((a) => a.id === id);

  if (!art) {
    return (
      <div className="max-w-[1400px] mx-auto p-6">
      <h1 className="text-2xl font-bold">Artwork not found</h1>
      <Link to="/" className="underline">Back to gallery</Link>
      </div>
    )
  }
  
  return (
    <div className="max-w-[1400px] mx-auto p-6 flex flex-col md:flex-row gap-8">

        <h1 className="text-center text-3xl font-title italic font-bold">{art.title}</h1>
      <img
        className="w-full md:w-2/3 rounded max-h-[80vh] object-contain"
        src={art.src}
        alt={art.title}
      />

      <div className="md:w-1/3 flex flex-col gap-4">
        <p>{art.description}</p>

        {(art.price || art.sold || art.year || art.size) && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
          {art.price ? <MetaData>{formatNOK(art.price)}</MetaData> : null}
          {art.sold ? <MetaData>Sold</MetaData> : null}
          {art.year ? <MetaData>{art.year}</MetaData> : null}
          {art.size ? <MetaData>{art.size}</MetaData> : null}
          </div>
        )}

        <Link to="/" className="text-2xl underline mt-6">Back</Link>
        </div>
    </div>
  )
}


function MetaData({children: ReactNode}) {
  return (
    <div className="bg-slate-200 rounded px-4 py-2">
      {children}
    </div>
  )
}

import { Link, useParams } from "react-router-dom";
import {artworks} from "../data/artworks";
import {formatNOK} from "../utils/helpers"

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
      <img
        className="w-full md:w-2/3 max-h-[80vh] object-contain"
        src={art.src}
        alt={art.title}
      />

      <div className="md:w-1/3 flex flex-col gap-4">
        <h1 className="text-3xl font-title italic font-bold">{art.title}</h1>
        <p>{art.description}</p>

        {(art.price || art.sold || art.year || art.size) && (
          <div className="mt-4 flex flex-col gap-2">
          {art.price ? <p>{formatNOK(art.price)}</p> : null}
          {art.sold ? <p>Sold</p> : null}
          {art.year ? <p>{art.year}</p> : null}
          {art.size ? <p>{art.size}</p> : null}
          </div>
        )}

        <Link to="/" className="text-2xl underline mt-6">Back</Link>
        </div>
    </div>
  )
}

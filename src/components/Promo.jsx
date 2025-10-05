import React, { useEffect, useState } from "react";
import img from "../assets/img.png";
import img43 from "../assets/img43.png";

function PromoCard({ item, isLast }) {
  const bg = item.bg || "bg-[#8DBB8E]";
  const picture = isLast ? img43 : item.image || img;

  return (
    <article
      className={`w-full h-[88px] ${bg}
                  rounded-2xl first:rounded-s-none last:rounded-e-none
                  px-3 pt-2 shadow-sm ring-1 ring-black/5 flex items-center gap-3`}
    >
      <div className="flex-none w-20 h-20 overflow-hidden grid place-items-center">
        <img
          src={picture}
          alt={item.title || "promo"}
          className="block w-full h-full object-contain object-bottom"
        />
      </div>

      <div className="min-w-0 text-black/90">
        <p className="text-[10px] uppercase tracking-wide font-semibold leading-none">
          {item.title}
        </p>
        <p className="text-[12px] leading-snug">{item.subtitle}</p>
        {item.note && <p className="text-[10px] text-black/70">{item.note}</p>}
        <button
          type="button"
          onClick={() => alert(item.cta || "Klaim Kupon")}
          className="mt-1 text-[11px] underline underline-offset-2"
        >
          {item.cta || "Klaim Kupon"}
        </button>
      </div>
    </article>
  );
}

export default function Promo() {
  const [promos, setPromos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/promo.json")
      .then((r) => r.json())
      .then((d) => {
        setPromos(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-10">Loading promo...</p>;

  const items = promos.slice(0, 4);

  return (
    <section className="relative mt-12 mb-12">
      {/* tombol panah kanan-atas (statis) */}
      <div className="absolute -top-17 right-10 flex items-center gap-4">
        <button
          type="button"
          className="h-9 w-9 rounded-full bg-gray-200 text-gray-700 grid place-items-center shadow hover:bg-gray-300"
          aria-label="Sebelumnya"
          title="Sebelumnya"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button
          type="button"
          className="h-9 w-9 rounded-full bg-orange-500 text-white grid place-items-center shadow hover:bg-orange-600"
          aria-label="Berikutnya"
          title="Berikutnya"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="m10 6-1.41 1.41L13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>

      {/* daftar kartu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <PromoCard
            key={item.id}
            item={item}
            isLast={idx === items.length - 1}
          />
        ))}
      </div>

      {/* indikator titik kiri-bawah (statis) */}
      <div className="mt-8 ml-10 flex items-center gap-2">
        <span className="h-1.5 w-6 rounded-full bg-orange-500" />
        <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
      </div>
    </section>
  );
}

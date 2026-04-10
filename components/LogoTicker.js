'use client'

/**
 * LogoTicker — dải chạy partner logos
 *
 * Khi có ảnh logo thật: thay <span>{name}</span> bằng <img src={logo} alt={name} />
 * Ảnh đặt vào public/logos/ten-don-vi.png
 */
export default function LogoTicker({ clients }) {
  // Double array for seamless infinite loop
  const items = [...clients, ...clients]

  return (
    <div className="overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
      <div className="flex gap-4 w-max animate-ticker hover:[animation-play-state:paused]">
        {items.map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center h-12 px-6 bg-white border border-gray-100 rounded-lg shadow-sm text-sm text-gray-500 font-medium whitespace-nowrap select-none"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}

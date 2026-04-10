'use client'

import Icon from '@/components/Icon'

/**
 * LogoTicker — dải chạy partner logos
 *
 * Khi có ảnh logo thật: thêm field `logo` vào data/clients.js
 * rồi render <img src={logo} /> thay cho <Icon />
 */
export default function LogoTicker({ clients }) {
  const items = [...clients, ...clients]

  return (
    <div className="overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
      <div className="flex gap-16 w-max animate-ticker hover:[animation-play-state:paused]">
        {items.map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center gap-4 select-none"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="account_balance" size={32} className="text-gray-400" />
            </div>
            <span className="text-xs font-extrabold text-gray-800 uppercase tracking-wider whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

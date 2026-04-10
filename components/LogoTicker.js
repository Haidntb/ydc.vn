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
      <div className="flex gap-8 w-max animate-ticker hover:[animation-play-state:paused]">
        {items.map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center gap-4 select-none"
          >
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              <Icon name="account_balance" size={22} className="text-gray-400" />
            </div>
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wide whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

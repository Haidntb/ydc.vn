import Link from 'next/link'
import Icon from '@/components/Icon'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="w-20 h-20 rounded-2xl bg-brand-100 flex items-center justify-center mb-6">
        <Icon name="search_off" size={40} className="text-brand-600" />
      </div>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
        Không tìm thấy trang
      </h1>
      <p className="text-gray-500 text-sm max-w-md mb-8">
        Trang bạn đang tìm không tồn tại hoặc đã được di chuyển. Hãy quay lại trang chủ hoặc liên hệ với chúng tôi.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-colors"
        >
          <Icon name="home" size={18} />
          Về Trang Chủ
        </Link>
        <Link
          href="/lien-he"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
        >
          Liên Hệ
        </Link>
      </div>
    </div>
  )
}

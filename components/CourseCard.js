import Link from 'next/link'
import Icon from '@/components/Icon'

export default function CourseCard({ course, registerPath = '/' }) {
  const ctaHref = `${registerPath}?course=${course.id}#dang-ky`
  const isOpen = course.status === 'open'
  const isOnline = course.format === 'online'

  return (
    <div className={`rounded-2xl border p-6 flex flex-col gap-4 bg-white transition-shadow hover:shadow-md ${
      isOpen ? 'border-gray-200' : 'border-gray-100 opacity-60'
    }`}>

      {/* Badge + status */}
      <div className="flex items-center justify-between gap-2">
        <span className={`text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap ${
          isOnline ? 'bg-sky-100 text-sky-700' : 'bg-green-100 text-green-700'
        }`}>
          {course.badge}
        </span>
        {isOpen && course.slots ? (
          <span className="text-sm font-semibold text-amber-600">
            Còn {course.slots} slot
          </span>
        ) : !isOpen ? (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
            <Icon name="cancel" size={16} />
            Đã đủ
          </span>
        ) : null}
      </div>

      {/* Title */}
      <h3 className="font-bold text-gray-900 text-lg leading-snug">{course.title}</h3>

      {/* Date + location với icon */}
      <ul className="space-y-2 text-sm text-gray-700">
        <li className="flex items-center gap-2.5">
          <Icon name="calendar_month" size={18} className="text-gray-400 flex-shrink-0" />
          <span>Khai giảng: <strong className="text-gray-900">{course.startDate}</strong> · {course.duration}</span>
        </li>
        <li className="flex items-start gap-2.5">
          <Icon name="location_on" size={18} className="text-gray-400 flex-shrink-0 mt-0.5" />
          <span>{course.location}</span>
        </li>
      </ul>

      {/* Price */}
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-sm font-medium text-gray-500">Học phí:</p>
        <p className="text-2xl font-extrabold text-brand-700 leading-none">{course.tuition}</p>
      </div>

      {/* CTA */}
      {isOpen ? (
        <Link
          href={ctaHref}
          className="w-full text-center py-3.5 rounded-xl bg-brand-700 text-white font-semibold text-sm hover:bg-brand-800 transition-colors"
        >
          Đăng ký ngay
        </Link>
      ) : (
        <span className="w-full text-center py-3.5 rounded-xl bg-gray-100 text-gray-400 font-semibold text-sm cursor-not-allowed block">
          Đã đủ học viên
        </span>
      )}
    </div>
  )
}

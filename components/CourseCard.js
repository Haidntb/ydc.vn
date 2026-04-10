import Link from 'next/link'
import Icon from '@/components/Icon'

export default function CourseCard({ course, registerPath = '/' }) {
  const ctaHref = `${registerPath}?course=${course.id}#dang-ky`
  const isOpen = course.status === 'open'
  const isOnline = course.format === 'online'

  return (
    <div className={`rounded-2xl shadow-sm p-7 flex flex-col gap-5 bg-white transition-shadow hover:shadow-lg`}>

      {/* Badge + status */}
      <div className="flex items-center justify-between gap-2">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
          isOnline ? 'bg-sky-100 text-sky-700' : 'bg-green-100 text-green-700'
        }`}>
          {course.badge}
        </span>
        {isOpen && course.slots ? (
          <span className="text-xs font-semibold text-amber-600 whitespace-nowrap">
            Còn {course.slots} slot
          </span>
        ) : !isOpen ? (
          <span className="flex items-center gap-1 text-xs font-semibold text-gray-400 whitespace-nowrap">
            <Icon name="cancel" size={14} />
            Đã đủ
          </span>
        ) : null}
      </div>

      {/* Title */}
      <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-snug">{course.title}</h3>

      {/* Date + location */}
      <ul className="space-y-1.5 text-xs text-gray-600">
        <li className="flex items-center gap-2">
          <Icon name="calendar_month" size={16} className="text-gray-400 flex-shrink-0" />
          <span>Khai giảng: <strong className="text-gray-900">{course.startDate}</strong> · {course.duration}</span>
        </li>
        <li className="flex items-start gap-2">
          <Icon name="location_on" size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
          <span>{course.location}</span>
        </li>
      </ul>

      {/* Price */}
      <div className="flex items-baseline justify-between gap-2 mt-auto pt-2">
        <p className="text-xs font-medium text-gray-400">Học phí:</p>
        <p className="text-base sm:text-lg font-extrabold text-brand-700 leading-none">{course.tuition}</p>
      </div>

      {/* CTA */}
      {isOpen ? (
        <Link
          href={ctaHref}
          className="w-full text-center py-3 rounded-xl bg-brand-700 text-white font-semibold text-xs hover:bg-brand-800 transition-colors"
        >
          Đăng ký ngay
        </Link>
      ) : (
        <span className="w-full text-center py-3 rounded-xl bg-gray-100 text-gray-400 font-semibold text-xs cursor-not-allowed block">
          Đã đủ học viên
        </span>
      )}
    </div>
  )
}

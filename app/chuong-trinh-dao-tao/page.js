import CourseCard from '@/components/CourseCard'
import LeadForm from '@/components/LeadForm'
import Icon from '@/components/Icon'
import { courseSubjects, courseIntro } from '@/data/courses'
import { fetchCourses } from '@/lib/fetchCourses'

export const metadata = {
  title: 'Chương Trình Đào Tạo — YDC Academy',
  description:
    'Tổng hợp các chương trình bồi dưỡng nghiệp vụ đấu thầu do chuyên gia Cục Đấu thầu giảng dạy. Offline tại Hà Nội, TP.HCM hoặc Online qua Zoom.',
}

export default async function ChuongTrinhDaoTaoPage() {
  const courses = await fetchCourses()
  return (
    <>
      {/* HEADER */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-brand-300 text-sm font-medium mb-3">Chương trình đào tạo</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Các Khóa Bồi Dưỡng Nghiệp Vụ Đấu Thầu
          </h1>
          <p className="text-brand-100 text-lg max-w-2xl leading-relaxed">
            Chương trình 2 ngày tập trung, do chuyên gia Cục Đấu thầu — Bộ Kế hoạch và Đầu tư
            trực tiếp giảng dạy. Kết hợp lý thuyết và tình huống thực tế.
          </p>
        </div>
      </section>

      {/* COURSE CARDS */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Lịch Khai Giảng</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} registerPath="/chuong-trinh-dao-tao" />
            ))}
          </div>
        </div>
      </section>

      {/* COURSE CONTENT */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">{courseIntro.heading}</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">{courseIntro.desc}</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {courseSubjects.map((subject) => (
              <div key={subject.id} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{subject.title}</h3>
                <ul className="space-y-2">
                  {subject.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="dang-ky" className="bg-brand-600 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-3">Đăng Ký Khóa Học</h2>
            <p className="text-brand-200 text-sm">
              Chọn lớp và để lại thông tin — cán bộ tuyển sinh sẽ xác nhận trong 24 giờ.
            </p>
          </div>
          <LeadForm variant="course" courses={courses} />
        </div>
      </section>
    </>
  )
}

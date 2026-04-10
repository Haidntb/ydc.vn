import CourseCard from '@/components/CourseCard'
import LeadForm from '@/components/LeadForm'
import { courseSubjects, courseIntro } from '@/data/courses'
import { fetchCourses } from '@/lib/fetchCourses'

export const metadata = {
  title: 'Khóa Học Bồi Dưỡng Đấu Thầu',
  description:
    'Chương trình bồi dưỡng nghiệp vụ đấu thầu 2 ngày, do chuyên gia Cục Đấu thầu trực tiếp giảng dạy. Học tại Hà Nội, TP.HCM hoặc Online.',
}

export default async function KhoaHocPage() {
  const courses = await fetchCourses()
  return (
    <>
      {/* HEADER */}
      <section className="bg-brand-50 border-b border-brand-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-brand-600 text-sm font-medium mb-2">Khóa Học Mở</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Bồi Dưỡng Nghiệp Vụ Đấu Thầu
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Chương trình 2 ngày tập trung, do chuyên gia Cục Đấu thầu trực tiếp giảng dạy — kết
            hợp lý thuyết và tình huống thực tế.
          </p>
        </div>
      </section>

      {/* COURSE CARDS */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Lịch Học Khóa K15</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} registerPath="/khoa-hoc" />
            ))}

          </div>
        </div>
      </section>

      {/* COURSE CONTENT */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">{courseIntro.heading}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">{courseIntro.desc}</p>
          <div className="space-y-4">
            {courseSubjects.map((subject) => (
              <div key={subject.id} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">{subject.title}</h3>
                <ul className="space-y-2">
                  {subject.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
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
      <section className="py-14">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <LeadForm
            variant="course"
            courses={courses}
            title="Đăng Ký Khóa Học"
            subtitle="Chọn lớp và để lại thông tin — cán bộ tuyển sinh sẽ xác nhận trong 24 giờ."
          />
        </div>
      </section>
    </>
  )
}

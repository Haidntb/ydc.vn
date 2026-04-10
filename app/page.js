import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import Icon from '@/components/Icon'
import CourseCard from '@/components/CourseCard'
import LogoTicker from '@/components/LogoTicker'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import { clientCategories, stats } from '@/data/clients'
import { courseSubjects, courseIntro } from '@/data/courses'
import { fetchCourses } from '@/lib/fetchCourses'

export const metadata = {
  title: 'YDC Academy | Đào Tạo Nghiệp Vụ Đấu Thầu',
  description:
    'Bồi dưỡng nghiệp vụ đấu thầu cho cán bộ, doanh nghiệp và tổ chức. Giảng viên từ Cục Đấu thầu — Bộ Kế hoạch và Đầu tư. Hơn 100 tổ chức tin chọn.',
}

const audiences = [
  {
    icon: 'account_balance',
    title: 'Cán bộ cơ quan nhà nước',
    desc: 'Bổ sung chứng chỉ hành nghề, cập nhật kiến thức theo quy định mới nhất, đáp ứng yêu cầu chuyên môn của vị trí công tác.',
  },
  {
    icon: 'business',
    title: 'Doanh nghiệp & nhà thầu',
    desc: 'Hiểu đúng quy trình và pháp lý đấu thầu, lập hồ sơ chính xác, hạn chế sai sót dẫn đến bị loại trong quá trình xét thầu.',
  },
  {
    icon: 'school',
    title: 'Cá nhân ôn thi chứng chỉ',
    desc: 'Ôn tập có hệ thống, bám sát cấu trúc đề thi chứng chỉ hành nghề đấu thầu theo chương trình của Cục Đấu thầu.',
  },
]

const benefits = [
  {
    icon: 'my_location',
    title: 'Nội dung bám sát cấu trúc đề thi',
    desc: 'Chương trình xây dựng theo đúng khung thi chứng chỉ hành nghề, tập trung vào các chủ đề trọng tâm nhất.',
  },
  {
    icon: 'workspace_premium',
    title: 'Giảng viên trực tiếp từ Cục Đấu thầu',
    desc: 'Chuyên gia của Cục Đấu thầu — Bộ KH&ĐT với hơn 10 năm kinh nghiệm giảng dạy và thực chiến.',
  },
  {
    icon: 'handshake',
    title: 'Hướng dẫn thực hành, áp dụng ngay',
    desc: 'Học qua tình huống thực tế, bài tập thực hành — học viên có thể vận dụng vào công việc ngay sau khóa học.',
  },
  {
    icon: 'verified',
    title: 'Chứng nhận hoàn thành khóa học',
    desc: 'Chứng nhận do YDC Academy cấp sau khi hoàn thành chương trình, được các cơ quan và tổ chức công nhận.',
  },
]

const testimonials = [
  {
    quote: 'Chương trình đào tạo rất thực tế và đi sâu vào những vấn đề cán bộ chúng tôi thường gặp. Giảng viên có kinh nghiệm thực chiến, giải đáp tận tình. Đây là khóa học bổ ích nhất tôi tham dự trong nhiều năm qua.',
    author: 'Ông Nguyễn Văn Minh',
    title: 'Trưởng phòng Kế hoạch – Tài chính',
    org: 'UBND tỉnh Bình Dương',
  },
  {
    quote: 'Sau 2 ngày học, tôi nắm vững toàn bộ quy trình đấu thầu qua mạng trên hệ thống VNEPS. Giảng viên hướng dẫn thực hành trực tiếp, rất rõ ràng và dễ áp dụng.',
    author: 'Bà Trần Thị Hương',
    title: 'Chuyên viên phụ trách đấu thầu',
    org: 'Ngân hàng BIDV — Chi nhánh Hà Nội',
  },
  {
    quote: 'YDC Academy đã hỗ trợ chúng tôi đào tạo toàn bộ phòng ban liên quan trong một lần, lịch học linh hoạt, không ảnh hưởng tiến độ công việc. Rất hài lòng về chất lượng và sự chuyên nghiệp.',
    author: 'Ông Lê Thanh Bình',
    title: 'Phó Giám đốc phụ trách đấu thầu',
    org: 'Tổng Công ty Đường sắt Việt Nam',
  },
  {
    quote: 'Nội dung khóa học được cập nhật theo Luật Đấu thầu mới nhất. Giảng viên phân tích từng điều khoản gắn với thực tế, giúp chúng tôi tránh được nhiều sai sót pháp lý.',
    author: 'Bà Phạm Thị Lan',
    title: 'Trưởng ban Đấu thầu',
    org: 'Bộ Kế hoạch và Đầu tư',
  },
  {
    quote: 'Khóa học giúp cán bộ của chúng tôi tự tin hơn rất nhiều trong việc lập hồ sơ mời thầu và đánh giá hồ sơ dự thầu. Chúng tôi đã giảm đáng kể số lần phải làm lại hồ sơ.',
    author: 'Ông Nguyễn Đức Thắng',
    title: 'Giám đốc Ban Quản lý dự án',
    org: 'UBND TP. Hà Nội',
  },
  {
    quote: 'Tôi đánh giá cao phương pháp giảng dạy kết hợp lý thuyết và thực hành. Đặc biệt phần đấu thầu qua mạng được hướng dẫn rất chi tiết, sát với thực tế triển khai tại ngân hàng.',
    author: 'Ông Hoàng Văn Nam',
    title: 'Phó Trưởng phòng Mua sắm',
    org: 'Ngân hàng Vietcombank',
  },
  {
    quote: 'Chúng tôi đã hợp tác với YDC Academy trong 3 khóa đào tạo liên tiếp. Chất lượng giảng dạy đồng đều, tài liệu được cập nhật thường xuyên theo quy định mới. Đây là đơn vị đào tạo đáng tin cậy.',
    author: 'PGS.TS. Nguyễn Minh Tuấn',
    title: 'Trưởng Bộ môn Quản lý dự án',
    org: 'Trường ĐH Kinh tế Quốc dân',
  },
  {
    quote: 'Sau khóa học, cán bộ phụ trách đấu thầu của chúng tôi xử lý công việc nhanh hơn, ít phát sinh vướng mắc hơn. YDC Academy đã giúp chúng tôi nâng cao đáng kể năng lực nội bộ.',
    author: 'Bà Lê Thị Mai',
    title: 'Trưởng phòng Kế hoạch',
    org: 'Tập đoàn Điện lực Việt Nam (EVN)',
  },
  {
    quote: 'Giảng viên của YDC Academy không chỉ giảng lý thuyết mà còn chia sẻ kinh nghiệm thực tế từ các vụ việc thực tế, giúp chúng tôi nhận diện được những rủi ro thường gặp trong đấu thầu.',
    author: 'Ông Trần Văn Hùng',
    title: 'Phó Giám đốc Ban Đầu tư',
    org: 'VINACONEX',
  },
  {
    quote: 'Chương trình 2 ngày được thiết kế rất hợp lý, không dàn trải. Phần thực hành trên phần mềm đấu thầu điện tử đặc biệt hữu ích với những cán bộ chưa từng sử dụng hệ thống này.',
    author: 'Bà Nguyễn Thị Thu',
    title: 'Phó Chánh Văn phòng',
    org: 'UBND tỉnh Nghệ An',
  },
  {
    quote: 'Chúng tôi ghi nhận sự tiến bộ rõ rệt của cán bộ sau khi tham gia đào tạo tại YDC Academy. Tỷ lệ hồ sơ đấu thầu đạt yêu cầu ngay từ lần đầu nộp tăng lên đáng kể.',
    author: 'Ông Phạm Quốc Bảo',
    title: 'Vụ trưởng Vụ Ngân sách',
    org: 'Bộ Tài chính',
  },
  {
    quote: 'Đây là khóa đào tạo chất lượng, phù hợp với đặc thù của các trường đại học và viện nghiên cứu trong việc quản lý và thực hiện các dự án đấu thầu.',
    author: 'TS. Vũ Thị Hoa',
    title: 'Trưởng phòng Kế hoạch – Tài vụ',
    org: 'Trường ĐH Bách Khoa Hà Nội',
  },
  {
    quote: 'Sau nhiều năm làm đấu thầu, đây là lần đầu tiên tôi tham gia một khóa học được hệ thống hóa bài bản đến vậy. Giảng viên có uy tín chuyên môn cao và cách truyền đạt rất dễ tiếp thu.',
    author: 'Ông Đinh Văn Long',
    title: 'Chánh Văn phòng HĐND & UBND',
    org: 'UBND tỉnh Đồng Nai',
  },
]

const faqs = [
  {
    q: 'Chứng nhận hoàn thành khóa học có giá trị pháp lý như thế nào?',
    a: 'Chứng nhận do YDC Academy cấp là chứng nhận đào tạo bồi dưỡng nghiệp vụ, được các cơ quan và tổ chức đối tác công nhận. Đây không phải chứng chỉ hành nghề đấu thầu chính thức của Cục Đấu thầu. Nếu quý vị cần chứng chỉ hành nghề, YDC Academy sẽ hỗ trợ hướng dẫn và đăng ký thi sau khi hoàn thành khóa học.',
  },
  {
    q: 'Sự khác biệt giữa lớp học trực tiếp (offline) và trực tuyến (online) là gì?',
    a: 'Nội dung chương trình hoàn toàn giống nhau. Lớp trực tuyến được tổ chức qua Zoom, giảng viên vẫn tương tác và hỗ trợ thực hành đầy đủ. Lớp trực tiếp tổ chức tại địa điểm cố định, phù hợp với học viên muốn học tập trung và giao lưu với đồng nghiệp từ các tổ chức khác.',
  },
  {
    q: 'Học phí 2.000.000đ bao gồm những gì?',
    a: 'Học phí bao gồm toàn bộ tài liệu giảng dạy, hỗ trợ giải đáp thắc mắc sau khóa học, hỗ trợ thủ tục đăng ký thi chứng chỉ hành nghề và chứng nhận hoàn thành chương trình đào tạo. Không phát sinh thêm bất kỳ chi phí nào khác.',
  },
  {
    q: 'Tổ chức chúng tôi cần đào tạo nhiều cán bộ cùng lúc — có phương án riêng không?',
    a: 'Có — YDC Academy triển khai chương trình Đào Tạo Nội Bộ được thiết kế riêng theo đặc thù của từng tổ chức, giảng dạy trực tiếp tại đơn vị, phù hợp quy mô từ 10 đến 200+ học viên. Quý vị vui lòng để lại thông tin bên dưới để được trao đổi về chương trình phù hợp.',
  },
  {
    q: 'Sau khi đăng ký, quy trình xác nhận và thanh toán như thế nào?',
    a: 'Sau khi quý vị gửi thông tin đăng ký, chuyên gia YDC Academy sẽ liên hệ trong vòng 24 giờ làm việc để xác nhận lớp học, hướng dẫn thanh toán và gửi tài liệu chuẩn bị. Chúng tôi hỗ trợ xuất hóa đơn VAT cho tổ chức có nhu cầu.',
  },
]

export default async function Home() {
  const courses = await fetchCourses()
  const allClients = clientCategories.flatMap((cat) => cat.clients)

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 text-brand-100 text-sm font-medium px-3 py-1 rounded-full mb-6">
              Trung Tâm Đào Tạo và Bồi Dưỡng Nghiệp Vụ Đấu Thầu
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Nâng Cao Năng Lực Đấu Thầu Cùng Chuyên Gia
            </h1>
            <p className="text-brand-100 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              Chương trình bồi dưỡng nghiệp vụ đấu thầu do chuyên gia Cục Đấu thầu —
              Bộ Kế hoạch và Đầu tư trực tiếp giảng dạy. Hơn{' '}
              <strong className="text-white">1.000 học viên</strong> từ 100 tổ chức trên cả nước đã tham dự.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#dang-ky"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-brand-800 font-bold text-base hover:bg-brand-50 transition-colors"
              >
                Đăng Ký Tham Dự Khóa Học
                <Icon name="arrow_forward" size={18} />
              </a>
              <a
                href="#lich-khai-giang"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-colors"
              >
                Xem Lịch Khai Giảng
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-brand-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold">{s.value}</p>
                <p className="text-brand-100 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER TICKER */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider text-center mb-6">
            Hơn 100 tổ chức và doanh nghiệp đã tham gia chương trình đào tạo
          </p>
          <LogoTicker clients={allClients} />
        </div>
      </section>

      {/* AUDIENCE + BENEFITS — asymmetric 2-col */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* LEFT: Dành cho ai */}
            <div>
              <p className="text-brand-600 text-sm font-semibold uppercase tracking-wider mb-3">Đối tượng tham gia</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 leading-snug">
                Chương Trình Phù Hợp Với Ai?
              </h2>
              <div className="space-y-7">
                {audiences.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={item.icon} size={22} className="text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#dang-ky"
                className="inline-flex items-center gap-2 mt-10 px-6 py-3.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
              >
                Ghi danh khóa học
                <Icon name="arrow_forward" size={16} />
              </a>
            </div>

            {/* RIGHT: Bạn nhận được gì */}
            <div className="bg-brand-50 rounded-3xl p-8 border border-brand-100">
              <p className="text-brand-600 text-sm font-semibold uppercase tracking-wider mb-3">Quyền lợi học viên</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 leading-snug">
                Bạn Nhận Được Gì Sau Khóa Học?
              </h2>
              <div className="space-y-5">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3">
                    <Icon name="check_circle" size={22} className="text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">{b.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COURSE SCHEDULE */}
      <section id="lich-khai-giang" className="bg-brand-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Lịch Khai Giảng Khóa K15
            </h2>
            <p className="text-gray-600">
              Khai giảng ngày 12/08/2025 — Offline tại Hà Nội & TP.HCM hoặc Trực tuyến qua Zoom.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-brand-600 text-sm font-semibold uppercase tracking-wider mb-2">Nội dung chương trình</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Học Viên Được Đào Tạo Những Gì?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Chương trình 2 ngày bao gồm 4 chuyên đề được xây dựng bám sát khung thi chứng chỉ hành nghề đấu thầu.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {courseSubjects.map((subject) => (
              <div key={subject.id} className="flex items-start gap-4 bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-brand-600 text-white text-sm font-bold flex items-center justify-center">
                  {subject.id}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{subject.title}</h3>
                  <ul className="space-y-1.5">
                    {subject.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM — trên testimonials */}
      <section id="dang-ky" className="bg-brand-600 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Đăng Ký Tham Dự Khóa Học
            </h2>
            <p className="text-brand-200">
              Để lại thông tin — cán bộ tuyển sinh YDC Academy sẽ liên hệ xác nhận trong vòng 24 giờ làm việc.
            </p>
          </div>
          <LeadForm variant="course" courses={courses} />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Học Viên Đánh Giá Về YDC Academy
            </h2>
            <p className="text-gray-500">
              Ý kiến từ cán bộ, chuyên viên các tổ chức đã tham gia chương trình đào tạo.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Giải Đáp Thắc Mắc Thường Gặp
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  {faq.q}
                  <Icon
                    name="expand_more"
                    size={22}
                    className="text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

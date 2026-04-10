import LeadForm from '@/components/LeadForm'
import Icon from '@/components/Icon'

export const metadata = {
  title: 'Đào Tạo Nội Bộ',
  description:
    'YDC Academy thiết kế chương trình đào tạo đấu thầu riêng cho tổ chức, triển khai tại đơn vị bạn. Linh hoạt quy mô 10–200+ người.',
}

const steps = [
  { no: '01', icon: 'person_search', title: 'Tư Vấn Nhu Cầu', desc: 'Khảo sát đội ngũ, xác định gap năng lực và mục tiêu đào tạo cụ thể của tổ chức.' },
  { no: '02', icon: 'design_services', title: 'Thiết Kế Chương Trình', desc: 'Xây dựng curriculum phù hợp với ngành, lĩnh vực và quy trình nội bộ của đơn vị bạn.' },
  { no: '03', icon: 'groups', title: 'Triển Khai Đào Tạo', desc: 'Giảng dạy trực tiếp tại đơn vị hoặc online, linh hoạt thời gian cho toàn bộ đội ngũ.' },
  { no: '04', icon: 'verified', title: 'Đánh Giá & Hỗ Trợ', desc: 'Kiểm tra kết quả sau đào tạo, cấp chứng nhận và hỗ trợ tư vấn tiếp theo.' },
]

const benefits = [
  'Tiết kiệm thời gian di chuyển cho toàn bộ nhân sự',
  'Nội dung bám sát quy trình nội bộ của tổ chức',
  'Đào tạo đồng loạt toàn bộ phòng ban liên quan',
  'Lịch học linh hoạt, không gián đoạn công việc',
  'Chứng nhận hoàn thành do YDC Academy cấp',
  'Hỗ trợ sau đào tạo dài hạn',
]

const targets = [
  'Cơ quan nhà nước, UBND tỉnh/huyện',
  'Doanh nghiệp nhà nước, tập đoàn',
  'Tổ chức tài chính, ngân hàng',
  'Trường đại học, viện nghiên cứu',
  'Doanh nghiệp tư nhân quy mô lớn',
]

export default function DaoTaoNoiBoPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-brand-300 text-sm font-medium mb-3">Dành cho tổ chức & doanh nghiệp</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-5">
            Giải Pháp Đào Tạo Đấu Thầu Cho Tổ Chức
          </h1>
          <p className="text-brand-100 text-lg max-w-2xl leading-relaxed">
            YDC Academy thiết kế chương trình riêng, triển khai tại đơn vị bạn — linh hoạt thời
            gian, phù hợp quy mô từ <strong className="text-white">10 đến 200+ học viên</strong>.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
            Quy Trình Triển Khai
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={step.no} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-0.5 bg-brand-100 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center mb-4">
                    <Icon name={step.icon} size={26} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-brand-500 mb-1 block">Bước {step.no}</span>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-brand-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Lợi Ích Khi Đào Tạo Nội Bộ</h2>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Icon name="check_circle" size={18} className="text-brand-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-100">
              <h3 className="text-base font-bold text-gray-900 mb-4">Phù hợp với</h3>
              <ul className="space-y-3">
                {targets.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Icon name="check" size={16} className="text-brand-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="py-14">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Đăng Ký Chương Trình Đào Tạo</h2>
            <p className="text-gray-500 text-sm">
              Để lại thông tin — cán bộ tuyển sinh YDC Academy sẽ liên hệ trong 24 giờ để trao đổi về chương trình phù hợp với tổ chức của bạn.
            </p>
          </div>
          <LeadForm variant="inhouse" />
        </div>
      </section>
    </>
  )
}

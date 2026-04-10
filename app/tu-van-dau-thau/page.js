import LeadForm from '@/components/LeadForm'
import Icon from '@/components/Icon'

export const metadata = {
  title: 'Tư Vấn & Hỗ Trợ Đấu Thầu — YDC Academy',
  description:
    'Dịch vụ tư vấn đấu thầu chuyên sâu: rà soát hồ sơ, hỗ trợ pháp lý, tư vấn quy trình đấu thầu qua mạng. Đội ngũ chuyên gia Cục Đấu thầu.',
}

const services = [
  {
    icon: 'description',
    title: 'Rà Soát Hồ Sơ Mời Thầu',
    desc: 'Kiểm tra tính hợp lệ, đầy đủ và chính xác của hồ sơ mời thầu trước khi phát hành — giảm thiểu rủi ro bị kiến nghị hoặc huỷ thầu.',
  },
  {
    icon: 'gavel',
    title: 'Tư Vấn Pháp Lý Đấu Thầu',
    desc: 'Giải đáp vướng mắc pháp lý, hướng dẫn áp dụng đúng Luật Đấu thầu, Nghị định và Thông tư hướng dẫn mới nhất.',
  },
  {
    icon: 'computer',
    title: 'Hỗ Trợ Đấu Thầu Qua Mạng',
    desc: 'Hướng dẫn thao tác trên Hệ thống mạng đấu thầu quốc gia (VNEPS), từ đăng tải đến mở thầu điện tử.',
  },
  {
    icon: 'assignment',
    title: 'Đánh Giá Hồ Sơ Dự Thầu',
    desc: 'Hỗ trợ lập tiêu chí đánh giá, chấm điểm kỹ thuật, rà soát kết quả trước khi phê duyệt — đảm bảo minh bạch và đúng quy trình.',
  },
  {
    icon: 'school',
    title: 'Đào Tạo Theo Yêu Cầu',
    desc: 'Thiết kế chương trình huấn luyện riêng theo đặc thù ngành, lĩnh vực và quy trình nội bộ của tổ chức bạn.',
  },
  {
    icon: 'support_agent',
    title: 'Hotline Tư Vấn Nhanh',
    desc: 'Kênh hỗ trợ nhanh qua điện thoại và email — giải đáp các câu hỏi phát sinh trong quá trình thực hiện đấu thầu.',
  },
]

const steps = [
  { no: '01', icon: 'chat', title: 'Tiếp Nhận Yêu Cầu', desc: 'Lắng nghe và xác định chính xác vấn đề hoặc nhu cầu tư vấn của quý vị.' },
  { no: '02', icon: 'analytics', title: 'Phân Tích & Đánh Giá', desc: 'Rà soát hồ sơ, tài liệu liên quan và đánh giá tình huống pháp lý cụ thể.' },
  { no: '03', icon: 'lightbulb', title: 'Đề Xuất Giải Pháp', desc: 'Cung cấp phương án tư vấn chi tiết, phù hợp với quy định hiện hành và thực tiễn.' },
  { no: '04', icon: 'handshake', title: 'Hỗ Trợ Thực Hiện', desc: 'Đồng hành trong quá trình triển khai, giải đáp thắc mắc và điều chỉnh khi cần.' },
]

const reasons = [
  'Đội ngũ chuyên gia trực tiếp từ Cục Đấu thầu — Bộ KH&ĐT',
  'Hơn 5 năm kinh nghiệm tư vấn cho 100+ tổ chức trên cả nước',
  'Cập nhật liên tục theo Luật Đấu thầu và văn bản hướng dẫn mới nhất',
  'Phản hồi nhanh trong vòng 24 giờ làm việc',
  'Cam kết bảo mật thông tin khách hàng tuyệt đối',
  'Hỗ trợ dài hạn — không chỉ tư vấn một lần',
]

export default function TuVanDauThauPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-brand-300 text-sm font-medium mb-3">Dịch vụ tư vấn</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-5">
            Tư Vấn & Hỗ Trợ Đấu Thầu Chuyên Sâu
          </h1>
          <p className="text-brand-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            Đội ngũ chuyên gia YDC Academy đồng hành cùng quý vị trong mọi giai đoạn của quy trình
            đấu thầu — từ lập hồ sơ, rà soát pháp lý đến đấu thầu qua mạng.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-brand-600 text-sm font-semibold uppercase tracking-wider mb-2">Dịch vụ</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Chúng Tôi Hỗ Trợ Những Gì?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mb-4">
                  <Icon name={s.icon} size={24} className="text-brand-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-brand-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
            Quy Trình Tư Vấn
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={step.no} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-0.5 bg-brand-200 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center mb-4">
                    <Icon name={step.icon} size={26} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-brand-500 mb-1 block">Bước {step.no}</span>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY YDC */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-brand-600 text-sm font-semibold uppercase tracking-wider mb-2">Vì sao chọn YDC</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Đối Tác Tư Vấn Đáng Tin Cậy</h2>
              <ul className="space-y-3">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <Icon name="check_circle" size={18} className="text-brand-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">Phù hợp với</h3>
              <ul className="space-y-3">
                {[
                  'Cơ quan nhà nước cần rà soát hồ sơ đấu thầu',
                  'Doanh nghiệp lần đầu tham gia đấu thầu công',
                  'Tổ chức cần tư vấn chuyển đổi sang đấu thầu qua mạng',
                  'Ban quản lý dự án cần hỗ trợ pháp lý đấu thầu',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
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
      <section className="bg-brand-600 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Yêu Cầu Tư Vấn</h2>
            <p className="text-brand-200 text-sm">
              Để lại thông tin — chuyên gia YDC Academy sẽ liên hệ trao đổi trong vòng 24 giờ làm việc.
            </p>
          </div>
          <LeadForm
            variant="default"
            title="Gửi Yêu Cầu Tư Vấn"
            subtitle="Mô tả ngắn gọn vấn đề bạn cần hỗ trợ để chúng tôi chuẩn bị tốt nhất."
          />
        </div>
      </section>
    </>
  )
}

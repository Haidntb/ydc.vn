import Link from 'next/link'
import Icon from '@/components/Icon'
import { team } from '@/data/team'
import { clientCategories } from '@/data/clients'
import { site } from '@/data/site'

export const metadata = {
  title: 'Hồ Sơ Năng Lực — YDC Academy',
  description:
    'Hồ sơ năng lực YDC Academy — Công ty TNHH Dịch vụ tư vấn và Đào tạo YDC. MST: 0110411362. Giảng viên Cục Đấu thầu, 1.000+ học viên, 100+ tổ chức.',
}

const orgInfo = [
  { label: 'Tên pháp nhân', value: 'Công ty TNHH Dịch vụ tư vấn và Đào tạo YDC' },
  { label: 'Tên thương hiệu', value: 'YDC Academy' },
  { label: 'Mã số thuế', value: '0110411362' },
  { label: 'Người đại diện', value: 'Nguyễn Hải Yến' },
  { label: 'Lĩnh vực', value: 'Đào tạo, bồi dưỡng nghiệp vụ đấu thầu' },
  { label: 'Địa chỉ', value: 'Tầng 6, Tòa Nhà Việt Á, Số 9 Duy Tân, Cầu Giấy, Hà Nội' },
  { label: 'Điện thoại', value: site.phone },
  { label: 'Email', value: site.email },
  { label: 'Đăng ký đấu thầu', value: '19/07/2023 — Hệ thống mạng đấu thầu quốc gia' },
  { label: 'Giấy phép đào tạo', value: '← cần bổ sung số giấy phép' },
]

const credentials = [
  {
    no: '01',
    title: 'Giấy phép hoạt động đào tạo',
    issuer: 'Sở Giáo dục và Đào tạo',
    status: 'Còn hiệu lực',
    note: '← cần bổ sung số',
  },
  {
    no: '02',
    title: 'Xác nhận tư cách giảng viên',
    issuer: 'Cục Đấu thầu — Bộ Kế hoạch và Đầu tư',
    status: 'Được xác nhận',
    note: null,
  },
  {
    no: '03',
    title: 'Đăng ký trên hệ thống mạng đấu thầu',
    issuer: 'Hệ thống mạng đấu thầu quốc gia (VNEPS)',
    status: '19/07/2023',
    note: null,
  },
]

export default function VeChungToiPage() {
  return (
    <>
      {/* IDENTITY COVER */}
      <section className="bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
            {/* Left: identity */}
            <div>
              <p className="text-brand-400 text-xs font-bold uppercase tracking-widest mb-3">
                Hồ Sơ Năng Lực — 2025
              </p>
              <h1 className="text-2xl sm:text-4xl font-extrabold mb-1">YDC Academy</h1>
              <p className="text-brand-300 text-sm">Công ty TNHH Dịch vụ tư vấn và Đào tạo YDC</p>
              <p className="text-brand-500 text-xs mt-1">MST: 0110411362</p>
            </div>
            {/* Right: 3 key metrics */}
            <div className="flex gap-0 divide-x divide-brand-700 border border-brand-700 rounded-xl overflow-hidden flex-shrink-0">
              {[
                { v: '1.000+', l: 'Học viên' },
                { v: '100+', l: 'Tổ chức' },
                { v: '5+', l: 'Năm' },
              ].map((m) => (
                <div key={m.l} className="px-7 py-5 text-center">
                  <p className="text-2xl font-extrabold text-white">{m.v}</p>
                  <p className="text-brand-400 text-xs mt-0.5">{m.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        {/* SỨ MỆNH */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-brand-600 rounded-full inline-block" />
            Sứ Mệnh
          </h2>
          <div className="space-y-4 max-w-3xl">
            <p className="text-gray-900 text-base leading-relaxed">
              YDC Academy được thành lập với mục tiêu đưa kiến thức đấu thầu chuyên sâu đến gần hơn với những người thực sự cần — các cán bộ trực tiếp xử lý hồ sơ, lãnh đạo phòng ban phụ trách mua sắm, và doanh nghiệp tham gia đấu thầu công.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Chúng tôi tin rằng một nền đấu thầu minh bạch bắt đầu từ những con người được đào tạo bài bản — không phải từ quy trình hay công nghệ. Mỗi cán bộ hiểu đúng, làm đúng là một bước nhỏ góp vào sự lành mạnh của toàn bộ hệ thống mua sắm công quốc gia.
            </p>
          </div>
        </section>

        <div className="border-t border-gray-100" />

        {/* TẦM NHÌN */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-brand-600 rounded-full inline-block" />
            Tầm Nhìn
          </h2>
          <div className="space-y-4 max-w-3xl">
            <p className="text-gray-900 text-base leading-relaxed">
              Đến năm 2030, YDC Academy hướng đến trở thành đơn vị đào tạo nghiệp vụ đấu thầu được tin cậy nhất tại Việt Nam — nơi mà các tổ chức nhà nước, doanh nghiệp và định chế tài chính lựa chọn đầu tiên khi cần nâng cao năng lực đội ngũ.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Không phải vì quy mô lớn nhất, mà vì chất lượng chuyên môn và sự gắn kết thực tiễn với hệ thống pháp luật đấu thầu hiện hành. Chúng tôi xây dựng uy tín từng lớp học, từng học viên — chứ không phải từ những con số quảng cáo.
            </p>
          </div>
        </section>

        <div className="border-t border-gray-100" />

        {/* GIÁ TRỊ CỐT LÕI */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-brand-600 rounded-full inline-block" />
            Giá Trị Cốt Lõi
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            {[
              { title: 'Thực chiến', desc: 'Toàn bộ nội dung được xây dựng từ tình huống thực tế phát sinh trong quá trình đấu thầu — không phải lý thuyết hàn lâm xa rời thực tiễn.' },
              { title: 'Cập nhật liên tục', desc: 'Chương trình được rà soát và điều chỉnh theo từng thay đổi của Luật Đấu thầu, Nghị định và Thông tư hướng dẫn mới nhất.' },
              { title: 'Uy tín chuyên môn', desc: 'Giảng viên là chuyên gia đến trực tiếp từ Cục Đấu thầu — Bộ Kế hoạch và Đầu tư, có thâm niên xử lý hồ sơ và thanh tra đấu thầu thực tế.' },
              { title: 'Trách nhiệm dài hạn', desc: 'Cam kết hỗ trợ học viên sau khóa học khi gặp vướng mắc trong công việc — mối quan hệ không kết thúc khi lớp tan.' },
            ].map((v) => (
              <div key={v.title}>
                <p className="font-semibold text-gray-900 mb-2">{v.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* THÔNG TIN TỔ CHỨC */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-brand-600 rounded-full inline-block" />
            Thông Tin Tổ Chức
          </h2>
          <div className="rounded-xl overflow-hidden border border-gray-200">
            {orgInfo.map((row) => (
              <div key={row.label} className="grid grid-cols-5 border-b border-gray-100 last:border-0">
                <div className="col-span-2 bg-gray-50 px-5 py-3.5 border-r border-gray-100">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{row.label}</p>
                </div>
                <div className="col-span-3 bg-white px-5 py-3.5">
                  <p className="text-gray-900 text-sm">{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CHỨNG NHẬN & PHÁP LÝ */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-brand-600 rounded-full inline-block" />
            Chứng Nhận & Tư Cách Pháp Lý
          </h2>
          <div className="rounded-xl overflow-hidden border border-gray-200">
            {credentials.map((c, i) => (
              <div key={c.no} className={`grid grid-cols-12 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <div className="col-span-1 flex items-center justify-center border-r border-gray-100 py-4">
                  <span className="text-xs font-bold text-brand-600">{c.no}</span>
                </div>
                <div className="col-span-5 px-5 py-4 border-r border-gray-100">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Chứng nhận</p>
                  <p className="font-semibold text-gray-900 text-sm">{c.title}</p>
                </div>
                <div className="col-span-4 px-5 py-4 border-r border-gray-100">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Cơ quan</p>
                  <p className="text-gray-700 text-sm">{c.issuer}</p>
                </div>
                <div className="col-span-2 px-4 py-4 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-full w-fit">
                    <Icon name="check_circle" size={11} />
                    {c.status}
                  </span>
                  {c.note && <p className="text-gray-400 text-xs mt-1 italic">{c.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ĐỘI NGŨ GIẢNG VIÊN */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-brand-600 rounded-full inline-block" />
            Đội Ngũ Giảng Viên
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((member) => (
              <div key={member.id} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-brand-800 px-5 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Icon name="person" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{member.name}</p>
                    <p className="text-brand-300 text-xs mt-0.5">{member.title}</p>
                  </div>
                </div>
                <div className="px-5 py-4 bg-white">
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-3 italic">* Đang cập nhật hồ sơ giảng viên đầy đủ</p>
        </section>

        {/* KHÁCH HÀNG TIÊU BIỂU */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-brand-600 rounded-full inline-block" />
            Khách Hàng Tiêu Biểu
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            Hơn 100 tổ chức đã tham gia chương trình đào tạo, bao gồm:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clientCategories.map((cat) => (
              <div key={cat.label} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-brand-800 px-4 py-2.5">
                  <p className="text-white text-xs font-bold uppercase tracking-wide">{cat.label}</p>
                </div>
                <ul className="divide-y divide-gray-100">
                  {cat.clients.map((client) => (
                    <li key={client} className="flex items-center gap-2 px-4 py-2.5 bg-white">
                      <Icon name="arrow_right" size={14} className="text-brand-400 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{client}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* CONTACT CTA */}
      <section className="bg-brand-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-brand-400 text-xs font-bold uppercase tracking-widest mb-3">Liên hệ hợp tác</p>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">
                Sẵn sàng triển khai chương trình đào tạo?
              </h2>
              <p className="text-brand-200 text-sm leading-relaxed mb-6">
                YDC Academy cung cấp hồ sơ năng lực đầy đủ theo yêu cầu. Phản hồi trong 24 giờ.
              </p>
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-brand-900 font-bold text-sm hover:bg-brand-50 transition-colors"
              >
                Gửi Yêu Cầu
                <Icon name="arrow_forward" size={16} />
              </Link>
            </div>
            <div className="space-y-3">
              <a href={`tel:${site.phone}`} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition-colors group">
                <Icon name="phone" size={18} className="text-brand-400 flex-shrink-0" />
                <div>
                  <p className="text-brand-400 text-xs">Điện thoại</p>
                  <p className="text-white font-semibold text-sm group-hover:underline">{site.phone}</p>
                </div>
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition-colors group">
                <Icon name="mail" size={18} className="text-brand-400 flex-shrink-0" />
                <div>
                  <p className="text-brand-400 text-xs">Email</p>
                  <p className="text-white font-semibold text-sm group-hover:underline">{site.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <Icon name="location_on" size={18} className="text-brand-400 flex-shrink-0" />
                <div>
                  <p className="text-brand-400 text-xs">Địa chỉ</p>
                  <p className="text-white text-sm">{site.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

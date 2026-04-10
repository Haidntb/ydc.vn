import LeadForm from '@/components/LeadForm'
import Icon from '@/components/Icon'
import { site } from '@/data/site'

export const metadata = {
  title: 'Liên Hệ',
  description: 'Liên hệ với YDC Academy để được hỗ trợ đăng ký và giải đáp thắc mắc. Phản hồi trong 24 giờ làm việc.',
}

export default function LienHePage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-brand-300 text-sm font-medium mb-3">Liên hệ</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Liên Hệ Với YDC Academy
          </h1>
          <p className="text-brand-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            Sẵn sàng tư vấn và hỗ trợ bạn. Phản hồi trong 24 giờ làm việc.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Thông Tin Liên Hệ</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <Icon name="location_on" size={20} className="text-brand-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Địa chỉ</p>
                    <p className="text-gray-500 text-sm mt-0.5">{site.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <Icon name="phone" size={20} className="text-brand-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Điện thoại</p>
                    <a
                      href={`tel:${site.phone}`}
                      className="text-brand-600 text-sm hover:underline mt-0.5 block"
                    >
                      {site.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <Icon name="mail" size={20} className="text-brand-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Email</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-brand-600 text-sm hover:underline mt-0.5 block"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <Icon name="schedule" size={20} className="text-brand-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Giờ làm việc</p>
                    <p className="text-gray-500 text-sm mt-0.5">{site.workingHours}</p>
                  </div>
                </li>
              </ul>

              {site.social.zalo && (
                <div className="mt-8">
                  <p className="text-sm font-medium text-gray-900 mb-3">Liên hệ nhanh</p>
                  <a
                    href={site.social.zalo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline"
                  >
                    Zalo <Icon name="open_in_new" size={14} />
                  </a>
                </div>
              )}

            </div>

            {/* Lead Form */}
            <div>
              <LeadForm
                variant="default"
                title="Gửi Yêu Cầu"
                subtitle="Điền thông tin bên dưới, cán bộ YDC Academy sẽ phản hồi trong 24 giờ làm việc."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

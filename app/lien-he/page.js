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
      <section className="bg-brand-50 border-b border-brand-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Liên Hệ Với YDC Academy
          </h1>
          <p className="text-gray-500">
            Sẵn sàng tư vấn và hỗ trợ bạn. Phản hồi trong 24 giờ làm việc.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Thông Tin Liên Hệ</h2>
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

              {site.social.facebook && (
                <div className="mt-8">
                  <p className="text-sm font-medium text-gray-900 mb-3">Mạng xã hội</p>
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline"
                  >
                    Facebook <Icon name="open_in_new" size={14} />
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

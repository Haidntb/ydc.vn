import Link from 'next/link'
import Image from 'next/image'
import Icon from '@/components/Icon'
import { site } from '@/data/site'

const serviceLinks = [
  { href: '/chuong-trinh-dao-tao', label: 'Chương Trình Đào Tạo' },
  { href: '/dang-ky-to-chuc', label: 'Đăng Ký Cho Tổ Chức' },
  { href: '/tu-van-dau-thau', label: 'Tư Vấn & Hỗ Trợ' },
  { href: 'https://luyenthidauthau.ydc.vn/', label: 'Thi Thử Đấu Thầu', external: true },
]

const infoLinks = [
  { href: '/tin-tuc', label: 'Tin Tức & Sự Kiện' },
  { href: '/ve-chung-toi', label: 'Về Chúng Tôi' },
  { href: '/lien-he', label: 'Liên Hệ' },
]

const policyLinks = [
  { href: '/chinh-sach-bao-mat', label: 'Chính Sách Bảo Mật' },
  { href: '/dieu-khoan-su-dung', label: 'Điều Khoản Sử Dụng' },
  { href: '/chinh-sach-hoan-phi', label: 'Chính Sách Hoàn Phí' },
]

function FooterLinkList({ links }) {
  return (
    <ul className="space-y-2.5">
      {links.map((link) =>
        link.external ? (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-brand-300 hover:text-white text-sm transition-colors"
            >
              {link.label}
              <Icon name="open_in_new" size={14} className="text-brand-500" />
            </a>
          </li>
        ) : (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-brand-300 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </Link>
          </li>
        )
      )}
    </ul>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-lg p-2 flex-shrink-0">
                <Image src="/logo.svg" alt="YDC Academy" width={32} height={32} />
              </div>
              <span className="font-bold text-lg">YDC Academy</span>
            </div>
            <p className="text-brand-200 text-sm leading-relaxed">{site.tagline}</p>
            <p className="text-brand-300 text-sm mt-3 leading-relaxed">{site.description}</p>
            {site.social.facebook && (
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-5 text-sm text-brand-300 hover:text-white transition-colors"
              >
                Facebook
                <Icon name="arrow_forward" size={16} />
              </a>
            )}
          </div>

          {/* Dịch vụ */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-brand-400 mb-4">
              Dịch vụ
            </h3>
            <FooterLinkList links={serviceLinks} />
          </div>

          {/* Thông tin */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-brand-400 mb-4">
              Thông tin
            </h3>
            <FooterLinkList links={infoLinks} />
            <h3 className="font-semibold text-xs uppercase tracking-wider text-brand-400 mb-4 mt-6">
              Chính sách
            </h3>
            <FooterLinkList links={policyLinks} />
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-brand-400 mb-4">
              Liên hệ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-brand-300">
                <Icon name="location_on" size={18} className="text-brand-500 mt-0.5 flex-shrink-0" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Icon name="phone" size={18} className="text-brand-500 flex-shrink-0" />
                <a href={`tel:${site.phone}`} className="text-brand-300 hover:text-white transition-colors">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Icon name="mail" size={18} className="text-brand-500 flex-shrink-0" />
                <a href={`mailto:${site.email}`} className="text-brand-300 hover:text-white transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-300">
                <Icon name="schedule" size={18} className="text-brand-500 flex-shrink-0" />
                <span>{site.workingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-brand-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-brand-500 text-xs">
          <p>© {new Date().getFullYear()} {site.legalName}. Bảo lưu mọi quyền.</p>
          <p>MST: {site.taxId}</p>
        </div>
      </div>
    </footer>
  )
}

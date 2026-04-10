import Icon from '@/components/Icon'
import { site } from '@/data/site'

export const metadata = {
  title: 'Chính Sách Bảo Mật — YDC Academy',
  description: 'Chính sách bảo mật thông tin cá nhân của YDC Academy.',
}

export default function ChinhSachBaoMatPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
        Chính Sách Bảo Mật
      </h1>
      <p className="text-gray-400 text-sm mb-10">Cập nhật lần cuối: 01/04/2025</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">1. Phạm vi thu thập thông tin</h2>
          <p>
            YDC Academy thu thập thông tin cá nhân khi quý vị đăng ký khóa học, yêu cầu tư vấn, hoặc liên hệ
            với chúng tôi qua website. Thông tin bao gồm: họ tên, số điện thoại, email, tên đơn vị công tác
            và nhu cầu đào tạo.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">2. Mục đích sử dụng</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Xác nhận đăng ký và liên hệ tư vấn khóa học</li>
            <li>Gửi thông tin lịch khai giảng, chương trình đào tạo mới</li>
            <li>Hỗ trợ sau khóa học và cấp chứng nhận</li>
            <li>Cải thiện chất lượng dịch vụ và trải nghiệm website</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">3. Cam kết bảo mật</h2>
          <p>
            Chúng tôi cam kết không chia sẻ, bán hoặc cho thuê thông tin cá nhân của quý vị cho bất kỳ bên
            thứ ba nào mà không có sự đồng ý trước. Thông tin chỉ được sử dụng cho mục đích đã nêu ở trên.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">4. Lưu trữ và bảo vệ</h2>
          <p>
            Thông tin được lưu trữ trên hệ thống bảo mật của Google Workspace. Chúng tôi áp dụng các biện
            pháp kỹ thuật và quản lý hợp lý để bảo vệ dữ liệu khỏi truy cập trái phép, thất lạc hoặc
            hư hỏng.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">5. Quyền của người dùng</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Yêu cầu truy cập, chỉnh sửa hoặc xóa thông tin cá nhân đã cung cấp</li>
            <li>Từ chối nhận thông tin tiếp thị bằng cách liên hệ trực tiếp</li>
            <li>Khiếu nại về việc xử lý dữ liệu cá nhân</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">6. Liên hệ</h2>
          <p>
            Mọi thắc mắc về chính sách bảo mật, vui lòng liên hệ:
          </p>
          <div className="mt-3 bg-gray-50 rounded-xl p-5 space-y-2 text-sm">
            <p><strong>{site.name}</strong></p>
            <p className="flex items-center gap-2"><Icon name="location_on" size={16} className="text-gray-400" /> {site.address}</p>
            <p className="flex items-center gap-2"><Icon name="phone" size={16} className="text-gray-400" /> {site.phone}</p>
            <p className="flex items-center gap-2"><Icon name="mail" size={16} className="text-gray-400" /> {site.email}</p>
          </div>
        </section>
      </div>
    </article>
  )
}

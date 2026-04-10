import Icon from '@/components/Icon'
import { site } from '@/data/site'

export const metadata = {
  title: 'Chính Sách Hoàn Phí — YDC Academy',
  description: 'Chính sách hoàn phí khóa học đào tạo đấu thầu của YDC Academy.',
}

export default function ChinhSachHoanPhiPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
        Chính Sách Hoàn Phí
      </h1>
      <p className="text-gray-400 text-sm mb-10">Cập nhật lần cuối: 01/04/2025</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">1. Phạm vi áp dụng</h2>
          <p>
            Chính sách này áp dụng cho tất cả các khóa bồi dưỡng nghiệp vụ đấu thầu do YDC Academy
            tổ chức, bao gồm cả hình thức offline và online.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">2. Điều kiện hoàn phí</h2>
          <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              <div className="p-5">
                <p className="font-bold text-green-700 text-sm mb-2 flex items-center gap-2">
                  <Icon name="check_circle" size={16} /> Hoàn phí 100%
                </p>
                <p className="text-sm">Hủy trước ngày khai giảng <strong>7 ngày làm việc</strong> trở lên.</p>
              </div>
              <div className="p-5">
                <p className="font-bold text-amber-600 text-sm mb-2 flex items-center gap-2">
                  <Icon name="info" size={16} /> Hoàn phí 50%
                </p>
                <p className="text-sm">Hủy trước ngày khai giảng từ <strong>3 đến 6 ngày</strong> làm việc.</p>
              </div>
            </div>
            <div className="border-t border-gray-200 p-5">
              <p className="font-bold text-red-600 text-sm mb-2 flex items-center gap-2">
                <Icon name="cancel" size={16} /> Không hoàn phí
              </p>
              <p className="text-sm">Hủy trong vòng <strong>2 ngày</strong> trước ngày khai giảng hoặc sau khi khóa học bắt đầu.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">3. Chuyển khóa</h2>
          <p>
            Nếu không thể tham dự khóa đã đăng ký, quý vị có thể chuyển sang khóa tiếp theo mà không
            mất phí, với điều kiện thông báo trước ít nhất <strong>3 ngày làm việc</strong> trước ngày khai giảng.
            Mỗi học viên được chuyển khóa tối đa 2 lần.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">4. Chuyển nhượng</h2>
          <p>
            Quý vị có thể chuyển nhượng suất học cho người khác trong cùng đơn vị mà không mất phí,
            với điều kiện thông báo trước ít nhất <strong>1 ngày làm việc</strong> và cung cấp thông tin
            người thay thế.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">5. Quy trình hoàn phí</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gửi yêu cầu hoàn phí qua email hoặc điện thoại</li>
            <li>YDC Academy xác nhận trong vòng 2 ngày làm việc</li>
            <li>Hoàn phí được thực hiện trong 7–14 ngày làm việc qua chuyển khoản ngân hàng</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">6. Đào tạo nội bộ (Inhouse)</h2>
          <p>
            Đối với chương trình đào tạo nội bộ, chính sách hoàn phí và hủy hợp đồng được thỏa thuận
            riêng trong hợp đồng dịch vụ giữa YDC Academy và tổ chức đăng ký.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">7. Liên hệ</h2>
          <div className="bg-gray-50 rounded-xl p-5 space-y-2 text-sm">
            <p><strong>{site.name}</strong></p>
            <p className="flex items-center gap-2"><Icon name="phone" size={16} className="text-gray-400" /> {site.phone}</p>
            <p className="flex items-center gap-2"><Icon name="mail" size={16} className="text-gray-400" /> {site.email}</p>
          </div>
        </section>
      </div>
    </article>
  )
}

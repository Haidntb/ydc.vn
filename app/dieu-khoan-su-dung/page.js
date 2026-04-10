import { site } from '@/data/site'

export const metadata = {
  title: 'Điều Khoản Sử Dụng — YDC Academy',
  description: 'Điều khoản sử dụng website và dịch vụ đào tạo của YDC Academy.',
}

export default function DieuKhoanSuDungPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
        Điều Khoản Sử Dụng
      </h1>
      <p className="text-gray-400 text-sm mb-10">Cập nhật lần cuối: 01/04/2025</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">1. Giới thiệu</h2>
          <p>
            Website ydc.vn thuộc sở hữu của {site.legalName} (sau đây gọi là "YDC Academy").
            Khi truy cập và sử dụng website, quý vị đồng ý tuân thủ các điều khoản dưới đây.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">2. Dịch vụ đào tạo</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>YDC Academy cung cấp chương trình bồi dưỡng nghiệp vụ đấu thầu theo quy định pháp luật hiện hành.</li>
            <li>Nội dung khóa học có thể được điều chỉnh để phù hợp với thay đổi của Luật Đấu thầu và các văn bản hướng dẫn.</li>
            <li>Chứng nhận hoàn thành do YDC Academy cấp là chứng nhận đào tạo bồi dưỡng nghiệp vụ, không phải chứng chỉ hành nghề chính thức.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">3. Đăng ký và thanh toán</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Thông tin đăng ký phải chính xác và đầy đủ. YDC Academy không chịu trách nhiệm với thông tin sai lệch do người đăng ký cung cấp.</li>
            <li>Học phí được niêm yết trên website và có thể thay đổi theo từng khóa. Mức phí áp dụng là mức tại thời điểm xác nhận đăng ký.</li>
            <li>Thanh toán được thực hiện theo hướng dẫn của cán bộ tuyển sinh sau khi xác nhận đăng ký.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">4. Quyền sở hữu trí tuệ</h2>
          <p>
            Toàn bộ nội dung trên website bao gồm văn bản, hình ảnh, thiết kế, logo và tài liệu giảng dạy
            thuộc sở hữu của YDC Academy. Nghiêm cấm sao chép, phân phối hoặc sử dụng cho mục đích
            thương mại khi chưa được sự đồng ý bằng văn bản.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">5. Giới hạn trách nhiệm</h2>
          <p>
            YDC Academy nỗ lực đảm bảo thông tin trên website chính xác và cập nhật. Tuy nhiên, chúng tôi
            không chịu trách nhiệm về thiệt hại phát sinh từ việc sử dụng thông tin trên website cho mục
            đích khác ngoài tham khảo.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">6. Thay đổi điều khoản</h2>
          <p>
            YDC Academy có quyền cập nhật điều khoản sử dụng bất cứ lúc nào. Phiên bản mới nhất luôn
            được đăng tại trang này. Việc tiếp tục sử dụng website sau khi thay đổi đồng nghĩa với việc
            quý vị chấp nhận các điều khoản mới.
          </p>
        </section>
      </div>
    </article>
  )
}

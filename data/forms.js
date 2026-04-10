/**
 * Google Forms Configuration
 *
 * Cách lấy entry IDs:
 * 1. Mở Google Form của bạn
 * 2. Click 3 chấm → "Get pre-filled link"
 * 3. Điền dữ liệu mẫu vào từng field → Submit
 * 4. URL hiện ra sẽ có dạng: ...?entry.123456789=value&entry.987654321=value
 * 5. Copy từng entry.XXXXXXXXX vào đây
 */

export const GOOGLE_FORM = {
  // Thay YOUR_FORM_ID bằng ID từ URL Google Form của bạn
  // URL dạng: https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform
  action: 'https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/formResponse',

  fields: {
    name:     'entry.XXXXXXXXX', // Họ và tên
    company:  'entry.XXXXXXXXX', // Tên công ty / Đơn vị
    phone:    'entry.XXXXXXXXX', // Số điện thoại
    email:    'entry.XXXXXXXXX', // Email
    course:   'entry.XXXXXXXXX', // Lớp học (variant=course)
    orgSize:  'entry.XXXXXXXXX', // Quy mô tổ chức (variant=inhouse)
    message:  'entry.XXXXXXXXX', // Nội dung / Yêu cầu
    variant:  'entry.XXXXXXXXX', // Loại form (default/course/inhouse)
    registrationType: 'entry.XXXXXXXXX', // Cá nhân / Tổ chức
  },
}

'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Icon from '@/components/Icon'
import { courses as staticCourses } from '@/data/courses'
import { GOOGLE_FORM } from '@/data/forms'

function LeadFormInner({ variant = 'default', title, subtitle, courses: coursesProp }) {
  const searchParams = useSearchParams()
  const preselectedCourse = searchParams.get('course') || ''

  const courses = coursesProp || staticCourses

  const [registrationType, setRegistrationType] = useState('individual')
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '',
    course: preselectedCourse, orgSize: '', message: '',
  })

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const body = new FormData()
      const f = GOOGLE_FORM.fields

      if (formData.name)    body.append(f.name,    formData.name)
      if (formData.company) body.append(f.company, formData.company)
      if (formData.phone)   body.append(f.phone,   formData.phone)
      if (formData.email)   body.append(f.email,   formData.email)
      if (formData.course)  body.append(f.course,  formData.course)
      if (formData.orgSize) body.append(f.orgSize, formData.orgSize)
      if (formData.message) body.append(f.message, formData.message)
      body.append(f.variant, variant)
      body.append(f.registrationType, registrationType)

      await fetch(GOOGLE_FORM.action, {
        method: 'POST',
        mode: 'no-cors',
        body,
      })

      setStatus('success')
      setFormData({ name: '', company: '', phone: '', email: '', course: preselectedCourse, orgSize: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <Icon name="check_circle" size={40} className="text-green-600 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">Gửi thành công!</h3>
        <p className="text-green-700 text-sm">
          Cảm ơn bạn đã đăng ký. Cán bộ tuyển sinh YDC Academy sẽ liên hệ trong vòng 24 giờ làm việc.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm text-green-700 underline hover:no-underline"
        >
          Gửi đăng ký khác
        </button>
      </div>
    )
  }

  const inputCls =
    'w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent'

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      {title && <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>}
      {subtitle && <p className="text-gray-500 text-sm mb-5">{subtitle}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Cá nhân / Tổ chức toggle */}
        {(variant === 'default' || variant === 'course') && (
          <div className="flex gap-2 p-1.5 bg-gray-100 rounded-full">
            <button
              type="button"
              onClick={() => setRegistrationType('individual')}
              className={`flex-1 py-2 text-sm font-semibold transition-all rounded-full ${
                registrationType === 'individual'
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="flex items-center justify-center gap-1.5">
                <Icon name="person" size={18} />
                Cá nhân
              </span>
            </button>
            <button
              type="button"
              onClick={() => setRegistrationType('org')}
              className={`flex-1 py-2 text-sm font-semibold transition-all rounded-full ${
                registrationType === 'org'
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="flex items-center justify-center gap-1.5">
                <Icon name="corporate_fare" size={18} />
                Cho tổ chức
              </span>
            </button>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange}
            required placeholder="Nguyễn Văn A" className={inputCls} />
        </div>

        {(registrationType === 'org' || variant === 'inhouse') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên công ty / Đơn vị <span className="text-red-500">*</span>
            </label>
            <input type="text" name="company" value={formData.company} onChange={handleChange}
              required placeholder="UBND tỉnh... / Công ty..." className={inputCls} />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Số điện thoại <span className="text-red-500">*</span>
            </label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
              required placeholder="0900 000 000" className={inputCls} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              placeholder="email@cty.vn" className={inputCls} />
          </div>
        </div>

        {variant === 'course' && registrationType === 'individual' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Chọn khóa học</label>
            <select name="course" value={formData.course} onChange={handleChange}
              className={`${inputCls} bg-white`}>
              <option value="">— Chọn khóa —</option>
              {courses.filter((c) => c.status === 'open').map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title} · {c.badge} · {c.startDate}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Quy mô tổ chức — hiện khi chọn "Cho tổ chức" hoặc variant=inhouse */}
        {((variant === 'course' || variant === 'default') && registrationType === 'org') || variant === 'inhouse' ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quy mô đội ngũ cần đào tạo
            </label>
            <select name="orgSize" value={formData.orgSize} onChange={handleChange}
              className={`${inputCls} bg-white`}>
              <option value="">— Chọn quy mô —</option>
              <option value="10-30">10–30 người</option>
              <option value="30-100">30–100 người</option>
              <option value="100+">Trên 100 người</option>
            </select>
          </div>
        ) : null}

        {(variant === 'inhouse' || ((variant === 'course' || variant === 'default') && registrationType === 'org')) && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Yêu cầu / Ghi chú
            </label>
            <textarea name="message" value={formData.message} onChange={handleChange}
              rows={3} placeholder="Mô tả nhu cầu đào tạo của tổ chức bạn..."
              className={`${inputCls} resize-none`} />
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-600 text-sm">
            <Icon name="error" size={18} />
            Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp qua điện thoại.
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <Icon name="progress_activity" size={18} className="animate-spin" />
              Đang gửi...
            </>
          ) : (
            <>
              Nhận Tư Vấn
              <Icon name="arrow_forward" size={18} />
            </>
          )}
        </button>

        <p className="flex items-center justify-center gap-1 text-xs text-gray-400">
          <Icon name="lock" size={16} />
          Thông tin của bạn được bảo mật tuyệt đối
        </p>
      </form>
    </div>
  )
}

export default function LeadForm(props) {
  return (
    <Suspense fallback={<div className="bg-white rounded-xl shadow-lg p-6 h-48 animate-pulse" />}>
      <LeadFormInner {...props} />
    </Suspense>
  )
}

import Link from 'next/link'
import Icon from '@/components/Icon'
import { fetchPosts } from '@/lib/fetchPosts'

export const metadata = {
  title: 'Tin Tức & Sự Kiện — YDC Academy',
  description:
    'Cập nhật tin tức, sự kiện và kiến thức đấu thầu mới nhất từ YDC Academy.',
}

export default async function TinTucPage() {
  const posts = await fetchPosts()

  return (
    <>
      {/* HEADER */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-brand-300 text-sm font-medium mb-3">Blog</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Tin Tức & Sự Kiện
          </h1>
          <p className="text-brand-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            Cập nhật kiến thức đấu thầu, thay đổi pháp luật và hoạt động đào tạo mới nhất từ YDC Academy.
          </p>
        </div>
      </section>

      {/* POST LIST */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {posts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/tin-tuc/${post.slug}`}
                  className="group bg-white shadow-sm rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {post.thumbnail && (
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    {post.date && (
                      <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                        <Icon name="calendar_month" size={16} />
                        {post.date}
                      </p>
                    )}
                    <h2 className="font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    {post.summary && (
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-brand-600 text-sm font-semibold mt-3">
                      Đọc thêm <Icon name="arrow_forward" size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Icon name="article" size={48} className="text-gray-300 mx-auto mb-4" />
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Chưa có bài viết nào</h2>
              <p className="text-gray-500 text-sm">
                Tin tức và kiến thức đấu thầu sẽ được cập nhật tại đây. Quay lại sau nhé!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

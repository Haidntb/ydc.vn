import Link from 'next/link'
import Markdown from 'react-markdown'
import Icon from '@/components/Icon'
import { fetchPosts } from '@/lib/fetchPosts'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const posts = await fetchPosts()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return { title: 'Không tìm thấy bài viết' }
  return {
    title: `${post.title} — YDC Academy`,
    description: post.summary || '',
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const posts = await fetchPosts()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <Icon name="search_off" size={48} className="text-gray-300 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Không tìm thấy bài viết</h1>
        <p className="text-gray-500 mb-6">Bài viết này không tồn tại hoặc đã bị gỡ.</p>
        <Link href="/tin-tuc" className="text-brand-600 font-semibold hover:underline">
          ← Quay lại Tin Tức
        </Link>
      </div>
    )
  }

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      {/* BREADCRUMB */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/tin-tuc" className="hover:text-brand-600 transition-colors">Tin Tức</Link>
            <Icon name="chevron_right" size={14} />
            <span className="text-gray-900 font-medium truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* ARTICLE */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {post.date && (
          <p className="text-sm text-gray-400 flex items-center gap-1.5 mb-4">
            <Icon name="calendar_month" size={14} />
            {post.date}
          </p>
        )}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {post.thumbnail && (
          <div className="rounded-2xl overflow-hidden mb-8">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        )}

        <div className="prose prose-gray prose-sm sm:prose-base max-w-none
          prose-headings:font-bold prose-headings:text-gray-900
          prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-xl">
          <Markdown>{post.content || ''}</Markdown>
        </div>
      </article>

      {/* RELATED POSTS */}
      {otherPosts.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Bài Viết Khác</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/tin-tuc/${p.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
                >
                  <p className="text-xs text-gray-400 mb-1">{p.date}</p>
                  <h3 className="font-bold text-gray-900 mb-1 hover:text-brand-600 transition-colors leading-snug">
                    {p.title}
                  </h3>
                  {p.summary && (
                    <p className="text-gray-600 text-sm line-clamp-2">{p.summary}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

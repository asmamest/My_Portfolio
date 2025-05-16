// This file is no longer needed since we're redirecting to LinkedIn
// You can keep it for future use or delete it
import { notFound } from "next/navigation"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Redirect to 404 since we're now using LinkedIn for full articles
  return notFound()
}

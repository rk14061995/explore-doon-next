import { useParams } from 'next/navigation';

export default function BlogPage() {
  const { slug } = useParams();

  // Fetch blog content dynamically based on the slug
  return (
    <div>
      <h1>Blog: {slug}</h1>
      <p>This is content for the blog with the slug "{slug}".</p>
    </div>
  );
}

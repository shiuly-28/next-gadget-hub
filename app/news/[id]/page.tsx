import { NewsItems } from "@/app/types/news";
import Image from "next/image";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const news: NewsItems[] = await fetch(
    `https://news-api-next-js-two.vercel.app/api/news`
  ).then((res) => res.json());

  return news.map((item) => ({
    id: String(item?._id),
  }));
}

const NewsDetailspage = async ({ params }: { params: Promise<{ id: string }> }) => {
  
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const post = await fetch(
    `https://news-api-next-js-two.vercel.app/api/news/${id}`
  ).then((res) => res.json());

  if (!post) {
    return (
      <div className="py-20 text-center text-xl font-semibold">
        News is Not Found!
      </div>
    );
  }

  return (
    <section className="py-12 px-4">
      <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg bg-white">
        {post?.imageUrl && (
          <div className="mb-6 overflow-hidden rounded-md">
            <Image
              src={post?.imageUrl}
              alt={post?.title || "News Image"}
              width={800}
              height={450}
              className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300"
              priority 
            />
          </div>
        )}

        <div className="my-5">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{post?.title}</h2>

          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <p>
              {post?.published_at 
                ? new Date(post.published_at).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : "No Date"}
            </p>
            <p className="font-medium">
              Source: <span className="text-blue-600">{post?.source}</span>
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {post?.categories?.map((category: string) => (
            <span
              key={category}
              className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full border border-blue-100"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="prose max-w-none text-gray-700 leading-relaxed">
          {/* Snippet */}
          <p className="text-lg font-medium text-gray-900 mb-4">
            {post?.snippet}
          </p>

          {/* Full Description */}
          <p className="mb-6">{post?.description}</p>
          
          <p className="text-gray-500 italic">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, fugit, adipisci commodi ea alias voluptatibus consequuntur neque nulla ex dicta reiciendis cupiditate quisquam quae...
          </p>
        </div>
      </article>
    </section>
  );
};

export default NewsDetailspage;
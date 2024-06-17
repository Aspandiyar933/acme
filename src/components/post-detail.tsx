import { Post } from "../types/types";
import Link from "next/link";

interface PostDetailProps {
  post: Post;
}

export const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto px-4 py-8 lg:py-12">
      <div className="flex-1">
        <section className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8">
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold">{post.title}</h1>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
                <div>John Doe</div>
                <div className="h-1 w-1 bg-gray-500 dark:bg-gray-400 rounded-full" />
                <div>June 14, 2024</div>
              </div>
            </div>
            <img
              alt="Author"
              className="rounded-full w-16 h-16 lg:w-24 lg:h-24 object-cover"
              height={200}
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width={200}
            />
          </div>
        </section>
        <article className="prose prose-gray dark:prose-invert mt-8 lg:mt-12">
          <p>
            In the ever-evolving landscape of web development, the future holds
            exciting possibilities. As technology continues to advance, the way
            we build and interact with websites and web applications is
            undergoing a transformative shift.
          </p>
          <p>{post.body}</p>
          <img
            alt="Web Development"
            className="rounded-lg object-cover"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "800/400",
              objectFit: "cover",
            }}
            width={800}
          />
          <p>
            Another key aspect of the future of web development is the continued
            emphasis on performance and scalability. As users demand faster
            loading times and seamless experiences, developers are leveraging
            technologies like server-side rendering, edge computing, and
            progressive web apps to deliver lightning-fast and highly responsive
            web applications.
          </p>
          <p>
            Furthermore, the integration of artificial intelligence and machine
            learning is transforming the way we approach web development.
            Intelligent algorithms can now assist in tasks such as content
            personalization, user behavior analysis, and even automated code
            generation, empowering developers to create more personalized and
            intelligent web experiences.
          </p>
        </article>
      </div>
      <div className="lg:w-80 flex flex-col gap-8">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 lg:p-8">
          <h3 className="text-lg font-bold">Table of Contents</h3>
          <nav className="mt-4 space-y-2">
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              The Future of Web Development
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              The Rise of Component-based Architectures
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Performance and Scalability
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              AI and Machine Learning in Web Development
            </Link>
          </nav>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 lg:p-8">
          <h3 className="text-lg font-bold">Related Posts</h3>
          <div className="mt-4 space-y-4">
            <Link className="flex items-start gap-4" href="#">
              <img
                alt="Related Post"
                className="rounded-lg w-20 h-20 object-cover"
                height={80}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
              <div>
                <h4 className="text-base font-medium">
                  The Rise of No-Code Development
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Explore the growing trend of no-code development platforms and
                  their impact on the future of web development.
                </p>
              </div>
            </Link>
            <Link className="flex items-start gap-4" href="#">
              <img
                alt="Related Post"
                className="rounded-lg w-20 h-20 object-cover"
                height={80}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
              <div>
                <h4 className="text-base font-medium">
                  The Importance of Accessibility in Web Design
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Learn how to create inclusive and accessible web experiences
                  for all users.
                </p>
              </div>
            </Link>
            <Link className="flex items-start gap-4" href="#">
              <img
                alt="Related Post"
                className="rounded-lg w-20 h-20 object-cover"
                height={80}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
              <div>
                <h4 className="text-base font-medium">
                  The Future of Headless CMS
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Explore the benefits and use cases of headless content
                  management systems in web development.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

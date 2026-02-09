import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/app/interfaces/author";
import Link from "next/link";
import tagStyles from "@/app/tags.json";
import { getBlogSlug } from "../[slug]/page";

type Props = {
  title: string;
  tags: string[];
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  tags,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  tags.sort()
  const styles: Record<string, string> = tagStyles;
  const tagList: React.ReactNode[] = tags.map((t) => (
    <span key={t} className={styles[t] + " whitespace-nowrap rounded-xl pl-2 pr-2 transition-colors duration-200"}>
      {t}
    </span>
  ));
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <div className="mb-4 md:mb-0 text-lg transition-colors duration-200">
            <Avatar
              name={author.name}
              picture={author.picture}
              dateString={date}
            />
          </div>
          <div className="mt-4 mb-4 flex flex-wrap gap-2">{...tagList}</div>
        </div>
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={getBlogSlug(slug)} className="hover:underline transition-colors duration-200">
              {title}
            </Link>
          </h3>
          <p className="text-lg leading-relaxed mb-4 transition-colors duration-200">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}

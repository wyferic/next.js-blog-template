import { type Author } from "@/app/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
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

export function PostPreview({
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
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
        <div className="w-full text-lg mt-4 transition-colors duration-200">
          <Avatar name={author.name} picture={author.picture} dateString={date} />
        </div>
        <div className="mt-4 mb-4 flex flex-wrap gap-2">{...tagList}</div>
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={getBlogSlug(slug)} className="hover:underline transition-colors duration-200">
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4 transition-colors duration-200">{excerpt}</p>
    </div>
  );
}

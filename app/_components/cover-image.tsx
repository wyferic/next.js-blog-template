import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { getBlogSlug } from "../[slug]/page";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <div className="relative aspect-5/3 w-full">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        fill
        className={cn("shadow-sm rounded-md object-cover", {
          "hover:shadow-lg transition-shadow duration-200": slug,
        })}
        sizes="100vw"
      />
    </div>
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={getBlogSlug(slug)} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;

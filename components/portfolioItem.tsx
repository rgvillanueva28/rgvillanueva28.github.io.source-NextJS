import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function PortfolioItem({
  title,
  description,
  ghLink,
  link,
  tags,
}: any) {
  return (
    <div className="flex flex-wrap w-full px-4 py-4 md:w-1/2 lg:w-1/3">
      <div className="flex flex-col items-stretch w-full min-h-full bg-accent-dark p-6">
        <h4 className="text-foreground mb-4">{title}</h4>
        <p className="text-accent-light mb-10">{description}</p>
        <div className="text-accent-light text-sm mb-4">
          {tags?.data.map((tag: any) => (
            <span
              key={tag.attributes.slug}
              className="inline-block bg-accent-mid rounded-lg p-2 mr-2 mb-2"
            >
              {tag.attributes.name}
            </span>
          ))}
        </div>
        <div className="flex flex-row space-x-4 text-accent-light ml-auto mt-auto">
          <a
            href={ghLink}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-foreground "
          >
            <FaGithub size={28} />
          </a>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-foreground "
            >
              <FaExternalLinkAlt size={28} />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

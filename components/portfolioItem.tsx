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
      <div className="flex flex-col items-stretch min-h-full bg-accent-dark p-6">
        <h4 className="text-foreground mb-4">{title}</h4>
        <p className="text-accent-light mb-10">{description}</p>
        <div className="flex space-x-2 text-accent-light text-sm">
          {tags.map((tag: any) => (
            <span className="bg-accent-mid rounded-lg p-2">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

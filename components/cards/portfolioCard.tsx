import Card from "../card";
import PortfolioItem from "../portfolioItem";
import { items } from "../files/projects";

export default function PortfolioCard() {
  return (
    <Card className="flex flex-row flex-wrap mx-auto">
      {items.map((item) => (
        <PortfolioItem
          title={item.title}
          description={item.description}
          ghLink={item.ghLink}
          link={item.ghLink}
          tags={item.tags}
        />
      ))}
    </Card>
  );
}

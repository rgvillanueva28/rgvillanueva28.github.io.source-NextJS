import Card from "../card";
import PortfolioItem from "../portfolioItem";
// import { items } from "../files/projects";

export default function PortfolioCard({ portfolio }: any) {

  return (
    <Card className="flex flex-row flex-wrap mx-auto">
      {portfolio.map((item: any) => (
        <PortfolioItem
          key={item.attributes.slug}
          title={item.attributes.title}
          description={item.attributes.description}
          ghLink={item.attributes.github}
          link={item.attributes.link}
          tags={item.attributes.portfolio_techs}
        />
      ))}
    </Card>
  );
}

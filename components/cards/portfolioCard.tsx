import Card from "../card";
import PortfolioItem from "../portfolioItem";

export default function PortfolioCard() {
    return (
        <div className="flex flex-row flex-wrap mx-auto w-11/12 md:w-10/12 lg:w-9/12">
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
        </div>
    )
}

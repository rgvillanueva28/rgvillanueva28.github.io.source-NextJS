const texts = {
  title: "Covid Chatbot PH",
  description:
    "🦠 A Facebook Messenger chatbot for covid-19 cases monitoring in the Philippines",
  ghLink: "https://github.com/rgvillanueva28/covid-chatbot-ph/",
  link: "https://covid-chatbot-ph.herokuapp.com/",
  tags: ["Python", "Flask", "REST"],
};

export default function PortfolioItem() {
  return (
    <div className="flex flex-wrap w-full px-4 py-4 md:w-1/2 lg:w-1/3">
      <div className="flex flex-col items-stretch min-h-full bg-accent-dark p-">
        <h4 className="text-foreground">{texts.title}</h4>
        <p className="text-accent-light mb-5">{texts.description}</p>
        <div className="flex space-x-2 text-accent-light text-sm">
          {texts.tags.map((tag) => (
            <span className="bg-accent-mid rounded-lg p-2">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

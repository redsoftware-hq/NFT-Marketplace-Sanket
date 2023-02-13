import "./BrowseCategories.scss";
const categories = [
  {
    title: "Art",
    icon: "/img/categories/c1.png",
    altIcon: "Art Icon",
  },
  {
    title: "Collectibles",
    icon: "/img/categories/c2.png",
    altIcon: "Collectibles Icon",
  },
  {
    title: "Music",
    icon: "/img/categories/c3.png",
    altIcon: "Music Icon",
  },
  {
    title: "Photography",
    icon: "/img/categories/c4.png",
    altIcon: "Photography Icon",
  },
  {
    title: "Art",
    icon: "/img/categories/c1.png",
    altIcon: "Art Icon",
  },
  {
    title: "Collectibles",
    icon: "/img/categories/c2.png",
    altIcon: "Collectibles Icon",
  },
  {
    title: "Music",
    icon: "/img/categories/c3.png",
    altIcon: "Music Icon",
  },
  {
    title: "Photography",
    icon: "/img/categories/c4.png",
    altIcon: "Photography Icon",
  },
];
function BrowseCategories() {
  return (
    <div className="categories">
      <h2>Browse Categories</h2>
      <div className="category-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img
              className="category-banner"
              src={category.icon}
              alt={category.altIcon}
            />
            <h3>{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseCategories;

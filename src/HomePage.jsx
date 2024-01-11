const HomePage = () => {
  const items = ["Item 1", "Item 2", "Item 3"];

  const handleClick = (event) => () => {
    const item = event.currentTarget.dataset.item;
    console.log("Clicked:", item);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} data-item={item} onClick={handleClick}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default HomePage;

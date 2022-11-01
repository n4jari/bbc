const NewsList = ({ title, items }) => {
  return (
    <div className="newslist">
      <h2 className="title">{title}</h2>
      <div className="container">
        {items.map((i) => (
          <div className="box" key={i.id}>
            <img src={i.img} alt={i.title} />
            <div className="content">
              <h2>{i.title}</h2>
              <p>{i.text}</p>
              <span>{i.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NewsList;

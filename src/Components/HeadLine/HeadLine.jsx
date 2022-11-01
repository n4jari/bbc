import { HeadLineItems } from "./HeadLineItems";
const HeadLine = () => {
  return (
    <div className="headline">
      <h2 className="title">Welcome to BBC.com</h2>

      <div className="container">
        {HeadLineItems.map((i) => (
          <div className={i.cName} key={i.id}>
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
export default HeadLine;

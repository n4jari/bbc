import { WorldInPictureItems } from "./WorldInPictureItems";

const WorldInPicture = () => {
  return (
    <div className="worldInPicture">
      <h2 className="title">World in Picture</h2>

      <div className="container">
        {WorldInPictureItems.map((item, index) => (
          <div className={item.cName} key={index}>
            <img src={item.img} alt={item.title} />
            <div className="content">
              <h2>{item.title}</h2>
              <span>{item.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldInPicture;

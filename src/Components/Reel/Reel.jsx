import pic1 from "../../Helper/img/reel/1.jpg";
import pic2 from "../../Helper/img/reel/2.jpg";
import pic3 from "../../Helper/img/reel/3.jpg";
import bg from "../../Helper/img/reel/bg.jpg";

const Reel = () => {
  const ReelItems = [
    {
      img: pic1,
      text: "The Dark History of the Maya's hidden 'devil temple'",
    },
    {
      img: pic2,
      text: "The dangerous downsides of a fitness obsession",
    },
    {
      img: pic3,
      text: "Siberia's enormous hole in the ground is getting bigger",
    },
  ];

  return (
    <div className="reel" style={{ backgroundImage: `url(${bg})` }}>
      <div className="title">
        <h2>REEL</h2>
        <span>Visit Reel</span>
      </div>

      <div className="container">
        {ReelItems.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.img} />
            <div className="content">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Reel;

import React from "react";
import { EditorPicksLeftPageItems } from "./EditorPicksItems";

const LeftPageEditorPicks = () => {
  return (
    <div className="left_page_container">
      <div className="first_news">
        <a href="#">
          <div className="gallery">
            <img src="Images/BBC/EditorPicks/firstPic.webp" alt="" />

            <div className="content">
              <h2>Why being creative is good for you</h2>
              <p>
                What is the key to creativity, and how does it help our mental
                health?
              </p>
              <h4>CULTURE</h4>
            </div>
          </div>
        </a>
      </div>

      <div className="another_news">
        {EditorPicksLeftPageItems.map((item) => {
          return (
            <div className="box">
              <a href="#">
                <div className="gallery">
                  <img src={item.imgURL} alt="" />
                  <div className="content">
                    <h2>{item.subject}</h2>
                    <p>{item.content}</p>
                    <h4>{item.location}</h4>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftPageEditorPicks;

import React from "react";
import { ePicksRPItems, ePicksLPItems } from "./EditorPicksItems";

const EditorPicks = () => {
  return (
    <div className="editor_picks">
      <h2 className="title">Editor's Picks</h2>

      <div className="container">
        <div className="leftPage">
          <div className="lp_container">
            {ePicksLPItems.map((item, index) => (
              <div className={item.cName} key={index}>
                <img src={item.imgURL} alt={item.title} />
                <div className="content">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                  <span>{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rightPage">
          <h4>LATEST BUSINESS NEWS</h4>

          {ePicksRPItems.map((item, index) => {
            return (
              <div className="row" key={index}>
                <a href="#">
                  <span>{item.number}</span>
                  <span>{item.text}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EditorPicks;

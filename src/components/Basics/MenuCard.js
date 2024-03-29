import React from 'react'

const MenuCard = ({menudata}) => {
  return <>
  <section className="main-card--cointainer">
  { menudata.map((item, index) => {
      const {id, image, name, category, description} = item || {};
    return  <div className="card-container" key={index}>
        <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author subtle">{category}</span>
                <h2 className="card-title">{name}</h2>
                <div className="card-read">Read</div>
            </div>
            <img src={image} alt="images" className="card-media"/>
            <span>{description.substring(0,50)}...</span>
            <span className="card-tag subtle">Order Now</span>
        </div>
    </div>
    })}
    </section>
    </>
}

export default MenuCard
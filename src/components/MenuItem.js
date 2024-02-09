import React from 'react';

const MenuItem = ({ title, description, imageName, price }) => {
    return (
        <div className="menu-item d-flex">
            <img src={`${process.env.PUBLIC_URL}/images/${imageName}`} alt={title} className="food-image me-3" />
            <div>
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
                <div className="d-flex align-items-center">
                    <span className="price me-2">${price}</span>
                    <button className="addButton">Add</button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;

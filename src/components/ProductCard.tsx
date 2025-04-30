import React from "react";
import "./ProductCard.scss";

type ProductCardProps = {
    name: React.ReactNode;
    img: string;
    className?: string;
};

function ProductCard({ name, img, className }: ProductCardProps) {
    return (
        <div className={`product-card ${className ? className : ''}`}>
            <img className="product-card__image" src={img} alt={`Фото ${name}`}/>
            <div className="product-card__name">
                {name}
            </div>
        </div>
    );
}

export default ProductCard;
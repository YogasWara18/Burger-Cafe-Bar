import React from "react";
import "./menuItem.css";
import Link from "next/link";

export default function MenuItem({
  item,
}: {
  item: {
    id: number;
    name: string;
    preview: string;
    price: number;
    ingredients: string;
  };
}) {
  return (
    <div className="col-lg-6 menu-item">
      <img src={item.preview} className="menu-img" alt="menu" />
      <div className="menu-content">
        <div className="menu-text">
          <Link href={`/menu/${item.id}`}>{item.name}</Link>
          <div className="menu-ingredients">{item.ingredients}</div>
        </div>
        <span className="menu-price">${item.price}</span>
      </div>
    </div>
  );
}

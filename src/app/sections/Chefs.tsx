import React from "react";
import SectionTitle from "../components/SectionTitle";
import ChefItem from "../components/ChefItem";

async function getChefData() {
  const res = await fetch("http://localhost:3000/api/chefs");
  return res.json();
}

export default async function Chefs() {
  const items: [] = await getChefData();

  return (
    <section id="chefs" className="chefs">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Masters" subtitle="Our Professional Masters" />

        <div className="row">
          {items &&
            items.length > 0 &&
            items.map(
              (item: {
                id: number;
                name: string;
                photo: string;
                position: string;
                delay: string;
              }) => <ChefItem key={item.id} item={item} />
            )}
        </div>
      </div>
    </section>
  );
}

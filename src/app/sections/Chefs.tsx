"use client";

import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ChefItem from "../components/ChefItem";

interface Chef {
  id: number;
  name: string;
  photo: string;
  position: string;
  delay: string;
}

export default function Chefs() {
  const [items, setItems] = useState<Chef[]>([]);

  useEffect(() => {
    fetch("/api/chefs") // ✅ relative path aman di client
      .then((res) => res.json())
      .then((data: Chef[]) => setItems(data))
      .catch((err) => console.error("Failed to fetch chefs:", err));
  }, []);

  return (
    <section id="chefs" className="chefs">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Masters" subtitle="Our Professional Masters" />

        <div className="row">
          {items.length > 0 &&
            items.map((item) => <ChefItem key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}
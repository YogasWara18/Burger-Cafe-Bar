

import Breadcrumb from "@/app/components/Breadcrumb";
import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getFoodData(id: string) {
  const res = await fetch(`/api/menu/${id}`);
  return res.json();
}

export default async function MenuSingle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // unwrap promise
  const food = await getFoodData(id);

  if (!food || food.error) {
    return (
      <main id="main">
        <p>Menu item not found</p>
      </main>
    );
  }

  return (
    <main id="main" style={{ paddingTop: "23px" }}>
      <Breadcrumb page="Menu" />

      <section className="inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Image
                src={food.preview}
                alt="Menu"
                height={500}
                width={500}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="mt-3">{food.name}</h2>
              <h4 className="mt-2">
                <i>{food.ingredients}</i>
              </h4>
              <p className="mt-5">{food.description}</p>

              {food.steps && (
                <div className="mt-4">
                  <h5>Preparation Steps:</h5>
                  <ul>
                    {food.steps?.map((step: string, i: number) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-4">
                <Link href="/#menu" className="app-btn">
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

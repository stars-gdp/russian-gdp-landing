import Header from "../components/Header";
import { type Product, products } from "../data.products";
import ProductCard from "../components/ProductCard";
import VideoSection from "../components/VideoSection";
import Quality from "../components/Quality";
import Footer from "../components/Footer";
import ContactBar from "../components/ContactBar";
import Modal from "../components/Modal";
import React from "react";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Product | null>(null);

  const onOpen = (p: Product) => {
    setSelected(p);
    setOpen(true);
  };
  return (
    <div id="top">
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <div>
              <h1 id="hero-title" className="hero-title">
                Линейка продукции b:hip
              </h1>
              <p className="hero-sub">
                Энергия, баланс и вкус — на каждый день. Продукты, созданные для
                современной жизни.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="btn" href="#products">
                  Смотреть продукцию
                </a>
                <a className="btn btn-ghost" href="#video">
                  Смотреть видео
                </a>
              </div>
            </div>
            <div
              className="hero-card"
              aria-hidden="true"
              style={{
                position: "relative",
                width: "100%",
                height: "300px",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <img
                src="https://admin.bhipone.com/assets/uploads/content/products-04.jpg"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </section>

        <section
          className="section"
          id="products"
          aria-labelledby="products-title"
        >
          <div className="container">
            <h2 className="section-title" id="products-title">
              Продукция
            </h2>
            <p className="section-sub">
              Выберите то, что подходит вашему ритму и целям.
            </p>
            <div className="product-grid">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} onOpen={onOpen} />
              ))}
            </div>
          </div>
        </section>

        <VideoSection src={"https://www.youtube.com/embed/1wttqdReg14"} />

        <Quality />
      </main>

      <Footer />

      <ContactBar />

      <Modal open={open} title={selected?.name} onClose={() => setOpen(false)}>
        {selected && (
          <div>
            <h4>{selected.tagline}</h4>
            <p style={{ whiteSpace: "pre-line" }}>
              {selected.expandedDescription}
            </p>
            {!!selected.tags?.length && (
              <p>Теги: {selected.tags.map((t) => `#${t}`).join(" ")}</p>
            )}
            {/*{selected.link && (*/}
            {/*  <p>*/}
            {/*    <a*/}
            {/*      className="btn btn-ghost"*/}
            {/*      href={selected.link}*/}
            {/*      target="_blank"*/}
            {/*      rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*      Перейти на страницу продукта*/}
            {/*    </a>*/}
            {/*  </p>*/}
            {/*)}*/}
          </div>
        )}
      </Modal>
    </div>
  );
}

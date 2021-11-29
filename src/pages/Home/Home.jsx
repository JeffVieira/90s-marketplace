import { Carousel } from "antd";

import { Layout, Card } from "../../components";

import { products } from "../../data";

import style from "./Home.module.css";

const Home = () => {
  return (
    <Layout>
      <Carousel autoplay>
        <div>
          <h3 className={style.contentStyle}>O RLY?</h3>
        </div>
        <div>
          <h3 className={style.contentStyle}>
            The best Tips for awsome programer
          </h3>
        </div>
        <div>
          <h3 className={style.contentStyle}>shipping to anywhere</h3>
        </div>
      </Carousel>

      <div className={style.products}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;

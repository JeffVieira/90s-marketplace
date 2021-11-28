import { Carousel } from "antd";

import { Layout, Card } from "../../components";

import { products } from "../../data";

import "./Home.css";

const contentStyle = {
  height: "360px",
  color: "#fff",
  lineHeight: "360px",
  textAlign: "center",
  background: "#364d79",
};

const Home = () => {
  console.log(products);

  return (
    <Layout>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>

      <div className="products">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;

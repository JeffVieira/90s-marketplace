import { Card as AntCard, Rate, Tag } from "antd";

import { AddToCartButton } from "../index";

import { toCurrency } from "../../utils/numberToCurrency";

import style from "./Card.module.css";

const { Meta } = AntCard;

const Card = ({ product }) => {
  return (
    <AntCard
      size="small"
      style={{ width: 300 }}
      cover={<img alt={product.title} src={product.image} />}
      actions={[<AddToCartButton product={product} />]}
    >
      <Meta title={product.title} description={toCurrency(product.price)} />

      <div className={style.bottonInfo}>
        <Rate className={style.rating} disabled defaultValue={product.rating} />

        {product.onOffer && <Tag color="warning">Oferta do dia</Tag>}
      </div>
    </AntCard>
  );
};

export default Card;

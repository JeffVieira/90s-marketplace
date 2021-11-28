import { Card as AntCard, Rate, Tag } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

import { AddToCartButton } from "../index";

const { Meta } = AntCard;

const Card = ({ id, title, price, rating, description, tags, image }) => {
  return (
    <AntCard
      size="small"
      style={{ width: 300 }}
      cover={<img alt={title} src={image} />}
      actions={[<AddToCartButton id={id} />]}
    >
      <Meta title={title} description="R$ 400,00" />

      <Rate disabled defaultValue={rating} />

      <Tag color="warning">Oferta do dia</Tag>
    </AntCard>
  );
};

export default Card;

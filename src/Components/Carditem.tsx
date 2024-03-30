import { Card } from "antd";
import { NavLink } from "react-router-dom";
import { Product } from "../Domain/Producto";

type CarditemProps = {
  producto: Product;
};

function Carditem({ producto }: CarditemProps) {
  const { Meta } = Card;

  return (
    <NavLink to={producto.url} target="_blank">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={producto.imgAlt} src={producto.imgSrc} />}
      >
        <Meta
          title={
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <p>{producto.imgAlt}</p>
            </div>
          }
          description={
            <div>
              <p>{producto.priceDolar}</p>
              <p>{producto.priceSoles}</p>
            </div>
          }
        />
      </Card>
    </NavLink>
  );
}

export default Carditem;

import { Col, Row } from "react-bootstrap"
import { ShopItem } from "../components/ShopItem"
import shopItems from "../data/items.json"

export function Whiskey() {
  return (
    <>
      <h1 className="title">Whiskey</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {shopItems.map(item => (
          <Col key={item.id}>
            <ShopItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
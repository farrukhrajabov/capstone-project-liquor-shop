import { Col, Row } from "react-bootstrap"
import { ShopItem } from "../components/ShopItem"
import shopItems from "../data/parts.json"

export function Wine() {
  return (
    <>
      <h1 className="title">Wine</h1>
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
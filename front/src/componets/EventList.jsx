import {Card, Col, Row, Space} from "antd";

export default function EventList({eventList, del}) {
    return (
        <>
            <div>📅</div>


            <Row gutter={16}>
                {eventList.map((post, index) => (
                    <Col span={8} key={index} className="post">
                        <Card title={post.eventTitle} variant="borderless">
                            <p>イベント日：{post.eventDate}</p>
                            <p>一言コメント：{post.comment}</p>
                            <p>イベントURL：{post.eventUrl}</p>
                            <button onClick={() => del(post.id)}>ゴミ箱</button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
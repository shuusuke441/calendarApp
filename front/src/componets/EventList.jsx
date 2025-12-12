import {Card, Col, Rate, Row, Space} from "antd";
import {AntDesignOutlined, DeleteTwoTone} from '@ant-design/icons';
import {differenceInCalendarDays} from "date-fns";

function DeleteOutlined() {
    return null;
}

export default function EventList({eventList, del }) {

    const diffTime = (eventDate) => {
        const nowDate = new Date();
        return differenceInCalendarDays(eventDate , nowDate)
    }

    return (
        <>
            <div>📅</div>


            <Row gutter={16}>
                {eventList.map((post, index) => (
                    <Col span={8} key={index} className="post">
                        <Card title={post.eventTitle} variant="borderless">
                            <p>イベントまであと{diffTime(post.eventDate).toString()}日</p>
                            <p>イベント日：{new Date(post.eventDate).toLocaleString()}</p>
                            <p>一言コメント：{post.comment}</p>
                            <p>イベントURL：{post.eventUrl}</p>
                            <Rate allowHalf disabled defaultValue={post.rate}></Rate>
                            <DeleteTwoTone onClick={() => del(post.id)} className={"delete"}/>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
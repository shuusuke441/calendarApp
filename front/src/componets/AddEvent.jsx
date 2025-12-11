import {Input} from "antd";

export default function AddEvent({
                                     eventTitle,
                                     eventUrl,
                                     eventDate,
                                     comment,
                                     handleClickAddEvent,
                                     setEventTitle,
                                     setComment,
                                     setEventDate,
                                     setEventUrl
                                 }) {
    return (
        <div>
            <h1>イベントカレンダー</h1>
            <button onClick={handleClickAddEvent}>イベント追加</button>
            <Input type={"text"} value={eventTitle} placeholder={"イベント名"}  onChange={(e) => setEventTitle(e.target.value)} className="form"/>
            <Input type={"text"} value={eventUrl} placeholder={"リンク"} onChange={(e) => setEventUrl(e.target.value)} className="form"/>
            <Input type={"text"} value={comment} placeholder={"一言コメント"}
                   onChange={(e) => setComment(e.target.value)} className="form"/>
            <Input type={"datetime-local"} value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="form"/>
        </div>
    )
}
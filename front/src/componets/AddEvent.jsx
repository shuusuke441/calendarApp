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
        <>
            <h1>イベントカレンダー</h1>
            <button onClick={handleClickAddEvent}>イベント追加</button>
            <input type={"text"} value={eventTitle} placeholder={"イベント名"}
                   onChange={(e) => setEventTitle(e.target.value)}/>
            <input type={"text"} value={eventUrl} placeholder={"リンク"} onChange={(e) => setEventUrl(e.target.value)}/>
            <input type={"text"} value={comment} placeholder={"一言コメント"}
                   onChange={(e) => setComment(e.target.value)}/>
            <input type={"datetime-local"} value={eventDate} onChange={(e) => setEventDate(e.target.value)}/>
        </>
    )
}
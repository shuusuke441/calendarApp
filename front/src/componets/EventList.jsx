export default function EventList({eventList, del}) {
    return (
        <>
            <div>📅</div>
            {eventList.map((post, index) => (
                <div className="post" key={index}>
                    <p>タイトル：{post.eventTitle}</p>
                    <p>テキスト：{post.eventUrl}</p>
                    <p>イベント日：{post.eventDate}</p>
                    <button onClick={() => del(post.id)}>ゴミ箱</button>
                </div>
            ))}
        </>
    )
}
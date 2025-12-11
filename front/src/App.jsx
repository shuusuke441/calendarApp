import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddEvent from "./componets/AddEvent.jsx";
import EventList from "./componets/EventList.jsx";


function App() {
    const [eventTitle, setEventTitle] = useState("")
    const [eventList, setEventList] = useState([])
    const [eventUrl, setEventUrl] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [comment, setComment] = useState("")

    //これでinputを綺麗に
    function resetForm() {
        setEventTitle("");
        setEventDate("");
        setEventUrl("");
        setComment("");
    }

//サーバーにPost
    const handleClickAddEvent = async () => {
        if (eventTitle === "" || eventDate === "") return;
        else {
            try {
                await fetch("/api/events", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        eventTitle: eventTitle,
                        eventUrl: eventUrl,
                        eventDate: eventDate,
                        comment: comment,
                    }),
                });
                resetForm();
                await getFetchEvent()
            } catch (error) {
                console.error(error)
            }
        }
    }


//一覧表示Get
    const getFetchEvent = async () => {
        try {
            const res = await fetch(`/api/events`);
            const data = await res.json();
            console.log(data);
            setEventList(data);
        } catch (error) {
            console.error(error);
        }
    };

    //削除機能
    const del = async (id) => {
        await fetch(`/api/events/${id}`, {
            method: "DELETE",
        })
        getFetchEvent();
    }


    useEffect(() => {
        getFetchEvent();
    }, []);


    return (
        <>
            <AddEvent eventTitle={eventTitle} eventUrl={eventUrl} comment={comment} eventDate={eventDate}
                      handleClickAddEvent={handleClickAddEvent} setComment={setComment} setEventTitle={setEventTitle}
                      setEventDate={setEventDate} setEventUrl={setEventUrl}/>
            <div>COUNTER</div>
            <EventList eventList={eventList} del={del}/>
        </>
    )
}

export default App

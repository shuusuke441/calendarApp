import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddEvent from "./componets/AddEvent.jsx";
import EventList from "./componets/EventList.jsx";
import {differenceInCalendarDays} from "date-fns";


function App() {
    const [eventTitle, setEventTitle] = useState("")
    const [eventList, setEventList] = useState([])
    const [eventUrl, setEventUrl] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [comment, setComment] = useState("")
    const [rate, setRate] = useState(0)


    //これでinputを綺麗に
    function resetForm() {
        setEventTitle("");
        setEventDate("");
        setEventUrl("");
        setComment("");
        setRate(0);
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
                        rate: rate,
                        create: Date.now(),
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


    const diffTime = () => {
        const nowDate = new Date();
        // const diff = new Date(eventDate - nowDate);
        console.log("nowDate"+ nowDate, "eventDate"+ eventDate)
        const diff = differenceInCalendarDays(eventDate , nowDate)
        console.log(diff);
        return diff;
    }


    return (
        <>
            <AddEvent eventTitle={eventTitle} eventUrl={eventUrl} comment={comment} eventDate={eventDate}
                      handleClickAddEvent={handleClickAddEvent} setComment={setComment} setEventTitle={setEventTitle}
                      setEventDate={setEventDate} setEventUrl={setEventUrl} setRate={setRate} rate={rate}/>
            <div>COUNTER</div>
            <EventList eventList={eventList} del={del} diffTime={diffTime}/>
        </>
    )
}

export default App

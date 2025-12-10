package com.example.EventApp

import java.time.LocalDateTime

data class EventRequest (
    var eventTitle: String,
    var eventUrl: String,
    var eventDate: LocalDateTime,
    var comment : String,

)


package com.example.EventApp


import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDateTime

@RestController
class EventController(private val eventRepository: EventRepository) {

    @GetMapping("/api/events")
    fun getEvents(): List<EventEntity> {
        return eventRepository.findAll().toList()
    }

    @PostMapping("/api/events")
    fun postEvents(@RequestBody eventRequest: EventRequest): String {

        val entity = EventEntity(
            eventTitle = eventRequest.eventTitle,
            eventDate = eventRequest.eventDate,
            eventUrl = eventRequest.eventUrl,
            comment = eventRequest.comment,
            )
        eventRepository.save(entity)
        return "イベントが登録されました！"
    }


}
package com.example.EventApp

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import java.time.LocalDateTime


@Entity
class EventEntity(
    @Id
    @GeneratedValue
    var id: Long = 0,
    var eventTitle: String,
    var eventUrl: String? = null,
    var eventDate: LocalDateTime,
    var comment : String? = null,
    val createdAt: LocalDateTime = LocalDateTime.now(),
    )
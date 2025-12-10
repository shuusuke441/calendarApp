package com.example.EventApp

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class EventAppApplication

fun main(args: Array<String>) {
	runApplication<EventAppApplication>(*args)
}


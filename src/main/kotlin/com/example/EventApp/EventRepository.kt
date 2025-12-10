package com.example.EventApp

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface EventRepository : JpaRepository<EventEntity, Long> {

}
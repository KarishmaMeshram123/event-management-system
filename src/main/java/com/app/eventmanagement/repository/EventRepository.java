package com.app.eventmanagement.repository;

import com.app.eventmanagement.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event,Long> {}

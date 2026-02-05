package com.app.eventmanagement.service;

import com.app.eventmanagement.model.*;
import com.app.eventmanagement.repository.*;
import org.springframework.stereotype.Service;
import java.time.LocalDate;

@Service
public class BookingService {

    private final BookingRepository bookingRepo;
    private final UserRepository userRepo;
    private final EventRepository eventRepo;

    public BookingService(BookingRepository b, UserRepository u, EventRepository e){
        bookingRepo=b;
        userRepo=u;
        eventRepo=e;
    }

    public Booking book(Long userId, Long eventId){
        User user=userRepo.findById(userId).orElseThrow();
        Event event=eventRepo.findById(eventId).orElseThrow();

        event.setAvailableSeats(event.getAvailableSeats()-1);
        eventRepo.save(event);

        Booking booking=new Booking();
        booking.setUser(user);
        booking.setEvent(event);
        booking.setBookingDate(LocalDate.now());

        return bookingRepo.save(booking);
    }
}


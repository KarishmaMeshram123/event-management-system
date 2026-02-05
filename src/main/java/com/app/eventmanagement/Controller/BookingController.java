package com.app.eventmanagement.Controller;

import com.app.eventmanagement.model.Booking;
import com.app.eventmanagement.service.BookingService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bookings")
@CrossOrigin("*")
public class BookingController {

    private final BookingService service;

    public BookingController(BookingService s){
        service=s;
    }

    @PostMapping
    public Booking book(@RequestParam Long userId,
                        @RequestParam Long eventId){
        return service.book(userId,eventId);
    }
}

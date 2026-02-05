package com.app.eventmanagement.Controller;

import com.app.eventmanagement.model.Event;
import com.app.eventmanagement.service.EventService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/events")
@CrossOrigin("*")
public class EventController {

    private final EventService service;

    public EventController(EventService s){
        service=s;
    }

    @GetMapping
    public List<Event> getAll(){
        return service.getAll();
    }

    @PostMapping
    public Event add(@RequestBody Event e){
        return service.save(e);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
}


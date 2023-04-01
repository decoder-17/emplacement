package emplacementbackendapi.emplacementbackendapi.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import emplacementbackendapi.emplacementbackendapi.model.HealthRecord;

@RestController
@RequestMapping("/health")
public class HealthController {

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
    public HealthRecord getApiHealth() {
        return new HealthRecord("Api is running 🏃.");
    }

}

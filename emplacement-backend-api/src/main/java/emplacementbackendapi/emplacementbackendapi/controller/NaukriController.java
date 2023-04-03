package emplacementbackendapi.emplacementbackendapi.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import emplacementbackendapi.emplacementbackendapi.site.Naukri;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/site/naukri")
public class NaukriController {

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "/search", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getSearchResults(@RequestParam(name = "role_id") String role,
            @RequestParam(name = "page", required = false) String page) {
        String res = new Naukri().getResultsByRole(role, page == null ? "1" : page);
        if (res == null) {
            throw new ResponseStatusException(
                    HttpStatus.GONE, "Something went wrong.");
        }
        return res;
    }

}

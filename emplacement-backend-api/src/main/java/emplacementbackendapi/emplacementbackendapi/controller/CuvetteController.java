package emplacementbackendapi.emplacementbackendapi.controller;

import emplacementbackendapi.emplacementbackendapi.site.Cuvette;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/v1/site/cuvette")
public class CuvetteController {
    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "/search", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getSearchResults(@RequestParam(name = "role_id") String role_id,
            @RequestParam(name = "page", required = false) String page) {
        String res = new Cuvette().getResultsByRole(role_id, page == null ? "1" : page);
        if (res == null) {
            throw new ResponseStatusException(
                    HttpStatus.UNAUTHORIZED, "Auth token expired for Cuvette.");
        }
        return res;
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "/internships", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getHomeInterShip(@RequestParam(name = "page", required = false) String page) {
        String res = new Cuvette().getHomeInterShipDetails(page == null ? "1" : page);
        if (res == null) {
            throw new ResponseStatusException(
                    HttpStatus.UNAUTHORIZED, "Auth token expired for Cuvette.");
        }
        return res;
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "/internship-title", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getAvailableRoles() {
        String res = new Cuvette().getInternshipTitles();
        if (res == null) {
            throw new ResponseStatusException(
                    HttpStatus.UNAUTHORIZED, "Auth token expired for Cuvette.");
        }
        return res;
    }
}

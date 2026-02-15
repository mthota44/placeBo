package com.placebo.project;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("/projects")
public class ProjectResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<String> listProjects() {
        return List.of("Project A", "Project B", "Project C");
    }
}

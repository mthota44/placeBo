package com.placebo.gateway;

import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.UserRepresentation;

import java.util.Collections;

@Path("/auth")
public class UserResource {

    @Inject
    Keycloak keycloak;

    @POST
    @Path("/register")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response register(RegistrationDTO dto) {
        try {
            UserRepresentation user = new UserRepresentation();
            user.setUsername(dto.email);
            user.setEmail(dto.email);
            user.setEnabled(true);

            if (dto.name != null && !dto.name.isEmpty()) {
                String[] parts = dto.name.split(" ", 2);
                user.setFirstName(parts[0]);
                if (parts.length > 1) {
                    user.setLastName(parts[1]);
                }
            }

            CredentialRepresentation credential = new CredentialRepresentation();
            credential.setType(CredentialRepresentation.PASSWORD);
            credential.setValue(dto.password);
            credential.setTemporary(false);
            user.setCredentials(Collections.singletonList(credential));

            Response response = keycloak.realm("quarkus").users().create(user);

            if (response.getStatus() == 201) {
                return Response.ok().entity("{\"message\": \"User registered successfully\"}").build();
            } else if (response.getStatus() == 409) {
                 return Response.status(409).entity("{\"error\": \"User already exists\"}").build();
            } else {
                return Response.status(response.getStatus()).entity("{\"error\": \"Failed to create user\"}").build();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return Response.serverError().entity("{\"error\": \"" + e.getMessage() + "\"}").build();
        }
    }
}

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
import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.core.Form;
import org.eclipse.microprofile.config.inject.ConfigProperty;

@Path("/auth")
public class UserResource {

    @Inject
    Keycloak keycloak;

    @ConfigProperty(name = "quarkus.oidc.auth-server-url")
    String keycloakUrl;

    @ConfigProperty(name = "quarkus.oidc.client-id")
    String clientId;

    @ConfigProperty(name = "quarkus.oidc.credentials.secret")
    String clientSecret;

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
                String errorBody = response.readEntity(String.class);
                System.out.println("Keycloak Registration Failed. Status: " + response.getStatus() + ", Body: " + errorBody);
                return Response.status(response.getStatus()).entity("{\"error\": \"Failed to create user: " + response.getStatus() + " " + errorBody + "\"}").build();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return Response.serverError().entity("{\"error\": \"" + e.getMessage() + "\"}").build();
        }
    }

    @POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(LoginDTO dto) {
        try {
            String tokenUrl = keycloakUrl + "/protocol/openid-connect/token";
            
            try (Client client = ClientBuilder.newClient()) {
                Form form = new Form();
                form.param("grant_type", "password");
                form.param("client_id", clientId);
                form.param("client_secret", clientSecret); 
                form.param("username", dto.email);
                form.param("password", dto.password);

                Response keycloakResponse = client.target(tokenUrl)
                        .request(MediaType.APPLICATION_JSON)
                        .post(Entity.form(form));

                if (keycloakResponse.getStatus() == 200) {
                    String json = keycloakResponse.readEntity(String.class);
                    return Response.ok(json).build();
                } else {
                    return Response.status(401).entity("{\"error\": \"Invalid credentials\"}").build();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            return Response.serverError().entity("{\"error\": \"" + e.getMessage() + "\"}").build();
        }
    }
}

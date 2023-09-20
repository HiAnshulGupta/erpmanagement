package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Client;
import com.app.model.ClientDTO;
import com.app.repository.ClientRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("client/")
public class ClientController {

	@Autowired
	private ClientRepository clientrepo;

	@Autowired
	private ModelMapper modelMapper;

	@GetMapping
	public List<Client> getAllClients() {
		
		return clientrepo.findAll();
	}
	
	@PostMapping
    public Client createClient(@RequestBody ClientDTO clientDTO) {
        Client client = modelMapper.map(clientDTO, Client.class);
        return clientrepo.save(client);
    }
	
	@GetMapping("/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Long id) {
        Optional<Client> client = clientrepo.findById(id);
        return client.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
	
	@DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable Long id) {
        if (!clientrepo.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        clientrepo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
	
	@PutMapping("/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody ClientDTO clientDTO) {
        Optional<Client> existingClient = clientrepo.findById(id);
        if (existingClient.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Client client = existingClient.get();
        // Update client properties based on clientDTO

        
         client.setClientName(clientDTO.getClientName());
         client.setAddress(clientDTO.getAddress());
         client.setMobileNumber(clientDTO.getMobileNumber());
         client.setEmail(clientDTO.getEmail());

        client = clientrepo.save(client);
        return ResponseEntity.ok(client);
    }

}

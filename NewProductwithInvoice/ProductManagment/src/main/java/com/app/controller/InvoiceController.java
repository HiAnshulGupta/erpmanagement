package com.app.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.app.model.Invoice;
import com.app.model.InvoiceDTO;
import com.app.model.Product;
import com.app.repository.ClientRepository;
import com.app.repository.InvoiceRepository;
import com.app.repository.ProductRepository;
import com.google.common.base.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/invoioce/")
public class InvoiceController {

	@Autowired
	private InvoiceRepository invo;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private ClientRepository clientrepo;

	@Autowired
	private ProductRepository prod;

	@GetMapping
	public List<Invoice> getAllInvoice() {

		return invo.findAll();
	}

	@PostMapping("/{ProductId}/{ClientId}")
	public ResponseEntity<Invoice> createInvoice(@PathVariable Long ProductId, @PathVariable Long ClientId,
			@RequestBody InvoiceDTO invoice) {

		java.util.Optional<Product> product = prod.findById(ProductId);
		java.util.Optional<Client> clientOptional = clientrepo.findById(ClientId);

		if (product.isPresent()) {
			Product product1 = product.get();
			Client client = clientOptional.get();
			Invoice invoice1 = new Invoice();

			invoice1.setBill_Date(invoice.getBill_Date());
			invoice1.setDue_Date(invoice.getDue_Date());
			invoice1.setIspending(invoice.isIspending());
			invoice1.setQuantity(invoice.getQuantity());
			invoice1.setProduct(product1);
			invoice1.setClient(client);
			 
			

			return ResponseEntity.status(HttpStatus.CREATED).body(invoice1);
		} else {
			return ResponseEntity.notFound().build();
		}

	}

	@GetMapping("/invoices/{invoiceId}")
	public ResponseEntity<Invoice> getInvoiceById(@PathVariable Long invoiceId) {
		java.util.Optional<Invoice> invoiceOptional = invo.findById(invoiceId);

		if (invoiceOptional.isPresent()) {
			Invoice invoice = invoiceOptional.get();
			return ResponseEntity.ok(invoice);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PutMapping("/invoices/{invoiceId}")
	public ResponseEntity<Invoice> updateInvoice(@PathVariable Long invoiceId, @RequestBody InvoiceDTO updatedInvoice) {
		java.util.Optional<Invoice> invoiceOptional = invo.findById(invoiceId);

		if (invoiceOptional.isPresent()) {
			Invoice invoice = invoiceOptional.get();

			// Update invoice fields based on the updatedInvoice DTO
			invoice.setBill_Date(updatedInvoice.getBill_Date());
			invoice.setDue_Date(updatedInvoice.getDue_Date());
			invoice.setIspending(updatedInvoice.isIspending());
			invoice.setQuantity(updatedInvoice.getQuantity());

			// Save the updated invoice
			Invoice savedInvoice = invo.save(invoice);
			return ResponseEntity.ok(savedInvoice);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping("/invoices/{invoiceId}")
	public ResponseEntity<Void> deleteInvoice(@PathVariable Long invoiceId) {
		java.util.Optional<Invoice> invoiceOptional = invo.findById(invoiceId);

		if (invoiceOptional.isPresent()) {
			invo.deleteById(invoiceId);
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}

}

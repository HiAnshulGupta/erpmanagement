package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Invoice;
import com.app.model.InvoiceDTO;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {

	

}

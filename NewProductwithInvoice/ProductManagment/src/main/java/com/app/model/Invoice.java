package com.app.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.crypto.Data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "InvoiceERp")
@NoArgsConstructor

@AllArgsConstructor
@Setter
@Getter
public class Invoice {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id" ,unique = true)
	private Long id;
	
	
	@Column(name="bill")
	private double Bill;
	
	@Column(name="CostPrice")
	private Double CostPrice;
	
	@Column(name="bill_Date")
	private LocalDateTime bill_Date;
	
	private boolean ispending;
	
	@Column(name="due_Date")
	private LocalDateTime due_Date;
	
	@Column(name="quantity")
	private double quantity;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id")
    private Client client;
	
	
	
	
	
	
}

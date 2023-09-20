package com.app.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.xml.crypto.Data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class InvoiceDTO {
	
	
	
	
	
	
	private Double amount;
	
	@Column(name="bill_Date")
	private LocalDateTime bill_Date;
	
	@Column(name="due_Date")
	private LocalDateTime due_Date;
	
	private boolean ispending;
	
	
	private double quantity;
}

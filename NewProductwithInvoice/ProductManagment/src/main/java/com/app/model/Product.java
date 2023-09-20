package com.app.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "productERP")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id" ,unique = true)
	private Long id;
	
	@Column(name="ProductName")
	private String ProductName;
	
	@Column(name="Category")
	private String Category;
	
	@Column(name="HSN_SAC")
	private String HSN_SAC;
	
	@Column(name="Open_stock")
	private String Open_stock;
	
	@Column(name="CostPrice")
	private String CostPrice;
	
	@Column(name="Fixed_Assest")
	private Boolean Fixed_Assest;
	
	@Column(name="SellingPrice")
	private String SellingPrice;
	
	@Column(name="Unit_Measure")
	private String Unit_Measure;
	
	@Column(name="Safety_Stock")
	private String Safety_Stock;
	
	
	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<Invoice> invoices;

}

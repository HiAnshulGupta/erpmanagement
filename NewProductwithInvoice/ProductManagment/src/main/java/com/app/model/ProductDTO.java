package com.app.model;

import java.math.BigDecimal;

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
public class ProductDTO {
	
	
	
	private String ProductName;
	

	private String Category;
	
	
	private String HSN_SAC;
	
	
	private String Open_stock;
	
	
	private String CostPrice;
	
	
	private Boolean Fixed_Assest;
	
	
	private String SellingPrice;
	
	
	private String Unit_Measure;
	
	
	private String Safety_Stock;
	
}

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
@Table(name = "Client")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Client {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id" ,unique = true)
	private Long id;
	
	private String ClientName;
	
	private String Address;
	
	private String MobileNumber;
	
	private String email;
	
	@OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<Invoice> invoices;

}

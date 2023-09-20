package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Product;
import com.app.model.ProductDTO;
import com.app.repository.ProductRepository;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
public class ProductController {
	
	@Autowired
	private ProductRepository prorepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	
	@RequestMapping("details")
	public List<Product> getallProduct(){
		
		return prorepo.findAll();
	}
	
	@PostMapping("register")
	public Product insertProduct(@RequestBody ProductDTO pro) {
		Product prod = modelMapper.map(pro, Product.class);
		return prorepo.save(prod);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletePro(@PathVariable Long id){
		
		if(!prorepo.existsById(id)) {
			 return ResponseEntity.notFound().build();
		}
		prorepo.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Product> updateProduc(@PathVariable Long id,@RequestBody ProductDTO prod){
		try {
		Optional<Product> product=prorepo.findById(id);
		
		if(product.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		Product find=product.get();
		if(prod.getProductName()!=null) {
			find.setProductName(prod.getProductName());
		}
		if(prod.getCategory()!=null) {
			find.setCategory(prod.getCategory());
		}
		if(prod.getHSN_SAC()!=null) {
			find.setHSN_SAC(prod.getHSN_SAC());
		}
		if(prod.getFixed_Assest()!=null) {
			find.setFixed_Assest(prod.getFixed_Assest());
		}
		if(prod.getOpen_stock()!=null) {
			find.setOpen_stock(prod.getOpen_stock());
		}
		if(prod.getCostPrice()!=null) {
			find.setCostPrice(prod.getCostPrice());
		}
		if(prod.getSellingPrice()!=null) {
			find.setSellingPrice(prod.getSellingPrice());
		}
		if(prod.getSafety_Stock()!=null) {
			find.setSafety_Stock(prod.getSafety_Stock());
		}
		if(prod.getUnit_Measure()!=null) {
			find.setUnit_Measure(prod.getUnit_Measure());
		}
		find=prorepo.save(find);
		return ResponseEntity.ok(find);
		
		}catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	

}

package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Service.CustomerService;
import com.example.demo.model.Customer;
import com.example.demo.repository.CustomerRepository;
@RestController
@RequestMapping("/customer")
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	@Autowired
	private CustomerRepository custRep;
	@PostMapping("/add")
	public String add(@RequestBody Customer customer) {
		customerService.saveCustomer(customer);
		return "New Customer Added";
		
	}
	@GetMapping("/getAll")
	public List<Customer> getAllCustomers(){
		return customerService.getAllCustomers();	
		
	}
	@GetMapping("/getName")
	public String getNameByID(@RequestBody Customer customer) {
		return customerService.getCustomer(customer.getId()).getName();
		
	}
	@GetMapping("/getEmail")
	public String getEmailbyID(@RequestBody Customer customer) {
		return customerService.getCustomer(customer.getId()).getEmail();
		
	}
	@DeleteMapping("/deleteOne")
	public String deleteCustomer(@RequestBody Customer customer) {
		
		customerService.deleteCustomer(customer);
		return "Customer has been deleted";
	}
	@GetMapping("/getCustomer")
	public List<String> getCustomerDetails(@RequestBody Customer customer) {
		List <String> details = new ArrayList<>();
		details.add(customerService.getCustomer(customer.getId()).getName());
		details.add(customerService.getCustomer(customer.getId()).getEmail());
		
		return details;
		
	}
	@PostMapping("/update")
	public String updateCustomerDetails(@RequestBody Customer customer) {
		customerService.updateCustomer(customer);
		return "Customer with id " + customer.getId()+ " is updated";
	}
	@PostMapping("/addcredit")
	public String updateCredit(@RequestBody Customer customer) {
		customerService.addCredit(customer);
		//customerService.add(customer, id)
		
		return "Rs." + customer.getCredit()+ "added.";
	}
	
}

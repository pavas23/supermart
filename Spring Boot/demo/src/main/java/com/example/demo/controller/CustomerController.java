package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Service.CustomerService;
import com.example.demo.Service.HistoryService;
import com.example.demo.Service.ProductService;
import com.example.demo.model.Customer;
import com.example.demo.model.History;
import com.example.demo.model.Product;

@RestController
@RequestMapping("/customer")
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	@Autowired
	private HistoryService historyService;
	@Autowired
	private ProductService productService;
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
		try {details.add(customerService.getCustomer(customer.getId()).getName());
        details.add(customerService.getCustomer(customer.getId()).getEmail());
        return details;}
		catch(Exception e) {
		    System.out.println(e);
		    return null;
		}
		
		
		
		
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
	
	@GetMapping("/auth")
	public String auth(@RequestBody Customer customer) {
	    return customerService.isPresent(customer);
	}
	@GetMapping("/history")
	public List<History> getHistory(@RequestBody Customer customer){
	    return historyService.getCustomerHistory(customer.getId());
	}
	@PostMapping("/placeOrder")
	public String placeOrder(@RequestBody List<Product> orderList) {
	    List <History> historyList = new ArrayList<History>();
	    for(Product obj : orderList) {
	        History h = new History();
	        h.setCustomerID(1);
//	        h.setCustomerID(customer.getId());
//	        h.setAddress(address);
	        h.setProductID(obj.getId());
	        h.setQuantity(obj.getquantity());
	        Product p = productService.getProduct(obj.getId());
	        p.setquantity(p.getquantity()-obj.getquantity());
	        productService.saveProduct(p);
	        
	        historyList.add(h);
	    }
	    historyService.addList(historyList);
	    return "Order Placed";
	}
}

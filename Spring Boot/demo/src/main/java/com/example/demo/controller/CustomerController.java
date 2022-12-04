package com.example.demo.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Service.CustomerService;
import com.example.demo.Service.HistoryService;
import com.example.demo.Service.ProductService;
import com.example.demo.model.Customer;

import com.example.demo.model.History;
import com.example.demo.model.Order;
import com.example.demo.model.Product;
import com.example.demo.springmail.EmailDetails;
import com.example.demo.springmail.EmailService;

    
@RestController
@RequestMapping("/customer")
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	@Autowired
	private HistoryService historyService;
	@Autowired
	private ProductService productService;
	@Autowired
	private EmailService emailService;
		@PostMapping("/add")
	public String add(@RequestBody Customer customer) {
		customerService.saveCustomer(customer);
		return "New Customer Added";
		
	}
	@GetMapping("/getAll")
	public List<Customer> getAllCustomers(){
		return customerService.getAllCustomers();	
		
	}
	
	@DeleteMapping("/deleteOne")
	public String deleteCustomer(@RequestBody Customer customer) {
		
		customerService.deleteCustomer(customer);
		return "Customer has been deleted";
	}
	@GetMapping("/getCustomer")
	public Customer getCustomerDetails(@RequestBody Customer customer) {
		return customerService.getCustomer(customer.getId());
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
	
	
	@GetMapping("/history")
	public List<History> getHistory(@RequestBody Customer customer){
	    return historyService.getCustomerHistory(customer.getId());
	}
	@PostMapping(value = "/placeOrder" )
	public String placeOrder(@RequestBody List<Order> list) {
	    LocalDateTime ldt = LocalDateTime.now();
	    DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
	    List <History> historyList = new ArrayList<History>();
	    int total_cost=0;
	    String orders = "";
	    for(Order obj : list) {
	        Product p = productService.getProduct(obj.getProductID());
	        if(obj.getquantity()>p.getquantity()) return "OUT OF STOCK";
	        total_cost += (obj.getPrice() * obj.getquantity());
	        if(obj.getquantity()>0)
	        orders += "Product: "+ obj.getName()+" Price: \u20B9"+obj.getPrice()+" Quantity Ordered: "+obj.getquantity()+"\n";
	    }
	        
	    if(list.get(0).isExpress()) total_cost+=100;
	    
	        if(customerService.getCustomer(list.get(0).getCustomerID()).getCredit()-total_cost>=0) {
	        Customer updatedCustomer = new Customer();
	        updatedCustomer.setId(list.get(0).getCustomerID());
	        updatedCustomer.setCredit((customerService.getCustomer(list.get(0).getCustomerID()).getCredit()-total_cost));
	        customerService.updateCustomer(updatedCustomer);
	         
	    for(Order obj : list) {
	        if(obj.getquantity()==0) continue;
	        History h = new History();
	        h.setCustomerID(obj.getCustomerID());
	        h.setPrice(obj.getPrice());    
	        h.setProductID(obj.getProductID());
	        h.setQuantity(obj.getquantity());
	        h.setDate(ldt.format(myFormatObj));
	        h.setTotalCost(obj.getPrice()*obj.getquantity());
	        h.setAddress(obj.getAddress());
	        if(obj.isExpress()) {
	            h.setExpected_date(ldt.plusHours(1).format(myFormatObj));
	            h.setTotalCost(h.getTotalCost()+100);
	            h.express = obj.isExpress();
	        } else {
	            h.setExpected_date(ldt.plusHours(4).format(myFormatObj));
	        }
	        Product p = productService.getProduct(obj.getProductID());
	        
	        p.setquantity(p.getquantity()-obj.getquantity());
	       
	        productService.saveProduct(p);
	        
	        historyList.add(h);
	    }
	    historyService.addList(historyList);
	    EmailDetails ed = new EmailDetails();
	    ed.setRecipient(customerService.getCustomer(historyList.get(0).getCustomerID()).getEmail());
	    if(list.get(0).isExpress()) {
	        ed.setMsgBody("Thank you for shopping with BBB SuperMart.\n\nYour Order summary is as follows\n\n"+orders+"\n\nTotal Bill Amount: \u20B9"+total_cost+"\n\nShipping Type: Express Shipping (+\u20B9100) \n\nExpected Delivery Date: "+historyList.get(0).getExpected_date()+"\n\nDelivery Address: "+historyList.get(0).getAddress());
	    }else {
	        ed.setMsgBody("Thank you for shopping with BBB SuperMart.\n\nYour Order summary is as follows\n\n"+orders+"\n\nTotal Bill Amount: \u20B9"+total_cost+"\n\nShipping Type: Regular Shipping\\n\\nExpected Delivery Date: "+historyList.get(0).getExpected_date()+"\n\nDelivery Address: "+historyList.get(0).getAddress());
	        
	    }
	   
	    ed.setSubject("Tax invoice for "+ historyList.get(0).getDate());
	    return "Order Placed, TotalCost: "+ total_cost + " "+ list.toString() +" "+  emailService.sendSimpleMail(ed);}
	        else {
	            return "INSUFFICIENT FUNDS";
	        }
	}
}

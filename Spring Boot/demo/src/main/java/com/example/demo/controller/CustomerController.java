package com.example.demo.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Service.CartService;
import com.example.demo.Service.CustomerService;
import com.example.demo.Service.HistoryService;
import com.example.demo.Service.OrderService;
import com.example.demo.Service.ProductService;
import com.example.demo.model.Cart;
import com.example.demo.model.Customer;

import com.example.demo.model.History;
import com.example.demo.model.Order;
import com.example.demo.model.OrderList;
import com.example.demo.model.Product;
import com.example.demo.springmail.EmailDetails;
import com.example.demo.springmail.EmailService;
class Reset{
    String email;
    int number;
}
@CrossOrigin  
@RestController
@RequestMapping("/customer")
public class CustomerController {
    private String resetToken;
    String verifyotp;
    private Customer c;
	@Autowired
	private CustomerService customerService;
	@Autowired
	private HistoryService historyService;
	@Autowired
	private ProductService productService;
	@Autowired
	private EmailService emailService;
	@Autowired
	private OrderService orderService;
	@Autowired
	private CartService cartService;
		@PostMapping("/add")
	public boolean add(@RequestBody Customer customer) {
	return	customerService.saveCustomer(customer);
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
	@PostMapping("/getCustomer")
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
	
	
	@PostMapping("/history")
	public List<History> getHistory(@RequestBody Customer customer){
	    return historyService.getCustomerHistory(customer.getId());
	}
	@PostMapping(value = "/placeOrder" )
	public boolean placeOrder(@RequestBody List<Order> list) {
	    LocalDateTime ldt = LocalDateTime.now();
	    DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
	    List <History> historyList = new ArrayList<History>();
	    int total_cost=0;
	    String orders = "";
	    for(Order obj : list) {
	        Product p = productService.getProduct(obj.getProductID());
	        if(obj.getquantity()>p.getquantity()) return false;
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
	        p.setUnits_sold(obj.getquantity());
	        productService.saveProduct(p);
	        
	        historyList.add(h);
	    }
	    historyService.addList(historyList);
	    OrderList order = new OrderList();
	    order.setAddress(list.get(0).getAddress());
	    order.setCustomerID(list.get(0).getCustomerID());
	    order.setDate(ldt.format(myFormatObj));
	    order.setExpress(list.get(0).isExpress());
	    order.setTotal_cost(total_cost);
	    order.setExpected_date(ldt.plusHours(4).format(myFormatObj));
	    order.setName(customerService.getCustomer(list.get(0).getCustomerID()).getName());
	    
	    orderService.saveOrder(order);
	    EmailDetails ed = new EmailDetails();
	    ed.setRecipient(customerService.getCustomer(historyList.get(0).getCustomerID()).getEmail());
	    if(list.get(0).isExpress()) {
	        ed.setMsgBody("Thank you for shopping with BBB SuperMart.\n\nYour Order summary is as follows\n\n"+orders+"\n\nTotal Bill Amount: \u20B9"+total_cost+"\n\nShipping Type: Express Shipping (+\u20B9100) \n\nExpected Delivery Date: "+historyList.get(0).getExpected_date()+"\n\nDelivery Address: "+historyList.get(0).getAddress());
	    }else {
	        ed.setMsgBody("Thank you for shopping with BBB SuperMart.\n\nYour Order summary is as follows\n\n"+orders+"\n\nTotal Bill Amount: \u20B9"+total_cost+"\n\nShipping Type: Regular Shipping\\n\\nExpected Delivery Date: "+historyList.get(0).getExpected_date()+"\n\nDelivery Address: "+historyList.get(0).getAddress());
	        
	    }
	   
	    ed.setSubject("Tax invoice for "+ historyList.get(0).getDate());
				emailService.sendSimpleMail(ed);
	    return  true;}
	        else {
	            return false;
	        }
	}
	@PostMapping("/forgotPassword")
	public String sendResetMail(@RequestBody Customer customer) {
	     c = customerService.findByMail(customer);
	    if(c.getName()==null) {
	        return "Customer DNE";
	    }else {
	        Random rand = new Random();
	         resetToken = Integer.toString((rand.nextInt((99999 - 100) + 1) + 10));
	      //  customer.setReset_code(resetToken);
	      //  customer.setName("hii");
	        
	     //   customerService.updateCustomer(customer);
	        EmailDetails ed = new EmailDetails();
	        ed.setRecipient(customer.getEmail());
	        ed.setSubject("BBB SuperMart : Reset Password");
	        ed.setMsgBody("Reset Code is : "+resetToken);
	        emailService.sendSimpleMail(ed);
	        return resetToken;
	    }
	    
	}
	@PostMapping("/sendOTP")
    public String sendVerifyOTP(@RequestBody Customer customer) {
      
                    Random rand = new Random();
             verifyotp = Integer.toString((rand.nextInt((99999 - 100) + 1) + 10));
          //  customer.setReset_code(resetToken);
          //  customer.setName("hii");
            
         //   customerService.updateCustomer(customer);
            EmailDetails ed = new EmailDetails();
            ed.setRecipient(customer.getEmail());
            ed.setSubject("BBB SuperMart : Reset Password");
            ed.setMsgBody("Reset Code is : "+verifyotp);
            emailService.sendSimpleMail(ed);
            return "Mail with Reset Code sent "+c.getId()+" "+verifyotp;
        
        
    }
	@PostMapping("/reset")
public boolean resetPassword(@RequestBody Customer customer) {

		Customer c = customerService.findByMail(customer);
		c.setPassword(customer.getPassword());
		customerService.updateCustomer(c);
		return true;
}
	@PostMapping("/verify")
	public void verifyCustomer(@RequestBody Customer customer) {
	  Customer c = customerService.findByMail(customer);
	    c.setVerify(customer.isVerify());
	    customerService.updateCustomer(c);
	}
	@PostMapping("/getCart")
public List<Cart> getCartElements(@RequestBody Integer id){
        return cartService.getCart(id);
}
	@DeleteMapping("/deleteCart")
	public String deleteCart() {
	        cartService.deleteCart();
			return "deleted products";
	        
	}
	@PostMapping("/setCart")
	public String setCart(@RequestBody List<Cart> list) {
	    cartService.setCart(list);
		return "product added to cart";
	}
	@PostMapping("/deleteCartOne")
	public String deleteCartById(@RequestBody Cart cart) {
		// TODO Auto-generated method stub
		cartService.deleteOneItem(cart);
		return "Deleted";
	}
	
}

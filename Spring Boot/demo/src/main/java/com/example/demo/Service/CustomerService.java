package com.example.demo.Service;

import java.util.List;


import com.example.demo.model.Customer;

public interface CustomerService {
	public boolean saveCustomer(Customer customer);
	public List<Customer> getAllCustomers();
	public Customer getCustomer(int id);
	public void deleteCustomer(Customer customer);
	public void updateCustomer(Customer customer);
	public void addCredit(Customer customer);
	public String  isPresent(Customer customer);
	public void deleteById(Customer customer);
	public Customer findByMail(Customer customer);
	public void updateCustomerByMail(Customer customer);
}

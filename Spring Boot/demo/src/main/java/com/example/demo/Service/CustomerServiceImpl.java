package com.example.demo.Service;

import java.util.List;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import com.example.demo.model.Customer;

import com.example.demo.repository.*;
class CustomerException extends Exception{
    String str;
    CustomerException(String message){
        str=message;
    }
    @Override
    public String toString() {
        return str;
    }
}
@Service
public  class CustomerServiceImpl implements CustomerService {
		@Autowired
		public CustomerRepository customerRepo;
		 BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
		
	@Override
	public boolean saveCustomer(Customer customer) {
		// TODO Auto-generated method stub
	    Customer c =new Customer();
	    List <Customer> list = customerRepo.findAll();
	    for(Customer obj : list) {
	        if(obj.getEmail().equals(customer.getEmail()) && (obj.isVerify())) {
				return false;
	        }
	    }
	     Pattern pattern = Pattern.compile("f20[0-9]{6}(@hyderabad.bits-pilani.ac.in)");
	     Matcher m = pattern.matcher(customer.getEmail());
	     if(m.matches()) {
	    customer.setPassword(bCryptPasswordEncoder.encode(customer.getPassword()));

	         c=  customerRepo.save(customer);
	       // if(c.getName()==null) throw new CustomerException("Error in creating customer");


	    return true;
	}
	     else {
	         return false;
	     }
	}
	
	public Customer findByMail(Customer customer) {
	    List<Customer> list = customerRepo.findAll();
	    for(Customer obj : list) {
	        if(obj.getEmail().equals(customer.getEmail())) {
	            return customerRepo.findById(obj.getId()).get();
	        }
	    }
	    return new Customer();
	}
	

	@Override
	public List<Customer> getAllCustomers() {
		// TODO Auto-generated method stub
		return customerRepo.findAll();
	}

	@Override
	public Customer getCustomer(int id) {
		// TODO Auto-generated method stub
	    
		return (Customer) customerRepo.findById(id).get();
	}
	
	@Override
	public void deleteCustomer(Customer customer) {
		// TODO Auto-generated method stub
		int id = -1;
		List <Customer> customers = this.getAllCustomers();
		for (Customer obj : customers) {
			if((customer.getEmail().equals(obj.getEmail())) &&  bCryptPasswordEncoder.matches(customer.getPassword(), obj.getPassword())) {
				 id = obj.getId();
				 if(id >0) {
						
						customerRepo.deleteById(id);
					}
			}
		}
		
	}

	@Override
	public void updateCustomer(Customer customer) {
		

	    List <Customer> list = this.getAllCustomers();
	    for (Customer obj: list) {
	        if(obj.getId() == customer.getId()) {
	            
	            if(customer.getName()!=null) {
	                obj.setName(customer.getName());
	            }
	            if(customer.getEmail()!=null) {
	                obj.setEmail(customer.getEmail());
	            }
	            if(customer.getPassword()!=null) {

	                obj.setPassword(bCryptPasswordEncoder.encode(customer.getPassword()));
	            }
	            if(customer.getAddress()!=null) {
	                obj.setAddress(customer.getAddress());
	            }
	            if(customer.getMobileNumber()!=null) {
	                obj.setMobileNumber(customer.getMobileNumber());
	            }
	            if(customer.getCredit()>0) {
	                obj.setCredit(customer.getCredit());
	            }
	            if(customer.getReset_code()!=null) {
	                obj.setReset_code(customer.getReset_code());
	            }
				obj.setVerify(customer.isVerify());
	            customerRepo.save(obj);
	            return;
	        }
	    }
	}
	@Override
	public void updateCustomerByMail(Customer customer) {


		List <Customer> list = this.getAllCustomers();
		for (Customer obj: list) {
			if(obj.getId() == customer.getId()) {

				if(customer.getName()!=null) {
					obj.setName(customer.getName());
				}
				if(customer.getEmail()!=null) {
					obj.setEmail(customer.getEmail());
				}
				if(customer.getPassword()!=null) {
					obj.setPassword(customer.getPassword());
				}
				if(customer.getAddress()!=null) {
					obj.setAddress(customer.getAddress());
				}
				if(customer.getMobileNumber()!=null) {
					obj.setMobileNumber(customer.getMobileNumber());
				}
				if(customer.getCredit()>0) {
					obj.setCredit(customer.getCredit());
				}
				if(customer.getReset_code()!=null) {
					obj.setReset_code(customer.getReset_code());
				}
				this.saveCustomer(obj);
				return;
			}
		}
	}

	@Override
	public void addCredit(Customer customer) {
		int id = -1;
		if(customer.getCredit()<0)return;
		List <Customer> customers = this.getAllCustomers();
		for (Customer obj : customers) {
			if(customer.getEmail().equals(obj.getEmail()) && bCryptPasswordEncoder.matches(customer.getPassword(), obj.getPassword())) {
				 id = obj.getId();
				 if(id >0) {
						Customer updatedCustomer = new Customer();
						updatedCustomer.setId(id);
						updatedCustomer.setName(obj.getName());
						updatedCustomer.setEmail(obj.getEmail());
						updatedCustomer.setCredit(obj.getCredit()+customer.getCredit());
						customerRepo.save(updatedCustomer);
					}
			}
		}
		
	}

    @Override
    public String  isPresent(Customer customer) {
        // TODO Auto-generated method stub
        List <Customer> customers = this.getAllCustomers();
        for(Customer obj : customers) {
            if( customer.getPassword().equals(obj.getPassword())) {
                return obj.getPassword();
            }
        }
        
        return customer.getPassword() + "if failed";
    }

    @Override
    public void deleteById(Customer customer) {
        // TODO Auto-generated method stub
        customerRepo.deleteById(customer.getId());
    }

 

	
	
}

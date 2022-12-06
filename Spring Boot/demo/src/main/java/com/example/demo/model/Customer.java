package com.example.demo.model;





import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String email;
	private int credit=1000;
	private String password;
	private String address;
	private String mobileNumber;
	private String reset_code; 
	
	public Customer(){
	    reset_code = "-1";
		credit=1000;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getCredit() {
		return credit;
	}
	public void setCredit(int credit) {
		this.credit = credit;
	}
    public String getPassword() {
        return password;
    }
   
    public void setPassword(String password) {
        
        this.password = password;
        
        
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getMobileNumber() {
        return mobileNumber;
    }
    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }
    public String getReset_code() {
        return reset_code;
    }
    public void setReset_code(String reset_code) {
        this.reset_code = reset_code;
    }
	
	
}

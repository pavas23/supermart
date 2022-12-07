package com.example.demo.model;





import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
public class Customer extends User{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private int credit=1000;
	
	private String reset_code; 
	
	public Customer(){
	    reset_code = "-1";
		credit=1000;
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
   
    
    public String getReset_code() {
        return reset_code;
    }
    public void setReset_code(String reset_code) {
        this.reset_code = reset_code;
    }
	
	
}

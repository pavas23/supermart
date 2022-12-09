package com.example.demo.model;





import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
public class Customer extends User{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private int credit=1000;
	@Transient
	private String reset_code; 
	private String review;
	private boolean verify;
	
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
//	public String getPassword() {
//		return super.getPassword();
//	}
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

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public boolean isVerify() {
        return verify;
    }

    public void setVerify(boolean verify) {
        this.verify = verify;
    }
	
	
}

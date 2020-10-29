import React from 'react'; 
import { render, screen, fireEvent } from "@testing-library/react"; 
import ContactForm from './ContactForm'; 


test('renders contact for without errors', () => {
    render(<ContactForm />)
})



test('user can fill out form', () => {

    //render the component
    render(<ContactForm />); 


    //get access to form fields
    const firstNameInput = screen.getByLabelText(/first name/i); 
    const lastNameInput = screen.getByLabelText(/last name/i); 
    const emailInput = screen.getByLabelText(/emai/i); 
    const messageInput = screen.getByLabelText(/message/i);


    








})
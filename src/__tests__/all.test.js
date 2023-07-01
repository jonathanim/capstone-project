
import { render, screen } from "@testing-library/react";
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Header from "../components/Header";

import ReservationForm from "../components/ReservationForm";


describe("testing all components", ()=>{
    test('should render App Component', () => {
        const testComponent = <BrowserRouter><App/></BrowserRouter>
        render(testComponent)

})
    test('should render Header Component', () => {
    render(<Header/>)
    const headingElement = screen.getByText(/little lemon/i)
    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toHaveTextContent('Little Lemon')
   
})

test('should render Reservation Form Component', () => {
    render(<ReservationForm/>)
    const formElement =  screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
    const buttonElement = screen.getByText(/reserve today/i)
    expect(buttonElement).toBeInTheDocument()
})

})
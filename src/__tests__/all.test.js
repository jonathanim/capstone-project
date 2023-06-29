
import { render, screen, cleanup } from "@testing-library/react";
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Header from "../components/Header";


describe("testing all components", ()=>{
    test('should render App Component', () => {
        const testComponent = <BrowserRouter><App/></BrowserRouter>
        render(testComponent)

})
    test('should render Header Component', () => {
    render(<Header/>)
    const h1 = screen.getByTestId('test-1')
    
    expect(h1).toBeInTheDocument()
    expect(h1).toHaveTextContent('Little Lemon')
})



})
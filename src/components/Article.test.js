import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen } from '@testing-library/react'

const testArticle = {
    id: 100,
    headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
    createdOn: Date.now(),
    author:"",
    image: 134,
    summary: "Triple-digit temperatures led to a spike in demand across the region.",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
}

test('renders component without errors', ()=> {
    render(<Article article={testArticle} />)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={{...testArticle, author: "Samuel Clemens"}} />)

    const headline = screen.getByText(testArticle.headline)
    const author = screen.getByText(/samuel clemens/i)

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticle} />)

    const author = screen.getByText(/associated press/i)

    expect(author).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', async ()=> {
    const mockHandleDelete = jest.fn();
    render(<Article article={testArticle} handleDelete={mockHandleDelete} />)
    const deleteButton = screen.queryByTestId(/deletebutton/i)

    userEvent.click(deleteButton);

    expect(mockHandleDelete).toHaveBeenCalled()
});

//Task List:
//1. Complete all above tests. Create test article data when needed.
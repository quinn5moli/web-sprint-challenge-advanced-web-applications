import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen } from '@testing-library/react'

const testArticle = {
    id: 1224,
      headline: "Community College of Philadelphia to require vaccines, the first public college in the region to do so.",
      createdOn: Date.now(),
      author: "Susan Snyder",
      image: 175,
      summary: "The requirement, which will allow exemptions for medical and religious reasons, won’t be in place for the start of the semester.",
      body: "The Pennsylvania State System of Higher Education has said its 14 public universities, including West Chester and Cheyney, don’t have the authority to require a vaccine and would need legislation. Neither Pennsylvania State University nor Temple University, which are state-related, have required the vaccines either."
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
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import articleService from "../services/articleServices";

jest.mock("../services/articleServices");

const testArticles = [
    {
        id: 100,
        headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
        createdOn: Date.now(),
        author:"",
        image: 134,
        summary: "Triple-digit temperatures led to a spike in demand across the region.",
        body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
    },
    {
        headline: "A tropical depression could form in the next few days, forecasters say",
        id: 101,
        createdOn: Date.now(),
        author: "Alex Harris",
        image: 171,
        summary: "Forecasters said the system will likely turn into a tropical depression late this weekend or early next week as it moves west-northwest.",
        body: "Forecasters continue to monitor a disturbance in the far eastern Atlantic that has a high chance of turning into a tropical depression in the next few days. They’re also watching another system that’s quickly moving across the Atlantic, though its formation chances remain fairly low."
    },
    {
        id: 102,
        createdOn: Date.now(),
        author: "Jordan Mcpherson",
        image: 338,
        headline: "How Hialeah’s Ariel Torres won a bronze metal",
        summary: "South Florida found its way to the podium in karate’s first-ever showing in the Olympics.",
        body: "Torres, who entered the Olympics ranked No. 6 in the world and as the top male Team USA Olympian in kata, reached his bronze medal bout by finishing second in his pool in each of the first three rounds behind eventual silver medalist Damian Quintero of Spain. Torres outscored Venezuela’s Antonio Jose Diaz Fernandez 26.72-26.34 for the bronze. Japan’s Ryo Kiyuna won gold, while Turkey’s Ali Sofuoglu beat South Korea’s Heejun Park for the second bronze of the event."
    }
]

test("renders zero articles without errors", () => {
    render(<View articles={[]} />);
});

test("renders three articles without errors", async ()=> {
    articleService.mockResolvedValueOnce(testArticles);
    render(<View/>);
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.
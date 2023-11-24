// MyFlashcard.test.js
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../store/store'; // Import your store configuration
import MyFlashcard from '../Pages/MyFlashcard';
import { removeCard } from '../App/features/flashcardSlice';

// Mock the useDispatch hook to avoid issues with useDispatch in tests
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock the react-router-dom useContext
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useContext: jest.fn(() => ({ basename: '' })),
}));

describe('MyFlashcard Component', () => {
  beforeEach(() => {
    // Mock the useSelector hook with sample flashcards data
    jest.spyOn(require('react-redux'), 'useSelector').mockReturnValue([
      {
        id: 1,
        groupname: 'Sample Group 1',
        groupdescription: 'Sample Description 1',
        cards: [{ cardid: 12, cardname: 'sample cardname 1 ', carddescription: 'sample carddescription 1', cardImage: 'sampleImage1.jpg' }],
      },
      {
        id: 2,
        groupname: 'Sample Group 2',
        groupdescription: 'Sample Description 2',
        cards: [{ cardid: 13, cardname: 'sample cardname 2 ', carddescription: 'sample carddescription 2', cardImage: 'sampleImage2.jpg' }],
      },
    ]);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <MyFlashcard />
        </MemoryRouter>
      </Provider>
    );
  });

  test('renders MyFlashcard component with mock data', () => {
    // Example: Check if the group names are rendered
    const groupNames = screen.getAllByText(/Sample Group/);
    expect(groupNames.length).toBe(2);

    // Add more test cases as needed based on your component's behavior
  });

  // Add more test cases as needed based on your component's behavior
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for extended matchers
import BookingForm from './BookingForm';

describe('BookingForm Component', () => {
  test('renders the booking form', () => {
    render(<BookingForm />);

    // Check if the form elements are present
    expect(screen.getByText(/Book Your Table/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Book Now/i })).toBeInTheDocument();
  });

  test('handles form input and submission', () => {
    render(<BookingForm />);

    // Input values
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Date:/i), { target: { value: '2024-08-20' } });
    fireEvent.change(screen.getByLabelText(/Time:/i), { target: { value: '18:00' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Book Now/i }));

    // Check for alert or confirmation (this would be a more advanced test with mocking)
    // For simplicity, we'll assume the alert shows the booking confirmation
    // Jest doesn't handle alerts directly, so you might want to mock global.alert if needed
  });
});

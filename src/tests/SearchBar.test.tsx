import { fireEvent, screen } from '@testing-library/react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import renderWithRouter from '../helpers/renderWithRouter';
import SearchBar from '../components/SearchBar/SearchBar';
import ProductContext from '../context/ProductContext';
import { mockContext } from './mocks/mockContext';

library.add(faSearch); // Add the icon to the library so it can be used in the test

const PLACEHOLDER = 'Buscar...';

const getInput = () => screen.getByPlaceholderText(PLACEHOLDER) as HTMLInputElement;

describe('Testing the SearchBar.tsx file', () => {
  beforeEach(() => {
    renderWithRouter(
      <ProductContext.Provider value={ mockContext }>
        <SearchBar />
      </ProductContext.Provider>,
    );
  });

  it('should be able to type into search input', () => {
    const input = getInput();
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  it('should call filterByString function on enter key press', () => {
    const input = getInput();
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(mockContext.filterByString).toHaveBeenCalledWith('test');
  });

  it('should search input be empty after search icon click', () => {
    const input = getInput();
    fireEvent.change(input, { target: { value: '' } });

    const searchIcon = screen.getByTestId('search-icon');
    fireEvent.click(searchIcon);

    expect(input.value).toBe('');
  });
});

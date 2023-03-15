import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    const sut = createSut('Air Max 720', 1200);
    expect(sut).toHaveProperty('name', 'Air Max 720');
    expect(sut.price).toBeCloseTo(1200);
  });
});

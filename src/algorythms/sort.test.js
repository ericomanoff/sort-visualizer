import quickSort from './quickSort'
describe('sort algorythms', () => {
  it('it should quick sort', () => {
    const given = [5, 3, 8, 9, 4, 1, 2, 7, 6]
    const want = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const got = quickSort(given)
    expect(got).toEqual(want)
  });
});
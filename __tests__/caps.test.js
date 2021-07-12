const caps = require('../caps');

describe('caps tests', () => {
  test('tets pick up  ', async () => {
    await expect(caps()).toEqual(
      'Thank you for delivering ORDER_ID : e75460ee-122d-4db9-93a3-c85af3e11b43'
    );
  });

  test('tets deliver  ', async () => {
    await expect(caps()).toEqual(
      '"DRIVER: picked up ORDER_ID : 1b779a59-8d9d-4c26-a72d-4c57eac32cd1 "'
    );
  });
});

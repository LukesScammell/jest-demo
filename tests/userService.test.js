const fetchUser = require('../src/userService');

// Create a fake "fetch" before tests run
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ id: 1, name: 'Leanne Graham' })
  })
);

test('fetches user data correctly', async () => {
  const user = await fetchUser(1);
  expect(user.name).toBe('Leanne Graham');
  expect(global.fetch).toHaveBeenCalledTimes(1);
});
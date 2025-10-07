// weatherService.test.js
const { getWeather } = require("../src/weatherService");

beforeEach(() => {
  global.fetch = jest.fn(); // reset mock before each test
});

test("should return weather data successfully", async () => {
  const mockData = { temp: 18, city: "Nelson" };

  // Mock a successful fetch call
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockData,
  });

  const result = await getWeather("Nelson");
  expect(result).toEqual(mockData);
  expect(fetch).toHaveBeenCalledWith("https://api.example.com/weather?city=Nelson");
});

test("should throw an error when fetch fails", async () => {
  // Mock a failed fetch call
  fetch.mockResolvedValueOnce({
    ok: false,
  });

  await expect(getWeather("Nelson")).rejects.toThrow("Failed to fetch weather data");
});

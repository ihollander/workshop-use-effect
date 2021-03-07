import { render } from "@testing-library/react";
// import App from "../exercise/01";
import App from "../solution/01";

describe("Exercise 01", () => {
  test("renders without crashing", () => {
    render(<App />);
    expect(true).toBe(true);
  });
});

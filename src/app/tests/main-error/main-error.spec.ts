import { mainError } from "./main-error";

describe("mainError", () => {
  it('should return true if an error is thrown', () => {
    const result = mainError();
    expect(result).toBe(true);
  })
});
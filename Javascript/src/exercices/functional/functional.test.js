import {
  numbers,
  sum,
  notHigherThan50,
  checkIfAtLeastOneElementIsHigherThan10000,
  divideByTwoThenCheckIfNumbersAreLowerThan500,
  getFirstElementHigherThan50
} from "./functional";

describe("Functional programming", () => {
  it("should return sum elements", () => {
    expect(sum(numbers)).toMatchSnapshot();
  });

  it("should return elements not higher than 50", () => {
    expect(notHigherThan50(numbers)).toMatchSnapshot();
  });

  it("should return true if at least one element is higher than 10 000", () => {
    expect(
      checkIfAtLeastOneElementIsHigherThan10000(numbers)
    ).toMatchSnapshot();
  });

  it("should return if all numbers divided by two are lower than 500", () => {
    expect(
      divideByTwoThenCheckIfNumbersAreLowerThan500(numbers)
    ).toMatchSnapshot();
  });

  it("should return the first element higher than 500", () => {
    expect(getFirstElementHigherThan50(numbers)).toMatchSnapshot();
  });
});

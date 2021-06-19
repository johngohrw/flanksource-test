describe("Sample tests", () => {
  let hello;

  beforeEach(() => {
    hello = "world";
  });

  it("is created empty", () => {
    expect(hello).toBe("world");
  });
});

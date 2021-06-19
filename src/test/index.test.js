describe("Sample tests", () => {
  let hello;

  beforeEach(() => {
    hello = "world";
  });

  it("test suites are working", () => {
    expect(hello).toBe("world");
  });
});

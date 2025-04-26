import { expect, describe, it, beforeEach } from "vitest";
import { saveUser, getUsername } from "./storage";

describe("getUserName", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Returns the name from the user object in local storage", () => {
    saveUser({ name: "John" });
    expect(getUsername()).toBe("John");
  });

  it("Returns null when no user exists in local storage", () => {
    expect(getUsername()).toBe(null);
  });
});

import { expect, describe, it } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath returns", () => {
  it("Returns true when current path matches href exactly", () => {
    expect(isActivePath("/index.html", "/index.html")).toBe(true);
  });

  it("Returns true for root path ('/') when path is '/' or '/index.html'", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("Returns true when current path includes the href", () => {
    expect(isActivePath("/register", "/register/index.html")).toBe(true);
  });

  it("Returns false when paths don't match", () => {
    expect(isActivePath("/", "/about")).toBe(false);
    expect(isActivePath("/login", "/venue")).toBe(false);
  });
});

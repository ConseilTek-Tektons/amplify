import { describe, expect, it } from "vitest";
import { hasPermission, resolveRolesFromClaims } from "./rbac";

describe("Amplify RBAC", () => {
  it("grants wildcard permissions to administrators", () => expect(hasPermission(["admin"], "settings.manage")).toBe(true));
  it("keeps access policy away from operators", () => expect(hasPermission(["publisher"], "access.manage")).toBe(false));
  it("maps identity groups", () => expect(resolveRolesFromClaims({ groups: ["amplify-managers"] })).toEqual(["social_admin"]));
});

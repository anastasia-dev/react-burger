import { activeTabReducer } from "./activeTabReducer";

describe("active tab reducer", () => {
    it("should return the active tab reducer inital state", () => {
        expect(activeTabReducer(undefined, {})).toEqual({ activeTab: "one" });
    })
    
    it("should handle SET_ACTIVE_TAB", () => {
        testActiveTab("two");
        testActiveTab("three");
    })
});

const testActiveTab = (activeTabString) => {
    const type = "SET_ACTIVE_TAB";
    expect(activeTabReducer({}, { type: type, activeTab: activeTabString })).toEqual({ activeTab: activeTabString});
}
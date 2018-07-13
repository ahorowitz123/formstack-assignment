import getSortedItems from ".";

describe("selector tests", () => {
  const mockInitialState = {
    items: [
      {
        id: 0,
        text: "What is your favorite food?",
        itemType: "Multiple Choice",
        createdTimestamp: 1531409579150
      },
      {
        id: 1,
        text: "What is your primary language?",
        itemType: "Dropdown",
        createdTimestamp: 1531409479150
      },
      {
        id: 2,
        text: "How do you feel about the weather today?",
        itemType: "Text Box",
        createdTimestamp: 1531409489150
      }
    ],
    selectedId: -1,
    sortType: "None"
  };

  describe("handle no sort", () => {
    const newItems = getSortedItems(mockInitialState);

    it("has first item with id 0", () => {
      expect(newItems[0].id).toBe(0);
    });
    it("has second item with id 1", () => {
      expect(newItems[1].id).toBe(1);
    });
    it("has third item with id 2", () => {
      expect(newItems[2].id).toBe(2);
    });
  });

  describe("handle Text sort", () => {
    const newState = {
      ...mockInitialState,
      sortType: "Text"
    }
    const newItems = getSortedItems(newState);

    it("has first item with id 2", () => {
      expect(newItems[0].id).toBe(2);
    });
    it("has second item with id 0", () => {
      expect(newItems[1].id).toBe(0);
    });
    it("has third item with id 1", () => {
      expect(newItems[2].id).toBe(1);
    });
  });

  describe("handle Type sort", () => {
    const newState = {
      ...mockInitialState,
      sortType: "Type"
    }
    const newItems = getSortedItems(newState);

    it("has first item with id 1", () => {
      expect(newItems[0].id).toBe(1);
    });
    it("has second item with id 0", () => {
      expect(newItems[1].id).toBe(0);
    });
    it("has third item with id 2", () => {
      expect(newItems[2].id).toBe(2);
    });
  });

  describe("handle Timestamp sort", () => {
    const newState = {
      ...mockInitialState,
      sortType: "Timestamp"
    }
    const newItems = getSortedItems(newState);

    it("has first item with id 1", () => {
      expect(newItems[0].id).toBe(1);
    });
    it("has second item with id 2", () => {
      expect(newItems[1].id).toBe(2);
    });
    it("has third item with id 0", () => {
      expect(newItems[2].id).toBe(0);
    });
  });
});

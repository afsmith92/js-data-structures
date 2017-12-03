const LinkedList = require("../../src/main/LinkedList");
const { assert } = require("chai");

describe("The LinkedList class", () => {
    describe("add function", () => {
        let list;

        beforeEach(() => {
            list = new LinkedList();
        });

        describe("when given an undefined value", () => {
            it("returns false", () => {
                assert.isFalse(
                    list.add(undefined)
                );
            });
        });

        describe("when adding to an empty list", () => {
            let added;

            beforeEach(() => {
                added = list.add(42);
            });

            it("sets the 'first' pointer to the new node", () => {
                assert.equal(
                    list.first.data, 42
                );
            });

            it("sets the 'last' pointer to the new node", () => {
                assert.equal(
                    list.last.data, 42
                );
            });

            it("adds the node", () => {
                assert.deepEqual(
                    list.first,
                    {
                        data: 42,
                        next: null
                    }
                );
            });

            it("returns true", () => {
                assert.isTrue(added);
            });
        });

        describe("when adding to a nonempty list", () => {
            let added;

            beforeEach(() => {
                list.add(42);
                added = list.add(0,);
            });

            it("sets the 'last' pointer to the new node", () => {
                assert.equal(
                    list.last.data, 0
                );
            });

            it("adds the node", () => {
                assert.deepEqual(
                    list.last,
                    {
                        data: 0,
                        next: null
                    }
                );
            });

            it("returns true", () => {
                assert.isTrue(added);
            });
        });
    });

    describe("remove function", () => {
        let list;

        beforeEach(() => {
            list = new LinkedList();
        });

        describe("when given a nonexistent value", () => {
            it("returns false", () => {
                assert.isFalse(
                    list.remove("something, something")
                );
            });
        });

        describe("when the list is empty", () => {
            it("returns false", () => {
                assert.isFalse(
                    list.remove("something, something")
                );
            });
        });

        describe("when prompted to delete the only node in the list", () => {
            let removed;

            beforeEach(() => {
                list.add(42);
                removed = list.remove(42);
            });

            it("nulls the 'first' pointer", () => {
                assert.isNull(list.first);
            });

            it("nulls the 'last' pointer", () => {
                assert.isNull(list.last);
            });

            it("returns true", () => {
                assert.isTrue(removed);
            });
        });

        describe("when prompted to delete the first node in the list", () => {
            let removed;

            beforeEach(() => {
                list.add(42);
                list.add(0);
                removed = list.remove(42);
            });

            it("sets the 'first' pointer to the next node", () => {
                assert.equal(
                    list.first.data, 0
                );
            });

            it("returns true", () => {
                assert.isTrue(removed);
            });
        });

        describe("when prompted to delete the last node in the list", () => {
            let removed;

            beforeEach(() => {
                list.add(42);
                list.add(0);
                removed = list.remove(0);
            });

            it("sets the 'last' pointer to the previous node", () => {
                assert.equal(
                    list.last.data, 42
                );
            });

            it("returns true", () => {
                assert.isTrue(removed);
            });
        });
    });

    describe("reverse function", () => {
        it("reverses the list", () => {
            const list = new LinkedList();
            list.add("one");
            list.add("two");
            list.add("three");

            list.reverse();

            assert.deepEqual(
                list.toArray(),
                ["three", "two", "one"]
            );
        });
    });
});

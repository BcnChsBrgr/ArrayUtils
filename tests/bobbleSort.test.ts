import { describe, expect, test } from "@jest/globals";
import { ArrayUtils } from "../ArrayUtils";

describe("test 1 - numbers: 1 ,2, 3, 4", () => {
    const _temp = new ArrayUtils(3, 4, 1, 2);
    test("1, 2, 3, 4 asc", () => {
        expect(_temp.bobbleSort()).toEqual([1, 2, 3, 4]);
    });
    test("1, 2, 3, 4 desc", () => {
        expect(_temp.bobbleSort("desc")).toEqual([4, 3, 2, 1]);
    });
});

describe("test 2 - string: 'a', 'b', 'c', 'd'", () => {
    const _temp = new ArrayUtils("c", "a", "d", "b");
    test("a,b,c,d asc", () => {
        expect(_temp.bobbleSort()).toEqual(["a", "b", "c", "d"]);
    });
    test("a,b,c,d desc", () => {
        expect(_temp.bobbleSort("desc")).toEqual(["d", "c", "b", "a"]);
    });
});

describe("test 3 - Array of object", () => {
    const _obj = new ArrayUtils(
        { a: 50, b: 124, c: 6 },
        { a: 1, b: 26, c: 4 },
        { a: 100, b: -1, c: 2 },
        { a: 10, b: -14, c: 5 }
    );
    test("object => exception (missing key)", () => {
        expect(() => {
            _obj.bobbleSort();
        }).toThrow("Missing key for the object.");
    });

    test("object => asc order with key 'a'", () => {
        expect(_obj.bobbleSort("asc", "a")).toEqual([
            { a: 1, b: 26, c: 4 },
            { a: 10, b: -14, c: 5 },
            { a: 50, b: 124, c: 6 },
            { a: 100, b: -1, c: 2 },
        ]);
    });

    test("object => desc order with key 'b' (includes -ve value)", () => {
        expect(_obj.bobbleSort("desc", "b")).toEqual([
            { a: 50, b: 124, c: 6 },
            { a: 1, b: 26, c: 4 },
            { a: 100, b: -1, c: 2 },
            { a: 10, b: -14, c: 5 },
        ]);
    });
});

describe("test 4 - Array of Map", () => {
    const _a = new Map();
    _a.set("a", 50).set("b", 124).set("c", 6);
    const _b = new Map();
    _b.set("a", 1).set("b", 26).set("c", 4);
    const _c = new Map();
    _c.set("a", 100).set("b", -1).set("c", 2);
    const _d = new Map();
    _d.set("a", 10).set("b", -14).set("c", 5);

    const _map = new ArrayUtils(_a, _b, _c, _d);
    test("object => exception (missing key)", () => {
        expect(() => {
            _map.bobbleSort();
        }).toThrow("Missing key for the object.");
    });

    test("object => asc order with key 'a'", () => {
        expect(_map.bobbleSort("asc", "a")).toEqual([_b, _d, _a, _c]);
    });

    test("object => desc order with key 'b' (includes -ve value)", () => {
        expect(_map.bobbleSort("asc", "b")).toEqual([_d, _c, _b, _a]);
    });
});

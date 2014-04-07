var assert = require("power-assert");

describe("Tests", function ()
{
    it("should work", function ()
    {
        var a = 12;
        var b = "foo";

        assert(a !== b);
    })
})
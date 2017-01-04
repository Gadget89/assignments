// testSpec
describe("check if 'newFile' is connected", function(){
  // Declared files & modules for test
  var newFile;
  var jsdom = require("jsdom");
  beforeEach(function(){
    document = jsdom.jsdom(`<h1 data-js="TEST"> "This test works!" </h1>`)
    window = document.defaultView;
    newFile = require("../js/newFile.js");
  });

  describe("TEST", function(){
    it("should show if this test works", function(){
      expect(newFile.testElement.innerHTML).toBe("Test Works!")
    })
  })
});

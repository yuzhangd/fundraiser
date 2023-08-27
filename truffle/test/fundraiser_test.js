const FundraiserContract = artifacts.require("Fundraiser");

contract("Fundraiser", accounts => {
  let fundraiser;
  const name = "Beneficiary Name";
  const url = "yuzhangdu.com";
  const imageURL = "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/01/steve-jobs-og-iphone.jpg?w=1500&quality=82&strip=all&ssl=1";
  const description = "Beneficiary description";
  const beneficiary = accounts[1];
  const custodian = accounts[0];


  beforeEach(async () => {
    fundraiser = await FundraiserContract.new(
      name,
      url,
      imageURL,
      description,
      beneficiary,
      custodian
      )
  });

  describe("initialization", () => {
    it("gets the beneficiary name", async () => {
      const actual = await fundraiser.name();
      assert.equal(actual, name, "names should match");
    });

    it("gets the beneficiary url", async () => {
      const actual = await fundraiser.url();
      assert.equal(actual, url, "url should match");
    });

    it("gets the beneficiary image url", async () => {
      const actual = await fundraiser.imageURL();
      assert.equal(actual, imageURL, "imageURL should match");
    });

    it("gets the beneficiary description", async () => {
      const actual = await fundraiser.description();
      assert.equal(actual, description, "description should match");
    });

    it("gets the beneficiary", async () => {
      const actual = await fundraiser.beneficiary();
      assert.equal(actual, beneficiary, "beneficiary addresses should match");
    });

    it("gets the custodian", async () => {
      const actual = await fundraiser.custodian();
      assert.equal(actual, custodian, "bios should match");
    });

  });
});



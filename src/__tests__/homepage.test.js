// src/__tests__/homepage.test.js

const puppeteer = require("puppeteer");

describe("OpenReplay.com page", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  }, 30000); // Set the timeout to 30000 ms (30 seconds)

  it("should contain text", async () => {
    await page.goto("https://openreplay.com/", { waitUntil: 'networkidle2' });
    await page.waitForSelector(".display-4");
    const text = await page.$eval(".display-4", (e) => e.textContent);
    expect(text).toContain(`Session replay`);
  });

  afterAll(() => {
    // Add a check to ensure browser is defined before trying to close it
    if (browser) {
      browser.close();
    }
  });
});

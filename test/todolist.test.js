const { expect } = require('chai');
const puppeteer = require('puppeteer')

describe('First Test', () => {
    let browser, page

    before(async () => {
        browser = await puppeteer.launch({
            headless: false
        })
        page = await browser.newPage()
    })

    beforeEach(async () => {
        page = await browser.newPage()
        await page.goto('http://localhost:9000')
    })

    afterEach(async () => {
        await page.close()
    })

    after(async () => {
        await browser.close()
    })

    it('input field should exist on the page', async () => {
        const expectedInput = "Enter a task"
        const text = await page.evaluate(() => {
            return document.querySelector('#taskin').placeholder})
        expect(text).to.equal(expectedInput)
    })
})
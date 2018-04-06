const { expect } = require('chai');
const puppeteer = require('puppeteer')

describe('First Test', () => {
    let browser, page

    before(async () => {
        browser = await puppeteer.launch({
            headless: true
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

    //first test
    it('input field should exist on the page', async () => {
        const expectedInput = "Enter a task"
        const text = await page.evaluate(() => {
            return document.querySelector('#taskin').placeholder})
        expect(text).to.equal(expectedInput)
    })

    it('should add item to the list', async() => {
        const expectedInput = "Learn async/await contruction"
        await page.type('#taskin', expectedInput)
        await page.click('#task')
        await page.waitForSelector('#todo > li')
        const createdTask = await page.evaluate(() => {
            return document.querySelector('#todo > li').textContent
        })
        expect(createdTask).to.include(expectedInput)

        await page.screenshot({path: 'test/screens/test.png'});
    })


})
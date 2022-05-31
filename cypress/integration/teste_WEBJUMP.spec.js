import webjumpPage from '../pages/webjumpPage'

describe ('Software Test Analyst Challenge at WEBJUMP', () => {
    it ('WEBJUMP test', () => {

        webjumpPage.access()
        webjumpPage.clickButtons()
        webjumpPage.checkButtonsNotVisble()
        webjumpPage.clickIframeButtons()
        webjumpPage.checkIframeButtonsNotVisble()
        webjumpPage.resetIframe()
        webjumpPage.fillYourFirstNameIframe()
        webjumpPage.clickIframeOneButton()
        webjumpPage.checkIframeOptionThree()
        webjumpPage.selectIframeOptionTwo()
        webjumpPage.checkImgSeleniumBeVisible()
    })
})
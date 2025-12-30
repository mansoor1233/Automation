export class NavigationPage {



    constructor(page) {

        this.page = page;
        this.Apptabmenu = "//div[@data-testid='VirtualNavigationHeaderLayout-tabs-wrapper']//ul//li[2]//a";
        this.cardselection = "//div[contains(@class,'ContentLayout---card')][.//text()[normalize-space()='Audit']]";
        this.formcard = "//div[contains(@class,'ContentLayout---card_choice_template_stacked_tile')][.//text()[contains(.,'Auditors Appointment')]]";
    }

    async waitForAppToLoad() {
        await this.page.waitForLoadState('domcontentloaded');
        //await this.page.waitForLoadState('networkidle');
    }


    async openAuditformsection() {
        await this.waitForAppToLoad();

        // 1️⃣ Click Apps tab
        await this.page.locator(this.Apptabmenu).click();

        // 2️⃣ Wait for cards container (not the card itself)
        // await this.page.waitForSelector('div.ContentLayout---card', {
        //     timeout: 60000,
        // });
        // 🔹 STEP 2: Click Audit card
        const auditCard = this.page.locator(this.cardselection).first();
        //await auditCard.waitFor({ state: 'attached', timeout: 60000 });
        await auditCard.scrollIntoViewIfNeeded();
        await auditCard.click({ trial: true }); // ✅ check clickability
        await auditCard.click();


        // 🔹 STEP 3: Click Form card
        const formCard = this.page.locator(this.formcard).first();
        //await formCard.waitFor({ state: 'attached', timeout: 60000 });
        await formCard.scrollIntoViewIfNeeded();
        await formCard.click({ trial: true });
        await formCard.click();


    }



    // async openAuditformsection() {

    //     await this.page.click(this.Apptabmenu);
    //     await this.page.click(this.cardselection);
    //     await this.page.click(this.formcard);



    // }




}
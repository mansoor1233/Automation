const path = require('path');

export class AuditFormPage {


    constructor(page) {
        this.page = page;
    }

    async selectEntity(entity) {
        await this.page.getByRole('combobox')
            .filter({ hasText: '--Select Entity--' }).click();
        await this.page.getByRole('option', { name: entity }).click();
    }

    async selectBranch(branch) {
        await this.page.getByRole('combobox')
            .filter({ hasText: '--Select Branch--' }).click();
        await this.page.getByRole('option', { name: branch }).click();
    }

    async selectDepartment(dept) {
        await this.page.getByRole('combobox')
            .filter({ hasText: '--Select Department--' }).click();
        await this.page.getByRole('option', { name: dept }).click();
    }

    async fillTextFields(subject, auditorName, auditorcountry) {
        await this.page.locator("(//div[contains(@class,'TextInput---container')]//input)[1]").fill(subject);
        await this.page.locator("(//div[contains(@class,'TextInput---container')]//input)[2]").fill(auditorName);
        await this.page.locator("(//div[contains(@class,'TextInput---container')]//input)[3]").fill(auditorcountry);
    }

    async selectAuditorStatus(auditorstatus) {
        await this.page.getByRole('combobox')
            .filter({ hasText: '--- Select a Value ---' }).click();
        await this.page.getByRole('option', { name: auditorstatus }).click();
    }
    async selectAuditType(auditType) {
        await this.page.getByRole('combobox').filter({ hasText: '---Select Type of Audit----' }).click(); //Auditor Type
        await this.page.getByRole('option', { name: auditType }).click();
    }
    async selectscopedefinition(scope) {
        await this.page.getByRole('combobox').filter({ hasText: '---Select a Value----' }).click(); //Scopedefinition
        await this.page.getByRole('option', { name: scope }).click();
    }

    async selectFinancialyr(year) {
        await this.page.getByRole('combobox').filter({ hasText: '-------Select Value-------' }).click(); //finanicial year
        await this.page.getByRole('option', { name: year }).click();

    }
    async feequoted(fee) {
        await this.page.locator("(//div//input[@class='TextInput---text TextInput---align_end'])[1]").fill(fee);//fee
    }
    

    async radioactive() {
        await this.page.click("(//div[contains(@class,'RadioSelect---choice_pair')])[2]");
    }

    async reasonforover(reason) {

        await this.page.locator("(//input[@class='TextInput---text TextInput---align_start TextInput---inSideBySideItem'])[2]").fill(reason);

    }
    async uploadFirstQuotation(FirstfileName) {
        console.log('Received filename:', FirstfileName);

        const filePath = path.resolve(__dirname, '../uploads', FirstfileName);
        console.log('Resolved file path:', filePath);

        await this.page
            .locator('input[type="file"]')
            .first()
            .setInputFiles(filePath);
    }


    // async uploadFirstQuotation(FirstfileName) {
    //     const filePath = path.resolve(`uploads/${FirstfileName}`);
    //     await this.page.locator("(//div//button//span[contains(text(),'Upload')])[1]").setInputFiles(filePath);
    // }
    async Justification(text) {
        await this.page.locator("//div[@role='textbox']").fill(text)
    }

    async selectBudgetLine(budgetline) {
        await this.page.getByRole('combobox')
            .filter({ hasText: '--Select  value--' }).click();
        await this.page.getByRole('option', { name: budgetline }).click();
    }
    async Historicalinfoyr(year1) {
        await this.page.locator("//div[contains(@class,'Field')]//input[@class='TextInput---text TextInput---center']").fill(year1);

    }

    async auditfirmname(names) {
        const nameInputs = this.page.locator("(//div//input[@type='text'][@placeholder='Enter your text |'])");
        for (let i = 0; i < names.length; i++) {

            await nameInputs.nth(3 + i).fill(names[i]);

        }
    }

    // await this.page.locator("(//div//input[@type='text'][@placeholder='Enter your text |'])[3]").fill(name1);
    // await this.page.locator("(//div//input[@type='text'][@placeholder='Enter your text |'])[4]").fill(name2);
    // await this.page.locator("(//div//input[@type='text'][@placeholder='Enter your text |'])[5]").fill(name3);
    // await this.page.locator("(//div//input[@type='text'][@placeholder='Enter your text |'])[6]").fill(name4);
    // await this.page.locator("(//div//input[@type='text'][@placeholder='Enter your text |'])[7]").fill(name5);


     async feeValuesLc(Lcfees) {
        for (let i = 0; i <Lcfees.length; i++) {
            // 1. Re-fetch the inputs inside the loop to avoid stale elements
            const feeInputs = this.page.locator("(//input[contains(@class,'TextInput---align_end')])");
            //const feeInputs = this.page.locator("//div//input[@type='text'][@value='0.00']");
            // 2. Fill the data
            await feeInputs.nth(2 + i).fill(Lcfees[i]);

            // 3. Optional: If Appian is very slow, uncomment this line to let the page 'settle'
            await this.page.waitForTimeout(500); 
        }
    }


    async feeValuesUs(Usfees) {
        for (let j = 0; j < Usfees.length; j++) {
            // const feeInputs = this.page.locator(
            //     "//div//input[@type='text'][@value='0.00']"
            // );
            const feeInputs = this.page.locator(
                "//input[contains(@class,'TextInput---align_end')]"
            );
          
            await feeInputs.nth(7 + j).fill(Usfees[j]); 
            await this.page.waitForTimeout(500);

        }
    }
    // async feevalues(Usfee1, Usfee2, Usfee3, Usfee4, Usfee5) {

    //     await this.page.locator("(//div//input[@class='TextInput---text TextInput---align_end'])[8]").fill(Usfee1);
    //     await this.page.locator("(//div//input[@class='TextInput---text TextInput---align_end'])[9]").fill(Usfee2);
    //     await this.page.locator("(//div//input[@class='TextInput---text TextInput---align_end'])[10]").fill(Usfee3);
    //     await this.page.locator("(//div//input[@class='TextInput---text TextInput---align_end'])[11]").fill(Usfee4);
    //     await this.page.locator("(//div//input[@class='TextInput---text TextInput---align_end'])[12]").fill(Usfee5);


    // }

    async uploadlastQuotation(LastfileName) {
        console.log('Received filename:', LastfileName);

        const filePath = path.resolve(__dirname, '../uploads', LastfileName);
        console.log('Resolved file path:', filePath);

        await this.page
            .locator('input[type="file"]')
            .last()
            .setInputFiles(filePath);
    }


    async submitbtn() {
        await this.page.click("(//button//span[normalize-space()='SUBMIT'])[1]");
    }

    
    // async uploadQuotation(filePath) {
    //     const fileInput = this.page.locator("(//div//button//span[contains(text(),'Upload')])[1]");
    //     await fileInput.setInputFiles(filePath);
    // }


    // // async uploadfile(file){
    // //     await this.page.click("(//div//button//span[contains(text(),'Upload')])[1]");
    // // }

}
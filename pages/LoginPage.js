export class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.locator('#un');
        this.password = page.locator('#pw');
        this.loginBtn = page.locator('#jsLoginButton');
    }

    async goto() {

        await this.page.goto('https://aljahcltest.appiancloud.com/suite/');
      

    }

    async login(user, pass) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();

    }

}
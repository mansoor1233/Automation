import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AuditFormPage } from '../pages/AuditFormPage';
import { NavigationPage } from '../pages/NavigationPage';
import { auditData } from '../utils/testData';
// import path from 'path';



// test('maximize window', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
// });


test('Login to application and update the Audit form', async ({ page }) => {

  await page.setViewportSize({
    width: 1920,
    height: 1080
  });

  const loginPage = new LoginPage(page);
  const navigationPage = new NavigationPage(page);
  const auditformPage = new AuditFormPage(page);



  await loginPage.goto();
  await loginPage.login(auditData.username, auditData.password);

  await navigationPage.openAuditformsection();

  await auditformPage.selectEntity(auditData.entity);
  await auditformPage.selectBranch(auditData.branch);
  await auditformPage.selectDepartment(auditData.dept);

  await auditformPage.fillTextFields(
    auditData.subject,
    auditData.auditorName,
    auditData.auditorcountry
  );

  // await auditformPage.fillTextFields(auditData.subject);
  // await auditformPage.fillTextFields(auditData.auditorName);
  // await auditformPage.fillTextFields(auditData.auditorcountry);
  await auditformPage.selectAuditorStatus(auditData.auditorStatus);
  await auditformPage.selectAuditType(auditData.auditType);
  await auditformPage.selectscopedefinition(auditData.scope);
  await auditformPage.selectFinancialyr(auditData.year);
  await auditformPage.feequoted(auditData.fee);
  await auditformPage.radioactive();
  await auditformPage.reasonforover(auditData.reason);
  //await auditformPage.selectRadioOption(auditData.option);
  await auditformPage.uploadFirstQuotation(auditData.FirstfileName);
  await auditformPage.Justification(auditData.text);
  await auditformPage.selectBudgetLine(auditData.budgetline);
  await auditformPage.Historicalinfoyr(auditData.year1);
  await auditformPage.auditfirmname(auditData.names);
  await auditformPage.feeValuesLc(auditData.Lcfees);
  await auditformPage.feeValuesUs(auditData.Usfees);
  await auditformPage.uploadlastQuotation(auditData.LastfileName);
  await auditformPage.submitbtn();











})















//await auditPage.uploadQuotation('quotation.pdf');
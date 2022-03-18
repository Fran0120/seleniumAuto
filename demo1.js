const { Builder, By, Key, logging, until } = require('selenium-webdriver');
const chromedriver = require('chromedriver');
args = [
 // optional arguments
];
chromedriver.start(args);
async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
      //j
    await driver.get("https://aulavirtual.usantotomas.edu.co/")
    await driver.manage().window().setRect({ width: 1366, height: 738 })
    await driver.findElement(By.id("username")).click()
    await driver.findElement(By.id("username")).sendKeys("1000374819")
    await driver.findElement(By.id("password")).sendKeys("Franciscoabg1")
    await driver.findElement(By.css(".sign-up-btn > .btn")).click()
    await driver.findElement(By.css(".r0:nth-child(1) a")).click()
    await driver.findElement(By.css("#gridsection-1 img")).click()
    await driver.findElement(By.id("gridshadebox_close")).click()

    //await driver.get('http://www.google.com/');
    //await driver.findElement(By.name('q'))  .sendKeys('webdriver', Key.RETURN);
    //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } 
  finally {
    await driver.quit();
  }
}

example();
// logging.installConsoleHandler();
// logging.getLogger('webdriver.http').setLevel(logging.Level.ALL)
// ;(async function () {
// let driver
//   try {
//     driver = await new Builder()
//       .forBrowser('chrome')
//       .setChromeService(
//         new chrome.ServiceBuilder().enableVerboseLogging().setStdio('inherit')
//       ).build()

//     await driver.get('http://www.google.com/')
//     await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
//     await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
//   } finally {
//     if (driver) {
//       await driver.quit()
//     }
//   }
// })
chromedriver.stop();

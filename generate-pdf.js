const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    let browser;
    try {
        browser = await puppeteer.launch({
            executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
            headless: true
        });
    } catch (e) {
        browser = await puppeteer.launch({ headless: true });
    }

    const page = await browser.newPage();

    // iPhone 13 viewport width
    const mobileWidth = 390;

    await page.setViewport({
        width: mobileWidth,
        height: 844,
        deviceScaleFactor: 3
    });

    // Load the HTML file
    const filePath = path.resolve(__dirname, 'index.html');
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

    // Set print media type to apply @media print styles
    await page.emulateMediaType('print');

    // Wait for images to load
    await new Promise(resolve => setTimeout(resolve, 3000));

    // 1. フルバージョン（全10ページ）のPDFを生成
    await page.pdf({
        path: 'DJ2026_summer_catalog.pdf',
        width: `${mobileWidth}px`,
        height: '844px',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });
    console.log('PDF generated: DJ2026_summer_catalog.pdf (Full 10 pages)');

    // 2. 5ページ限定バージョンのPDFを生成
    await page.pdf({
        path: 'DJ2026_summer_catalog_5pages.pdf',
        width: `${mobileWidth}px`,
        height: '844px',
        pageRanges: '1-5',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });
    console.log('PDF generated: DJ2026_summer_catalog_5pages.pdf (Limited to 5 pages)');

    await browser.close();
})();

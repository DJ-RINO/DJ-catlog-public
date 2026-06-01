const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
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

    // Generate a multiple page PDF optimized for smartphones (390px x 844px per page)
    await page.pdf({
        path: 'DJ2026_summer_catalog.pdf',
        width: `${mobileWidth}px`,
        height: '844px',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    console.log('PDF generated: DJ2026_summer_catalog.pdf');
    console.log(`Size: ${mobileWidth}px x 844px per page (multiple pages)`);

    await browser.close();
})();

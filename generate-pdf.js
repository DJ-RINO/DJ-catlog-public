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

    // Get the exact height up to the bottom of the footer
    const bodyHeight = await page.evaluate(() => {
        const footer = document.querySelector('footer');
        if (footer) {
            const rect = footer.getBoundingClientRect();
            return rect.bottom + window.scrollY;
        }
        return document.body.scrollHeight;
    });

    console.log(`Page height: ${bodyHeight}px`);

    // Generate a single long PDF page (no page breaks)
    await page.pdf({
        path: 'DJ2026_earlyspring_catalog.pdf',
        width: `${mobileWidth}px`,
        height: `${bodyHeight}px`,
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    console.log('PDF generated: DJ2026_earlyspring_catalog.pdf');
    console.log(`Size: ${mobileWidth}px x ${bodyHeight}px (single page)`);

    await browser.close();
})();

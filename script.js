function scrapeAndExport() {
    const htmlString = document.getElementById('htmlInput').value;

    // Parse HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    const productElements = doc.querySelectorAll('.product.mb-4.ng-star-inserted');

    const data = [['Product Title', 'Packaging', 'Price']]; // header row

    productElements.forEach(el => {
      const title = el.querySelector('.product-title')?.textContent.replace(/\s+/g, ' ').trim() || '';
      const packaging = el.querySelector('.product-packaging-string')?.textContent.replace(/\s+/g, ' ').trim() || '';
      
      // price is the second <span> inside .price-txt
      const priceSpans = el.querySelectorAll('.price-txt span');
      const price = priceSpans.length > 1 ? priceSpans[1].textContent.replace(/[^\d.]/g, '').trim() : '0';
    
      data.push([title, packaging, price]);
    });

    console.log(data);




    // // Example: Extract all table rows
    // const products = doc.querySelectorAll('.products-container .product');

    // const data = [['Product Name', 'Unit', 'Price']]; 

    // products.forEach(product => {
    //     const name = product.querySelector('.middle-container .product-title')?.innerText.replace(/\s+/g, ' ').trim() || '';
    //     const unit = product.querySelector('.product-packaging-string')?.innerText.replace(/\s+/g, ' ').trim() || '';
    //     const price = 0.0;

    //     const priceDivs = doc.querySelectorAll('.price-container .price-txt span');
    //     if (priceDivs.length >= 2) {
    //         const priceText = priceDivs[1].textContent.trim(); // This will be '16.75'
    //         console.log('Price:', priceText);
    //       }
        
    //     data.push([name, unit, price]);
    // });


    // Export to Excel
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Products");
    XLSX.writeFile(wb, "products.xlsx");
}

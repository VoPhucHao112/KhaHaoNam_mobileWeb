const products = [
    { name: "iphone 16 Pro Max", price: "30.990.000 VND", imageUrl: "KhaHaoNam_mobileWeb/asset/img/products/IP15PROMAX.jpg", description: "CChiếc điện thoại này sở hữu màn hình Super Retina XDR OLED kích thước 6.9 inch, công nghệ ProMotion, cùng vi xử lý A18 Pro mạnh mẽ. Ngoài ra, hệ thống camera Ultra Wide 48MP giúp chụp ảnh cực kỳ chi tiết." },
    { name: "iPhone 15 Pro Max", price: " 29.990.000 VND", imageUrl: "KhaHaoNam_mobileWeb/asset/img/products/IP15PROMAX.jpg", description: "Chiếc điện thoại này sở hữu màn hình Super Retina XDR OLED kích thước 6.7 inch, công nghệ ProMotion, cùng vi xử lý A17 Pro mạnh mẽ. Ngoài ra, hệ thống camera 48MP với khả năng zoom 5X giúp chụp ảnh sắc nét ngay cả trong điều kiện thiếu sáng." },  
    { name: "Samsung Galaxy Z Fold 6", price: " 36.090.000 VND", imageUrl: "KhaHaoNam_mobileWeb/asset/img/products/ZFOLD6.jpg", description: " Samsung Galaxy Z Fold 6 có màn hình 7.6 inch, chip Snapdragon 8 Gen 3, camera 50MP, pin 4.400mAh, thiết kế mỏng nhẹ, hỗ trợ AI thông minh." },
     { name: "Samsung Galaxy Z Flip 6", price: " 28.990.000 VND", imageUrl: "KhaHaoNam_mobileWeb/asset/img/products/ZFLIP6.jpg", description: " Chiếc điện thoại này sở hữu màn hình Dynamic AMOLED 2X kích thước 6.7 inch, tần số quét 120Hz, cùng vi xử lý Snapdragon 8 Gen 3." },
     { name: "Samsung Galaxy S25 Ultra", price: " 27.990.000 VND", imageUrl: "KhaHaoNam_mobileWeb/asset/img/products/S25ULT.jpg", description: " Chiếc điện thoại này sở hữu màn hình Dynamic AMOLED 2X kích thước 6.9 inch, tần số quét 120Hz, cùng vi xử lý Snapdragon 8 Elite For Galaxy mới nhất. Ngoài ra, hệ thống camera 200MP với khả năng zoom 100X giúp chụp ảnh sắc nét ngay cả trong điều kiện thiếu sáng." },
     { name: "Samsung Galaxy S24 Ultra", price: " 22.990.000 VND", imageUrl: "KhaHaoNam_mobileWeb/asset/img/products/S24ULT.jpg", description: "Chiếc điện thoại này sở hữu màn hình Dynamic AMOLED 2X kích thước 6.8 inch, tần số quét 120Hz, cùng vi xử lý Snapdragon 8 Gen 3 For Galaxy. Ngoài ra, hệ thống camera 200MP với khả năng zoom 100X giúp chụp ảnh sắc nét ngay cả trong điều kiện thiếu sáng." },
];

let currentPage = 1;
const productsPerPage = 9;

function addProduct(name, price, imageUrl, index) {
    const productBox = document.getElementById('product-list');
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    
    productDiv.innerHTML = `
        <img src="${imageUrl}" alt="${name}">
        <h4>${name}</h4>
        <p>${price} VND</p>
        <div class="buttons">
            <button class="view-details" onclick="viewDetails(${index})">View Details</button>
            <button class="add-to-cart">Add to Cart</button>
        </div>
    `;
    
    productBox.appendChild(productDiv);
}

function viewDetails(index) {
 
    sessionStorage.setItem('product', JSON.stringify(products[index]));
  
    window.location.href = 'details.html?id=' + index;
}

function displayProducts(page) {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = Math.min(page * productsPerPage, products.length);
    const currentProducts = products.slice(startIndex, endIndex);

    // Clear previous products
    const productList = document.getElementById("product-list");
    productList.innerHTML = '';

    currentProducts.forEach((product, index) => {
        addProduct(product.name, product.price, product.imageUrl, startIndex + index);
    });
    
    // Update pagination visibility
    const prevButton = document.getElementById("prev-page");
    const nextButton = document.getElementById("next-page");
    
    if (prevButton && nextButton) {
        prevButton.disabled = page === 1;
        nextButton.disabled = endIndex >= products.length;
    }
}

function nextPage() {
    if (currentPage * productsPerPage < products.length) {
        currentPage++;
        displayProducts(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayProducts(currentPage);
    }
}

// Render initial products
displayProducts(currentPage);

// Thêm sự kiện cho nút phân trang
document.getElementById("next-page").addEventListener("click", nextPage);
document.getElementById("prev-page").addEventListener("click", prevPage);

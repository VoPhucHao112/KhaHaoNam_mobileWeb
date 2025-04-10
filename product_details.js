// Lấy thông tin sản phẩm từ sessionStorage
const product = JSON.parse(sessionStorage.getItem('product'));

if (product) {
    const productDetailDiv = document.getElementById('product-detail');
    productDetailDiv.innerHTML = `
        <div class="product-detail">
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h1>${product.name}</h1>
                <p class="product-description">${product.description}</p> <!-- Hiển thị mô tả ở trang detail -->
                <p><strong>Giá:</strong> ${product.price} VND</p>
                <button class="add-to-cart">Thêm vào giỏ hàng</button>
            </div>
        </div>
    `;
} else {
    const productDetailDiv = document.getElementById('product-detail');
    productDetailDiv.innerHTML = `<p>Sản phẩm không tồn tại.</p>`;
}

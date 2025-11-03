/**
 * 篩選出庫存量少於 10 的商品名稱
 * @param {Array} products - 商品陣列，每個元素包含 { name, stock }
 * @returns {Array} 庫存不足商品的名稱陣列
*/

/**
 * 根據更新物件批次更新商品庫存
 * 不修改原始陣列，回傳新的陣列
 * @param {Array} products - 原始商品陣列
 * @param {Object} updates - 要更新的商品庫存，格式：{ 商品名: 新庫存量 }
 * @returns {Array} 更新後的新商品陣列
*/


// 庫存內容的資料
const products= [
  { name: "Keyboard", stock: 25 },
  { name: "mouse", stock: 5 },
  { name: "monitor", stock: 8 },
  { name: "usb cable", stock: 40 }
];

// console.log(products);

// 篩選出庫存量少於 10 的商品名稱
function getLowStock(products) {
  return products
    .filter(item => item.stock < 10)
    .map(item => item.name);
}

// 呼叫lowStockItems函式並顯示結果
const lowStockItems = getLowStock(products);
console.log("庫存少於 10 的項目：", lowStockItems);



// 跟新商品庫存
function updateStock(products, updates) {
  const updatesObj = {};
  updates.split(",").forEach(pair => {
    const [name, stockStr] = pair.split(":");
    updatesObj[name.trim()] = Number(stockStr);
  });
  for (let item of products) {
    if (updatesObj.hasOwnProperty(item.name)) {
      item.stock = updatesObj[item.name];
    }
  }
  for (let item of products) {
    console.log(`${item.name} 的庫存： ${item.stock}`);
  }
  return products;
}

updateStock(products, "mouse:15,monitor:20");



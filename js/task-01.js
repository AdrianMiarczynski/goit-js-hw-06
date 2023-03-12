const category = document.querySelectorAll(".item");
console.log(`Number of categories: ${category.length}`);

for (const item of category) {
  console.log(`Category:${item.children[0].innerHTML}`);
  console.log(`Category:${item.children[1].children.length}`);
}

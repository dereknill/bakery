export default function populatePage() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = `
      <div class="menu-grid">
        <div class="menu-food-item">
          <img src="assets/bread.png">
          <div class="menu-food-item-text">Breads</div>
        </div>
        <div class="menu-food-item">
          <img src="assets/pie.png">
          <div class="menu-food-item-text">Pies</div>
        </div>
        <div class="menu-food-item">
          <img src="assets/cookie.png">
          <div class="menu-food-item-text">Cookies</div>
        </div>
        <div class="menu-food-item">
          <img src="assets/bagel.png">
          <div class="menu-food-item-text">Bagels</div>
        </div>
        <div class="menu-food-item">
          <img src="assets/cake.png">
          <div class="menu-food-item-text">Cakes</div>
        </div>
        <div class="menu-food-item">
          <img src="assets/cupcake.png">
          <div class="menu-food-item-text">Cupcakes</div>
        </div>
        <div class="menu-food-item">
          <img src="assets/donut.png">
          <div class="menu-food-item-text">Donuts</div>
        </div>
        <div class="menu-food-item">
          <img src="assets/muffin.png">
          <div class="menu-food-item-text">Muffins</div>
        </div>

      </div>

`;
}

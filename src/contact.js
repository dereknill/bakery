export default function populatePage() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = `

      <div class="content-container">
        <div><b>Phone:</b> (123) 456-7890</div>
        <div><b>Address:</b> 1 Fake St, Salem, MA 01970</div>
        <img src="assets/map.png" class="map">
      </div>

`;
}

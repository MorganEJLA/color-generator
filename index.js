// https://www.thecolorapi.com/docs#schemes

const btnColor = document.getElementById("getBtnColor");

btnColor.addEventListener("click", function () {
  const colorPick = document.getElementById("color-picker").value;
  const hexcode = colorPick.slice(1);
  const mode = document.getElementById("mode-select");
  const endpoint = `/scheme?hex=${hexcode}&mode=${mode.value}&count=5`;

  fetch(`https://www.thecolorapi.com${endpoint}`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 5; i++) {
        function colorfill() {
          const colorHex = data.colors[i].hex.value;
          const colorName = data.colors[i].name.value;
          const colorDiv = document.getElementById(`color${i}`);
          colorDiv.style.backgroundColor = colorHex;
          const hexCodes = document.getElementById(`hexcode${i}`);
          hexCodes.innerHTML = `${colorHex}`;
          hexCodes.innerHTML += `<br>${colorName}`;
        }

        colorfill();

        const target = document.getElementById(`hexcode${i}`);
        target.addEventListener("click", myFunction);

        function myFunction() {
         
          const copyText = document.getElementById(`hexcode${i}`);
          const hexOnly = copyText.innerHTML.slice(0, 7);
          navigator.clipboard.writeText(`${hexOnly}`);

          /* Alert the copied text */
          alert("Copied: " + hexOnly);
        }
      }
    });
});

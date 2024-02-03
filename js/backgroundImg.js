/** crateDate : 2024-02-02
 *  Last modified Date : 2024-02-04
 *  목적 : 랜덤 배경 변경 js **/

const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
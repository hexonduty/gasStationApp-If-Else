let dizel = 24.53,
  benzin = 22.25,
  lpg = 11.1;
const newLine = "\r\n";

const chose =
  "1-Dizel" +
  newLine +
  "2-Benzin" +
  newLine +
  "3-LPG" +
  newLine +
  "Yakıt türünü seçiniz";

let yakitTipi = prompt(chose);
let yakitLitresi = Number(prompt("Yakıt litresini giriniz.."));
let bakiye = Number(prompt("Bakiyenizi giriniz"));

if (yakitTipi == "1") {
  let odenecekTutar = dizel * yakitLitresi;
  if (odenecekTutar < bakiye) {
    // Bakiyeniz yeterli
    bakiye = bakiye - odenecekTutar;
    alert(
      "Yakıt alma işlemi başarılı" +
        newLine +
        "Kalan Bakiye :" + (bakiye)
    );
  } else {
    alert(
      "Bakiyeniz yeterli değildir" +
        newLine +
        "Ödenecek Tutar" +
        odenecekTutar +
        newLine +
        "Bakiye : " +
        bakiye +
        newLine +
        "Eksis Tutar : " +
        (odenecekTutar - bakiye)
    );
  }
} else if (yakitTipi == "2") {
  let odenecekTutar = benzin * yakitLitresi;
    if (odenecekTutar < bakiye) {
        // Bakiyeniz yeterli
        bakiye = bakiye - odenecekTutar;
        alert(
          "Yakıt alma işlemi başarılı" +
            newLine +
            "Kalan Bakiye :" + (bakiye)
        );
      }
      else {
        alert(
          "Bakiyeniz yeterli değildir" +
            newLine +
            "Ödenecek Tutar" +
            odenecekTutar +
            newLine +
            "Bakiye : " +
            bakiye +
            newLine +
            "Eksis Tutar : " +
            (odenecekTutar - bakiye)
        );
      }
} else if (yakitTipi == "3") {
    let odenecekTutar = lpg * yakitLitresi;
    if (odenecekTutar < bakiye) {
        // Bakiyeniz yeterli
        bakiye = bakiye - odenecekTutar;
        alert(
          "Yakıt alma işlemi başarılı" +
            newLine +
            "Kalan Bakiye :" + (bakiye)
        );
      }
      else {
        alert(
          "Bakiyeniz yeterli değildir" +
            newLine +
            "Ödenecek Tutar" +
            odenecekTutar +
            newLine +
            "Bakiye : " +
            bakiye +
            newLine +
            "Eksis Tutar : " +
            (odenecekTutar - bakiye)
        );
      }
} else {
  alert("Lütfen geçerli bir yakıt türü seçiniz..");
}

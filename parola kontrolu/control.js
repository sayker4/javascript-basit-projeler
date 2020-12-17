function dis(val) {
    result.value += val
    if (result.value.length == 4 && result.value == 1313) {
        sonuc.textContent = "Giriş Yapıldı!"
        result.value = ""
    }
    if (result.value.length == 4 && result.value != 1313) {
        sonuc.textContent = "Hatalı Şifre!"
        result.value = ""
    }
}
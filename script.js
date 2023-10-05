function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de pessoa sorrindo, usando óculos escuros, jaqueta preta, sem barba e com fundo de página branco."
    )
  } else {
    // Se tiver sem light mode, manter a imagem normal.
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de pessoa sorrindo, usando óculos e jaqueta preta,sem barba e fundo roxo gradeado com azul."
    )
  }
}

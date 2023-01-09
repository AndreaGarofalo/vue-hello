console.log("VUE OK", Vue);

// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = Vue.createApp({
  data() {
    return {
      text: "Ciao VUE",
      pic: "https://e1.pxfuel.com/desktop-wallpaper/544/325/desktop-wallpaper-anime-programming-anime-programmer.jpg",
    };
  },
});

app.mount("#root");

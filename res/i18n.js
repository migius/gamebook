const messages = {
    it: {        
        choose_book: "Scegli il libro: ",
        book: {
            carmilla_laura: {
                title: "Carmilla. Il bacio del vampiro - Sezione Laura",
                url: "carmilla/laura.html?l=it"
            },
            carmilla_carmilla: {
                title: "Carmilla. Il bacio del vampiro - Sezione Carmilla",
                url: "carmilla/carmilla.html?l=it"
            },
            eb_villa_misteriosa: {
                title: "La Villa Misteriosa. Escape Book #1",
                url: "escape-book/villa-misteriosa.html?l=it"
            },
            eb_piramide_della_morte: {
                title: "La piramide della morte. Escape Book #4",
                url: "escape-book/piramide-della-morte.html?l=it"
            },
        },
    },
    en: {  
        choose_book: "Choose the book: ",
        book: {
            carmilla_laura: {
                title: "Carmilla Laura todo",
                url: "carmilla/laura.html?l=en"
            },
            carmilla_carmilla: {
                title: "Carmilla todo",
                url: "carmilla/carmilla.html?l=en"
            },
        },
    },
}

const i18n = new VueI18n({
  locale: 'it', // set locale
  fallbackLocale: 'it',
  messages, // set locale messages
})

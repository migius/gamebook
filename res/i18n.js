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
        },
    },
    en: {  
        choose_book: "Choose the book: ",
        book: {
            carmilla_laura: {
                title: "Carmilla Laura todo",
                url: "carmilla_laura?l=it"
            },
            carmilla_carmilla: {
                title: "Carmilla todo",
                url: "carmilla?l=it"
            },
        },
    },
}

const i18n = new VueI18n({
  locale: 'it', // set locale
  fallbackLocale: 'it',
  messages, // set locale messages
})

const messages = {
    it: {        
        registro: "Registro Laura",
        intuito: "intuito",
        salute: "salute",
        oggetti: "oggetti",
        vampirizzazione: "",
        parole_chiave: "parole chiave",
        note: "note",
        new_game: "inizia una nuova partita",
        messaggi: {
            benvenuto: "Benvenuto",
            new_game_confirm: "Sei sicuro di voler iniziare una nova partita? Si cancelleranno le statistiche correnti.",
            go_to_226: "Vai al 226.",
            back_to_menu: "Lista schede disponibili",
            salute_0: "Il tuo fisico ha ceduto e sei sconfitta. Vuoi iniziare una nuova partita resettando tutte le statistiche?"
        }
    },
    en: {  
        //todo
    },
}

const i18n = new VueI18n({
  locale: 'it', // set locale
  fallbackLocale: 'it',
  messages, // set locale messages
})

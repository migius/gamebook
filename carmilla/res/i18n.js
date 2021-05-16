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
            salute_0: "Il tuo fisico ha ceduto e sei sconfitta. Vuoi iniziare una nuova partita resettando tutte le statistiche?",
        },
        footer: {
            back_to_menu: "Lista schede disponibili",
            credits: "Copyrights & Credits",
            close: "Chiudi",
            book_credits: "I diritti del libro 'Carmilla - Il bacio del vampiro' appartengono a Watson Edizioni.",
            code_credits: "Il codice sorgende della pagina è rilasciato con licenza MIT su ",
            bg_foto: "Foto sullo sfondo",
            send_feedback: "Invia un feedback",
            howto: "Come funziona",
            howto_content: ["Questa scheda è di ausilio alla lettura del librogame 'Carmilla - Il bacio del vampiro' di Francesco Di Lazzaro edito da Watson Edizioni.",
            'Per modificare i valori salute e intuito utilizzare i pulsanti - e +.',
            `Per aggiungere oggetti cliccare il quadrato oggetti, per rimuoverli basta cancellarne il nome.`,
            `Per aggiungere e rimouvere parole chiave e note utilizzare i tasti + e meno -.`,
            ``,
            `I valori presenti nella scheda (e nessun altro dato) vengono salvati nel browser e quindi anche se la pagina viene chiusa e riaperta i dati restano salvati. Non è possibile scaricare o inviare i propri dati a un altro dispositivo, ma si possono copiare a mano.`,
            `Se si vuole resettare i valori utilizzare il tasto 'inizia una nuova partita'.`]
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

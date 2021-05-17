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
        url_amazon: `https://www.amazon.it/gp/product/8887224102/ref=as_li_tl?ie=UTF8&camp=3414&creative=21718&creativeASIN=8887224102&linkCode=as2&tag=migio21-21&linkId=65425fc1f405cdd96e7ff633ccb1b10c`,
        link_amazon: `<a target="_blank" href="@:url_amazon">Carmilla. Il bacio del vampiro</a>`,
        footer: {
            back_to_menu: "Lista schede disponibili",
            credits: "Copyrights & Credits",
            close: "Chiudi",
            book_credits: `I diritti del libro @:link_amazon appartengono a Watson Edizioni.`,
            code_credits: `Il codice sorgende della pagina è rilasciato con licenza MIT su <a href='https://github.com/migius/gamebook' target="_blak" >https://github.com/migius/gamebook</a>`,
            bg_foto: `Foto sullo sfondo: <a href='https://www.freepik.com/photos/tree'  target="_blak">Tree photo created by wirestock - www.freepik.com</a>`,
            send_feedback: `Per segnalare malfunzionamenti o suggerire modifiche <a href="https://migio.altervista.org/contatti/" target="popup" >Invia un feedback</a>`,
            howto: "Come funziona",
            howto_content: `Questa scheda è di ausilio alla lettura del librogame @:link_amazon di Francesco Di Lazzaro edito da Watson Edizioni.<br>
            Per modificare i valori salute e intuito utilizzare i pulsanti - e +.<br>
            Per aggiungere oggetti cliccare il quadrato oggetti, per rimuoverli basta cancellarne il nome.<br>
            Per aggiungere e rimouvere parole chiave e note utilizzare i tasti + e meno -.<br>
            <br>
            I valori presenti nella scheda (e nessun altro dato) vengono salvati nel browser e quindi anche se la pagina viene chiusa e riaperta i dati restano salvati. Non è possibile scaricare o inviare i propri dati a un altro dispositivo. Nessun dato viene inviato a server centrali, la partita rimarrà solo sul dispositivo utilizzato.<br>
            Se si vuole resettare i valori utilizzare il tasto '@:new_game'.`
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

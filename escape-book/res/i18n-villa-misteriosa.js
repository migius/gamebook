const messages = {
    it: {        
        titolo: "La Villa Misteriosa. Escape book",
        scheda: "Scheda di gioco",
        clessidre: "Clessidre",
        paragrafi: "Paragrafi",
        ricordi: "Ricordi",
        oggetti: "Oggetti",
        note: "Note",
        new_game: "inizia una nuova partita",
        messaggi: {
            benvenuto: "Benvenuto",
            new_game_confirm: "Sei sicuro di voler iniziare una nova partita? Si cancelleranno le statistiche correnti.",
            go_to_1933: "Vai al 1933.",
            go_to_4123: "Vai al 4123.",
            go_to_5000: "Vai al 5000.",
        },        
        url_amazon: `https://www.amazon.it/villa-misteriosa-Escape-book/dp/8856670119?dchild=1&qid=1629872876&refinements=p_27%3ALeonardo+Lupo&s=books&sr=1-3&linkCode=ll1&tag=migio21-21&linkId=e19ba4bd39d70e4ce22be11631aceff8&language=it_IT&ref_=as_li_ss_tl`,
        link_amazon: `<a target="_blank" href="@:url_amazon">La Villa Misteriosa. Escape book</a>`,
        footer: {
            back_to_menu: "Lista schede disponibili",
            credits: "Copyrights & Credits",
            close: "Chiudi",
            book_credits: `I diritti del libro @:link_amazon appartengono a Edizioni Piemme.`,
            code_credits: `Il codice sorgende della pagina è rilasciato con licenza MIT su <a href='https://github.com/migius/gamebook' target="_blak" >https://github.com/migius/gamebook</a>`,
            bg_foto: `Foto sullo sfondo: <a href="https://www.freepik.com/photos/background">Background photo created by kjpargeter - www.freepik.com</a>`,
            send_feedback: `Per segnalare malfunzionamenti o suggerire modifiche <a href="https://migio.altervista.org/contatti/" target="popup" >Invia un feedback</a>`,
            howto: "Come funziona",
            howto_content: `Questa scheda è di ausilio alla lettura del librogame @:link_amazon di Leonardo Lupo edito da Edizioni Piemme.<br>
            Per barrare una clessidra clicca sul pulsante +.<br>
            Per aggiungere e rimouvere paragrafi, ricordi, oggetti e note utilizzare i tasti + e meno -.<br>
            <br>
            I valori presenti nella scheda (e nessun altro dato) vengono salvati nel browser e quindi anche se la pagina viene chiusa e riaperta i dati restano salvati. Non è possibile scaricare o inviare i propri dati a un altro dispositivo. Nessun dato viene inviato a server centrali, la partita rimarrà solo sul dispositivo utilizzato.<br>
            Se si vuole resettare i valori utilizzare il tasto '@:new_game'.`            
        },
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

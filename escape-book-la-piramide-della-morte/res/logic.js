//##########################
//utilities
//##########################

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

//##########################
//objects
//##########################

const statTime = (new Date()).getTime();

//##########################
// vue
//##########################

var main = new Vue({
    i18n,
    el: '#main',
    data: {
        //saved to localDB
        gameStats: {
            clessidre: 0,
            paragrafi: [],
            ricordi: [],
            oggetti: [],
            note: [],
        },
        //not saved
        activeEdit: null,
        MAX_CLESSIDRE: 16,
    },
    computed: {
    },
    methods: { 
        loadDummy: function(){
            //todo

        },
        addClessidra: function(value){
            this.gameStats.clessidre = this.gameStats.clessidre + value;
            this.saveToLocalDB();

            Vue.nextTick(function() {
                if(main.gameStats.clessidre === main.MAX_CLESSIDRE) alert(main.$t("messaggi.go_to_5000"));
            });
        },
        editItem: function(item){
            this.activeEdit = item;
            //esegue dopo refresh
            Vue.nextTick(function() {
                document.getElementsByClassName("active-input")[0].focus();
            });
            //event.preventDefault();
        },
        doneEditItem: function(){
            if(this.activeEdit != undefined && isEmptyOrSpaces(this.activeEdit.name)) this.activeEdit.name = "\xa0";
            this.activeEdit = null;
            this.saveToLocalDB();
        },
        saveToLocalDB: function(){
            localStorage.setItem('EB_piramide_morte', JSON.stringify(this.gameStats));
        },
        loadFromLocalDB: function(){
            let data = JSON.parse(localStorage.getItem('EB_piramide_morte'));
            if(data == null) {
                this.startNewGame(true);
            } else {
                this.gameStats = data;
            }
        },
        startNewGame: function(withoutConfirm = false){
            if(withoutConfirm || confirm(this.$t("messaggi.new_game_confirm"))){
                this.gameStats.clessidre = 0;
                this.gameStats.paragrafi = [];
                this.gameStats.ricordi = [];
                this.gameStats.oggetti = [];
                this.gameStats.note = [];
                this.saveToLocalDB();
            }
        },
        addParagrafo: function(){
            let s = {name: ""};
            this.gameStats.paragrafi.push(s);
            this.editItem(s);
        },
        addRicordo: function(){
            let s = {name: ""};
            this.gameStats.ricordi.push(s);
            this.editItem(s);
        },
        addOggetto: function(){
            let s = {name: "", value: ""};
            this.gameStats.oggetti.push(s);
            this.editItem(s);
        },
        addNota: function(){
            let s = {name: ""};
            this.gameStats.note.push(s);            
            this.editItem(s);
        },
        removeParagrafo: function(item){
            this.gameStats.paragrafi.splice(this.gameStats.paragrafi.indexOf(item),1);
            this.activeEdit = null; 
        },
        removeRicordo: function(item){
            this.gameStats.ricordi.splice(this.gameStats.ricordi.indexOf(item),1);
            this.activeEdit = null; 
        },
        removeOggetto: function(item){
            this.gameStats.oggetti.splice(this.gameStats.oggetti.indexOf(item),1);
            this.activeEdit = null; 
            this.doneEditItem();
        },
        removeNota: function(item){
            this.gameStats.note.splice(this.gameStats.note.indexOf(item),1);
            this.activeEdit = null; 
        }
    },
    beforeCreate: function(){
        console.log("beforeCreate: " + ((new Date()).getTime() - statTime).toString());
    },
    created: function(){
        console.log("created: " + ((new Date()).getTime() - statTime).toString());
        this.loadFromLocalDB();
        console.log("end created: " + ((new Date()).getTime() - statTime).toString());
    },
    mounted: function(){
        console.log("mounted: " + ((new Date()).getTime() - statTime).toString());
        //after all loaded
        this.$nextTick(function() {
            console.log("nextTick: " + ((new Date()).getTime() - statTime).toString());
            console.log("end nextTick: " + ((new Date()).getTime() - statTime).toString());
        });
    }
});

Vue.directive('visible', (el, bind) => {
    el.style.visibility=(!!bind.value) ? 'visible' : 'hidden';});

var footer = new Vue({
    i18n,
    el: '#footer'
});

var a;
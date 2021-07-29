//##########################
//utilities
//##########################

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

//##########################
//objects
//##########################

function ScalaVampItem(name, customVal, number){
    if(name !== "") {
        this.name = name;
    }else{
        this.name = number;
    }

    this.customVal = customVal;
    this.number = number;
    
    this.value = function(vamp){
            if(this.number == vamp) {
                return "X";
            }
            else
                return " ";
        if(this.customVal !== ""){
        }
        else
            return this.customVal;
    }
}

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
            intuito: 5,
            salute: 4,
            oggetti: [],
            vampirizzazione: 5,
            paroleChiave: [],
            note: [],
        },
        //not saved
        activeEdit: null,
        maxIntuito: 5,
        minIntuito: 0,
        maxSalute: 4,
        minSalute: 0,
        maxVampirizzazione: 8,
        minVampirizzazione: 0,
        scalaVampirizzazione: [
            new ScalaVampItem("", "vai al 226", 0),
            new ScalaVampItem("", "", 1),
            new ScalaVampItem("", "", 2),
            new ScalaVampItem("", "", 3),
            new ScalaVampItem("", "", 4),
            new ScalaVampItem("", "", 5),
            new ScalaVampItem("", "", 6),
            new ScalaVampItem("", "", 7),
            new ScalaVampItem("", "", 8),
        ]
    },
    computed: {
    },
    methods: { 
        loadDummy: function(){

            //oggetti
            if(this.gameStats.oggetti[0] === undefined) this.gameStats.oggetti[0].name = "coltello";
            if(this.gameStats.oggetti[1] === undefined) this.gameStats.oggetti[1].name = "fiore";
            if(this.gameStats.oggetti[2] === undefined) this.gameStats.oggetti[2].name = "spilla";
            if(this.gameStats.oggetti[3] === undefined) this.gameStats.oggetti[3].name = "chiave";

            //paroleChiave
            this.gameStats.paroleChiave.push({name: "parola 1"});
            this.gameStats.paroleChiave.push({name: "ciao 2"});
            this.gameStats.paroleChiave.push({name: "parola 3"});

            //note
            this.gameStats.note.push({name: "nota 1 nota 1 nota 1 nota 1 nota 1 nota 1 nota 1 nota 1"});
            this.gameStats.note.push({name: "nota 2 nota 2 nota 2 nota 2 nota 2 nota 2 nota 2"});
            this.gameStats.note.push({name: "nota 3 nota 3 nota 3 nota 3 nota 3 nota 3 nota 3 nota 3 nota 3 nota 3 nota 3 nota 3 nota 3"});
        },
        addIntuito: function(value){
            this.gameStats.intuito = this.gameStats.intuito + value;
            this.saveToLocalDB();
        },
        addSalute: function(value){
            this.gameStats.salute = this.gameStats.salute + value;
            this.saveToLocalDB();
            Vue.nextTick(function() {
                if(main.gameStats.salute === 0) 
                    if(confirm(main.$t("messaggi.salute_0")))
                        main.startNewGame(true);
            });
        },
        addVampirizzazione: function(value){
            if(this.gameStats.vampirizzazione + value > this.maxVampirizzazione ||
                this.gameStats.vampirizzazione + value < this.minVampirizzazione)
                return;
            this.gameStats.vampirizzazione = this.gameStats.vampirizzazione + value;
            this.saveToLocalDB();   
            Vue.nextTick(function() {
                if(main.gameStats.vampirizzazione === 0) alert(main.$t("messaggi.go_to_226"));
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
            localStorage.setItem('GB_carmilla_laura', JSON.stringify(this.gameStats));
        },
        loadFromLocalDB: function(){
            let data = JSON.parse(localStorage.getItem('GB_carmilla_laura'));
            if(data == null) {
                this.startNewGame(true);
            } else {
                this.gameStats = data;
            }
        },
        startNewGame: function(withoutConfirm = false){
            if(withoutConfirm || confirm(this.$t("messaggi.new_game_confirm"))){
                this.gameStats.intuito = 5;
                this.gameStats.salute = 4;
                this.gameStats.oggetti = [{name: "\xa0"}, {name: "\xa0"}, {name: "\xa0"}, {name: "\xa0"}];
                this.gameStats.vampirizzazione = 5;
                this.gameStats.paroleChiave = [];
                this.gameStats.note = [];
                this.saveToLocalDB();
            }
        },
        addParolaChiave: function(){
            let s = {name: ""};
            this.gameStats.paroleChiave.push(s);
            this.editItem(s);
        },
        addNota: function(){
            let s = {name: ""};
            this.gameStats.note.push(s);            
            this.editItem(s);
        },
        removeParolaChiave: function(item){
            this.gameStats.paroleChiave.splice(this.gameStats.paroleChiave.indexOf(item),1);
            this.activeEdit = null; 
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
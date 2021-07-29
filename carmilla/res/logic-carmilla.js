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
            oscurita: 5,
            rigenerazione: 4,
            oggetti: [],
            vampirizzazione: 5,
            paroleChiave: [],
            note: [],
        },
        //not saved
        activeEdit: null,
        maxOscurita: 5,
        minOscurita: 0,
        maxRigenerazione: 4,
        minRigenerazione: 0,
        maxVampirizzazione: 8,
        minVampirizzazione: 0,
        scalaVampirizzazione: [
            new ScalaVampItem("", "vai al 299", 0),
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
        addOscurita: function(value){
            this.gameStats.oscurita = this.gameStats.oscurita + value;
            this.saveToLocalDB();
        },
        addRigenerazione: function(value){
            this.gameStats.rigenerazione = this.gameStats.rigenerazione + value;
            this.saveToLocalDB();
            Vue.nextTick(function() {
                if(main.gameStats.rigenerazione === 0) 
                    if(confirm(main.$t("messaggi.rigenerazione_0")))
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
            localStorage.setItem('GB_carmilla_carmilla', JSON.stringify(this.gameStats));
        },
        loadFromLocalDB: function(){
            let data = JSON.parse(localStorage.getItem('GB_carmilla_carmilla'));
            if(data == null) {
                this.startNewGame(true);
            } else {
                this.gameStats = data;
            }
        },
        startNewGame: function(withoutConfirm = false){
            if(withoutConfirm || confirm(this.$t("messaggi.new_game_confirm"))){
                this.gameStats.oscurita = 5;
                this.gameStats.rigenerazione = 4;
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
        },
        markSangue: function(event)
        {
            targetId = event.currentTarget.id;
            $('#'+targetId).toggleClass('btn-outline-light');
            $('#'+targetId).toggleClass('btn-danger');

            $('.box-sangue').removeClass('box-sangue-0');
            $('.box-sangue').removeClass('box-sangue-1');
            $('.box-sangue').removeClass('box-sangue-2');
            $('.box-sangue').removeClass('box-sangue-3');
            $('.box-sangue').removeClass('box-sangue-4');
            $('.box-sangue').addClass('box-sangue-' + $('.box-sangue > .btn-danger').length);
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
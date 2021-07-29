//##########################
//objects
//##########################

function Menu(style){
    //this.name = name;
    this.items = [];
    //this.style = style;
    //this.description = description;
}

function Item(sigla){
    this.sigla = sigla;
}

const statTime = (new Date()).getTime();

//##########################
// vue
//##########################
var main = new Vue({
    i18n,
    el: '#main',
    data: {
        menus: []
    },
    computed: {
    },
    methods: { 
        CreateMenus: function(){
            this.menus = [];

            //main menu
            this.menus.main_menu = new Menu("classic");
            this.menus.main_menu.items.push(new Item("carmilla_laura"));
            this.menus.main_menu.items.push(new Item("carmilla_carmilla"));    
            this.menus.main_menu.items.push(new Item("eb_piramide_della_morte"));            
        },
        Click: function(item){
            window.location = this.$t('book.' + item.sigla + ".url");
        },
    },
    beforeCreate: function(){
        console.log("beforeCreate: " + ((new Date()).getTime() - statTime).toString());
    },
    created: function(){
        console.log("created: " + ((new Date()).getTime() - statTime).toString());
        this.CreateMenus();
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


var a;
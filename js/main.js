const STORAGE_KEY = 'lists';

let app = new Vue({
    el: "#vueApp",
    data: {
        welcomeMessage: 'To Do List',
        lists:[
          {id:1, item: 'Test1', status: 'Incomplete'},
          {id:2, item: 'Test2', status: 'Incomplete'},
          {id:3, item: 'Test3', status: 'Incomplete'}
        ],
        newItem: '',
    },

    created () {
      this.lists = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    },
    methods: {

      //This allows us to add a list item to our website
      addItem:function(){
        let id = this.lists.length + 1
        if(this.newItem!== '') {
          const newList = {id:id,item:this.newItem, status: 'Incomplete'}
          this.lists.push(newList)
          this.newItem = ''
          localStorage.setItem(STORAGE_KEY, JSON.stringify(this.lists))
        }
      },

      status:function(index) {
        if(this.lists[index].status == "Incomplete"){
          this.lists[index].status = "Complete"
        }
        else {
          this.lists[index].status = "Incomplete"
        }

      },

      remove:function(list) {
        this.lists.splice(this.lists.indexOf(list), 1)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.lists))

      },

    },
    mounted() {

    },
});

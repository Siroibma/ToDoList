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
        //var index_color = index + 1;
        if(this.lists[index].status == "Incomplete"){
          this.lists[index].status = "Complete"
          document.getElementsByClassName("list-group-item")[index].style.color = "Green";
          //document.getElementById(index_color).style.color = 'Green';
        }
        else {
          this.lists[index].status = "Incomplete"
          document.getElementsByClassName("list-group-item")[index].style.color = "Red";
          //document.getElementById("#1").style.color = 'Red';
        }

      },

      remove:function(list) {
        this.lists.splice(this.lists.indexOf(list), 1)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.lists))

      },

      reorder:function() {
        var form = document.getElementById("positions");
        var hold = form.elements[0].value;
        var input_1 = form.elements[0].value;
        var input_2 = form.elements[1].value;

        this.lists[input_1] = this.lists[input_2];


        alert(input_2);
      },

    },
    mounted() {

    },
});

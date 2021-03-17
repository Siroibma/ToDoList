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

      change_status:function(index) {
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

      /*Function: reorder()
      / Variables: form, hold, input_1, input_2
      / Purpose: Takes the information of two forms and swaps the values
      */

      reorder:function() {
        var form = document.getElementById("positions");
        var input_1 = form.elements[0].value - 1;

        var input_2 = form.elements[1].value - 1;

        var hold = input_2;

        //[this.lists[input_1], this.lists[input_2]] = [this.lists[input_2], this.lists[input_1]];

        this.$set(this.lists, this.lists[input_1].id, this.lists[input_2]);
        this.$set(this.lists, this.lists[input_2], this.lists[input_1]);
        //this.$set(this.lists, this.lists[input_1].status, this.lists[input_2].status);
        //this.$set(this.lists, this.lists[input_1].item, this.lists[input_2].item);


      },

    },
    mounted() {

    },
});

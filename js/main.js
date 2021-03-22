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

        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.lists))

      },

      remove:function(list) {
        this.lists.splice(this.lists.indexOf(list), 1)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.lists))

      },

      swap_up:function(index) {
        if(index == 0){
          alert('Cannot Swap Up')
        }
        else {
          this.lists.splice(index - 1, 2, this.lists[index], this.lists[index - 1])
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.lists))

      },

      swap_down:function(index) {
        array_length = this.lists.length;
        if (index + 1 == array_length){
          alert("You Cannot Swap down since you exceed the list length");
        }
        else {
          let rows = [this.lists[index], this.lists[index + 1]];
          this.lists.splice(index, 2, rows[1], rows[0]);
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.lists))

      },

      /*Function: reorder()
      / Variables: form, hold, input_1, input_2
      / Purpose: Takes the information of two forms and swaps the values


      reorder:function() {
        var form = document.getElementById("positions");
        var input_1 = form.elements[0].value - 1;

        var input_2 = form.elements[1].value - 1;

        var hold = input_2;

        //[this.lists[input_1], this.lists[input_2]] = [this.lists[input_2], this.lists[input_1]];

        let rows = [this.lists[input_1], this.lists[input_2]];

        this.lists.splice(input_1, 2, rows[1], rows[0]);

        //then we push the 1st object to the second position but we gotta remember that the indexes change
        //this.lists.splice(input_2, 1, this.lists[input_1]);

        //this.$set(this.lists, this.lists[input_1].status, this.lists[input_2].status);
        //this.$set(this.lists, this.lists[input_1].item, this.lists[input_2].item);


      },
      */

    },
    mounted() {

    },
});

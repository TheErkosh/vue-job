<script setup>
  import { ref, onMounted } from 'vue';

    const name = ref('Yersultan');
    const tasks = ref(['task one', 'task two', 'task three', 'task four']);
    const status = ref('active');
    const newTask = ref('');

    const toggleStatus = () => {
      if(status.value === 'active') {
        status.value = 'pending';
      } else if(status.value === 'pending') {
        status.value = 'inactive';
      } else {
        status.value = 'active';
      }
    };

    const addTask = () => {
      if(newTask.value.trim !== '') {
        tasks.value.push(newTask.value);
        newTask.value = ''
      }
    }

    const deleteTask = (index) => {
      tasks.value.splice(index, 1);
    }

    onMounted(async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        tasks.value = data.map((task) => task.title);
      } catch(error) {
        console.log('Error fetch')
      }
    })
</script>


<template>

  <h1>{{ name }}</h1>
  <h4 v-if="status === 'active'">User is active</h4>
  <h4 v-else-if="status === 'pending'">User is pending</h4>
  <h4 v-else>User inactive</h4>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">Add Task</button>
  </form>

  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span> 
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>

  <a v-bind:href="link">Click For Google</a>

  <br>
  <button v-on:click="toggleStatus">Submit</button>
</template>
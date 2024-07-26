<script lang="ts" setup>
import Vue, { ref } from "vue";

interface Task {
  id: number;
  namaTask: string;
  isDone: boolean;
}
const task = ref<string>("");
const penampungTasks = ref<Task[]>([]);
let nextTaskId = 1;

const addTask = () => {
  if (task.value === "") {
    alert("Tidak bisa memasukkan task kosong");
  } else if (!/^[a-zA-Z]/.test(task.value)) {
    alert("Task harus dimulai dengan huruf");
  } else {
    penampungTasks.value.push({
      id: nextTaskId,
      namaTask: task.value,
      isDone: false
    });
    task.value = "";
    nextTaskId++;
  }
};

const deleteTask = (id: number) => {
  const index = penampungTasks.value.findIndex((task) => task.id === id);
  if (index !== -1) {
    penampungTasks.value.splice(index, 1);
  }
};

const doneTask = (id: number) => {
  const task = penampungTasks.value.find((task) => task.id === id);
  if (task) {
    task.isDone = !task.isDone;
  }
};

const tampilin = () => {
  console.log(penampungTasks.value);
};
</script>

<template>
  <form @submit.prevent>
    <div>
      <label for="exampleInputEmail1" class="form-label fw-bold"
        >Task Baru</label
      >

      <div class="row">
        <input
          type="email"
          v-model="task"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Masukkan Task Baru"
        />
      </div>
      <div class="row gap-2">
        <button type="submit" class="btn btn-primary mt-3" @click="addTask()">
          Add To Do
        </button>
      </div>
    </div>
  </form>

  <div class="container mt-3">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Nama Task</th>
          <th scope="col">Action</th>
          <th scope="col">Status Task</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(penampungTask, index) in penampungTasks"
          :key="penampungTask.id"
        >
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ penampungTask.namaTask }}</td>
          <td>
            <button
              type="submit"
              class="btn btn-danger m-2"
              @click="deleteTask(penampungTask.id)"
            >
              Remove
            </button>
            <button
              type="button"
              class="btn btn-success"
              @click="doneTask(penampungTask.id)"
              v-if="!penampungTask.isDone"
            >
              Set As Done
            </button>
            <button
              type="button"
              class="btn btn-warning"
              @click="doneTask(penampungTask.id)"
              v-else
            >
              Set As Undone
            </button>
          </td>
          <td>
            <h2 v-if="penampungTask.isDone">DONE</h2>
            <p v-else>Belum Selesai</p>
          </td>
          
        </tr>
      </tbody>
    </table>
  </div>
  <button type="submit" class="btn btn-success" @click="tampilin()">
    Tampilin Array
  </button>
</template>

<template>
  <ul class="nav nav-tabs mb-4">
    <!-- 在建立 v-for 時，採用 uuid v4，拿來當成 key 屬性。 -->
    <li v-for="tab in tabs" :key="tab.id" class="nav-item">
      <router-link :to="tab.path" class="nav-link">
        {{ tab.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
// 在實務上，我們習慣在使用 v-for 時，為元素添加一個不重覆的 key 屬性，給予 Vue 一個提示，讓他能夠運用 key 值來追蹤節點。
// 然後我們會搭配 uuid 這個套件來幫忙產生獨一無二的識別碼，拿來當成 key 屬性。
// 動作：npm install uuid
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      tabs: [
        {
          id: uuidv4(),
          title: "首頁",
          path: "/restaurants",
        },
        {
          id: uuidv4(),
          title: "最新動態",
          path: "/restaurants/feeds",
        },
        {
          id: uuidv4(),
          title: "TOP 10 人氣餐廳",
          path: "/restaurants/top",
        },
        {
          id: uuidv4(),
          title: "美食達人",
          path: "/users/top",
        },
      ],
    };
  },
};
</script>

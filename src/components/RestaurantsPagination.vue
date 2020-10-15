<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 回到上一頁 previousPage -->
      <li class="page-item" v-show="previousPage">
        <router-link
          class="page-link"
          aria-label="Previous"
          :to="{
            name: 'restaurants',
            query: { categoryId, page: previousPage },
          }"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>
      <!-- 頁碼 -->
      <!-- 注意：把 active 類別加在 <li> 上，而不是加在 <a> 上，因為 CSS 本來就是設計由 <li> 來做樣式變化。 -->
      <!-- 用 { active: currentPage === page } 寫入一組簡單的條件式，currentPage 是當前的頁數，這是後端傳進來的資料，目前都固定預設為 1。 -->
      <li
        v-for="page in totalPage"
        :key="page"
        class="page-item"
        :class="['page-item', { active: currentPage === page }]"
      >
        <!-- 而 page 是網址的 query string，當使用者點擊標籤時，我們也會透過 <router-link :to="query: {}"> 把資料設定給 query string。 -->
        <router-link
          class="page-link"
          :to="{ name: 'restaurants', query: { categoryId, page } }"
        >
          {{ page }}
        </router-link>
      </li>
      <!-- 前往下一頁 nextPage -->
      <li class="page-item" v-show="nextPage">
        <router-link
          class="page-link"
          :to="{ name: 'restaurants', query: { categoryId, page: nextPage } }"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    categoryId: {
      type: Number,
      default: -1,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Number,
      default: -1,
    },
  },
  computed: {
    previousPage() {
      // 一般情況下，「上一頁」是 currentPage - 1
      // 當使用者已經在第一頁時，「上一頁」不存在，則回傳 null
      return this.currentPage === 1 ? null : this.currentPage - 1;
    },
    nextPage() {
      // 一般情況下，「下一頁」是 currentPage + 1
      // 如果下一頁已經超過了 totalPage，表示沒有下一頁了，這時候也回傳 null。
      return this.currentPage + 1 > this.totalPage
        ? null
        : this.currentPage + 1;
    },
  },
};
</script>

<template>
  <form @submit.stop.prevent="handleSubmit">
    <!-- 「提交表單」的動作發生在 <form> 而不是 <button> -->
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>

      <button type="submit" class="btn btn-primary mr-0">
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "CreateComment",
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleSubmit() {
      // TODO: 透過 API 向伺服器請求新增一筆 comment...
      // commentID
      this.$emit("after-create-comment", {
        commentId: uuidv4(), // 目前尚未串接 API，無法取得 commentId
        restaurantId: this.restaurantId,
        text: this.text,
      });
      this.text = "";
    },
  },
};
</script>

<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments";
import CreateComment from "./../components/CreateComment";
// 宣告假資料 dummyData，存入剛才經由 API 取得的資料樣本
const dummyData = {
  restaurant: {
    id: 1,
    name: "Judy Runte",
    tel: "(918) 827-1962",
    address: "98138 Elisa Road",
    opening_hours: "08:00",
    description: "dicta et cupiditate",
    image: "https://loremflickr.com/320/240/food,dessert,restaurant/?random=1",
    createdAt: "2019-06-22T09:00:43.000Z",
    updatedAt: "2019-06-22T09:00:43.000Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 3,
        text: "Quos asperiores in nostrum cupiditate excepturi aspernatur.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-06-22T09:00:43.000Z",
        updatedAt: "2019-06-22T09:00:43.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$0ISHJI48xu/VRNVmEeycFe8v5ChyT305f8KaJVIhumu7M/eKAikkm",
          image: "https://i.imgur.com/XooCt5K.png",
          isAdmin: false,
          createdAt: "2019-06-22T09:00:43.000Z",
          updatedAt: "2019-06-23T01:16:31.000Z",
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
};
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  // 使用 data 函式來回傳上一步設定好的資料
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      currentUser: dummyUser.currentUser,
      restaurantComments: [],
    };
  },
  // 設定在 created 階段觸發 fetchRestaurant 函式
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  // 在 methods 屬性裡，定義抓取資料的函式 fetchRestaurant，把 dummyData 的內容放進 Vue 元件
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      };

      this.restaurantComments = dummyData.restaurant.Comments;
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
        // 以 filter 保留未被選擇的 comment.id
        // filter 會保留回傳值為 true 的陣列項目
        // 如果被刪掉的是 2 號評論，那麼我們要保留的是「不是 2 號的其他評論」
        // 所以判斷式要寫成 comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
  },
};
</script>

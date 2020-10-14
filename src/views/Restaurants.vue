// 餐廳列表
<template>
  <div class="container py-5">
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <!--    父層 Restaurants 引入子元件 -->
    <NavTabs />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <!--    父層 Restaurants 引入子元件 -->
      <!--      使用 v-for 來迭代餐廳卡片，使用 v-for 時記得設定 key 值 -->
      <!--      使用 :initial-restaurant 賦予 RestaurantCard 一個自訂屬性 initial-restaurant，並且將屬性值綁定 restaurant 這筆資料 (迴圈中的特定餐廳) -->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" 
      />
    </div>
    <!-- 分頁標籤 RestaurantPagination -->
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard"
const dummyData = {
  restaurants: [
    // ... 需貼上 Postman 的回傳內容
    {
            "id": 1,
            "name": "Jennie Leffler",
            "tel": "(358) 068-6354 x4742",
            "address": "2585 Heller Turnpike",
            "opening_hours": "08:00",
            "description": "alias",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=62.536684124571075",
            "viewCounts": 3,
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-10-13T16:29:05.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2020-09-28T16:35:57.000Z",
                "updatedAt": "2020-09-28T16:35:57.000Z"
            },
            "isFavorited": true,
            "isLiked": true
        },
        {
            "id": 2,
            "name": "Cleora Ernser",
            "tel": "(037) 744-3366 x6754",
            "address": "1403 Lenny Squares",
            "opening_hours": "08:00",
            "description": "Nemo quia exercitationem cupiditate dolorum exerci",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=79.13321948642904",
            "viewCounts": 1,
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-10-13T14:56:50.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2020-09-28T16:35:57.000Z",
                "updatedAt": "2020-09-28T16:35:57.000Z"
            },
            "isFavorited": true,
            "isLiked": true
        },
        {
            "id": 3,
            "name": "Camila Bartell",
            "tel": "637-966-3594",
            "address": "700 Brekke Lake",
            "opening_hours": "08:00",
            "description": "Omnis iste ad incidunt nobis ipsum non. Vel maxime",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=15.281554396287266",
            "viewCounts": 1,
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-10-10T14:28:55.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2020-09-28T16:35:57.000Z",
                "updatedAt": "2020-09-28T16:35:57.000Z"
            },
            "isFavorited": true,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Bettye Hintz",
            "tel": "673.237.3704",
            "address": "783 Orin Orchard",
            "opening_hours": "08:00",
            "description": "Earum eos et harum sapiente. Aut et fuga.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.38461898645234",
            "viewCounts": 0,
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-09-28T16:35:57.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2020-09-28T16:35:57.000Z",
                "updatedAt": "2020-09-28T16:35:57.000Z"
            },
            "isFavorited": true,
            "isLiked": true
        },
        {
            "id": 5,
            "name": "Casimir Reichert",
            "tel": "1-447-657-3885 x9472",
            "address": "493 Kling Mill",
            "opening_hours": "08:00",
            "description": "facere",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.16383958767057",
            "viewCounts": 0,
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-09-28T16:35:57.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2020-09-28T16:35:57.000Z",
                "updatedAt": "2020-09-28T16:35:57.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Roxane Zieme",
            "tel": "873.120.0593 x335",
            "address": "4257 Zboncak Greens",
            "opening_hours": "08:00",
            "description": "Et fugiat impedit in et.\nAlias reprehenderit ut co",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.84597212271724",
            "viewCounts": 0,
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-09-28T16:35:57.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2020-09-28T16:35:57.000Z",
                "updatedAt": "2020-09-28T16:35:57.000Z"
            },
            "isFavorited": true,
            "isLiked": true
        },
        {
            "id": 7,
            "name": "Wade Abshire",
            "tel": "297.051.4686",
            "address": "340 Natalie Cliffs",
            "opening_hours": "08:00",
            "description": "unde assumenda ratione",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.3642854590469",
            "viewCounts": 0,
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-09-28T16:35:57.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2020-09-28T16:35:57.000Z",
                "updatedAt": "2020-09-28T16:35:57.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Hilda Beatty",
            "tel": "184-044-3379 x13416",
            "address": "0828 Schoen Ports",
            "opening_hours": "08:00",
            "description": "Ratione omnis autem debitis nam. Quia sint volupta",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.21447406184127",
            "viewCounts": 0,
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-09-28T16:35:57.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2020-09-28T16:35:57.000Z",
                "updatedAt": "2020-09-28T16:35:57.000Z"
            },
            "isFavorited": true,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Afton Schmitt",
            "tel": "(976) 231-4649",
            "address": "226 Harvey Inlet",
            "opening_hours": "08:00",
            "description": "quos ea velit",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.395398150614675",
            "viewCounts": 1,
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-10-08T09:42:28.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2020-09-28T16:35:57.000Z",
                "updatedAt": "2020-09-28T16:35:57.000Z"
            },
            "isFavorited": true,
            "isLiked": true
        },
        {
            "id": 10,
            "name": "Dr. Antonina Reichel",
            "tel": "1-703-254-0803 x578",
            "address": "843 Yundt Park",
            "opening_hours": "08:00",
            "description": "Enim quia suscipit eaque blanditiis eaque quia vol",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.57553460131763",
            "viewCounts": 0,
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-09-28T16:35:57.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2020-09-28T16:35:57.000Z",
                "updatedAt": "2020-09-28T16:35:57.000Z"
            },
            "isFavorited": true,
            "isLiked": false
        }
  ],
  categories: [
    // ... 需貼上 Postman 的回傳內容
    {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-09-28T16:35:57.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-09-28T16:35:57.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-09-28T16:35:57.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-09-28T16:35:57.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-09-28T16:35:57.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-09-28T16:35:57.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2020-09-28T16:35:57.000Z",
            "updatedAt": "2020-09-28T16:35:57.000Z"
        },
        {
            "id": 2212,
            "name": "越中料理",
            "createdAt": "2020-10-06T15:19:34.000Z",
            "updatedAt": "2020-10-06T15:48:15.000Z"
        }
  ],
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
  categoryId: ''
}
export default {
  components: {
    NavTabs,
    RestaurantCard,
  },
  data () {
    return {
      // 在沒有資料的情況下，categories、restaurants 是空陣列，而 currentPage 停留在 1。
      // categoryId 和 totalPage 寫 -1，在後端提供資料之前，前端無法預測。因此預期這兩筆資料必須要被後端覆寫掉，故初始直設為 -1。
      categories: [],
      categoryId: -1,
      currentPage: 1,
      restaurants: [],
      totalPage: -1
    }
  },
  created(){
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.categories = dummyData.categories
      this.categoryId = dummyData.categoryId
      this.currentPage = dummyData.page
      this.restaurants = dummyData.restaurants
      this.totalPage = dummyData.totalPage.length
    }
  }
};
</script>

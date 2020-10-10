<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <!-- <NewestRestaurants>  取得了一個叫做 restaurants 的屬性，而其值為 "restaurants" -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import NewestRestaurants from "./../components/NewestRestaurants";
const dummydata = {
  restaurants: [
    {
      id: 2422,
      name: "s",
      tel: "s",
      address: "s",
      opening_hours: "11:11",
      description: "111",
      image: null,
      viewCounts: 0,
      createdAt: "2020-10-03T03:22:25.000Z",
      updatedAt: "2020-10-03T03:22:25.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
    },
    {
      id: 1,
      name: "Jennie Leffler",
      tel: "(358) 068-6354 x4742",
      address: "2585 Heller Turnpike",
      opening_hours: "08:00",
      description: "alias",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.536684124571075",
      viewCounts: 1,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-10-01T03:21:24.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
    },
    {
      id: 2,
      name: "Cleora Ernser",
      tel: "(037) 744-3366 x6754",
      address: "1403 Lenny Squares",
      opening_hours: "08:00",
      description:
        "Nemo quia exercitationem cupiditate dolorum exercitationem sapiente voluptatum non suscipit. Repellendus voluptas voluptas sint voluptas et alias porro minus. Sit et autem sint alias labore consectetur perferendis. Incidunt neque sint consequatur earum numquam vel quisquam. Ullam sit dignissimos est soluta omnis enim minima enim. Veritatis fugit aut.\n \rRecusandae velit hic consequatur expedita eligendi consequatur. Quos sit atque nihil dicta enim. Omnis in dolorum voluptas quis sit quia ullam. Sed consectetur dignissimos id quam eius dolor harum. Sed cum dignissimos eos dolores. Aut saepe accusantium cupiditate magni iusto.\n \rQuidem eum totam voluptate perspiciatis fuga quod et. Sed accusamus nisi vero corporis dolorem. Repellat et necessitatibus praesentium ut deserunt voluptatem non voluptatem harum. Voluptatum atque quo molestiae. Consequuntur aut magni accusamus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.13321948642904",
      viewCounts: 0,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
    },
    {
      id: 3,
      name: "Camila Bartell",
      tel: "637-966-3594",
      address: "700 Brekke Lake",
      opening_hours: "08:00",
      description:
        "Omnis iste ad incidunt nobis ipsum non. Vel maxime quae maiores maxime consectetur rerum nostrum. Voluptas quo quae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.281554396287266",
      viewCounts: 0,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
    },
    {
      id: 4,
      name: "Bettye Hintz",
      tel: "673.237.3704",
      address: "783 Orin Orchard",
      opening_hours: "08:00",
      description: "Earum eos et harum sapiente. Aut et fuga.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.38461898645234",
      viewCounts: 0,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
    },
    {
      id: 5,
      name: "Casimir Reichert",
      tel: "1-447-657-3885 x9472",
      address: "493 Kling Mill",
      opening_hours: "08:00",
      description: "facere",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.16383958767057",
      viewCounts: 0,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
    },
    {
      id: 6,
      name: "Roxane Zieme",
      tel: "873.120.0593 x335",
      address: "4257 Zboncak Greens",
      opening_hours: "08:00",
      description:
        "Et fugiat impedit in et.\nAlias reprehenderit ut consequatur animi est necessitatibus.\nError impedit blanditiis eum eius.\nDoloribus repellendus adipisci voluptatem harum ut perferendis qui odit repellendus.\nReprehenderit maiores qui amet nam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.84597212271724",
      viewCounts: 0,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
    },
    {
      id: 7,
      name: "Wade Abshire",
      tel: "297.051.4686",
      address: "340 Natalie Cliffs",
      opening_hours: "08:00",
      description: "unde assumenda ratione",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.3642854590469",
      viewCounts: 0,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
    },
    {
      id: 8,
      name: "Hilda Beatty",
      tel: "184-044-3379 x13416",
      address: "0828 Schoen Ports",
      opening_hours: "08:00",
      description:
        "Ratione omnis autem debitis nam. Quia sint voluptas non et odit adipisci consequatur dolorum sed. Et praesentium quod in. Quis qui sunt. Placeat aliquid et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.21447406184127",
      viewCounts: 0,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
    },
    {
      id: 9,
      name: "Afton Schmitt",
      tel: "(976) 231-4649",
      address: "226 Harvey Inlet",
      opening_hours: "08:00",
      description: "quos ea velit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.395398150614675",
      viewCounts: 1,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-10-08T09:42:28.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
    },
  ],
  comments: [
    {
      id: 5552,
      text: "11111",
      UserId: 1,
      RestaurantId: null,
      createdAt: "2020-10-08T07:05:57.000Z",
      updatedAt: "2020-10-08T07:05:57.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
        isAdmin: true,
        image: null,
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-10-06T03:08:56.000Z",
      },
      Restaurant: null,
    },
    {
      id: 5542,
      text: "123",
      UserId: 1,
      RestaurantId: null,
      createdAt: "2020-10-08T07:02:39.000Z",
      updatedAt: "2020-10-08T07:02:39.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
        isAdmin: true,
        image: null,
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-10-06T03:08:56.000Z",
      },
      Restaurant: null,
    },
    {
      id: 5532,
      text: "200000",
      UserId: 1,
      RestaurantId: null,
      createdAt: "2020-10-08T06:57:43.000Z",
      updatedAt: "2020-10-08T06:57:43.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
        isAdmin: true,
        image: null,
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-10-06T03:08:56.000Z",
      },
      Restaurant: null,
    },
    {
      id: 5522,
      text: "100",
      UserId: 1,
      RestaurantId: null,
      createdAt: "2020-10-08T06:57:15.000Z",
      updatedAt: "2020-10-08T06:57:15.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
        isAdmin: true,
        image: null,
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-10-06T03:08:56.000Z",
      },
      Restaurant: null,
    },
    {
      id: 5512,
      text: "abcdefg",
      UserId: 1,
      RestaurantId: null,
      createdAt: "2020-10-08T06:54:26.000Z",
      updatedAt: "2020-10-08T06:54:26.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
        isAdmin: true,
        image: null,
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-10-06T03:08:56.000Z",
      },
      Restaurant: null,
    },
    {
      id: 5502,
      text: "1",
      UserId: 1,
      RestaurantId: null,
      createdAt: "2020-10-08T06:53:59.000Z",
      updatedAt: "2020-10-08T06:53:59.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
        isAdmin: true,
        image: null,
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-10-06T03:08:56.000Z",
      },
      Restaurant: null,
    },
    {
      id: 5492,
      text: "",
      UserId: 1,
      RestaurantId: null,
      createdAt: "2020-10-08T06:27:59.000Z",
      updatedAt: "2020-10-08T06:27:59.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
        isAdmin: true,
        image: null,
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-10-06T03:08:56.000Z",
      },
      Restaurant: null,
    },
    {
      id: 5482,
      text: "",
      UserId: 1,
      RestaurantId: null,
      createdAt: "2020-10-08T06:21:37.000Z",
      updatedAt: "2020-10-08T06:21:37.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
        isAdmin: true,
        image: null,
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-10-06T03:08:56.000Z",
      },
      Restaurant: null,
    },
    {
      id: 5472,
      text: "     ",
      UserId: 1,
      RestaurantId: null,
      createdAt: "2020-10-08T06:21:32.000Z",
      updatedAt: "2020-10-08T06:21:32.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
        isAdmin: true,
        image: null,
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-10-06T03:08:56.000Z",
      },
      Restaurant: null,
    },
    {
      id: 5462,
      text: "    ",
      UserId: 1,
      RestaurantId: null,
      createdAt: "2020-10-08T06:19:48.000Z",
      updatedAt: "2020-10-08T06:19:48.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
        isAdmin: true,
        image: null,
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-10-06T03:08:56.000Z",
      },
      Restaurant: null,
    },
  ],
};
export default {
  name: "RestaurantsFeeds",
  components: {
    NavTabs,
    NewestRestaurants,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.fetchFeeds();
    // 一定要在 created 階段 呼叫 methods，不然 瀏覽器會吃到前面 data 中的 restaurants & comments兩個空陣列。
  },
  methods: {
    fetchFeeds() {
      // fetch API
      const { restaurants, comments } = dummydata;
      this.restaurants = restaurants;
      this.comments = comments;
    },
  },
};
</script>

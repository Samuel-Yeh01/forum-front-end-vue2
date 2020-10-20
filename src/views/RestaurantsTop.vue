// 人氣餐廳
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}
            </span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >
              Show
            </router-link>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-primary mr-2"
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
const dummyData = {
  restaurants: [
    {
      id: 26,
      name: "Lloyd Deckow",
      tel: "1-770-555-6078",
      address: "949 Waters Bypass",
      opening_hours: "08:00",
      description: "Quaerat voluptas labore iste tempora consectetur. ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.32040036818377",
      viewCounts: 67,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-10-08T16:05:30.000Z",
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NjMx.K9UlVkNu07QPihMF.yexZ9YtE5CTgMxMvPp7f/ILW0vnmHeC",
          isAdmin: false,
          image: "https://i.imgur.com/EQbI72p.png",
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-13T07:37:34.000Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 26,
            createdAt: "2020-04-17T04:35:49.000Z",
            updatedAt: "2020-04-17T04:35:49.000Z",
          },
        },
        {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$MRbzisN/Uub1Bh35xLFt7exe14I9DF974PQXbbdbi8JR768L2hj6.",
          isAdmin: false,
          image: null,
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-06T03:08:44.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 26,
            createdAt: "2020-07-15T19:27:21.000Z",
            updatedAt: "2020-07-15T19:27:21.000Z",
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 2,
    },
    {
      id: 11,
      name: "Alycia Larkin",
      tel: "142.517.8157 x48314",
      address: "1796 Garnet Corners",
      opening_hours: "08:00",
      description: "deserunt ut voluptate",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=2.0554822029266617",
      viewCounts: 0,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
          isAdmin: true,
          image: null,
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-06T03:08:56.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 11,
            createdAt: "2020-06-09T09:15:28.000Z",
            updatedAt: "2020-06-09T09:15:28.000Z",
          },
        },
        {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$MRbzisN/Uub1Bh35xLFt7exe14I9DF974PQXbbdbi8JR768L2hj6.",
          isAdmin: false,
          image: null,
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-06T03:08:44.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 11,
            createdAt: "2020-07-15T05:40:21.000Z",
            updatedAt: "2020-07-15T05:40:21.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
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
      viewCounts: 2,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-10-15T08:24:54.000Z",
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NjMx.K9UlVkNu07QPihMF.yexZ9YtE5CTgMxMvPp7f/ILW0vnmHeC",
          isAdmin: false,
          image: "https://i.imgur.com/EQbI72p.png",
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-13T07:37:34.000Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 9,
            createdAt: "2020-03-24T08:51:28.000Z",
            updatedAt: "2020-03-24T08:51:28.000Z",
          },
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
          isAdmin: true,
          image: null,
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-06T03:08:56.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 9,
            createdAt: "2020-07-16T07:47:51.000Z",
            updatedAt: "2020-07-16T07:47:51.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
    },
    {
      id: 6,
      name: "Roxane Zieme",
      tel: "873.120.0593 x335",
      address: "4257 Zboncak Greens",
      opening_hours: "08:00",
      description: "Et fugiat impedit in et.\nAlias reprehenderit ut co",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.84597212271724",
      viewCounts: 0,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$MRbzisN/Uub1Bh35xLFt7exe14I9DF974PQXbbdbi8JR768L2hj6.",
          isAdmin: false,
          image: null,
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-06T03:08:44.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 6,
            createdAt: "2020-07-17T11:47:59.000Z",
            updatedAt: "2020-07-17T11:47:59.000Z",
          },
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
          isAdmin: true,
          image: null,
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-06T03:08:56.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 6,
            createdAt: "2020-09-26T02:54:56.000Z",
            updatedAt: "2020-09-26T02:54:56.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
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
      viewCounts: 1,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-10-15T08:24:46.000Z",
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NjMx.K9UlVkNu07QPihMF.yexZ9YtE5CTgMxMvPp7f/ILW0vnmHeC",
          isAdmin: false,
          image: "https://i.imgur.com/EQbI72p.png",
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-13T07:37:34.000Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 4,
            createdAt: "2020-03-31T06:37:16.000Z",
            updatedAt: "2020-03-31T06:37:16.000Z",
          },
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
          isAdmin: true,
          image: null,
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-06T03:08:56.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 4,
            createdAt: "2020-04-03T15:04:40.000Z",
            updatedAt: "2020-04-03T15:04:40.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
    },
    {
      id: 3,
      name: "Camila Bartell",
      tel: "637-966-3594",
      address: "700 Brekke Lake",
      opening_hours: "08:00",
      description: "Omnis iste ad incidunt nobis ipsum non. Vel maxime",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.281554396287266",
      viewCounts: 1,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-10-10T14:28:55.000Z",
      CategoryId: 2,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
          isAdmin: true,
          image: null,
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-06T03:08:56.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 3,
            createdAt: "2020-03-23T17:52:29.000Z",
            updatedAt: "2020-03-23T17:52:29.000Z",
          },
        },
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NjMx.K9UlVkNu07QPihMF.yexZ9YtE5CTgMxMvPp7f/ILW0vnmHeC",
          isAdmin: false,
          image: "https://i.imgur.com/EQbI72p.png",
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-13T07:37:34.000Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 3,
            createdAt: "2020-03-24T16:54:31.000Z",
            updatedAt: "2020-03-24T16:54:31.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
    },
    {
      id: 2,
      name: "Cleora Ernser",
      tel: "(037) 744-3366 x6754",
      address: "1403 Lenny Squares",
      opening_hours: "08:00",
      description: "Nemo quia exercitationem cupiditate dolorum exerci",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.13321948642904",
      viewCounts: 1,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-10-13T14:56:50.000Z",
      CategoryId: 2,
      FavoritedUsers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NjMx.K9UlVkNu07QPihMF.yexZ9YtE5CTgMxMvPp7f/ILW0vnmHeC",
          isAdmin: false,
          image: "https://i.imgur.com/EQbI72p.png",
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-13T07:37:34.000Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 2,
            createdAt: "2020-03-07T14:43:54.000Z",
            updatedAt: "2020-03-07T14:43:54.000Z",
          },
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
          isAdmin: true,
          image: null,
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-06T03:08:56.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 2,
            createdAt: "2020-10-05T01:58:06.000Z",
            updatedAt: "2020-10-05T01:58:06.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
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
      viewCounts: 3,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-10-13T16:29:05.000Z",
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
          isAdmin: true,
          image: null,
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-06T03:08:56.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 1,
            createdAt: "2020-03-04T08:27:19.000Z",
            updatedAt: "2020-03-04T08:27:19.000Z",
          },
        },
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NjMx.K9UlVkNu07QPihMF.yexZ9YtE5CTgMxMvPp7f/ILW0vnmHeC",
          isAdmin: false,
          image: "https://i.imgur.com/EQbI72p.png",
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-13T07:37:34.000Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 1,
            createdAt: "2020-03-07T14:43:52.000Z",
            updatedAt: "2020-03-07T14:43:52.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
    },
    {
      id: 48,
      name: "Dillan Bashirian",
      tel: "518.932.6160",
      address: "6241 Jon Wall",
      opening_hours: "08:00",
      description: "Ipsam repellat aut deleniti cumque. Tenetur tenetu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.169639658187826",
      viewCounts: 0,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
          isAdmin: true,
          image: null,
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-06T03:08:56.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 48,
            createdAt: "2020-03-05T08:20:31.000Z",
            updatedAt: "2020-03-05T08:20:31.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 1,
    },
    {
      id: 47,
      name: "Mrs. Fatima Keebler",
      tel: "521-458-7780",
      address: "50607 Effertz Points",
      opening_hours: "08:00",
      description: "Atque impedit sit nisi rerum voluptatibus reiciend",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.155129068094222",
      viewCounts: 0,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
      CategoryId: 3,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$qdSZAWecQ9QFoExm1lQVre3qSVcYARUGhX6L6Nu8KxYyycAX/ul4y",
          isAdmin: true,
          image: null,
          createdAt: "2020-09-28T16:35:57.000Z",
          updatedAt: "2020-10-06T03:08:56.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 47,
            createdAt: "2020-03-05T08:20:32.000Z",
            updatedAt: "2020-03-05T08:20:32.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 1,
    },
  ],
};
export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchTopRestaurants();
  },
  methods: {
    fetchTopRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    addFavorite(restaurantId) {
      this.restaurants = this.restaurants
        .map((restaurant) => {
          if (restaurant.id !== restaurantId) {
            return restaurant;
          }
          return {
            ...restaurant,
            FavoriteCount: restaurant.FavoriteCount + 1,
            isFavorited: true,
          };
        })
        .sort((a, b) => b.FavoriteCount - a.FavoriteCount);
    },
    deleteFavorite(restaurantId) {
      this.restaurants = this.restaurants
        .map((restaurant) => {
          if (restaurant.id !== restaurantId) {
            return restaurant;
          }
          return {
            ...restaurant,
            FavoriteCount: restaurant.FavoriteCount - 1,
            isFavorited: false,
          };
        })
        .sort((a, b) => b.FavoriteCount - a.FavoriteCount);
    },
  },
};
</script>

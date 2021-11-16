type Feed = {
  profile: Profile;
  content: Content;
};

type Profile = {
  username: string;
  userId: string;
  posted: {
    time: string;
    text: string;
  };
  imgPath: string;
};

type Content = {
  text: string;
  img: {
    path: string;
    alt: string;
  };
};

export const feeds: Feed[] = [
  {
    profile: {
      username: 'Pineapple',
      userId: '@Pineapple',
      posted: {
        time: '3s',
        text: '3 seconds ago',
      },
      imgPath: './dist/static/imgs/tweeter_profile-1.jpg',
    },
    content: {
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim nemo
    maiores voluptate repellendus, voluptas voluptates cumque eaque quaerat et
    placeat iusto omnis. Odit enim expedita dolorum provident dolores sit!`,
      img: {
        path: './dist/static/imgs/tweeter-1.jpg',
        alt: 'donut',
      },
    },
  },
  {
    profile: {
      username: 'BirdHeart',
      userId: '@BirdHeart',
      posted: {
        time: '3m',
        text: '3 minutes ago',
      },
      imgPath: './dist/static/imgs/tweeter_profile-2.jpg',
    },
    content: {
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim nemo
    maiores voluptate repellendus, voluptas voluptates cumque eaque quaerat et
    placeat iusto omnis. Odit enim expedita dolorum provident dolores sit!`,
      img: {
        path: './dist/static/imgs/tweeter-2.jpg',
        alt: 'donut',
      },
    },
  },
  {
    profile: {
      username: 'PinkCocktail',
      userId: '@PinkCocktail',
      posted: {
        time: '3h',
        text: '3 hours ago',
      },
      imgPath: './dist/static/imgs/tweeter_profile-3.jpg',
    },
    content: {
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim nemo
    maiores voluptate repellendus, voluptas voluptates cumque eaque quaerat et
    placeat iusto omnis. Odit enim expedita dolorum provident dolores sit!`,
      img: {
        path: './dist/static/imgs/tweeter-3.jpg',
        alt: 'donut',
      },
    },
  },
  {
    profile: {
      username: 'Flamingo',
      userId: '@Flamingo',
      posted: {
        time: '3 days ago',
        text: '3 days ago',
      },
      imgPath: './dist/static/imgs/tweeter_profile-4.jpg',
    },
    content: {
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim nemo
    maiores voluptate repellendus, voluptas voluptates cumque eaque quaerat et
    placeat iusto omnis. Odit enim expedita dolorum provident dolores sit!`,
      img: {
        path: './dist/static/imgs/tweeter-4.jpg',
        alt: 'donut',
      },
    },
  },
  {
    profile: {
      username: 'Pineapple',
      userId: '@Pineapple',
      posted: {
        time: '3 weeks ago',
        text: '3 weeks ago',
      },
      imgPath: './dist/static/imgs/tweeter_profile-1.jpg',
    },
    content: {
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim nemo
    maiores voluptate repellendus, voluptas voluptates cumque eaque quaerat et
    placeat iusto omnis. Odit enim expedita dolorum provident dolores sit!`,
      img: {
        path: './dist/static/imgs/tweeter-5.jpg',
        alt: 'donut',
      },
    },
  },
];

export const aboutSection = {
  sectionTitle: "About",
  sectionSubTitle: "Translate English to Japanese",
  firstFeature: {
    included: true,
    icon: "star",
    title: "Search",
    description: "Search for words.",
  },
  secondFeature: {
    included: true,
    icon: "star",
    title: "100+ Words",
    description: "Over 100 words are already available.",
  },
  thirdFeature: {
    included: true,
    icon: "star",
    title: "Favorites",
    description: "Add the words you like most to a favorites list.",
  },
  carousel: {
    include: true,
    title: "Features",
    subtitle: "What You Get",
    features: [
      "Sleek black design",
      "Simple translations",
      "Login to save your data",
    ],
    slides: [
      {
        name: "Screen1",
        src: process.env.PUBLIC_URL + "/images/carousel/homemock.png",
      },
      {
        name: "Screen2",
        src: process.env.PUBLIC_URL + "/images/carousel/loginmock.png",
      },
      {
        name: "Screen3",
        src: process.env.PUBLIC_URL + "/images/carousel/searchmock.png",
      },
    ],
  },
};

/*
  DOCUMENTATION
  
  --sectionTitle 
      This is the primary title
  
  --sectionSubTitle
      This is the secondary title
  
  --firstFeature
      This is one of three feature descriptions of your app. It inclues an icon, title and description.
      --included
      Make this true if you want to include the firstFeature. Make this false if you do not.
      --icon
      The feature's icon. Choose between "star", "shopping", "map", "thumbsUp", "phone"
      --title 
      The title of the feature
      --description
      The description of the feature
      
  --secondFeature
      This is one of three feature descriptions of your app. It inclues an icon, title and description.
      --included
      Make this true if you want to include the secondFeature. Make this false if you do not.
      --icon
      The feature's icon. Choose between "star", "shopping", "map", "thumbsUp", "phone"
      --title 
      The title of the feature
      --description
      The description of the feature

    --thirdFeature
        This is one of three feature descriptions of your app. It inclues an icon, title and description.
        --included
        Make this true if you want to include the thirdFeature. Make this false if you do not.
        --icon
        The feature's icon. Choose between "star", "shopping", "map", "thumbsUp", "phone"
        --title 
        The title of the feature
        --description
        The description of the feature

    --carousel
        This is a section which displays a carousel or slider. 
        --include
        Set this to true if you would like to have the carousel. Set this to false to hide.
        --title
        The title of this section
        --subtitle
        The subtitle of this section
        --slides
        This is where you control the slides of the carousel. To add a new slide, simply add an object 
        as 
        {
            name: ""
            src: ""
        }
        Objects are comma seperated so please be sure to add a comma after the last object when adding a new one.
        name is any name you like. Make each name unique. src is the name of the image. Make sure to add all 
        images in the public/images/carousel directory of this project. When you do, you add the image name using 
        the format process.env.PUBLIC_URL + "/images/carousel/imagename.png" where image name is the name of the image 
        in the public directory and .png is the image extension. Therefore, process.env.PUBLIC_URL + "/images/carousel always 
        remains the same. 
      
  */

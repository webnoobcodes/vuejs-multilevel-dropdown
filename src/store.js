import Vue from "vue";
import Vuex from "vuex";

/*
  If you are using Vuex to centralize your data, 
  you can use this layer easily as interface to your backend, 
  where you can execute your API calls and so on.
*/
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    /*
      Each element from the array has basically a title, 
      an open status and if sub-elements exist an additional array, ‘subnav’ in this example.
      And every element in this array has again a title, 
      the status open and the ‘subnav’ array if there are any child-elements.
      You can specify as many levels as you want.
      And you can exchange this array with addional informations, like a link for each entry.
    */
    navigation: [
      {
        title: "Projects",
        open: true,
        subnav: [
          {
            title: "Vue.js",
            open: false,
            subnav: [
              { title: "Transitions" },
              { title: "Components" },
              { title: "Slots" }
            ]
          },
          {
            title: "SCSS",
            open: false,
            subnav: [
              { title: "Nesting" }, 
              { title: "Mixins" }
            ]
          },
          { title: "JavaScript" },
          { title: "Webpack" }
        ]
      },
      {
        title: "Portfolio",
        open: true,
        subnav: [
          { title: "Websites" }, 
          { title: "Open Source" }
        ]
      },
      { title: "Resources" },
      {
        title: "Timeline",
        open: true,
        subnav: [
          { title: "2017" }, 
          { title: "2018" }, 
          { title: "2019" }
        ]
      },
      { title: "Documentation" }
    ]
  },
  getters: {
    navigation: state => {
      return state.navigation;
    }
  }
});

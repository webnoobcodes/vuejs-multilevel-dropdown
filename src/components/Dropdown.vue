<template>
  <!-- 
    The transition component for the animation. 
    name ist for the CSS prefix.
    The hooks '@enter', '@after-enter' and '@leave' are for triggering and
    controlling the animation.
  -->
  <transition 
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave">
    <ul v-show="list.open" class="sub-items">
      <li class="sub-item" 
          v-for="(item, index) in list.subnav" 
          :key="'item'+index">
        <i v-if="item.subnav" class="far"
          :class="{'fa-plus-square':!item.open,
                    'fa-minus-square':item.open}"></i>
        <div class="title" @click="item.open = !item.open">
          {{ item.title }}
        </div>
        <!-- 
          Renders the Dropdown Component again if the current item has subnav elements
        -->
        <Dropdown class="subnav" v-if="item.subnav" :list="item" />
      </li>
    </ul>
  </transition>  
</template>

<script>
  export default {
    /*
      If you want to reuse the same Component in itself 
      then you have the opportunity to specify a name for this component. 
      And this name should be the same name you use here as selector, 
      in this case, Dropdown.
    */
    name: 'Dropdown',
    props: [
      'list'
    ],
    methods: {
      enter(el) {
        // set the element to his natural hight
        el.style.height = 'auto';

        /*
          get the calculated height.
          getComputedStyle returns an object containing all the CSS properties 
          of the element after all active styles have been loaded and the basic 
          calculations have been performed.

          We need the height after all basic calculations have been performed, 
          then the height of each element here is dynamically, 
          based on the number of items in the sublist.
        */
        const height = getComputedStyle(el).height;

        // set the height to zero for the opening animation
        el.style.height = 0;

        /*
          Force the repaint to make sure the animation is triggered correctly, 
          then you can fire the method getComputedStyle again.
          This is not necessary, but sometimes the animation may not start depending on the case.
        */
        getComputedStyle(el);

        /*
          Set the height from the element to the calculated height.
          With setTimeout you make sure the browser has finished the painting 
          after setting the height to zero.
        */
        setTimeout(() => {
          el.style.height = height;
        });        
      },
      afterEnter(el) {
        el.style.height = 'auto';
      },
      leave(el) {
        /*
          Same as with the enter method, but only the other way around.
        */
        el.style.height = getComputedStyle(el).height;

        getComputedStyle(el);

        setTimeout(() => {
          el.style.height = 0;
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*
    CSS definitions for the sublist
  */
  .sub-items {
    list-style: none;

    .sub-item {
      position: relative;
      color: #fefefe;
      background-color: #333;
      border-top: 1px solid #222;
      cursor: pointer;

      .subnav {
        padding-left: 20px;
      }

      .title {
        padding: 10px 0;
        text-indent: 20px;
      }

      i {
        position: absolute;
        top: 12px;
        right: 10px;
      }
    }
  }

  /*
    The CSS classes for the opening and closing animation.
  */
  .expand-enter-active, .expand-leave-active {
    transition: height .5s ease-in-out;
    overflow: hidden;
  }
</style>
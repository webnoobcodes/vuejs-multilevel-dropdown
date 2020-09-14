<template>
  <div id="sidebar">
    <SidebarHeader />
    <ul id="navigation">
      <li v-for="(item, index) in navigation" :key="'item'+index">
        <i v-if="item.subnav" class="far"
          :class="{'fa-plus-square':!item.open,
                    'fa-minus-square':item.open}"></i>
        <div class="title" @click="item.open = !item.open">
          {{ item.title }}
        </div>
        <Dropdown v-if="item.subnav" :list="item" />
      </li>
    </ul>
  </div>
</template>

<script>
  import SidebarHeader from './SidebarHeader'
  import Dropdown from './Dropdown'

  export default {
    computed: {
      navigation() {
        return this.$store.getters.navigation;
      }
    },
    components: {
      SidebarHeader,
      Dropdown
    }
  }
</script>

<style lang="scss" scoped>
  #sidebar {
    width: 100%;
    max-width: 350px;
    min-height: 100vh;
    background-color: #fefefe;
    box-shadow: 10px 0 20px rgba($color: #000000, $alpha: .2);
  }

  #navigation {
    list-style: none;
    border-bottom: 1px solid #dedede;

    li {
      position: relative;
      color: #555;
      border-top: 1px solid #dedede;
      cursor: pointer;

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
</style>
<template>
  <div id="sidebar-header">
    <div class="logo"></div>
    <div class="name">Ruth Rechte</div>
    <div class="group">Admin</div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  #sidebar-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 250px;
    background: radial-gradient(#F03C39, #920025);
    color: #fefefe;

    .logo {
      background-image: url('../assets/admin.png');
      background-position: center;
      background-size: cover;
      width: 120px;
      height: 120px;
      border-radius: 50%; 
    }

    .name {
      font-size: 1.4rem;
    }
  }
</style>
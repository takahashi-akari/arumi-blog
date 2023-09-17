<template>
  <div class="wrapper">
    <div class="custom">
      <ContentDoc class="markdown-body" />
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  background-color: #000;
}
.custom {
  padding: 0 1em;
  margin: 0 auto;
  max-width: 800px;
}
.markdown-body {
  color: #fff !important;

  h2 {
    font-size: 1.25em;
  }
}
</style>

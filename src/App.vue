<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <span>Vue Tasks</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-layout wrap>
          <v-flex xs12>
            content here
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
    //
  })
};
</script>

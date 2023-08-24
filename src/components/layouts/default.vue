<template>
    <header>
        <v-app-bar
            :elevation="2"
        >
            <v-app-bar-title>
                Photos
            </v-app-bar-title>
        </v-app-bar>
    </header>
    <v-main>
        <slot />
    </v-main>
    <footer>
        Footer
    </footer>
</template>


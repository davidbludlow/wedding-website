<template>
  <q-page class="flex column">
    <q-tabs v-model="tab">
      <q-tab name="info" label="Info"></q-tab>
      <q-tab name="pictures" label="Pictures"></q-tab>
      <q-tab name="rsvp" label="RSVP"></q-tab>
      <q-tab name="registry" label="Gift Registry"></q-tab>
    </q-tabs>
    <q-separator />
    <q-tab-panels v-model="tab" animated style="flex-grow: 1">
      <q-tab-panel name="info" class="flex flex-center column">
        <p>Geneise Morrison and David Ludlow are getting married!</p>
        <img src="/pictures/IMG_2722.JPG" />
        <div class="text-h6">Reception Information</div>
        <p>Nov 5, 2022 at 5:00 PM</p>
        <p>Location is TBD</p>
        <p>
          Please <a href="javascript:void(0)" v-on:click="goToRsvp()">RSVP</a>
        </p>
      </q-tab-panel>
      <q-tab-panel name="pictures" class="flex flex-center pictures-tab">
        <img src="/pictures/IMG_2714.JPG" />
        <img src="/pictures/IMG_2714.JPG" />
        <img src="/pictures/IMG_2753.JPG" />
        <img src="/pictures/IMG_2789.JPG" />
        <img src="/pictures/IMG_2854.JPG" />
        <img src="/pictures/IMG_2920.JPG" />
        <img src="/pictures/IMG_2719.JPG" />
        <img src="/pictures/IMG_2774.JPG" />
        <img src="/pictures/IMG_2841.JPG" />
        <img src="/pictures/IMG_2867.JPG" />
        <img src="/pictures/IMG_2996.JPG" />
        <img src="/pictures/IMG_2722.JPG" />
        <img src="/pictures/IMG_2777.JPG" />
        <img src="/pictures/IMG_2847.JPG" />
        <img src="/pictures/IMG_2915.JPG" />
        <img src="/pictures/IMG_3015.JPG" />
      </q-tab-panel>
      <q-tab-panel
        name="rsvp"
        class="flex flex-center column"
        style="height: calc(100vh - 50px); padding-bottom: 0"
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfX1b5wNfhh2dN002PBUqSL2hvA1MvOjLwAA1KYU_MsaFMQlQ/viewform?embedded=true"
          max-width="640"
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >Loading…</iframe
        >
      </q-tab-panel>
      <q-tab-panel name="registry" class="flex flex-center column">
        <div class="text-h6">Gift Registry Information</div>
        <p>
          We registered gifts on
          <a
            href="https://www.amazon.com/wedding/share/GeneiseDavidLudlow"
            target="_blank"
            >Amazon</a
          >. We have been single for a long time, however, so we already have a
          lot of stuff. Gifting money, therefore, is a better-than-usual option.
          Obviously there are many good ways to gift money, but here is a
          <a
            href="https://www.paypal.com/paypalme/physicsprogrammer?country.x=US&locale.x=en_US"
            target="_blank"
            >PayPal link</a
          >
          that might be the easiest, for you.
        </p>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('info');
function goToRsvp() {
  tab.value = 'rsvp';
}
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: calc(100vh - 90px);
}
.pictures-tab img {
  margin: 4px;
}
</style>

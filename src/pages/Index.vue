<template>
  <q-page class="flex column">
    <q-tabs v-model="tab">
      <q-tab name="info" label="Info"></q-tab>
      <q-tab name="pictures" label="Pictures"></q-tab>
      <q-tab name="rsvp" label="RSVP"></q-tab>
      <q-tab name="registry" label="Gift Registry"></q-tab>
    </q-tabs>
    <q-separator />

    <link
      href="https://fonts.googleapis.com/css?family=Waterfall"
      rel="stylesheet"
    />
    <q-tab-panels v-model="tab" animated style="flex-grow: 1">
      <q-tab-panel name="info" class="flex flex-center column">
        <p
          style="font-size: 60px; font-family: 'Waterfall'; text-align: center"
        >
          Geneise Morrison & David Ludlow are getting married!
        </p>
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
        <p></p>
        <p>
          We're looking forward to having you celebrate with us. That is the
          best gift of all. However, should you wish to bing a gift we
          registered with
          <a
            href="https://www.amazon.com/wedding/share/GeneiseDavidLudlow"
            target="_blank"
            >Amazon Gift Registry</a
          >
          Gifts shipped to
        </p>
        <p>
          David and Geneise
          <br />
          1462 Cinnamon Ridge Way
          <br />
          Provo, UT 84606
        </p>
        <p>
          If you are not sure what to shop for, here is another option. We have
          both been single for a
          <strong style="text-decoration: underline">long time</strong> and have
          collected many household items over the years.
          <br />
          So something for our Date Night/Honeymoon Fund would be much
          appreciated as well.
          <br />
          <a
            href="https://www.paypal.com/paypalme/physicsprogrammer?country.x=US&locale.x=en_US"
            target="_blank"
            >PayPal Link</a
          >
          <br />
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fvenmo.com%2Fcode%3Fuser_id%3D2229154296627200936%26created%3D1664956291%26fbclid%3DIwAR0cZElYYt1PPrweKD2Ncxlf9OOGPy32sD2Ak83Qy56Ho7c4Yd-l4tKA130&h=AT144PDAxIU2PY77juzO3PExTUBG0puUSUzR_bwWXIk4Xh1vXySIZqCL9f5X6EUjTbbwWPr0fO8YwbwJDcOFaqQr8l-2YCQj9V8ZvXtKkzG17i6TeJzeEfxW7Anl8cGxnag"
            target="_blank"
            >VENMO @LG-Morrison</a
          >
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

<style lang="scss" scoped>
img {
  max-width: 100%;
  max-height: calc(100vh - 90px);
}
.pictures-tab img {
  margin: 4px;
}
a:link {
  color: $blue-3;
}
a:visited {
  color: $blue-8;
}
</style>

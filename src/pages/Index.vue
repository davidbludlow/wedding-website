<template>
  <q-page class="flex column no-wrap" style="height: 100vh">
    <q-tabs v-model="tab">
      <q-tab name="home" label="Home"></q-tab>
      <q-tab name="pictures" label="Pictures"></q-tab>
      <q-tab name="rsvp" label="RSVP"></q-tab>
      <q-tab name="registry" label="Gift Registry"></q-tab>
      <q-tab name="details" label="Details"></q-tab>
    </q-tabs>
    <q-separator />

    <link
      href="https://fonts.googleapis.com/css?family=Waterfall"
      rel="stylesheet"
    />
    <q-tab-panels v-model="tab" animated style="flex-grow: 1">
      <q-tab-panel name="home" style="text-align: center">
        <p
          style="font-size: 60px; font-family: 'Waterfall'; text-align: center"
        >
          Geneise Morrison & David Ludlow are getting married!
        </p>
        <img src="/pictures/website_banner.png" />
        <div class="text-h6">Reception Information</div>
        <ReceptionDetails />
        <q-banner style="text-align: right; font-style: italic">
          <span style="font-size: xx-small">
            Photography credit: Sweet Rose Photograph, @kmcentirephotos/Kaitlyn
            McEntire Photography/www.kaitlynmcentire.com, and others
          </span>
        </q-banner>
      </q-tab-panel>
      <q-tab-panel name="pictures" class="flex flex-center pictures-tab">
        <img src="/pictures/IMG_2714-1.jpg" />
        <img src="/pictures/IMG_2722-1.jpg" />
        <img src="/pictures/IMG_2753-1.jpg" />
        <img src="/pictures/IMG_2755-1.jpg" />
        <img src="/pictures/IMG_2789-Edit-3.jpg" />
        <img src="/pictures/IMG_2841-3.jpg" />
        <img src="/pictures/IMG_2847-1.jpg" />
        <img src="/pictures/IMG_2867-1.jpg" />
        <img src="/pictures/IMG_2920-1.jpg" />
        <img src="/pictures/IMG_2996-1.jpg" />
        <img src="/pictures/IMG_3015-1.jpg" />
      </q-tab-panel>
      <q-tab-panel
        name="rsvp"
        class="flex flex-center column"
        style="height: calc(100vh - 50px); padding-bottom: 0; padding-top: 0"
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
      <q-tab-panel name="registry" style="text-align: center">
        <strong style="text-decoration: underline"
          ><div class="text-h6">Gift Registry Information</div></strong
        >
        <p></p>
        <p>
          We're looking forward to having you celebrate with us. That is the
          best gift of all.
        </p>
        <p>
          However, should you wish to bing a gift we registered with
          <a
            href="https://www.amazon.com/wedding/share/GeneiseDavidLudlow"
            target="_blank"
            >Amazon Gift Registry</a
          >
          Gifts and cards can be mailed to
        </p>
        <p>
          David and Geneise
          <br />
          1462 Cinnamon Ridge Way
          <br />
          Provo, UT 84606
        </p>
        <p>
          <strong style="text-decoration: underline"
            ><div class="text-h6">Date Night/Honeymoon Fund</div></strong
          >
        </p>
        <p>
          If you are not sure what to shop for, here is another option.
          <br />We have both been single for a
          <strong style="text-decoration: underline">LONG TIME</strong> and have
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
      <q-tab-panel name="details" style="text-align: center">
        <div class="text-h6">Reception Information</div>
        <ReceptionDetails />
        <img src="/pictures/Wedding Invitation7.png" />
        <q-banner style="text-align: right; font-style: italic">
          <span style="font-size: xx-small">
            Photography credit: Sweet Rose Photograph and
            @kmcentirephotos/Kaitlyn McEntire
            Photography/www.kaitlynmcentire.com
          </span>
        </q-banner>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import ReceptionDetails from '../components/reception-details.vue';

const tab = ref('home');
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

<style lang="scss">
a:link {
  color: $blue-3;
}
a:visited {
  color: $blue-8;
}
</style>

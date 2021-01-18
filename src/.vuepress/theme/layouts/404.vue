<template>
  <div
  id="not-found"
    class="flex justify-center bg-gray-100 bg-opacity-50"
  >
    <div class="flex flex-col justify-center">
      <h1 class="text-center text-5xl font-bold">Oops</h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 960">
        <g>
          <rect x="233.5" y="176.6" class="card" width="493" height="606.7" />
          <rect x="234.5" y="743.8" class="footer" width="491" height="39.5" />
          <rect
            x="277.1"
            y="226.8"
            class="image-outline"
            width="405.9"
            height="342.6"
          />
          <rect
            x="277.1"
            y="226.8"
            class="image"
            width="405.9"
            height="342.6"
          />
          <polygon
            class="image mountain"
            points="617.6,569.3 274.6,569.3 446.1,397.8 		"
          />
          <polygon
            class="image mountain top"
            points="508.5,460.3 446.1,397.8 383.7,460.3 		"
          />
          <circle class="image sun" cx="581.2" cy="333.6" r="71.6" />
        </g>
      </svg>

      <p class="text-center text-3xl font-semibold">
        It looks like this site is still developing
      </p>
      <!--p class="text-center text-3xl font-semibold">
        It looks like this page is still developing
      </p-->
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
#not-found {
  min-height: 100vh;
}

#not-found svg {
  max-height: calc(100vh - 19rem);
  max-width: 80vw;
  transform: rotate(-30deg);
}

#not-found svg .footer {
  fill: #eaeaea;
}

#not-found svg .card {
  fill: #ffffff;
  stroke: black;
}

#not-found svg .image-outline {
  fill: #eaeaea;
}

#not-found svg .image {
  animation: fade 30s linear;
  fill: #b3e2e5;
}

#not-found svg .image.mountain {
  fill: #a26e3d;
}

#not-found svg .image.mountain.top {
  fill: #ffffff;
}

#not-found svg .image.sun {
  fill: #eb6841;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 1;
  }
}
</style>
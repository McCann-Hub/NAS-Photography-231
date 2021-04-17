export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer, // is this enhancement applied in server-rendering or client
}) => {
  if (process.env.NODE_ENV === 'production')
  router.beforeEach((to, from, next) => {
    console.log(to);
    if (to.path !== '/notFound.html') {
      next('/notFound.html');
    } else {
      next();
    }
  }) 
};
